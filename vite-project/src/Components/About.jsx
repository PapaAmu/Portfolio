import React from 'react';
import {Typography} from "@material-tailwind/react";


function About() {
    return (
        <div>
            <Typography variant="h4" color="blue-gray" className=" mb-6 mt-6 text-center font-serif">
            About 
          </Typography>
            <p className="mb-8 text-center ml-6 mr-5 whitespace-normal "> Frontend developer with a passion for coding and creating responsive and functional web applications.
               My journey in web development began when I enrolled in coding bootcamps to learn the necessary skills to become a developer.
               Since then, I have continued to learn and grow as a developer, and I am constantly exploring new technologies and techniques to improve my skills.
               When I'm not coding, I enjoy  going for jogs and exploring music.  </p>
        </div>
    );
}

export default About;