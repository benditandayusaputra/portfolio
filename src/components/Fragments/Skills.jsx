import React from "react";
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
    name: "Html & CSS",
    icon: <SiHtml5 />,
    secondaryIcon: <SiCss3 />,
  },
  { name: "PHP", icon: <SiPhp /> },
  { name: "JavaScript", icon: <SiJavascript /> },
  { name: "Python", icon: <SiPython /> },
  { name: "MySql", icon: <SiMysql /> },
  { name: "PostgreSQL", icon: <SiPostgresql /> },
  { name: "SQL Server", icon: <SiMicrosoftsqlserver /> },
  { name: "Bootstrap", icon: <SiBootstrap /> },
  { name: "Tailwind", icon: <SiTailwindcss /> },
  { name: "JQuery", icon: <SiJquery /> },
  { name: "Laravel", icon: <SiLaravel /> },
  { name: "CodeIgniter", icon: <SiCodeigniter /> },
  { name: "Vue", icon: <SiVuedotjs /> },
  { name: "React", icon: <SiReact /> },
  {
    name: "Flask Microweb Framework",
    icon: <SiFlask />,
  },
  { name: "Git Source Control", icon: <SiGit /> },
];

const Skills = () => {
  return (
    <div className="p-6 rounded-lg">
      <h2 className="text-white text-4xl text-center font-bold mb-10">
        My Skills
      </h2>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-6">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="flex flex-col items-center border border-white bg-transparent p-4 rounded-lg text-white hover:text-sky-400 hover:border-sky-400"
          >
            <div className="h-12 mb-4 text-4xl flex flex-row justify-center items-center hover:text-sky-400">
              {skill.icon}
              {skill.secondaryIcon && skill.secondaryIcon}
            </div>
            <span className="text-center">{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
