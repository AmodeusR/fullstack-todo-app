import Todo from "@/components/Todo";
import Header from "@/components/header";


export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center gap-10 bg-slate-100">
      <Header />
      <Todo />
    </div>
  );
}
