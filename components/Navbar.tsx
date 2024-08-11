"use client";

import { UserButton } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { MobileSidebar } from "./MobilSidebar";

const Navbar = () => {
  const router = useRouter();
  return (
    <nav
      className="flex flex-row justify-between navbar-gradient p-4 text-white text-lg sm:text-xl md:text-2xl font-medium border-b-[0.1px] border-gray-400
     shadow-sm items-center"
    >
      <ul className=" hidden md:flex flex-row gap-x-4 md:gap-x-8 cursor-pointer">
        <li>TaskMaster</li>
        <li onClick={() => router.push("/")}>Home</li>
        <li onClick={() => router.push("/addtodo")}>Add Task</li>
      </ul>
      <div className="md:hidden block"><MobileSidebar/></div>
      <h1 className="md:hidden block">TaskMaster</h1>
      <UserButton />
    </nav>
  );
};

export default Navbar;
