import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
  } from "@material-tailwind/react";
   
  export default function Projects() {
    return (
      <div className="md:container md:mx-auto my-6 mb-10 gap-2 space-x-4">
      <Typography variant="h3" color="blue-gray" className="mb-4 mt-6 text-center font-serif">
        Projects
      </Typography>
      <div className="lg: grid grid-cols-1 md:grid-cols-3 gap-14 ">
        <div className="md:w-96 border-black">
          <Card className="mt-6">
            <CardHeader color="blue-gray" className="relative h-46">
              <img src="public/images/Bellabheka website.png" alt="card-image" />
            </CardHeader>
            <CardBody>
              <Typography variant="h5" color="blue-gray" className="mb-2">
                Bellabheka Website
              </Typography>
              <Typography color="blue-gray">
                Bellabheka is a catering and decor company that provides services to all kinds of events around Durban.
              </Typography>
            </CardBody>
            <CardFooter className="pt-0">
              <Button>Read More</Button>
            </CardFooter>
          </Card>
        </div>
    
        <div className=" md:w-96 border-black">
          <Card className="mt-6 space-x-4">
            <CardHeader color="blue-gray" className="relative h-46">
              <img src="public/images/Portfolio Website.jpeg" alt="card-image" />
            </CardHeader>
            <CardBody>
              <Typography variant="h5" color="blue-gray" className="mb-2">
                Personal Portfolio
              </Typography>
              <Typography color="blue-gray">
                Personal portfolio website to showcase skills acquired and projects built along with the impacts it derives.
              </Typography>
            </CardBody>
            <CardFooter className="pt-0">
              <Button>Read More</Button>
            </CardFooter>
          </Card>
        </div>

        <div className="w-full md:w-96 border-black">
          <Card className="mt-6">
            <CardHeader color="blue-gray" className="relative h-46">
            <img src="public/images/Fruad Detector.jpeg" alt="card-image" />
            </CardHeader>
            <CardBody>
              <Typography variant="h5" color="blue-gray" className="mb-2">
                Fruad Detector
              </Typography>
              <Typography color="blue-gray">
              A application that checks for fraudulent activities by analyzing card transactions.
              </Typography>
            </CardBody>
            <CardFooter className="pt-0">
              <Button>Read More</Button>
            </CardFooter>
          </Card>
        </div>
    
       
      </div>
    </div>
    
    );
  }