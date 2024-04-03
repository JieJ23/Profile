import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
  Avatar,
  Tooltip,
  Chip,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { ProjectsInfo } from "../Data/ProjectsData";

export default function ProjectCards() {
  return (
    <section className="mt-14 max-w-[1400px] mx-auto flex px-6 md:px-14 gap-8 flex-wrap justify-center">
      {ProjectsInfo.map((obj) => (
        <Card className="shadow-[0_0_40px_black] flex flex-col md:flex-row basis-[80%] bg-[#28282b] pb-0">
          <CardHeader
            shadow={false}
            floated={false}
            className="m-0 w-full md:w-2/5 shrink-0 p-4 bg-[#28282b]"
          >
            <img
              src={`/Covers/${obj.img}.png`}
              alt="card-image"
              className="h-full w-full object-cover rounded-2xl"
            />
          </CardHeader>
          <CardBody className="w-full">
            <Typography variant="h6" color="white" className="mb-4 uppercase">
              {obj.type}
            </Typography>
            <Typography variant="h5" color="white" className="mb-2">
              {obj.title}
            </Typography>
            <Typography
              color="white"
              variant="small"
              className="mb-8 font-normal"
            >
              <ul className="list-disc">
                {obj.points.map((item) => (
                  <li>{item}</li>
                ))}
              </ul>
              <div className="flex items-center my-2">
                {obj.programs.map((item) => (
                  <Tooltip content={item}>
                    <Avatar
                      size="sm"
                      variant="rounded"
                      alt={item}
                      withBorder={true}
                      className="hover:z-10 focus:z-10 border-transparent p-0.5"
                      src={`/programs/${item}.png`}
                    />
                  </Tooltip>
                ))}
              </div>
            </Typography>
            <div className="w-full flex justify-center md:justify-start">
              <Link to={obj.link} target="_blank" className="w-full">
                <Button className="duration-500 ease-in bg-white text-black hover:bg-black hover:text-white">
                  {" "}
                  Project Redirect
                </Button>
              </Link>
              <Chip
                value={
                  obj.status === "inactive" ? (
                    <div className="flex gap-2">
                      <span class="relative flex h-3 w-3 z-10">
                        <span class="relative inline-flex rounded-full h-3 w-3 bg-red-500" />
                      </span>
                      {obj.status}
                    </div>
                  ) : obj.status === "pending" ? (
                    <div className="flex gap-2">
                      <span class="relative flex h-3 w-3 z-10">
                        <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-500 opacity-80" />
                        <span class="relative inline-flex rounded-full h-3 w-3 bg-yellow-500" />
                      </span>
                      {obj.status}
                    </div>
                  ) : (
                    <div className="flex gap-2">
                      <span class="relative flex h-3 w-3 z-10">
                        <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-80" />
                        <span class="relative inline-flex rounded-full h-3 w-3 bg-blue-500" />
                      </span>
                      {obj.status}
                    </div>
                  )
                }
                className="text-[10px]"
              />
            </div>
          </CardBody>
        </Card>
      ))}
    </section>
  );
}
