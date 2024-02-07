import ContactForm from './ContactForm';

const Contact = () => {
    return (   
    <div className="grid grid-cols-4 gap-0 ">
    <div className="col-span-2 col-start-1 col-end-4 ">
    <ContactForm />
    </div>
    <div className='illustration grid-span-3'>
        <h1 className="text-3xl font-bold text-gray-800">Contact Us</h1>
        <img src="./public/images/illustration.png" />
    </div>
    </div>
    );
};

export default Contact;