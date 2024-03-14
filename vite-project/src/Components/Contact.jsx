import ContactForm from './ContactForm';
import './contactbutton.css'
import {Typography} from "@material-tailwind/react";


const Contact = () => {
    return ( 
        <>  
  <Typography variant="h3" color="blue-gray" className="mb-4 mt-6 text-center font-serif">
   Contact Me
  </Typography>
    <div className="container-fluid mt-6">
    <div className='container hook-up-para '> 
     <div className="row font-serif">
    <div className="col-sm-6 pt-20  pl-5 text-center">
      <h1 className="heading-text tracking-wide pt-16">Hire Me Today</h1>
      <p className="hook-up-line">Let us bring your products to life</p>
      <button className="btn btn-secondary message mb-4 mt-4 "> Reach out here </button>
    </div>
    <div className="col-sm-6 text-left pr-4 pt-18">
    <ContactForm />
    </div>
    </div>
    </div>
    </div>
  </>  
    );
};

export default Contact;