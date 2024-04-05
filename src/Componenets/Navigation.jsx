import React from "react";
import { Link } from "react-router-dom";
import {
  Navbar,
  Collapse,
  Typography,
  IconButton,
  Avatar,
  Switch,
} from "@material-tailwind/react";
import {
  Bars4Icon,
  XMarkIcon,
  DocumentIcon,
  ChatBubbleOvalLeftIcon,
  SunIcon,
} from "@heroicons/react/24/outline";

const linksObjects = [
  {
    id: 1,
    sub: `Projects`,
    link: `/Projects`,
  },
  {
    id: 2,
    sub: `Contact`,
    link: `/Projects`,
  },
];

function NavList() {
  return (
    <ul className="my-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center gap-y-4 lg:gap-6">
      {linksObjects.map((obj, index) => (
        <div className="flex" key={index}>
          {obj.sub === `Projects` && (
            <DocumentIcon className="h-6 w-6 text-[cyan] dark:text-[darkorange]" />
          )}
          {obj.sub === `Contact` && (
            <ChatBubbleOvalLeftIcon className="h-6 w-6 text-[cyan] dark:text-[darkorange]" />
          )}
          <Typography
            as="li"
            variant="small"
            color="white"
            className="p-1 font-customFont dark:text-black"
          >
            <Link
              to={obj.link}
              className="flex items-center hover:text-cyan-500 transition-colors"
            >
              {obj.sub}
            </Link>
          </Typography>
        </div>
      ))}
    </ul>
  );
}

export default function FloatingNav({ toggleDarkMode, isDark }) {
  const [openNav, setOpenNav] = React.useState(false);

  const handleWindowResize = () =>
    window.innerWidth >= 1200 && setOpenNav(false);

  React.useEffect(() => {
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <section className="px-6 pt-8 max-w-[1400px] mx-auto z-20">
      <Navbar className="mx-auto w-full px-6 py-3 bg-[#28282b] dark:bg-[peachpuff] border-none shadow-[0_0_10px_white] dark:shadow-[0_0_10px_black]">
        <div className="flex items-center justify-between text-blue-gray-900">
          <div className="flex gap-2 place-items-center">
            <Avatar src="react.gif" />
            <Typography
              as="a"
              href="/"
              variant="h5"
              color="white"
              className="mr-4 cursor-pointer py-1.5 font-customFont dark:text-black"
            >
              CapriceYuri
            </Typography>
          </div>
          <div className="flex gap-4">
            <Switch
              label={
                <SunIcon className="h-6 w-6 text-[yellow] dark:text-[black]" />
              }
              onClick={toggleDarkMode}
              defaultChecked={isDark}
            />
            <div className="hidden lg:block">
              <NavList />
            </div>
            <IconButton
              variant="text"
              className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
              ripple={false}
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <XMarkIcon className="h-6 w-6 text-[white]" strokeWidth={2} />
              ) : (
                <Bars4Icon className="h-6 w-6 text-[white]" strokeWidth={2} />
              )}
            </IconButton>
          </div>
        </div>
        <Collapse open={openNav}>
          <NavList />
        </Collapse>
      </Navbar>
    </section>
  );
}
