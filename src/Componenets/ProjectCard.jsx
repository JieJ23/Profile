import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";

export default function ProjectCards() {
  return (
    <section className="mt-14 max-w-[1400px] mx-auto flex flex-col xl:flex-row px-4 xl:px-0 gap-8 flex-wrap justify-center">
      <Card className="shadow-[0_0_40px_black] flex flex-row basis-2/5 bg-[#28282b]">
        <CardHeader
          shadow={false}
          floated={false}
          className="m-0 w-2/5 shrink-0 rounded-r-none"
        >
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
            alt="card-image"
            className="h-full w-full object-cover"
          />
        </CardHeader>
        <CardBody>
          <Typography variant="h6" color="white" className="mb-4 uppercase">
            startups
          </Typography>
          <Typography variant="h5" color="white" className="mb-2">
            Some title about the project
          </Typography>
          <Typography
            color="white"
            variant="small"
            className="mb-8 font-normal"
          >
            Like so many organizations these days, Autodesk is a company in
            transition. It was until recently a traditional boxed software
            company selling licenses. Yet its own business model disruption is
            only part of the story
          </Typography>
        </CardBody>
      </Card>
      <Card className="shadow-[0_0_40px_black] flex flex-row basis-2/5 bg-[#28282b]">
        <CardHeader
          shadow={false}
          floated={false}
          className="m-0 w-2/5 shrink-0 rounded-r-none"
        >
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
            alt="card-image"
            className="h-full w-full object-cover"
          />
        </CardHeader>
        <CardBody>
          <Typography variant="h6" color="white" className="mb-4 uppercase">
            startups
          </Typography>
          <Typography variant="h5" color="white" className="mb-2">
            Some title about the project
          </Typography>
          <Typography
            color="white"
            variant="small"
            className="mb-8 font-normal"
          >
            Like so many organizations these days, Autodesk is a company in
            transition. It was until recently a traditional boxed software
            company selling licenses. Yet its own business model disruption is
            only part of the story
          </Typography>
        </CardBody>
      </Card>
      <Card className="shadow-[0_0_40px_black] flex flex-row basis-2/5 bg-[#28282b]">
        <CardHeader
          shadow={false}
          floated={false}
          className="m-0 w-2/5 shrink-0 rounded-r-none"
        >
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
            alt="card-image"
            className="h-full w-full object-cover"
          />
        </CardHeader>
        <CardBody>
          <Typography variant="h6" color="white" className="mb-4 uppercase">
            startups
          </Typography>
          <Typography variant="h5" color="white" className="mb-2">
            Some title about the project
          </Typography>
          <Typography
            color="white"
            variant="small"
            className="mb-8 font-normal"
          >
            Like so many organizations these days, Autodesk is a company in
            transition. It was until recently a traditional boxed software
            company selling licenses. Yet its own business model disruption is
            only part of the story
          </Typography>
        </CardBody>
      </Card>
      <Card className="shadow-[0_0_40px_black] flex flex-row basis-2/5 bg-[#28282b]">
        <CardHeader
          shadow={false}
          floated={false}
          className="m-0 w-2/5 shrink-0 rounded-r-none"
        >
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
            alt="card-image"
            className="h-full w-full object-cover"
          />
        </CardHeader>
        <CardBody>
          <Typography variant="h6" color="white" className="mb-4 uppercase">
            startups
          </Typography>
          <Typography variant="h5" color="white" className="mb-2">
            Some title about the project
          </Typography>
          <Typography
            color="white"
            variant="small"
            className="mb-8 font-normal"
          >
            Like so many organizations these days, Autodesk is a company in
            transition. It was until recently a traditional boxed software
            company selling licenses. Yet its own business model disruption is
            only part of the story
          </Typography>
        </CardBody>
      </Card>
    </section>
  );
}
