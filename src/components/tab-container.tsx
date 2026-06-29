import { TabId } from "@/types";

interface TabContainerProps {
    activeTab : TabId;
    onHandleActiveTab :(tab:TabId) => void
}

export function TabContainer({activeTab , onHandleActiveTab}: TabContainerProps){
    return(
        <div className="flex gap-0 border-b border-border mb-8">
            {(["writing", "projects", "about"] as const).map((tab)=>(
                <button
                    key={tab}
                    onClick={() =>onHandleActiveTab(tab)}
                    className={`font-mono text-xs px-4 py-2.5 border-b-2 transition-colors cursor-pointer capitalize ${
                        activeTab === tab 
                            ? "border-primary text-foreground "
                            : "border-transparent text-muted-foreground hover:text-foreground"}`}   
                >
                    {tab}
                </button>
            ))}
        </div>
    )
}