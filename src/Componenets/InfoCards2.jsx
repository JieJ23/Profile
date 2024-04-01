import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

export default function SimpleCard2() {
  return (
    <section className="p-2 max-w-[1400px] mx-auto flex flex-col lg:flex-row gap-4">
      <Card className="bg-[#28282b] basis-1/4">
        <CardBody>
          <Typography variant="h5" color="white" className="mb-2">
            UI/UX Review Check
          </Typography>
          <Typography color="white" className="opacity-60">
            The place is close to Barceloneta Beach and bus stop just 2 min by
            walk and near to &quot;Naviglio&quot; where you can enjoy the main
            night life in Barcelona.
          </Typography>
        </CardBody>
        <CardFooter className="pt-0">
          <Button>Read More</Button>
        </CardFooter>
      </Card>

      <Card className="bg-[#28282b] basis-1/2">
        <CardBody>
          <Typography variant="h5" color="white" className="mb-2">
            {"Education"}
          </Typography>
          <Typography color="white" className="opacity-60">
            The place is close to Barceloneta Beach and bus stop just 2 min by
            walk and near to &quot;Naviglio&quot; where you can enjoy the main
            night life in Barcelona.
          </Typography>
        </CardBody>
        <CardFooter className="pt-0">
          <Button>Read More</Button>
        </CardFooter>
      </Card>

      <Card className="bg-[#28282b] basis-1/4">
        <CardBody>
          <Typography variant="h5" color="white" className="mb-2">
            {"Let's Work Together..!"}
          </Typography>
          <Typography color="white" className="opacity-60">
            The place is close to Barceloneta Beach and bus stop just 2 min by
            walk and near to &quot;Naviglio&quot; where you can enjoy the main
            night life in Barcelona.
          </Typography>
        </CardBody>
        <CardFooter className="pt-0">
          <Button>Read More</Button>
        </CardFooter>
      </Card>
    </section>
  );
}
