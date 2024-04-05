import { Card, CardBody, Typography } from "@material-tailwind/react";

import {
  Squares2X2Icon,
  StarIcon,
  ChatBubbleLeftRightIcon,
} from "@heroicons/react/24/outline";

export default function SimpleCard2() {
  return (
    <section className="p-2 max-w-[1400px] my-10 mx-auto flex flex-col lg:flex-row gap-4 justify-center">
      <Card className="bg-[#28282b] dark:bg-[peachpuff] opacity-80 dark:shadow-[0_0_10px_black] basis-1/3">
        <CardBody>
          <div className="flex justify-between mb-2">
            <Typography
              variant="h6"
              color="white"
              className="mb-2 mx-auto lg:mx-0 dark:text-black font-customFont"
            >
              UI/UX Review Check
            </Typography>
            <Squares2X2Icon className="h-8 w-8 text-blue-500" />
          </div>
          <Typography
            variant="small"
            color="white"
            className="dark:text-black font-customFont"
          >
            The place is close to Barceloneta Beach and bus stop just 2 min by
            walk and near to &quot;Naviglio&quot; where you can enjoy the main
            night life in Barcelona.
          </Typography>
        </CardBody>
      </Card>

      <Card className="bg-[#28282b] dark:bg-[peachpuff] opacity-80 dark:shadow-[0_0_10px_black] basis-1/4">
        <CardBody>
          <div className="flex justify-between mb-2">
            <Typography
              variant="h6"
              color="white"
              className="mb-2 mx-auto lg:mx-0 dark:text-black font-customFont"
            >
              {"Education"}
            </Typography>
            <StarIcon className="h-8 w-8 text-blue-500" />
          </div>
          <Typography
            variant="small"
            color="white"
            className="dark:text-black font-customFont"
          >
            The place is close to Barceloneta Beach and bus stop just 2 min by
            walk and near to &quot;Naviglio&quot; where you can enjoy the main
            night life in Barcelona.
          </Typography>
        </CardBody>
      </Card>

      <Card className="bg-[#28282b] dark:bg-[peachpuff] opacity-80 dark:shadow-[0_0_10px_black] basis-1/3">
        <CardBody>
          <div className="flex justify-between mb-2">
            <Typography
              variant="h6"
              color="white"
              className="mb-2 mx-auto lg:mx-0 dark:text-black font-customFont"
            >
              {"Let's Work Together..!"}
            </Typography>
            <ChatBubbleLeftRightIcon className="h-8 w-8 text-blue-500" />
          </div>
          <Typography
            variant="small"
            color="white"
            className="dark:text-black font-customFont"
          >
            Let's embark on this journey together, guiding and learning from
            each other every step of the way. Together, we'll explore new
            horizons, tackle challenges, and grow as a team. I'm excited to
            collaborate and elevate our skills together.
          </Typography>
        </CardBody>
      </Card>
    </section>
  );
}
