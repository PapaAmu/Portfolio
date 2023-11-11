import {
    Card,
    Input,
    Checkbox,
    Button,
    Typography,
  } from "@material-tailwind/react";
  import { Textarea } from "@material-tailwind/react";
  import {useForm} from "react-hook-form"
     
  export  default function ContactForm() {
    return (
        <div className="mx-auto my-8 mb-4">
       <Card color="transparent" shadow={false} className="items-center mt-6 mb-4">
        <Typography variant="h4" color="blue-gray">
         Get In  Touch
        </Typography>
        <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96 items-center">
          <div className="mb-1 flex flex-col gap-6">
            <Typography vvariant="static" color="blue-gray" className="-mb-3">
              Full Name
            </Typography>
            <Input
              variant="static"
              size="lg"
              placeholder="Name here..."
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
            <Typography vvariant="static" color="blue-gray" className="-mb-3">
              Your eMail 
            </Typography>
            <Input
              variant="static"
              size="lg"
              placeholder="name@mail.com"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
            <div className="flex w-96 flex-col gap-6">
            <Typography vvariant="static" color="blue-gray" className="-mb-3">
              Message
            </Typography>
            <Textarea variant="static"  placeholder="Anything in mind ..." />
            </div>
        
          </div>
        
          <Button className="mt-6" fullWidth>
            Submit
          </Button>
        </form>
      </Card>
      </div>
    );
  }