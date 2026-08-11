
import { cn } from "@/lib/utils/utils";

interface InlineCodeProps extends React.HTMLAttributes<HTMLElement> {
    children?: React.ReactNode;
}

export function InlineCode({ className, children, ...props }: InlineCodeProps) {
    
    return (
        <code className={cn("bg-muted  font-mono text-[11px] rounded-md p-1", className)} {...props} >
            {children}   
        </code>
    )
}