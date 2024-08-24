import React from 'react'
import { motion } from 'framer-motion';
import ResumeCard from './ResumeCard';

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2017-2024</p>
          <h2 className="text-3xl md:text-4xl font-bold">Education Quality</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="BSc in Computer Science and Engineering"
            subTitle="Daffodil International University (2020-2024)"
            result="CGPA- 3.90/4"
            des="Hands-on experience in data structures, algorithms, competitive
            programming(C, C++, Python,Java, JavaScript), AI, and Machine Learning, active participation in the Computer Programming Club, and Natural Language Processing Club."
          />
          <ResumeCard
            title="Higher Secondary School Certificate."
            subTitle="Rashed Khan Menon Model College (2017-2019)"
            result="GPA- 5.00/5.00"
            des="Communication Skill, Parliamentary Debating, Basic Programming"
          />
          <ResumeCard
            title="Secondary School Certificate"
            subTitle="Babugonj Govt Pilot Secondary School (2016-2017)"
            result="GPA- 5.00/5.00"
            des="Debating and Mentoring training by Brac Bank. I also learn to develop critical thinking, time management, and writing abilities while gaining proficiency in math and scientific inquiry. Participating in different competitions like- Exploring creative talent, Math Olympiad, Debating, etc. Also acquired leadership ability as I was Chep Election Commissioner at the Student Cabinet Election."
          />
        </div>
      </div>
      {/* part Two */}

      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm racking-[4px]">2024-Presnt</p>
          <h2 className="text-3xl md:text-4xl font-bold text-designColor ">Job Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1250px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Software Engineer Intern"
            subTitle="Nike - (02/02/2024 - 02/05/2024)"
            result="Bussiness Automation Limited"
            des="• Develop both Front End and Back end Features and Test.
            • Assist Troubleshoot and debugging Issue, REST API.
            • Version Control Using Github and Git.
            • Deploy Web Application Using Docker."
          />
        </div>
      </div>
    </motion.div>
  );
}

export default Education