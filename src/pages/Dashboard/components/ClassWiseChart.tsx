import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { classWiseData } from "@/mockData/charts";

export default function ClassWiseChart() {
  return (
    <Card className="shadow-[0_0_20px] shadow-gray-400/20">
      <CardHeader>
        <CardTitle className="text-xl font-semibold text-blue-500">Class‑wise Student Enrollment</CardTitle>
        <CardDescription>Student distribution across different grades</CardDescription>
      </CardHeader>
      <CardContent className="h-64 mt-10">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={classWiseData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="cls" tick={{ fontSize: 12 }} />
            <YAxis tick={{ fontSize: 12 }} />
            <Tooltip />
            <Bar dataKey="students" radius={[6, 6, 0, 0]} fill="#3b82f6" />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}