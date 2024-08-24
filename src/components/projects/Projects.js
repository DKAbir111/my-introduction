import React from 'react'
import Title from '../layouts/Title'
import { projectOne, projectTwo, projectThree,projectFour,projectFive,projectSix } from "../../assets/index";
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="Biker Zone"
          des="A site where users can buy bikes. Built using HTML, CSS, Tailwind CSS, DaisyUI, and JavaScript."
          src={projectOne}
          githubLink="https://github.com/DKAbir111/Bike-Zone?tab=readme-ov-file"
          liveLink="https://dkabir111.github.io/Bike-Zone/"
        />
        <ProjectsCard
          title="Fitness Traking App"
          des="A fitness platform with tutorials, workout plans, and a BMI calculator for accessible health and gradual habit changes."
          src={projectTwo}
          githubLink="https://github.com/DKAbir111/Assignment-2-Fitness?tab=readme-ov-file"
          liveLink="https://dkabir111.github.io/Assignment-2-Fitness/"
        />
        <ProjectsCard
          title="Penguin-fashion"
          des="This project is a stylish e-commerce site selling jackets for men and women, featuring free exchanges and diverse fit options."
          src={projectThree}
          githubLink="https://github.com/DKAbir111/penguin-fashion-tailwind-css"
          liveLink="https://dkabir111.github.io/penguin-fashion-tailwind-css/"
        />
        <ProjectsCard
          title="Amazone Clone"
          des="Developed a MERN stack web app with product catalog, shopping cart, and order review functionalities for a seamless shopping experience."
          src={projectFour}
          githubLink="https://github.com/DKAbir111/bdstore/tree/main/src"
          liveLink="https://ema-john.firebaseapp.com"
        />
        <ProjectsCard
          title="Rinterio"
          des="Created a full-responsive house design and development app with Tailwind, DaisyUI, HTML, CSS, and React, blending elegance and functionality."
          src={projectFive}
          githubLink="https://github.com/DKAbir111/Assignment-03-Rinterio"
          liveLink="https://dkabir111.github.io/Assignment-03-Rinterio/"
        />
        <ProjectsCard
          title="Panda Shopping"
          des="Designed and developed a responsive e-commerce web page using Bootstrap, HTML, CSS, and JavaScript, showcasing products with pricing and interactive purchase options."
          src={projectSix}
          githubLink="https://github.com/DKAbir111/Panda-Commerce?tab=readme-ov-file"
          liveLink="https://dkabir111.github.io/Panda-Commerce/"
        />
  

      </div>
    </section>
  );
}

export default Projects;
