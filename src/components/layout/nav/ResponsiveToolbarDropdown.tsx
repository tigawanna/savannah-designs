// import { ThemeToggle } from "@/components/themes/ThemeToggle";
import Link from "next/link";
import { CircleEllipsis } from "lucide-react";
import { routes } from "./routes";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function ResponsiveToolbarDropdown() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <CircleEllipsis className="size-7" />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="min-w-fit w-fit px-2">
        <DropdownMenuLabel>Links</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {routes.map((route) => (
          <DropdownMenuItem key={route.name}>
            <Link className="w-full flex  gap-2" href={route.href}>
              {route.icon}
              {route.name}
            </Link>
          </DropdownMenuItem>
        ))}
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild>{/* <ThemeToggle /> */}</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="p-3">{/* <MainNavbarUser /> */}</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
