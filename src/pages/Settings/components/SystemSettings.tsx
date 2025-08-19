import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
    CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function SystemSettings() {
    return (
        <Card className="w-full shadow-[0_0_20px] shadow-gray-400/30 ">
            <CardHeader>
                <CardTitle className="font-bold">System Settings</CardTitle>
                <CardDescription>
                    Configure system preferences and default options
                </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
                <div className="space-y-2">
                    <Label className="font-normal mt-4">Default Language</Label>
                    <Select defaultValue="english">
                        <SelectTrigger className="border-2 w-full">
                            <SelectValue
                                placeholder="Select Language"
                            />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="english">English</SelectItem>
                            <SelectItem value="spanish">Spanish</SelectItem>
                            <SelectItem value="french">French</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
                <div className="space-y-2">
                    <Label className="font-normal">Time Zone</Label>
                    <Select defaultValue="utc-5">
                        <SelectTrigger className="border-2 w-full">
                            <SelectValue placeholder="Select Time Zone" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="utc-5">UTC-5 (Eastern Time)</SelectItem>
                            <SelectItem value="utc+1">UTC+1 (Central Europe)</SelectItem>
                            <SelectItem value="utc+9">UTC+9 (Japan)</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
                <Button
                    variant={"default"}
                    className=""
                >
                    Save Settings
                </Button>
            </CardContent>
        </Card>

    );
}
