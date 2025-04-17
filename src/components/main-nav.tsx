
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { LayoutDashboard, CreditCard, Trophy, Settings } from "lucide-react";

const mainNavItems = [
  {
    title: "Dashboard",
    href: "/",
    icon: LayoutDashboard,
  },
  {
    title: "Transactions",
    href: "/transactions",
    icon: CreditCard,
  },
  {
    title: "Rewards",
    href: "/rewards",
    icon: Trophy,
  },
  {
    title: "Settings",
    href: "/settings",
    icon: Settings,
  },
];

export function MainNav() {
  const { pathname } = useLocation();

  return (
    <nav className="flex justify-between items-center w-full bg-card border-b sticky top-0 z-10 px-4 py-2 md:px-6">
      <Link to="/" className="flex items-center gap-2">
        <div className="bg-gradient-to-br from-green-500 to-green-700 w-8 h-8 rounded-lg flex items-center justify-center">
          <span className="text-white font-bold text-lg">G</span>
        </div>
        <span className="font-bold text-lg text-primary hidden md:block">GreenPocket</span>
      </Link>
      <div className="flex items-center gap-0.5 sm:gap-1">
        {mainNavItems.map((item) => {
          const isActive = pathname === item.href;
          const Icon = item.icon;
          
          return (
            <Link
              key={item.href}
              to={item.href}
              className={cn(
                "flex flex-col items-center justify-center px-2 py-1.5 text-sm rounded-md transition-colors",
                isActive
                  ? "text-primary bg-primary/10"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted"
              )}
            >
              <Icon size={18} />
              <span className="text-xs mt-1">{item.title}</span>
            </Link>
          );
        })}
      </div>
      <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center">
        <span className="text-sm font-medium">UP</span>
      </div>
    </nav>
  );
}
