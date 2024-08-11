import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useRouter } from "next/navigation";

interface MobileSidebarProps {}

export const MobileSidebar = ({}: MobileSidebarProps) => {
  const router = useRouter();
  return (
    <Sheet>
      <SheetTrigger className="md:hidden pr-4 hover:opacity-75 transition">
        <Menu />
      </SheetTrigger>
      <SheetContent side="left" className="main-gradient text-white p-0">
        <div className="flex flex-col text-lg mt-14">
          <SheetTrigger>
            <button
              onClick={() => router.push("/")}
              className="w-full py-4 border-b border-t border-white hover:bg-white hover:text-black transition"
            >
              Home
            </button>
          </SheetTrigger>
          <SheetTrigger>
            <button onClick={() => router.push("/addtodo")} className="w-full py-4 border-b border-white hover:bg-white hover:text-black transition">
              Add Task
            </button>
          </SheetTrigger>
        </div>
      </SheetContent> 
    </Sheet>
  );
};
