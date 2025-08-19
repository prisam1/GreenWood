import {
  Card,
  CardHeader,
  CardContent,
  CardTitle,
} from "@/components/ui/card";

export const StatsCard = ({ title, value, data, change, name, icon }: any) => {
  return (
    <Card className="shadow-[0_0_20px] shadow-gray-400/30 p-6">
      <CardContent className="p-0">
        <CardHeader className="flex flex-row items-center justify-between p-0">
          <CardTitle className="text-sm font-medium text-muted-foreground">{title}</CardTitle>
        </CardHeader>
        <div className="flex justify-between">
          <div>
            <div className="text-3xl font-bold">{value}</div>
            <span className="flex gap-2 text-[#22c55e] font-semibold mt-1">
              {data}
              <p className="text-xs text-muted-foreground mt-1">{change}</p>
            </span>
          </div>
          <img
            src={icon}
            alt={name}
            className="w-12 h-12 rounded-xl object-cover"
          />
        </div>
      </CardContent>
    </Card>
  );
}
