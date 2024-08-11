import TodoForm from "@/components/TodoForm";
import { TodosPage } from "@/components/Todos";
import { auth } from "@clerk/nextjs/server";

export default function Home() {
  const { userId } = auth();
  return (
    <div className="flex items-center justify-center gap-2 text-sm md:text-lg">
      <TodosPage userId={userId!}/>
    </div>
  );
}
