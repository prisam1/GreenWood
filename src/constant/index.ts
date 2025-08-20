import {  
    Users,
    Settings,  
    Home,
    BarChart,
    Trophy
} from "lucide-react";

export const IMAGES = {

   avg:require("../assets/avg.png"),
   react :require("../assets/blueCup.png"),
   classes:require("../assets/classes.png"),
   logo:require("../assets/logo.png"),
   students:require("../assets/students.png"),
   trophy:require("../assets/trophy.png"),
   goldCup:require("../assets/goldCup.png"),
   goldCup_outline:require("../assets/goldCup_outline.png"),

   user:require("../assets/user.jpg"),
}
export const STATS = [
    {
      title: "TOTAL STUDENTS",
      value: 245,
      data: "+12%",
      change: "from last month",
      icon: IMAGES.students
    },
    {
      title: "TOTAL CLASSES",
      value: 8,
      data: "+8%",
      change: "from last month",
      icon: IMAGES.classes
    },
    {
      title: "AVG. PERFORMANCE",
      value: "86.2%",
      data: "+5%",
      change: "from last month",
      icon: IMAGES.avg
    },
    {
      title: "TOP PERFORMER",
      value: "830 pts",
      data: "Ahan K.",
      change: "Class 8",
      icon: IMAGES.goldCup
    },
  ];

  export const ANALYTICS = [
    {
      title: "Total Learning Hour",
      value: 2847,
      data: "+12% from last month", 
    },
    {
      title: "Lessons Completed",
      value: 1892,
      data: "+18% from last month", 
    },
    {
      title: "Average Session Time",
      value: "24 min",
      data: "+8% from last month",  
    },
    {
      title: "Active Students",
      value: 1156,
      data: "+5% from last month.",    
    },
  ];

  export const MENU = [
    { label: "Dashboard", icon: Home, path: "/" },
    { label: "Leaderboard", icon: Trophy, path: "/leaderboard" },
    { label: "Students", icon: Users, path: "/students" },
    { label: "Analytics", icon: BarChart, path: "/analytics" },
    { label: "Settings", icon: Settings, path: "/settings" },
  ];

  export const CLASSES = [
    "All",
    "Class 1",
    "Class 2",
    "Class 3",
    "Class 4",
    "Class 5",
    "Class 6",
    "Class 7",
    "Class 8",
  ]

  export const FILTER =[
    "Alphabetical",
    "Marks",
    "Points",
    "Lessons",
    "Streak"
]

export const MONTHS =[
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sept",
  "Nov",
  "Dec",
]