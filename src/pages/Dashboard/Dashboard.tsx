import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";
import StatsRow from "@/pages/Dashboard/components/StatsRow";
import ClassWiseChart from "@/pages/Dashboard/components/ClassWiseChart";
import PerformanceChart from "@/components/PerformanceChart";
import TopChampions from "@/pages/Dashboard/components/TopChampions";
import StudentsTable from "@/pages/Dashboard/components/StudentsTable";
import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card";
import { ALL_STUDENTS } from "@/mockData/students";
import { CLASSES } from "@/constant";

export default function Dashboard() {
  const [query, setQuery] = useState("");

  return (
    <div className="pt-2">

      {/* Header */}
      <div className="flex flex-col md:items-center gap-0 sm:flex-row sm:items-end sm:justify-between mb-0">
        <Card className="p-0 border-none rounder-none gap-2 bg-inherit shadow-none">
          <CardTitle className="text-xl sm:text-2xl md:text-4xl p-0 font-bold text-blue-500">
            Greenwood Elementary School
          </CardTitle>
          <CardDescription className="text-md text-muted-foreground mt-0 p-0">
            Welcome back, School Admin! Here's your school's overview.
          </CardDescription>
        </Card>
        <Badge variant="outline" className="rounded-md p-2 px-4 text-gray-500">
          CBSE Board • Last updated: 12/08/2025, 15:46:57
        </Badge>
      </div>

      {/* Status */}
      <StatsRow />

      {/* Charts */}
      <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ClassWiseChart />
        <PerformanceChart
          title={"Performance Distribution"}
          student={"true"}
        />
      </div>

      {/* Top Champions */}
      <TopChampions />

      <Card className="mt-6 px-6 shadow-[0_0_20px] shadow-gray-400/30">
        <CardContent className="flex items-center justify-between mb-3">
          <div>
            <CardTitle className="font-semibold text-blue-500">All Students</CardTitle>
            <CardDescription className="mt-2">
              Complete student directory with performance details
            </CardDescription>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-56">
              <Input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search students…"
                className="pl-8 border-2 rounded-lg"
              />
            </div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  className="gap-2 rounded-lg border-2 ">
                  All Classes
                  <ChevronDown
                    className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                {CLASSES.map((c) => (
                  <DropdownMenuItem key={c}>{c}</DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </CardContent>

        {/* Leaderboard */}
        <StudentsTable students={ALL_STUDENTS} />

        <div className="mt-4 flex justify-center">
          <Button
            variant="outline"
            className="border-2 px-8 py-5 text-sm"
          >
            Load More Students (253 remaining)
          </Button>
        </div>
      </Card>
    </div>
  );
}
