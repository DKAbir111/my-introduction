import React from 'react'
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaReact, FaEnvelope, FaNodeJs } from "react-icons/fa";
import { SiMongodb, SiTypescript, SiPython, SiEclipseche, SiNotion, SiSelenium } from "react-icons/si"; // Removed SiJava

const Media = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
      <div>
        <h2 className="text-base uppercase font-titleFont mb-4">
          Find me in
        </h2>
        <div className="flex gap-4">
          <a className="bannerIcon" href="https://www.facebook.com/darulkararabir/" target="_blank" rel="noopener noreferrer">
            <FaFacebookF />
          </a>
          <a className="bannerIcon" href="https://www.google.com/url?q=https%3A%2F%2Ftwitter.com%2FAbirDarun&sa=D&sntz=1&usg=AOvVaw303mzQj90sZB4Lh9dmPkrf" target="_blank" rel="noopener noreferrer">
            <FaTwitter />
          </a>
          <a className="bannerIcon" href="https://www.linkedin.com/in/darunkarasabir/" target="_blank" rel="noopener noreferrer">
            <FaLinkedinIn />
          </a>
          <a className="bannerIcon" href="mailto:darun15-14188@diu.edu.bd">
            <FaEnvelope />
          </a>
        </div>
      </div>

      <div>
        <h2 className="text-base uppercase font-titleFont mb-4">
          Best Skill On
        </h2>
        <div className="flex gap-4 flex-wrap">
          {/* MERN Stack */}
          <span className="bannerIcon">
            <FaReact title="ReactJS" />
          </span>
          <span className="bannerIcon">
            <FaNodeJs title="NodeJS" />
          </span>
          <span className="bannerIcon">
            <SiMongodb title="MongoDB" />
          </span>
          <span className="bannerIcon">
            <SiTypescript title="TypeScript" />
          </span>
          <span className="bannerIcon">
            <SiEclipseche title="Eclipse" />
          </span>
          <span className="bannerIcon">
            <SiSelenium title="Selenium" />
          </span>
          <span className="bannerIcon">
            <SiPython title="Python" />
          </span>
          <span className="bannerIcon">
            <SiNotion title="Notion" />
          </span>
        </div>
      </div>
    </div>
  )
}

export default Media;
