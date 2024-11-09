"use client";
import Link from "next/link";
import { ADMIN_NAV_LINKS, STUDENT_NAV_LINKS } from "@/constants";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { LogoutButton } from "./auth/logout-button";
import { CurrentUser } from "@/utils/getCurrentUser";
import Image from "next/image";

export function ProfileDropdown({ user }: { user: CurrentUser }) {
  const navLinks = user.is_staff ? ADMIN_NAV_LINKS : STUDENT_NAV_LINKS;

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <Avatar>
            {/* <AvatarImage src={"/next.svg"} /> */}
            <AvatarFallback className="bg-customGreen text-white border border-customGold">
              {/* {user.current_cropped_avatar ?
                <Image className="w-full rounded-full" fill={true} src={user.current_cropped_avatar} alt="User Avatar" />
                :
                user.username[0].toUpperCase()
                } */}
              {/* {user.username[0].toUpperCase()} */}
              AC
            </AvatarFallback>
          </Avatar>
        </DropdownMenuTrigger>

        <DropdownMenuContent className="z-[100] space-y-2">
          <LogoutButton />
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
}
