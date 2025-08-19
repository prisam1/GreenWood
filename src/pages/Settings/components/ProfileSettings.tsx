import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
    CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function ProfileSettings() {
    return (
        <Card className="w-full shadow-[0_0_20px] shadow-gray-400/30 ">
            <CardHeader>
                <CardTitle className="font-bold">Profile Settings</CardTitle>
                <CardDescription>
                    Update your personal information and contact details
                </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
                <div className="space-y-3 mt-5">
                    <Label
                        htmlFor="name">
                        Full Name
                    </Label>
                    <Input
                        id="name"
                        placeholder="Admin User"
                        defaultValue="Admin User"
                        className="rounded-lg w-full  placeholder:text-gray-500 border-2 "
                    />
                </div>
                <div className="space-y-2">
                    <Label
                        htmlFor="email">
                        Email
                    </Label>
                    <Input
                        id="email"
                        type="email"
                        placeholder="admin@example.com"
                        defaultValue="admin@example.com"
                        className="rounded-lg w-full  placeholder:text-gray-500 border-2 " />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="phone">Phone</Label>
                    <Input
                        id="phone"
                        type="tel"
                        placeholder="+1-555-0123"
                        defaultValue="+1-555-0123"
                        className="rounded-lg w-full  placeholder:text-gray-500 border-2 " />
                </div>
                <Button className="w-fit">Update Profile</Button>
            </CardContent>
        </Card>

    );
}
