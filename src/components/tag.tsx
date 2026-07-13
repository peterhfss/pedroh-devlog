import { TagType } from "@/types";

export function Tag({label, color}: TagType){
    return(
        <span 
            className="font-mono text-[10px] font-medium  uppercase tracking-widest px-2 py-0.5 roudend border"
            style={{color, borderColor:color + "40", backgroundColor: color + "12"}}    
        >
            {label}
        </span>
    )
}