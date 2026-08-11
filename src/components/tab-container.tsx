'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";
import { tabs } from "@/lib/utils";

export function TabContainer(){

    const pathname = usePathname()
    return(
        <div className="flex gap-0 border-b border-border mb-8">
           {tabs.map((tab)=>(
               
               <Link
                   key={tab.pathName}
                   href={tab.pathName}
                   className={`font-mono text-xs px-4 py-2.5 border-b-2 transition-colors cursor-pointer capitalize ${
                       pathname=== tab.pathName
                           ? "border-primary text-foreground "
                           : "border-transparent text-muted-foreground hover:text-foreground"}`}   
               >
                   {tab.title}
               </Link>
               
           ))}
        </div>
    )
}