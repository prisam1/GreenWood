import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { classWiseData } from "@/mockData/charts";

export default function ClassWiseChart() {
  return (
    <Card className="shadow-[0_0_20px] shadow-gray-400/20">
      <CardHeader>
        <CardTitle className="md:text-xl text-sm font-semibold text-blue-500">Class‑wise Student Enrollment</CardTitle>
        <CardDescription className="md:text-sm text-xs">Student distribution across different grades</CardDescription>
      </CardHeader>
      <CardContent className="h-64 mt-10">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart 
          data={classWiseData}
          margin={{ top: 0, right: 4, bottom: 28, left: -28 }}
          barGap={8}
          >
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