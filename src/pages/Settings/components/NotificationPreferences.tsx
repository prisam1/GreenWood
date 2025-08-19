import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
    CardDescription,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";

export default function NotificationPreferences() {
    return (

        <Card className="w-full">
            <CardHeader>
                <CardTitle className="font-bold">Notification Preferences</CardTitle>
                <CardDescription className="text-sm">
                    Manage how and when you receive notifications
                </CardDescription>
            </CardHeader>

            <CardContent className="space-y-3">
                <div className="flex justify-between mt-6">
                    <Label
                        htmlFor="email-notifs"
                        className="flex flex-col items-start cursor-pointer gap-0 p-0 font-normal"
                    >
                        <span className="text-sm font-medium text-slate-800">Email Notifications</span>
                        <CardDescription className="text-xs text-muted-foreground">
                            Receive updates via email
                        </CardDescription>
                    </Label>
                    <Checkbox
                        id="email-notifs"
                        className="border-gray-500"
                        defaultChecked />
                </div>

                <div className="flex justify-between">
                    <Label
                        htmlFor="performance-reports"
                        className="flex flex-col items-start cursor-pointer gap-0 p-0 font-normal"
                    >
                        <span className="text-sm font-medium text-slate-800">Performance Reports</span>
                        <CardDescription className="text-xs text-muted-foreground">
                            Weekly performance summaries
                        </CardDescription>
                    </Label>
                    <Checkbox
                        id="performance-reports"
                        className="border-gray-500"
                        defaultChecked />
                </div>

                <div className="flex justify-between">
                    <Label
                        htmlFor="new-school"
                        className="flex flex-col items-start cursor-pointer gap-0 font-normal"
                    >
                        <span className="text-sm font-medium text-slate-800">New School Alerts</span>
                        <CardDescription className="text-xs text-muted-foreground">
                            Notifications for new school registrations
                        </CardDescription>
                    </Label>
                    <Checkbox
                        id="new-school"
                        className="border-gray-500" />
                </div>
            </CardContent>
        </Card>

    );
}
