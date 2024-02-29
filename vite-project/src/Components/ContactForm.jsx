import "../App.css";
import { useForm } from 'react-hook-form';
import { DevTool } from "@hookform/devtools";


const ContactForm = () => {
  const form = useForm();
  const { register, control, handleSubmit,formState} = form;
  const {errors} = formState;

  const onSubmit = () => {
    console.log("form submitted");
  }

  return (
    <div className="container">
  <div className="row">
    <div className="col-sm-6 gap-0">  
    <div className="form-container mt-4 mb-3 mr-10  border-blue-gray-900 gap-0 align-items-center">
      <form className="contact-form text-center "  onSubmit={handleSubmit(onSubmit)} noValidate>
        <div className="form-group">
          <label htmlFor="fullname">Full Name</label>
          <input type='text' id="fullname" {...register("fullname",{
            required: "Fullname is required",
            placeholder: "Your Full Name"
          })} />
          <p className="error pt-2">{errors.fullname?.message}</p>
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type='email' id="email" {...register("email", {
            required: "email is required",
            placeholder: "something@example.com"
          })} />
          <p className="error pt-2">{errors.email?.message}</p>
        </div>

        <div className="form-group">
          <label htmlFor="message">Message</label>
          <input type='text' id="message" {...register("message", {
            required: "Message is required",
            placeholder: "Say Something ..."

          })} />
          <p className="error pt-2">{errors.message?.message}</p>
        </div>

        <div className="form-group">
          <button className="button-contact" type="submit">SUBMIT</button>
        </div>
      </form>
      <DevTool control={control} />
    </div>
    </div>
  </div>
  </div>
  
  );
}

export default ContactForm;