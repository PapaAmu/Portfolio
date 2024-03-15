import {Typography} from "@material-tailwind/react";
import Boostrap from '../Assets/svg/Boostrap.png';
import CSS3 from '../Assets/svg/CSS3.png';
import Firebase from '../Assets/svg/Firebase.png';
import Git from '../Assets/svg/Git.png';
import Github from '../Assets/svg/Github.png';
import HTML5 from '../Assets/svg/HTML5.png';
import JavaScript from '../Assets/svg/JavaScript_logo.png';
import Mysql from '../Assets/svg/Mysql.png';
import React from '../Assets/svg/React.png';
import tailwind from '../Assets/svg/tailwind.png';
import Redux from '../Assets/svg/Redux.png';
import framermotion from '../Assets/svg/framer-motion.svg';

const TechnicalSkills = () => {
    return (
    <section id="Technical Skills">  
    <Typography variant="h3" color="blue-gray" className="mb-1 mt-4 text-center font-serif">
        Technical Skills
  </Typography>
  <div className="container text-center" id="#tech-stack">
  
    <div className="container-fluid">
   <div className="row sm:col-sm-2">
    <div className="col-sm-4 mt-4 mb-4 ">
    <h2 className="mt-8 pt-12  mb-4 text-center text-bold">Tech_Stack<span className="name-tag">............</span></h2>
    <h4>Let us explore some of my <span className="name-tag"> skills</span></h4>
    </div>
    <div className="col-sm-8">
    <div data-aos="fade-up" data-aos-duration="4000">
    <div className="row row-cols-3 row-cols-md-6 mt-4 mb-4">
    <div className="col-sm mt-4 mb-4">
    <div className="card items-center border-r-4 bg-color-black">
    <img src={HTML5 }alt="HTML5 logo" className="pt-2 pl-2 pe-2 pb-1"  />
    <p className="card-titl mt-2 text-bold">HTML</p>
    </div>
    </div>
    <div className="col-sm mt-4 mb-4">
    <div className="card items-center">
    <img src={CSS3} alt="CSS logo" className="pt-2 pl-2 pe-2"   />
    <p className="card-titl mt-2 text-bold">CSS</p>
    </div>
    </div>
    <div className="col-sm mt-4 mb-4">
    <div className="card items-center">
    <img src={JavaScript} alt="Javascript logo" className="pt-2 pl-2 pe-2"  />
    <p className="card-titl mt-2 text-bold">Javascript</p>
    </div>
    </div>
    <div className="col-sm mt-4 mb-4">
    <div className="card items-center">
    <img src={Boostrap} alt="CSS logo" className="pt-2 pb-2 pl-2 pe-2"   />
    <p className="card-titl mt-2 text-bold">Boostrap</p>
    </div>
    </div>
    <div className="col-sm mt-4 mb-4">
    <div className="card items-center">
    <img src={React} alt="React logo" className="pt-2 pl-2 pe-2 pb-1" />
    <p className="card-titl mt-2 text-bold">React</p>
    </div>
    </div>
    <div className="col-sm mt-4 mb-4">
    <div className="card items-center">
    <img src={Redux}alt="React logo" className="pt-2 pl-2 pe-2" />
    <p className="card-titl mt-2 text-bold">Redux</p>
    </div>
    </div>
    </div>
    
  </div>
  <div data-aos="fade-up" data-aos-duration="1000">
  <div className="row row-cols-3 row-cols-md-6 mt-4 mb-4">
    <div className="col-sm mt-4 mb-4">
    <div className="card items-center">
    <img src={Git} alt="Your image description" className="pt-2 pl-2 pe-2"  />
    <p className="card-titl mt-2 text-bold">Git</p>
    </div>
    </div>
    <div className="col-sm mt-4 mb-4">
    <div className="card items-center">
    <img src={Github} alt="CSS logo" className="pt-2 pl-2 pe-2"   />
    <p className="card-titl mt-2 text-bold">Github</p>
    </div>
    </div>
    <div className="col-sm mt-4 mb-4">
    <div className="card items-center">
    <img src={Firebase} alt="Tailwind css logo" className="pt-2 pl-2 pe-2"  />
    <p className="card-titl mt-2 text-bold">Firebase</p>
    </div>
    </div>
    <div className="col-sm mt-4 mb-4">
    <div className="card items-center">
    <img src={tailwind} alt="Redux logo" className="pt-2 pl-2 pe-2"  />
    <p className="card-titl mt-2 text-bold">tailwind</p>
    </div>
    </div>
    
    <div className="col-sm mt-4 mb-4 .d-sm-none">
    <div className="card items-center">
    <img src={framermotion}alt="Git logo" className="pt-1 pb-2 pl-2 pe-2"  />
    <p className="card-titl mt-2 text-bold text-sm">Framer </p>
    </div>
    </div>
    <div className="col-sm mt-4 mb-4">
    <div className="card items-center">
    <img src={Mysql} alt="Github logo" className="pt-2 pl-2 pe-2"/>
    <p className="card-titl mt-2 text-bold">Mysql</p>
    </div>
    </div>
  </div>
    </div>
  </div>
  </div>
  </div>
  </div>
  </section>
    );
};

export default TechnicalSkills;