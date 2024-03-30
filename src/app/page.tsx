import Main from "@/components/Main";
import Header from "@/components/Header";


export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center gap-10 bg-slate-100">
      <Header />
      <Main />
    </div>
  );
}
