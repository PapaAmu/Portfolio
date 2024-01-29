import {Typography} from "@material-tailwind/react";

const TechnicalSkills = () => {
    return (
        <>
        <Typography variant="h4" color="blue-gray" className="text-center font-serif mb-4 mt-8">
           Technical Skills
          </Typography>
          <div className="md:container md:mx-auto sm:mx-auto mt-4 mb-20 items-center">
          <div className="md:columns-2 mt-2 gap-6 first-column sm:columns-2-xs">
         
          <div className="grid grid-rows-3 gap-2 ">
          <div className="grid  grid-cols-3 gap-3 text-center items-center">
                <img src="public/svg/HTML5.png" className="h-5 w-6 inline-block"/>
                <p className="inline-block"> HTML</p>

                <img src="public/svg/CSS3.png" className="h-5 w-6 inline-block"/>
                <p className="inline-block">CSS</p>

                <img src="public/svg/Javascript_logo.png" className="h-4 w-5 inline-block Javascript_logo items-center"/>
                <p className="inline-block javascript">JAVASCRIPT</p>
          </div>
          </div>
          
          <div className="grid grid-rows-3 gap-2 ">
          <div className="grid grid-cols-3 gap-3 text-center items-center">
                <img src="public/svg/Jquery.png" className="h-6 w-6 inline-block" />
                <p className="inline-block">JQUERY</p>

                <img src="public/svg/Redux.png" className="h-6 w-6 inline-block" />
                <p className="inline-block">REDUX</p>
          </div>
          </div>
          </div>


          <div className="md:columns-2 gap-8 second-column sm:columns-2-xs">

          <div className="grid grid-rows-1 gap-4 ">
          <div className="grid  gap-4 grid-cols-2 text-center">
                <img src="public/svg/Git.png" className="h-7 w-7 inline-block" />
                <p className=" inline-block">GIT</p>

                <img src="public/svg/Github.png" className="h-7 w-7 inline-block" />
                <p className="inline-block">GITHUB</p>
          </div>
          </div>

          <div className="grid grid-rows-2 gap-4">
          <div className="grid  grid-cols-2 gap-4 text-center items-center">
                <img src="public/svg/Boostrap.png" className="h-5 w-5 inline-block"/>
                <p className="inline-block">BOOSTRAP</p>

                <img src="public/svg/Tailwind.png"className="h-6 w-6 inline-block"/>
                <p className="inline-block">TAILWIND</p>                
          </div>
          </div>

          <div className="grid grid-rows-1 gap-4">
          <div className="grid gap-2 grid-cols-2">
                <img src="public/svg/React.png" className="h-6 w-6 inline-block"/>
                <p className="inline-block">REACT</p>
          </div>
          </div>
        
          <div className="grid grid-rows-2  gap-4 ">
          <div className="grid  grid-cols-2 gap-4 text-center items-center">
                <img src="public/svg/Mysql.png" className="h-7 w-7 inline-block"/>
                <p className="inline-block">MYSQL</p>
          </div>
          </div>

          
        
          </div>
          </div>
       
        </>
    );
};

export default TechnicalSkills;