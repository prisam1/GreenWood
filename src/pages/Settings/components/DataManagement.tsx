import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
    CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

export default function DataManagement() {
    return (
        <Card className="w-full">
            <CardHeader>
                <CardTitle>Data Management</CardTitle>
                <CardDescription>
                    Export data and manage system backups
                </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">

                <Label className=" block my-4 font-normal">Export Data</Label>
                <div className="grid grid-cols-2 gap-2">
                    <Button
                        variant="outline"
                        className="border-2 shadow-md">Export Student Data</Button>
                    <Button
                        variant="outline"
                        className="border-2 shadow-md">Export School Reports</Button>
                    <Button
                        variant="outline"
                        className="border-2 shadow-md">Export Analytics</Button>
                </div>

                <div>
                    <Label className="mb-2 block font-normal">Backup</Label>
                    <Button
                        variant={"outline"}
                        className="border-2 shadow-md"
                    >
                        Create Backup
                    </Button>
                    <CardDescription className="mt-1 text-xs text-muted-foreground">
                        Last backup: March 15, 2024
                    </CardDescription>
                </div>
            </CardContent>
        </Card>
    );
}
