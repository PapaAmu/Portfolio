import {Card,Input,Checkbox,Button,Typography,} from "@material-tailwind/react";
import { Textarea } from "@material-tailwind/react";
import { propTypesDefaultValue } from "@material-tailwind/react/types/components/slider";
import {useForm} from "react-hook-form";

  export  default function ContactForm() {
    const {register, handleSubmit, formState: {errors} } = useForm();
    const onSubmit = data => console.log(data);
    console.log(errors);
    return (
        <div className="mx-auto my-8 mb-4">
       <Card color="transparent" shadow={false} className="items-center mt-6 mb-4">
        <Typography variant="h4" color="blue-gray">
         Get In  Touch
        </Typography>
        <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96 items-center"
        onSubmit={handleSubmit((data) =>{
          consol.log(data);
        })}
        >
          <div className="mb-1 flex flex-col gap-4">
            <Typography vvariant="static" color="blue-gray" className="-mb2">
              Full Name
            </Typography>
            <Input
                variant="outlined"
                size="lg"
                placeholder="Name here..."
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none"
                }}
                {...register("FullName", {required: 'FullName is required', minLength:{value:20, message: "Min length is 20"}})}
                />
                <p>{errors.FullName?.message}</p>
            <Typography vvariant="static" color="blue-gray" className="-mb-3">
              Email Adress
            </Typography>
            <Input
              variant="outlined"
              size="lg"
              placeholder="name@mail.com"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              {...register("Email",{required:'email is required', minLength:{value:10, message:'Min length is 20'}})}
            />
            <p>{errors.Email?.message}</p>
            <div className="flex w-70 flex-col gap-6">
            <Typography vvariant="static" color="blue-gray" className="-mb-3">
              Message
            </Typography>
            <Textarea variant="outlined"  placeholder="Anything in mind ..."
            {...register("Message", {required: 'You gotta say something'})}
             />
             <p>{errors.Message?.message}</p>
            </div>
          </div>
          <Button className="mt-6" fullWidth>
           <input type="submit"/>
          </Button>
        </form>
      </Card>
      </div>
    );
  }