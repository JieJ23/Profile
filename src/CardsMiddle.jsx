import {
  Card,
  CardBody,
  Typography,
  Avatar,
  List,
  ListItem,
  ListItemPrefix,
} from "@material-tailwind/react";

export default function CardMiddle() {
  return (
    <section className="px-14 py-10 flex flex-col md:flex-row gap-8 max-w-[1200px] mx-auto">
      <Card className="w-full bg-[#343434] flex-1">
        <List>
          <ListItem>
            <ListItemPrefix>
              <Avatar
                variant="circular"
                alt="candice"
                src="https://docs.material-tailwind.com/img/face-1.jpg"
              />
            </ListItemPrefix>
            <div>
              <Typography variant="h6" color="white">
                Tania Andrew
              </Typography>
              <Typography variant="small" color="white" className="font-normal">
                Software Engineer @ Material Tailwind
              </Typography>
            </div>
          </ListItem>
          <ListItem>
            <ListItemPrefix>
              <Avatar
                variant="circular"
                alt="alexander"
                src="https://docs.material-tailwind.com/img/face-2.jpg"
              />
            </ListItemPrefix>
            <div>
              <Typography variant="h6" color="white">
                Alexander
              </Typography>
              <Typography variant="small" color="white" className="font-normal">
                Backend Developer @ Material Tailwind
              </Typography>
            </div>
          </ListItem>
          <ListItem>
            <ListItemPrefix>
              <Avatar
                variant="circular"
                alt="emma"
                src="https://docs.material-tailwind.com/img/face-3.jpg"
              />
            </ListItemPrefix>
            <div>
              <Typography variant="h6" color="white">
                Emma Willever
              </Typography>
              <Typography variant="small" color="white" className="font-normal">
                UI/UX Designer @ Material Tailwind
              </Typography>
            </div>
          </ListItem>
        </List>
      </Card>

      <Card className="bg-[#343434] flex-1">
        <CardBody className="flex flex-col justify-between gap-8 h-full p-10">
          <div className="flex justify-between">
            <div>
              <div>
                <Typography variant="h3" color="white">
                  07+
                </Typography>
                <Typography color="white" className="text-[10px]">
                  YEARS OF EXPERIENCE
                </Typography>
              </div>
            </div>
            <div>
              <Typography variant="h3" color="white">
                +125
              </Typography>
              <Typography color="white" className="text-[10px]">
                TOTAL PROJECTS
              </Typography>
            </div>
          </div>
          <div className="flex justify-between">
            <div>
              <div>
                <Typography variant="h3" color="white">
                  09
                </Typography>
                <Typography color="white" className="text-[10px]">
                  RECOGNITIONS
                </Typography>
              </div>
            </div>
            <div>
              <Typography variant="h3" color="white">
                00
              </Typography>
              <Typography color="white" className="text-[10px]">
                UNHAPPY CILENTS
              </Typography>
            </div>
          </div>
        </CardBody>
      </Card>
    </section>
  );
}
