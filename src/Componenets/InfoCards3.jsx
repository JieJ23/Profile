import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
  Carousel,
} from "@material-tailwind/react";

import { Link } from "react-router-dom";

import {
  FolderIcon,
  IdentificationIcon,
  ArrowRightCircleIcon,
} from "@heroicons/react/24/solid";

export default function SimpleCard3() {
  return (
    <section className="p-2 my-2 max-w-[1400px] mx-auto flex flex-col lg:flex-row gap-4">
      <Card className="bg-[#28282b] flex-1">
        <Carousel className="rounded-xl" loop={true}>
          <img
            src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
            alt="image 2"
            className="h-full w-full object-cover"
          />
          <img
            src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
            alt="image 2"
            className="h-full w-full object-cover"
          />
          <img
            src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
            alt="image 2"
            className="h-full w-full object-cover"
          />
        </Carousel>
      </Card>
      <section className="flex flex-col gap-2 flex-1">
        <Card className="bg-[#28282b] basis-1/2">
          <CardBody>
            <div className="flex justify-between mb-2">
              <Typography
                variant="h5"
                color="white"
                className="mb-2 flex gap-2 place-items-center"
              >
                <FolderIcon className="h-8 w-8 text-blue-500" />
                Websites / Community Projects
              </Typography>
            </div>
            <Typography color="white" className="opacity-60">
              These projects often aim to serve community needs, foster
              collaboration, or provide resources and information. These
              websites play a vital role in connecting people, sharing
              information, and building a sense of belonging within a specific
              community or interest group.
            </Typography>
          </CardBody>
          <CardFooter className="pt-0 pb-2 flex justify-end">
            <Button className="bg-transparent">
              <Link to="/Projects">
                <ArrowRightCircleIcon className="h-8 w-8 text-white hover:text-blue-500 hover:scale-125 ease-in duration-100" />
              </Link>
            </Button>
          </CardFooter>
        </Card>

        <Card className="bg-[#28282b] basis-1/2">
          <CardBody>
            <div className="flex justify-between mb-2">
              <Typography
                variant="h5"
                color="white"
                className="mb-2 flex gap-2 place-items-center"
              >
                <IdentificationIcon className="h-8 w-8 text-blue-500" />
                {"Contact Me"}
              </Typography>
            </div>
            <Typography color="white" className="opacity-60">
              To bridge the gap and connect! Whether you have questions, ideas,
              or just want to chat, don't hesitate to reach out. Looking forward
              to our conversation!
            </Typography>
          </CardBody>
          <CardFooter className="pt-0 pb-2 flex justify-end">
            <Button className="bg-transparent">
              <Link to="#">
                <ArrowRightCircleIcon className="h-8 w-8 text-white hover:text-blue-500 hover:scale-125 ease-in duration-100" />
              </Link>
            </Button>
          </CardFooter>
        </Card>
      </section>
    </section>
  );
}
