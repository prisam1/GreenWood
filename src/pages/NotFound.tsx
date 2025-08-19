import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

export default function NotFound() {
    return (
        <Card className="flex flex-col items-center justify-center h-screen text-center p-0 shadow-none bg-gray-50">
            <CardContent className="shadow-[0_0_20px] shadow-gray-500/30 py-10 px-20 rounded-xl">
                <CardTitle className="text-7xl font-bold text-blue-600 mb-4">404</CardTitle>
                <CardDescription className="text-lg text-gray-600 mb-6">Oops! Page not found.</CardDescription>
                <Link
                    to="/"
                    className="px-6 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition"
                >
                    Go Home
                </Link>
            </CardContent>
        </Card>
    );
}
