import ContactForm from './ContactForm';
import './contactbutton.css'

const Contact = () => {
    return ( 
        <>  
    <div className="container-fluid mt-6">
    <div className='container hook-up-para '> 
     <div className="row font-serif">
    <div className="col-sm-7 pt-20  pl-10 text-center">
      <h1 className="heading-text tracking-wide pt-16">Hire Me Today</h1>
      <p className="hook-up-line">Let us bring your products to life</p>
      <button className="btn btn-secondary message mb-4 mt-4 "> Shoot me a Message 👉</button>
    </div>
    <div className="col-sm-5 text-left pr-8 pt-18">
    <ContactForm />
    </div>
    </div>
    </div>
    </div>
  </>  
    );
};

export default Contact;