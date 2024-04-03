import { Card, CardBody, Typography } from "@material-tailwind/react";

export default function Intro() {
  return (
    <section className="px-14 pt-8 max-w-[1400px] mx-auto">
      <Card className="w-full bg-transparent relative" shadow={false}>
        <div className="absolute h-full w-full bg-[url('/snow.gif')] rounded-xl" />

        <CardBody className="flex flex-col md:flex-row gap-8 mx-auto">
          <div className="h-full w-full text-center z-10">
            <img
              src="placeholder.png"
              alt="Profile"
              className="rounded-xl mx-auto object-cover max-w-[300px]"
            />
          </div>
          <div className="flex flex-col justify-center text-center ">
            <Typography
              variant="h4"
              color="white"
              className="mb-2 font-customFont"
            >
              Hello, I'm CapriceYuri.
            </Typography>
            <Typography
              color="white"
              className="font-light opacity-60 font-customFont"
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
