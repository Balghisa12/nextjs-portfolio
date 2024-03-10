"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Stuf",
    description: "Gaming Saas Plateform",
    image: "/images/projects/stuf.png",
    tag: ["All", "Web"],
    previewUrl: "https://www.stuf.tech",
  },
  {
    id: 2,
    title: "Zkorum",
    description: "Zero proof knowledge social network",
    image: "/images/projects/zkorum.jpeg",
    tag: ["All", "Web"],
    previewUrl: "https://zkorum.com/",
  },
  {
    id: 3,
    title: "La Terrasse de Sophie",
    description: "French Hostel Website",
    image: "/images/projects/terrasse.png",
    tag: ["All", "Web"],
    previewUrl: "http://www.la-terrasse-de-sophie.fr/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
