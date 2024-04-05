import {
  Card,
  CardBody,
  Typography,
  Tooltip,
  Avatar,
} from "@material-tailwind/react";
import { RocketLaunchIcon, SparklesIcon } from "@heroicons/react/24/outline";

const allProgramLang = [
  `html`,
  `css`,
  `sass`,
  `bootstrap`,
  `tailwind`,
  `js`,
  `typescript`,
  `react`,
  `git`,
  `github`,
  `vercel`,
  `nextjs`,
];

export default function SimpleCard() {
  return (
    <section className="p-2 my-10 max-w-[1400px] mx-auto flex flex-col lg:flex-row gap-4">
      <section className="flex gap-4 flex-1">
        <Card className="bg-[#28282b] dark:bg-[peachpuff] opacity-80 shadow-[0_0_10px_black]">
          <CardBody>
            <div className="flex justify-between mb-2 ">
              <Typography
                variant="h6"
                color="white"
                className="mb-2 dark:text-black font-customFont"
              >
                {`Venturing into Web Development`}
              </Typography>
              <RocketLaunchIcon className="h-8 w-8 text-blue-500" />
            </div>

            <Typography
              color="white"
              variant="small"
              className="dark:text-black font-customFont"
            >
              I am an self-taught web developer who finds joy in crafting
              websites for various communities as a hobby. I take pleasure in
              garnering feedback from users, refining websites to meet their
              needs and aesthetic preferences. Throughout this process, I
              continuously sharpen my skills and eagerly embrace new
              technologies.
            </Typography>
          </CardBody>
        </Card>
      </section>

      <Card className="bg-[#28282b] dark:bg-[peachpuff] opacity-80 shadow-[0_0_10px_black] flex-1">
        <CardBody>
          <div className="flex justify-between mb-2 ">
            <Typography
              variant="h6"
              color="white"
              className="mb-2 dark:text-black font-customFont"
            >
              Tech Toolbox: My Programming Languages
            </Typography>
            <SparklesIcon className="h-8 w-8 text-blue-500" />
          </div>
          <div className="grid grid-cols-4 gap-4 place-items-center">
            {allProgramLang.map((item, index) => (
              <Tooltip content={item} className="uppercase" key={index}>
                <div className="relative w-full">
                  <Avatar
                    src={`programs/${item}.png`}
                    size="sm"
                    alt={`Programming Language: ${item}`}
                    variant="rounded"
                  />
                  {item === `nextjs` && (
                    <Avatar
                      src={`programs/lightning.gif`}
                      size="sm"
                      className="absolute top-0 left-0 -p-3"
                    />
                  )}
                </div>
              </Tooltip>
            ))}
          </div>
        </CardBody>
      </Card>
    </section>
  );
}
