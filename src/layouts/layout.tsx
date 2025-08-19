import Sidebar from "@/components/SideBar";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="min-h-screen bg-gradient-to-tr from-slate-50 via-slate-0 to bg-slate-0">
      <div className="max-w-full px-0 md:px-6 lg:px-0 grid grid-cols-1 md:grid-cols-[300px_1fr] py-0">
        {/* Sidebar */}
        <Sidebar />

        {/* Main content changes here */}
        <main className="flex-1 lg:py-8 lg:px-8 px-4 py-4">
          <Outlet />
        </main>
      </div>

    </div>
  );
}
