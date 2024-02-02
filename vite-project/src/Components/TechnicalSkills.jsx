import {Typography} from "@material-tailwind/react";

const TechnicalSkills = () => {
    return (
        <>
        <Typography variant="h4" color="blue-gray" className="text-center font-serif mb-4 mt-4">
           Technical Skills
          </Typography>
         
         <div className="columns-12 mt-4 ">
         <div className="border-skills">
         <img src="/svg/HTML5.png" className="h-12 w-12  mb-4 "/>
         </div>
         <div className="border-skills">
         <img src="/svg/CSS3.png" className="h-12 w-12 mt-4 mb-4"/>
         </div>
         <div className="border-skills">
         <img src="public/svg/Javascript_logo.png" className="h-12 w-12 mt-4 mb-4"/>
         </div>
         <div className="border-skills">
         <img src="/svg/Jquery.png" className="h-12 w-12 mt-4 mb-4" />
         </div>
         <div className="border-skills">
         <img src="/svg/Boostrap.png" className="h-12 w-12 mt-4 mb-4"/>
         </div>
         <div className="border-skills">
         <img src="/svg/Figma.png" className="h-12 w-14"/>
         </div>
         <div className="border-skills">
         <img src="/svg/Github.png" className="h-12 w-12" />
         </div>
         <div className="border-skills">
         <img src="public/svg/Tailwind.png"className="h-16 w-16"/>
        </div>
         <div className="border-skills">
         <img src="/svg/React.png" className="h-12 w-14"/>
         </div>
         <div className="border-skills">
         <img src="public/svg/Rest API.png" className="h-12 w-14"/>
         </div>
         </div>
        </>
    );
};

export default TechnicalSkills;