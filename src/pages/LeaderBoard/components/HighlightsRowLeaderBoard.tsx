import { HighlightLeaderBoardTile } from "./HighlightLeaderBoardTile";

export default function HighlightsRowLeaderBoard() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-6">
            <HighlightLeaderBoardTile
                title="Current Champion"
                name="Ahan Kumar"
                icon="👑"
                value="830 pts" 
                textColor="text-[#964B00]"
            />

            <HighlightLeaderBoardTile
                title="Longest Streak"
                name="Ahan Kumar"
                icon="🔥"
                value="15 days" 
                textColor="text-[#C76E00]"
            />

            <HighlightLeaderBoardTile
                title="Most Active"
                name="Ahan Kumar"
                icon="⚡"
                value="68 lessons" 
                textColor="text-[#0000FF]"
            />
            <HighlightLeaderBoardTile
                title="Highest Accuracy"
                name="Ahan Kumar"
                icon="🎯"
                value="96%" 
                textColor="text-[#008000]"
            />
        </div>
    );
}