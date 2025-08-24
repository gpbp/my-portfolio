import {
  Navbar as HeroUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarItem,
  NavbarMenuItem,
} from "@heroui/navbar";
import { Button } from "@heroui/button";
import { Link } from "@heroui/link";

import { siteConfig } from "@/config/site";
import { ThemeSwitch } from "@/components/theme-switch";
import {
  TwitterIcon,
  GithubIcon,
  DiscordIcon,
} from "@/components/icons";

export const Navbar = () => {
  return (
    <div className="flex justify-center w-full">
      <HeroUINavbar
      position="sticky"
      className="rounded-full h-12 bg-white my-4 mx-100 shadow-lg"
      >
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <ul className="flex flex-row gap-x-4 p-2 justify-center">
        <li>
          <Button radius="full" className="font-appleFont text-sm">
          About me
          </Button>
        </li>
        <li>
          <Button radius="full" className="font-appleFont  text-sm">
          My Experiences
          </Button>
        </li>
        <li>
          <Button radius="full" className="font-appleFont text-sm">
          My Projects
          </Button>
        </li>
        <li>
          <Button radius="full" className="font-appleFont text-sm">
          Contact me
          </Button>
        </li>
        </ul>
      </NavbarContent>
      <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
        <Link isExternal aria-label="Github" href={siteConfig.links.github}>
        <GithubIcon className="text-default-500" />
        </Link>
        <ThemeSwitch />
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarMenu>
        <div className="mx-4 mt-2 flex flex-col gap-2">
        {siteConfig.navMenuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
          <Link
            color={
            index === 2
              ? "primary"
              : index === siteConfig.navMenuItems.length - 1
              ? "danger"
              : "foreground"
            }
            href="#"
            size="lg"
          >
            {item.label}
          </Link>
          </NavbarMenuItem>
        ))}
        </div>
      </NavbarMenu>
      </HeroUINavbar>
    </div>
  );
};