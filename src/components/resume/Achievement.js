import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Achievement = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex gap-20"
    >

      <div>
        <div className="py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2020-2024</p>
          <h2 className="text-4xl font-bold">Certificates</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Software Product management"
            subTitle="Managing Software products to deliver comprehensive solutions"
            result="Success"
            des="Customer Understanding, Market Analysis, Strategic Foundations, Competitive Strategy, Product Vision, Leadership, Objectives, Prioritization, roadmapping, MVPs, Agile Development, Discovery, Optimization, Analytics, Marketing, Growth, Feedback, Pricing, Operations, Insights."
          />
          <ResumeCard
            title="Web Development"
            subTitle="MERN STACK "
            result="Success"
            des="Master the full spectrum of web development, spanning from HTML to server-side technologies like Node.JS and MongoDB while building over 40 projects."
          />
          <ResumeCard
            title="Machine Development and Deep Learning"
            subTitle="Daffodil International University NLP Lab"
            result="Success"
            des="Proficient in Machine Learning and Deep Learning technologies, including TensorFlow, PyTorch, Keras, scikit-learn, NumPy, Pandas, Matplotlib, OpenCV, TensorBoard, XGBoost, LightGBM, and Jupyter Notebook for data analysis and model development."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Achievement;
