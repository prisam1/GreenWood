import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { IMAGES, MENU } from "@/constant";
import { Link, NavLink, useLocation } from "react-router-dom";
import { useState } from "react";
import { LogOut, Menu, X } from "lucide-react";

export default function Sidebar() {

  const [isOpen, setIsOpen] = useState(false);

  const location = useLocation();

  return (
    <>
      {/* Mobile top bar */}
      <Card className="md:hidden flex items-center flex-row justify-between md:px-5 px-4 py-3 border-b shadow-md bg-white">
        <Link
          to="/"
          className="flex items-center lg:gap-8 gap-2">
          <img
            src={IMAGES.logo}
            alt="logo"
            className="w-10 h-10 rounded-lg object-cover"
          />
          <p className="text-lg font-bold text-blue-500">SpeakGenie</p>
        </Link>

        {/* Menu button */}
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
        </Button>
      </Card>

      {/* Sidebar */}
      <Card
        className={`
          fixed inset-y-0 left-0 z-40 w-70 transform p-0 bg-white shadow-lg
          transition-transform duration-300 ease-in-out
          md:static md:translate-x-0 md:min-h-screen md:rounded-none
          ${isOpen ? "translate-x-0 p-0 rounded-none" : "-translate-x-full"}
        `}
      >
        {/* Logo */}
        <Link
          to="/"
          className="flex gap-2 md:p-5 p-2 pl-4 border-b">
          <img
            src={IMAGES.logo}
            alt="logo"
            className="w-12 h-12 rounded-xl object-cover"
          />
          <div className="leading-tight">
            <p className="text-2xl font-bold text-blue-500">SpeakGenie</p>
            <p className="text-xs text-muted-foreground">Admin Panel</p>
          </div>
        </Link>

        {/* Menu */}
        <div className="flex flex-col justify-between h-full">
          <nav className="flex flex-col gap-1 pt-1 px-5">
            {MENU.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <NavLink key={item.label} to={item.path}>
                  <Button
                    onClick={() => setIsOpen(false)}
                    variant={isActive ? "default" : "custom"}
                    className="justify-start gap-2 py-4 px-5 w-full"
                  >
                    <item.icon className="h-4 w-4" />
                    <span className="truncate">{item.label}</span>
                  </Button>
                </NavLink>
              );
            })}
          </nav>

          {/* Footer user info */}
          <CardContent className="flex items-center justify-between gap-2 p-5 border-t">
            <div className="flex flex-row gap-4 items-center">
              <div className="h-10 w-10 rounded-xl bg-blue-600 grid place-items-center text-white font-semibold">
                S
              </div>
              <div className="leading-tight truncate">
                <p className="font-semibold text-sm">School Admin</p>
                <p className="text-xs text-muted-foreground">School Admin</p>
                <p className="text-xs text-blue-500 truncate">
                  Greenwood Elementary
                </p>
              </div>
            </div>
            <LogOut
              color="gray"
            />

          </CardContent>
        </div>
      </Card>

      {/* Backdrop for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-30 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
}
