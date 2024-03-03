"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import Haz from "../../../public/Haz.jpg"
import ReactLogo from "../../../public/react-2.svg"
import NextLogo from "../../../public/next-js.svg"
import SpringLogo from "../../../public/spring-3.svg"
import PythonLogo from "../../../public/python-5.svg"
import TensorflowLogo from "../../../public/tensorflow-2.svg"
import JavaLogo from "../../../public/java-4.svg"
import NodeLogo from "../../../public/nodejs-icon.svg"
import MySqlLogo from "../../../public/mysql-6.svg"
import MongoDbLogo from "../../../public/mongodb-icon-1.svg"


const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <div className="grid grid-cols-3 grid-rows-3 gap-4 justify-center items-center">
        <div className="bg-gray-1000 p-4 flex flex-col items-center justify-center">
          <Image src={ReactLogo} alt="Image 2" className="w-24 h-24 mb-2" />
          <h2 className="text-lg font-semibold">React</h2>
        </div>
        <div className="bg-gray-1000 p-4 flex flex-col items-center justify-center">
          <Image src={NextLogo} alt="Image 3" className="w-24 h-24 mb-2" />
          <h2 className="text-lg font-semibold">NextJs</h2>
        </div>
        <div className="bg-gray-1000 p-4 flex flex-col items-center justify-center">
          <Image src={SpringLogo} alt="Image 2" className="w-24 h-24 mb-2" />
          <h2 className="text-lg font-semibold">Java Spring</h2>
        </div>
        <div className="bg-gray-1000 p-4 flex flex-col items-center justify-center">
          <Image src={JavaLogo} alt="Image 2" className="w-24 h-24 mb-2" />
          <h2 className="text-lg font-semibold">Java</h2>
        </div>
        <div className="bg-gray-1000 p-4 flex flex-col items-center justify-center">
          <Image src={PythonLogo} alt="Image 2" className="w-24 h-24 mb-2" />
          <h2 className="text-lg font-semibold">Python</h2>
        </div>
        <div className="bg-gray-1000 p-4 flex flex-col items-center justify-center">
          <Image src={TensorflowLogo} alt="Image 2" className="w-24 h-24 mb-2" />
          <h2 className="text-lg font-semibold">Tensorflow</h2>
        </div>
        <div className="bg-gray-1000 p-4 flex flex-col items-center justify-center">
          <Image src={NodeLogo} alt="Image 2" className="w-24 h-24 mb-2" />
          <h2 className="text-lg font-semibold">NodeJs</h2>
        </div>
        <div className="bg-gray-1000 p-4 flex flex-col items-center justify-center">
          <Image src={MySqlLogo} alt="Image 2" className="w-24 h-24 mb-2" />
          <h2 className="text-lg font-semibold">MySQL</h2>
        </div>
        <div className="bg-gray-1000 p-4 flex flex-col items-center justify-center">
          <Image src={MongoDbLogo} alt="Image 2" className="w-24 h-24 mb-2" />
          <h2 class="text-lg font-semibold">MongoDB</h2>
        </div>
      </div>


    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul class="relative inline-block pt-[10px]">
        <li class="w-full float-left relative pl-[20px] pb-[45px]">
          <div class="list_inner w-full h-auto clear-both flex relative">
            <div class="time w-1/2 pr-[20px]">
              <span class="inline-block py-[5px] px-[25px] bg-gradient-to-br from-primary-500 to-secondary-500 rounded-[50px] text-[14px] whitespace-nowrap">2014 - 2016</span>
            </div>
            <div class="place w-1/2 pl-[20px]">
              <h3 class="text-[16px] mb-[2px] font-semibold">Oxford Univercity</h3>
              <span class="text-[14px]">Master Degree</span>
            </div>
          </div>
        </li>
        <li class="w-full float-left relative pl-[20px] pb-[45px]">
          <div class="list_inner w-full h-auto clear-both flex relative">
            <div class="time w-1/2 pr-[20px]">
              <span class="inline-block py-[5px] px-[25px] bg-gradient-to-br from-primary-500 to-secondary-500 rounded-[50px] text-[14px] whitespace-nowrap">2010 - 2014</span>
            </div>
            <div class="place w-1/2 pl-[20px]">
              <h3 class="text-[16px] mb-[2px] font-semibold">Texas Univercity</h3>
              <span class="text-[14px]">Bachelor Degree</span>
            </div>
          </div>
        </li>
        <li class="w-full float-left relative pl-[20px]">
          <div class="list_inner w-full h-auto clear-both flex relative">
            <div class="time w-1/2 pr-[20px]">
              <span class="inline-block py-[5px] px-[25px] bg-gradient-to-br from-primary-500 to-secondary-500 rounded-[50px] text-[14px] whitespace-nowrap">2008 - 2010</span>
            </div><div class="place w-1/2 pl-[20px]">
              <h3 class="text-[16px] mb-[2px] font-semibold">Simone College</h3>
              <span class="text-[14px]">Associate Degree</span>
            </div>
          </div>
        </li>
      </ul>
    ),
  },
  {
    title: "Experience",
    id: "experience",
    content: (
      <ul class="relative inline-block pt-[10px]">
      <li class="w-full float-left relative pl-[20px] pb-[45px]">
        <div class="list_inner w-full h-auto clear-both flex relative">
          <div class="time w-1/2 pr-[20px]">
            <span class="inline-block py-[5px] px-[25px] bg-gradient-to-br from-primary-500 to-secondary-500 rounded-[50px] text-[14px] whitespace-nowrap">2014 - 2016</span>
          </div>
          <div class="place w-1/2 pl-[20px]">
            <h3 class="text-[16px] mb-[2px] font-semibold">Oxford Univercity</h3>
            <span class="text-[14px]">Master Degree</span>
          </div>
        </div>
      </li>
      <li class="w-full float-left relative pl-[20px] pb-[45px]">
        <div class="list_inner w-full h-auto clear-both flex relative">
          <div class="time w-1/2 pr-[20px]">
            <span class="inline-block py-[5px] px-[25px] bg-gradient-to-br from-primary-500 to-secondary-500 rounded-[50px] text-[14px] whitespace-nowrap">2010 - 2014</span>
          </div>
          <div class="place w-1/2 pl-[20px]">
            <h3 class="text-[16px] mb-[2px] font-semibold">Texas Univercity</h3>
            <span class="text-[14px]">Bachelor Degree</span>
          </div>
        </div>
      </li>
      <li class="w-full float-left relative pl-[20px]">
        <div class="list_inner w-full h-auto clear-both flex relative">
          <div class="time w-1/2 pr-[20px]">
            <span class="inline-block py-[5px] px-[25px] bg-gradient-to-br from-primary-500 to-secondary-500 rounded-[50px] text-[14px] whitespace-nowrap">2008 - 2010</span>
          </div><div class="place w-1/2 pl-[20px]">
            <h3 class="text-[16px] mb-[2px] font-semibold">Simone College</h3>
            <span class="text-[14px]">Associate Degree</span>
          </div>
        </div>
      </li>
    </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src={Haz} width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            As a full stack web developer, I thrive on crafting interactive and responsive web applications that engage users and deliver exceptional experiences. My expertise spans across a versatile tech stack, including JavaScript, React, Redux, Node.js, Express, PostgreSQL, Sequelize, HTML, CSS, and Git.

            Driven by a passion for continuous growth, I approach every project as an opportunity to learn and innovate. With a knack for quickly grasping new concepts and technologies, I am dedicated to expanding my knowledge and refining my skills.

            Collaboration is at the core of my work ethos, and I thrive in team environments where diverse perspectives fuel creativity and drive results. I am eager to join forces with fellow developers, designers, and stakeholders to bring captivating applications to life.

            Let&apos;s build something remarkable together.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("experience")}
              active={tab === "experience"}
            >
              {" "}
              Experience{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
