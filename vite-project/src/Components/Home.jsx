    import  Resumebutton from './Resumebutton';
import Contactbutton from './Contactbutton'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailIcon from '@mui/icons-material/Mail';




function Home() {
    return (
     <div className=" home-component max-w-md mx-auto overflow-hidden md:max-w-2xl mt-6 mb-12 justify-center text-lg gap-2" >
     <div className="md:flex">
     <div className="md:p-8">
      <div className="uppercase tracking-wide text-2xl text-black font-semibold text-center leading-relaxed">Hi, I am</div>
       <p className="block mt-1 text-4xl leading-tight text-blachover:underline text-indigo-500 font-semibold mb-2 tracking-wide text-center">Jenise Lukhele</p>
       <p className="text-slate-200 text-black text-2xl font-semibold text-center mb-3">Fronted Developer</p>
       <div className="sm:flex text-center ml-5">
       
       <Resumebutton>
        <a href="Hlobisile Lukhele resume (10).pdf" target="_blank" download="HlobisileLukhele Resume" />
        </Resumebutton>

        <Contactbutton />
       </div>
    </div>
    <div className="flex mx-auto sm:justify-items-center ">
      <img className="Head-shot md:h-60 md:w-70 mb-4, lg:h-60 md:w-60 mb-4, sm:h-60 w-60 text-center  rounded-full object-cover object-center"src="public/images/head-shot image.png" alt="Head-shot image" />
    </div>
    </div>
    <div className='social-icons mt-2 mb-8 '>
      <div className="container-fluid text-left social-links gap-6 ml-16 fa-3xl ">
                <a href="https://www.linkedin.com/in/hlobisile-lukhele-8812b9183/" rel="noreferrer" target="_blank">
                    <LinkedInIcon style={{ color: "black",fontSize: "34px", margin:"5px"}} />                  
                </a>
                <a href="https://github.com/HlobisileLukhele" rel="noreferrer" target="_blank">
                      <GitHubIcon style={{ color: "black",fontSize: "34px", margin:"5px" }} />
                </a>

                <a href="https://www.n.thwala03@gmail.com/" rel="noreferrer" target="_blank">
                      <MailIcon style={{ color: "black",fontSize: "34px", margin:"5px" }} />
                </a>

            </div>
    </div>
</div>
    );
}
 export default Home;