import React, { useContext, useEffect } from "react";
import { LanguageContext } from "../Contexts/LnContext";
import { contentData } from "../Sources/Data/LnData";

const Projects = () => {
  const { languagePreference } = useContext(LanguageContext);
  useEffect(() => {}, [languagePreference]);
  const proData = contentData[languagePreference.toLowerCase()].projects;

  return (
    <div id="projects">
      <h1 className="text-5xl font-semibold text-[#1f2937] dark:text-[#AEBCCF]">
        {proData.mTitle}
      </h1>
      {/* Project Container */}
      <div className="pContainer">
        {proData.pItems.map((project) => {
          return (
            //Project Cards

            <div key={project.id} className="pItem">
              <div className="  ">
                <div className=" hover:rotate-0 rotate-3 transition duration-500">
                  <img className="max-h-fit " src={project.img} alt="Project" />
                </div>
              </div>
              <h3 className="text-3xl/7 font-medium text-indigo-700 dark:text-[#CFCBFF] py-[18px]">
                {project.title}
              </h3>
              <p className="text-sm/[17.5px]">{project.descr}</p>
              <div className="flex flex-wrap justify-items-start gap-[8px] py-[18px]">
                {project.methods.map((item, index) => (
                  <button
                    key={index}
                    className="border border-[#3730A3] dark:border-[#8F88FF] text-[#3730A3]  dark:text-[#E1E1FF] text-sm/[14px] font-medium rounded-[4px] px-[18px] pt-[6px] pb-[7px] max-h-[27px] w-auto"
                  >
                    {item}
                  </button>
                ))}
              </div>
              <div className="flex flex-row pb-8 justify-between">
                <a
                  className="text-base/[16px] font-medium text-indigo-800 dark:text-[#E1E1FF]  underline underline-offset-2 "
                  href={project.gitLink}
                  target="_newtab"
                >
                  GitHub
                </a>
                <a
                  className="text-base/[16px] font-medium text-indigo-800 dark:text-[#E1E1FF] underline underline-offset-2 "
                  href={project.prLink}
                  target="_newtab"
                >
                  View Site
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
