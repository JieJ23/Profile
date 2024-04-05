import { Card, CardBody, Typography } from "@material-tailwind/react";

export default function CenterHeroes() {
  return (
    <section className="px-14 max-w-[1400px] mx-auto">
      <Card
        className="w-full bg-transparent relative border-2 border-[#28282b]"
        shadow={false}
      >
        <div className="absolute h-full w-full bg-[url('/snow.gif')] dark:bg-[url('/snow_black.gif')] rounded-xl" />

        <CardBody className="flex flex-col md:flex-row gap-8 mx-auto">
          <div className="flex flex-col justify-center text-center ">
            <Typography
              variant="h4"
              color="white"
              className="mb-2 font-customFont dark:text-black"
            >
              {`< CapriceYuri >`}
            </Typography>
            <Typography
              color="white"
              className="font-light font-customFont dark:text-black"
            >
              As a skilled Product designer, illustrator, and visual development
              expert, my diverse background has allowed me to apply my talents
              across different fields and industries, demonstrating adaptability
              and versatility,
            </Typography>
          </div>
        </CardBody>
      </Card>
    </section>
  );
}
