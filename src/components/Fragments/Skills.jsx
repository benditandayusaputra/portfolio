import React, { useEffect, useState } from "react";
import Skill from "../Elements/Skill.jsx";
import SubTitle from "../Elements/SubTitle.jsx";
import SlideOver from "../Elements/SlideOver.jsx";
import allSkills from "../../data/skills.json";
import {
  SiPython,
  SiGit,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiFlask,
  SiMysql,
  SiTailwindcss,
  SiReact,
  SiVuedotjs,
  SiLaravel,
  SiCodeigniter,
  SiJquery,
  SiBootstrap,
  SiPhp,
  SiPostgresql,
  SiMicrosoftsqlserver,
} from "react-icons/si";

const skills = [
  {
    id: 1,
    name: "HTML & CSS",
    icon: <SiHtml5 />,
    secondaryIcon: <SiCss3 />,
  },
  { id: 2, name: "PHP", icon: <SiPhp /> },
  { id: 3, name: "JavaScript", icon: <SiJavascript /> },
  { id: 4, name: "Python", icon: <SiPython /> },
  { id: 5, name: "MySql", icon: <SiMysql /> },
  { id: 6, name: "PostgreSQL", icon: <SiPostgresql /> },
  { id: 7, name: "SQL Server", icon: <SiMicrosoftsqlserver /> },
  { id: 8, name: "Bootstrap", icon: <SiBootstrap /> },
  { id: 9, name: "Tailwind", icon: <SiTailwindcss /> },
  { id: 10, name: "JQuery", icon: <SiJquery /> },
  { id: 11, name: "Laravel", icon: <SiLaravel /> },
  { id: 12, name: "CodeIgniter", icon: <SiCodeigniter /> },
  { id: 13, name: "Vue", icon: <SiVuedotjs /> },
  { id: 14, name: "React", icon: <SiReact /> },
  {
    id: 15,
    name: "Flask Microweb Framework",
    icon: <SiFlask />,
  },
  { id: 16, name: "Git Source Control", icon: <SiGit /> },
];

const Skills = () => {
  const [activeSkill, setActiveSkill] = useState(null);
  const [isSlideOverOpen, setIsSlideOverOpen] = useState(false);
  const [detailSkill, setDetailSkill] = useState(null);

  const openSlideOver = () => {
    setIsSlideOverOpen(true);
  };

  const closeSlideOver = () => {
    setIsSlideOverOpen(false);
    setActiveSkill(null);
  };

  return (
    <div className="p-6 rounded-lg">
      <SubTitle>
        Skills
        <div className={`w-[130px] h-1 bg-light mt-4 mx-auto`}></div>
      </SubTitle>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-6">
        {skills.map((skill, index) => (
          <Skill
            key={skill.name}
            name={skill.name}
            addClass={`${
              activeSkill && activeSkill.name === skill.name
                ? "scale-110 shadow-lg shadow-light"
                : ""
            }`}
            onClick={() => {
              setActiveSkill(skill);
              openSlideOver();
              setDetailSkill(allSkills[index]);
            }}
          >
            {skill.icon}
            {skill.secondaryIcon && skill.secondaryIcon}
          </Skill>
        ))}
      </div>
      <SlideOver
        isOpen={isSlideOverOpen}
        onClose={closeSlideOver}
        skill={activeSkill}
      >
        <div
          dangerouslySetInnerHTML={{
            __html: detailSkill && detailSkill.description,
          }}
        ></div>
        <br />
        <div
          dangerouslySetInnerHTML={{
            __html: detailSkill && detailSkill.source,
          }}
        ></div>
      </SlideOver>
    </div>
  );
};

export default Skills;
