import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import {
  CheckBadgeIcon,
  WrenchScrewdriverIcon,
  SparklesIcon,
} from "@heroicons/react/24/outline";

export default function SimpleCard() {
  return (
    <section className="p-2 my-2 max-w-[1400px] mx-auto flex flex-col lg:flex-row gap-4">
      <section className="flex gap-4 flex-1">
        <Card className="bg-[#28282b] basis-1/2">
          <CardBody>
            <div className="flex justify-between mb-2">
              <Typography variant="h5" color="white" className="mb-2">
                {"My Experience"}
              </Typography>
              <CheckBadgeIcon className="h-8 w-8 text-blue-500" />
            </div>
            <Typography color="white" className="opacity-60">
              The place is close to Barceloneta Beach and bus stop just 2 min by
              walk and near to &quot;Naviglio&quot; where you can enjoy the main
              night life in Barcelona.
            </Typography>
          </CardBody>
        </Card>

        <Card className="bg-[#28282b] basis-1/2">
          <CardBody>
            <div className="flex justify-between mb-2">
              <Typography variant="h5" color="white" className="mb-2">
                {`What I do`}
              </Typography>
              <WrenchScrewdriverIcon className="h-8 w-8 text-blue-500" />
            </div>

            <Typography color="white" className="opacity-60">
              The place is close to Barceloneta Beach and bus stop just 2 min by
              walk and near to &quot;Naviglio&quot; where you can enjoy the main
              night life in Barcelona.
            </Typography>
          </CardBody>
        </Card>
      </section>

      <Card className="bg-[#28282b] flex-1">
        <CardBody>
          <div className="flex justify-between mb-2">
            <Typography variant="h5" color="white" className="mb-2">
              UI/UX Review Check
            </Typography>
            <SparklesIcon className="h-8 w-8 text-blue-500" />
          </div>
          <Typography color="white" className="opacity-60">
            The place is close to Barceloneta Beach and bus stop just 2 min by
            walk and near to &quot;Naviglio&quot; where you can enjoy the main
            night life in Barcelona.
          </Typography>
        </CardBody>
      </Card>
    </section>
  );
}
