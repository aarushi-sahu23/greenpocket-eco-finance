
import { MainNav } from "./main-nav";
import { Outlet } from "react-router-dom";

export function Layout() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <MainNav />
      <main className="flex-1">
        <Outlet />
      </main>
    </div>
  );
}
