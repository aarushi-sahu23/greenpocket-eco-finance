
import { MainNav } from "./main-nav";
import { Outlet } from "react-router-dom";

export function Layout() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-black to-[#0b1320] text-white">
      <MainNav />
      <main className="flex-1 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-primary/5 rounded-full blur-[150px]" />
          <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-primary/5 rounded-full blur-[150px]" />
        </div>
        <Outlet />
      </main>
    </div>
  );
}
