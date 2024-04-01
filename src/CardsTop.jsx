import { Card, CardBody, Typography, Avatar } from "@material-tailwind/react";

export default function CardTest() {
  return (
    <section className="px-14 pt-28 max-w-[1200px] mx-auto">
      <Card className="w-full bg-transparent" shadow={false}>
        <CardBody className="flex flex-col md:flex-row gap-8 mx-auto">
          <div className="h-full w-full">
            <img
              src="placeholder.png"
              alt="Profile"
              className="rounded-xl mx-auto object-cover max-w-[300px]"
            />
          </div>
          <div className="flex flex-col justify-center text-center">
            <Typography variant="h4" color="white" className="mb-2">
              Hello, I'm CapriceYuri.
            </Typography>
            <Typography color="white" className="font-light opacity-60">
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
