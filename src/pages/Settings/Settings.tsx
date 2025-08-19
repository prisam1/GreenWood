import { CardTitle } from "@/components/ui/card";
import DataManagement from "./components/DataManagement";
import NotificationPreferences from "./components/NotificationPreferences";
import SystemSettings from "./components/SystemSettings";
import ProfileSettings from "./components/ProfileSettings";

export default function Settings() {
    return (
        <div className="pt-2">
            <CardTitle className="text-xl sm:text-2xl md:text-4xl font-bold mb-6">Settings</CardTitle>

            {/* Grid layout */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

                {/* Profile Settings */}
                <ProfileSettings />

                {/* System Settings */}
                <SystemSettings />

                {/* Notification Preferences */}

                <NotificationPreferences />

                {/* Data Management */}
                <DataManagement />
            </div>
        </div>
    );
}
