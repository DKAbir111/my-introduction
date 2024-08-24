import React from "react";
import {motion} from "framer-motion"
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex gap-20"
    >
  
      <div>
        <div className="flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2022 - 2024</p>
          <h2 className="text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Software Engineer Intern"
            subTitle="Bussiness Atomation Ltd. (2024)"
            result="DHAKA"
            des=" Develop both Front End and Back end Features and Test
            • Assist Troubleshoot and debugging Issue, REST API
            • Version Control Using Github and Git
            • Deploy Web Application Using Docker"
          />
          <ResumeCard
            title="Research Assistant"
            subTitle="Daffodil International University 2022-2023"
            result="Natural Language Processing Club"
            des="NLP, or Natural Language Processing, is a field of artificial intelligence that equips computers to understand, manipulate, and generate human language. This technology powers many of the conveniences we use today, like chatbots, voice assistants, and machine translation."
          />
          <ResumeCard
            title="Lab Assistant"
            subTitle="Daffodil International University 2022-2023"
            result="Computer and Programming Club"
            des="DIU CPC, the largest club at Daffodil International University, empowers students to explore computer science and develop their programming skills through workshops and events. Led by faculty advisors, the club fosters a supportive environment for beginners and enthusiasts alike."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
