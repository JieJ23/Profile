import { Typography, Avatar } from "@material-tailwind/react";

const linksObject = [
  {
    link_name: `About`,
    link: `#`,
  },
  {
    link_name: `Contribute`,
    link: `#`,
  },
  {
    link_name: `Contact`,
    link: `#`,
  },
];

export default function Footer() {
  return (
    <footer className="flex w-full flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 py-10 text-center md:justify-between px-24 mt-4 lg:mt-12">
      <div className="flex gap-2 place-items-center">
        <Avatar src="react.gif" size="xs" />
        <Typography
          as="a"
          href="#"
          variant="h6"
          color="white"
          className="mr-4 cursor-pointer py-1.5 font-customFont font-normal"
        >
          CapriceYuri 2024
        </Typography>
      </div>
      <ul className="flex flex-wrap items-center gap-y-2 gap-x-4">
        {linksObject.map((obj, index) => (
          <li key={index}>
            <Typography
              as="a"
              href="#"
              color="white"
              variant="small"
              className="font-customFont transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              {obj.link_name}
            </Typography>
          </li>
        ))}
      </ul>
    </footer>
  );
}
