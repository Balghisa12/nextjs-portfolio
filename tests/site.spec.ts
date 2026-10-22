import { expect, test } from '@playwright/test'
import AxeBuilder from '@axe-core/playwright'

const routes = ['/', '/projects', '/projects/wikissey', '/experience', '/about', '/contact']

test('a nested route renders on direct load and after a refresh', async ({ page }) => {
  await page.goto('/projects/wikissey')
  await expect(page.getByRole('heading', { level: 1, name: 'Wikissey' })).toBeVisible()
  await page.reload()
  await expect(page.getByRole('heading', { level: 1, name: 'Wikissey' })).toBeVisible()
  await expect(page).toHaveTitle('Wikissey · Hazim Benslimane')
})

test('opening a case study from home moves focus to its heading', async ({ page }) => {
  await page.goto('/')
  await page.locator('main').getByRole('link', { name: 'Reactor Simulator', exact: true }).click()
  await expect(page).toHaveURL('/projects/reactor-simulator')
  await expect(page.getByRole('heading', { level: 1, name: 'Reactor Simulator' })).toBeFocused()
})

test('the skip link jumps keyboard users to the content', async ({ page }) => {
  await page.goto('/experience')
  await page.keyboard.press('Tab')
  const skip = page.getByRole('link', { name: 'Skip to content' })
  await expect(skip).toBeFocused()
  await expect(skip).toBeVisible()
  await page.keyboard.press('Enter')
  await expect(page.locator('main')).toBeFocused()
})

test('the language choice persists across reloads', async ({ page }) => {
  await page.goto('/experience')
  await page.getByRole('button', { name: 'Français' }).click()
  await expect(page.getByRole('heading', { level: 1, name: 'Expérience' })).toBeVisible()
  await page.reload()
  await expect(page.getByRole('heading', { level: 1, name: 'Expérience' })).toBeVisible()
  await expect(page.locator('html')).toHaveAttribute('lang', 'fr')
})

for (const path of ['/does-not-exist', '/projects/does-not-exist']) {
  test(`unknown URL ${path} shows a useful 404`, async ({ page }) => {
    await page.goto(path)
    await expect(page.getByRole('heading', { level: 1, name: 'Page not found' })).toBeVisible()
    await page.locator('main').getByRole('link', { name: 'Back to home' }).click()
    await expect(page).toHaveURL('/')
  })
}

test('old /skills and /education links land on the About sections', async ({ page }) => {
  await page.goto('/skills')
  await expect(page).toHaveURL('/about#skills')
  await expect(page.getByRole('heading', { name: 'Skills, with where to see them' })).toBeInViewport()
  await page.goto('/education')
  await expect(page).toHaveURL('/about#education')
  await expect(page.getByRole('heading', { name: 'Education' })).toBeInViewport()
})

test('every internal link points to a real page and anchor', async ({ page }) => {
  const seen = new Set<string>()
  const queue = ['/']
  while (queue.length) {
    const url = queue.shift()!
    if (seen.has(url)) continue
    seen.add(url)
    await page.goto(url)
    const [path, hash] = url.split('#')
    await expect(page.getByRole('heading', { level: 1, name: 'Page not found' }), `${path} is a 404`).toHaveCount(0)
    if (hash) await expect(page.locator(`[id="${hash}"]`), `${url} has no target`).toHaveCount(1)
    const hrefs = await page.locator('a[href^="/"]').evaluateAll((links) => links.map((a) => a.getAttribute('href')!))
    queue.push(...hrefs.filter((href) => !href.endsWith('.pdf') && !seen.has(href)))
  }
  expect(seen.size).toBeGreaterThan(10)
})

test('the CV download is a PDF', async ({ request }) => {
  const response = await request.get('/cv/Hazim-Benslimane-CV-FR.pdf')
  expect(response.ok()).toBe(true)
  expect(response.headers()['content-type']).toContain('pdf')
})

for (const width of [360, 390, 768, 1024, 1440]) {
  test(`no horizontal scroll and nothing hidden under the bottom bar at ${width}px`, async ({ page }) => {
    await page.setViewportSize({ width, height: 800 })
    for (const route of routes) {
      await page.goto(route)
      const layout = await page.evaluate(() => {
        window.scrollTo({ top: document.documentElement.scrollHeight, behavior: 'instant' })
        const bars = [...document.querySelectorAll('nav, aside')].filter(
          (el) => getComputedStyle(el).position === 'fixed' && getComputedStyle(el).display !== 'none',
        )
        return {
          overflow: document.documentElement.scrollWidth - window.innerWidth,
          mainBottom: document.querySelector('main')!.getBoundingClientRect().bottom,
          barTop: Math.min(...bars.map((bar) => bar.getBoundingClientRect().top)),
        }
      })
      expect(layout.overflow, `${route} overflows`).toBeLessThanOrEqual(0)
      expect(layout.mainBottom, `${route} ends under the bottom bar`).toBeLessThanOrEqual(layout.barTop + 0.5)
    }
  })
}

for (const width of [390, 1440]) {
  test(`axe finds no WCAG 2.2 AA violations at ${width}px`, async ({ page }) => {
    await page.setViewportSize({ width, height: 800 })
    for (const route of [...routes, '/does-not-exist']) {
      await page.goto(route)
      const { violations } = await new AxeBuilder({ page }).withTags(['wcag2a', 'wcag2aa', 'wcag21aa', 'wcag22aa']).analyze()
      expect(violations.map((v) => `${route}: ${v.id} (${v.nodes.length})`)).toEqual([])
    }
  })
}
