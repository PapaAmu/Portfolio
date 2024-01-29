import {Typography} from "@material-tailwind/react";

const TechnicalSkills = () => {
    return (
        <>
        <Typography variant="h4" color="blue-gray" className="text-center font-serif mb-4 mt-8">
           Technical Skills
          </Typography>
         
                <img src="public/svg/HTML5.png" className="h-5 w-6 inline-block"/>
                <p className="inline-block"> HTML</p>

                <img src="public/svg/CSS3.png" className="h-5 w-6 inline-block"/>
                <p className="inline-block">CSS</p>

                <img src="public/svg/Javascript_logo.png" className="h-4 w-5 inline-block Javascript_logo items-center"/>
                <p className="inline-block javascript">JAVASCRIPT</p>
          
                <img src="public/svg/Jquery.png" className="h-6 w-6 inline-block" />
                <p className="inline-block">JQUERY</p>

                <img src="public/svg/Redux.png" className="h-6 w-6 inline-block" />
                <p className="inline-block">REDUX</p>

                <img src="public/svg/Git.png" className="h-7 w-7 inline-block" />
                <p className=" inline-block">GIT</p>

                <img src="public/svg/Github.png" className="h-7 w-7 inline-block" />
                <p className="inline-block">GITHUB</p>

                <img src="public/svg/Boostrap.png" className="h-5 w-5 inline-block"/>
                <p className="inline-block">BOOSTRAP</p>

                <img src="public/svg/Tailwind.png"className="h-6 w-6 inline-block"/>
                <p className="inline-block">TAILWIND</p>                

                <img src="public/svg/React.png" className="h-6 w-6 inline-block"/>
                <p className="inline-block">REACT</p>
        
        </>
    );
};

export default TechnicalSkills;