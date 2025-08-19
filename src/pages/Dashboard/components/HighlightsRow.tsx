import { HighlightTile } from "./HighlightTile";

export default function HighlightsRow() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 md:gap-4 gap-3 mt-4">
            <HighlightTile
                title="Top Scorer"
                value="Ahan Kumar - 830 pts"
                icon="🏆"
                bg="bg-[#FFFBEA]"
                border="border-[#FDE68A]"
                text="text-[#964B00]"
            />

            <HighlightTile
                title="Longest Streak"
                value="Ahan Kumar - 15 days"
                icon="🔥"
                bg="bg-[#ECFDF5]"
                border="border-[#A7F3D0]"
                text="text-[#008000]"
            />

            <HighlightTile
                title="Most Lessons"
                value="Ahan Kumar - 68 lessons"
                icon="⚡"
                bg="bg-[#EFF6FF]"
                border="border-[#BFDBFE]"
                text="text-[#0000FF]"
            />
        </div>
    );
}