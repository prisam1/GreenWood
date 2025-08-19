export interface Champion {
    name: string;
    pts: number;
    accuracy: number;
    streak: number;
  }
  
  export interface Leaderboard {
    rank: number;
    name: string;
    class: string;
    points: number;
    accuracy: string;
    streak: string;
    lessons: number;
    profileImg: string;
    badge?: string;
    icon?: string;
    fire?: number;
  }
  
  export interface Highlight {
    label: string;
    value: string;
    icon: string;
  }
  
  export interface ClassWise {
    cls: string;
    students: number;
  }
  
  export interface PieData {
    name: string;
    value: number;
  }
  
  export interface Student {
    rank: number;
    name: string;
    class: string;
    points: number;
    accuracy: string;
    streak: string;
    lessons: number;
    profileImg: string;
    badge?: string;
  }
  