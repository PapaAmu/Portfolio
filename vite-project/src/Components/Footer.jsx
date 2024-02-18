import { Typography } from "@material-tailwind/react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailIcon from '@mui/icons-material/Mail';

export default function Footer() {
  return (
    <footer className="w-full bg-white p-4">
    <div className='container-fluid social-icons mt-4'>
      <div className=" text-right social-links gap-6 ml-13 fa-3xl ">
                <a href="https://www.linkedin.com/in/hlobisile-lukhele-8812b9183/" rel="noreferrer" target="_blank">
                    <LinkedInIcon style={{ color: "black",fontSize: "34px", margin:"6px"}} />                  
                </a>
                <a href="https://github.com/HlobisileLukhele" rel="noreferrer" target="_blank">
                      <GitHubIcon style={{ color: "black",fontSize: "34px", margin:"6px" }} />
                </a>

                <a href="https://www.n.thwala03@gmail.com/" rel="noreferrer" target="_blank">
                      <MailIcon style={{ color: "black",fontSize: "34px", margin:"6px" }} />
                </a>
               
    </div>
    <hr className="my-2 horizontal-line" />
      <Typography color="blue-gray" className="text-center font-normal">
        &copy; 2024 Hlobisile Lukhele
      </Typography>
</div>
    </footer>
  );
}