import {
  Card,
  CardHeader,
  CardContent,
  CardTitle,
} from "@/components/ui/card";

export const StatsCard = ({ title, value, data, change, name, icon }: any) => {
  return (
    <Card className="shadow-[0_0_20px] shadow-gray-400/30 lg:p-6 p-4">
      <CardContent className="p-0">
        <CardHeader className="flex flex-row items-center justify-between p-0">
          <CardTitle className="md:text-sm text-xs font-medium text-muted-foreground">{title}</CardTitle>
        </CardHeader>
        <div className="flex justify-between">
          <div>
            <div className="md:text-3xl text-lg font-bold">{value}</div>
            <span className="flex gap-2 md:text-base text-xs text-[#22c55e] font-semibold mt-1">
              {data}
              <p className="md:text-xs text-[10px] md:mt-1 text-muted-foreground">{change}</p>
            </span>
          </div>
          <img
            src={icon}
            alt={name}
            className="md:w-12 md:h-12 w-10 h-10 rounded-xl object-cover"
          />
        </div>
      </CardContent>
    </Card>
  );
}
