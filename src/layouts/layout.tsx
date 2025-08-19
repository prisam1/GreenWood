import Sidebar from "@/components/SideBar";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="min-h-screen bg-gradient-to-tr from-slate-100 via-slate-50 to bg-slate-50">
      <div className="max-w-full px-4 md:px-6 lg:px-0 grid grid-cols-1 md:grid-cols-[300px_1fr] py-0">
        {/* Sidebar */}
        <Sidebar />

        {/* Main content changes here */}
        <main className="flex-1 py-8 px-8">
          <Outlet />
        </main>
      </div>
 
    </div>
  );
}
