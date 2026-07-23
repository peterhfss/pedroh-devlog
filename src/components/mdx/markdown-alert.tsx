'use client'

import type { ReactNode } from "react";
import { 
    InfoIcon,
    LightbulbIcon,
    WarningCircleIcon,
    WarningIcon,
    SealWarningIcon,
} from "@phosphor-icons/react";
import { cn } from "@/lib/utils/utils";

interface MarkdownAlertProps {
    type: "tip" | "info" | "warning" | "danger" | "important";
    children: ReactNode;
    title?: string;
    className?: string;
}

const alertConfig = {
    tip: {
        icon: LightbulbIcon,
        className: 'border-green-500/20 bg-green-500/10 text-green-100',
        iconClassName: 'text-green-400',
        defaultTitle: 'Tip',
    },
    info: {
        icon: InfoIcon,
        className: 'border-blue-500/20 bg-blue-500/10 text-blue-100',
        iconClassName: 'text-blue-400',
        defaultTitle: 'Info',
    },
    important: {
        icon: SealWarningIcon,
        className: 'border-purple-500/20 bg-purple-500/10 text-purple-100',
        iconClassName: 'text-purple-400',
        defaultTitle: 'Important',
    },
    warning: {
        icon: WarningIcon,
        className: 'border-yellow-500/20 bg-yellow-500/10 text-yellow-100',
        iconClassName: 'text-yellow-400',
        defaultTitle: 'Warning',
    },
    danger: {
        icon: WarningCircleIcon,
        className: 'border-red-500/20 bg-red-500/10 text-red-100',
        iconClassName: 'text-red-400',
        defaultTitle: 'Danger',
    },
    
};

export function MarkdownAlert({type, children, title, className}: MarkdownAlertProps){
    const config = alertConfig[type];
    const Icon = config.icon;
    const displayTitle = title || config.defaultTitle;

    return(
        <div className={cn("flex gap-3 rounded-xl border p-4 my-4", config.className, className)}>
            <div className="shrink-0 mt-0.5">
                <Icon className={cn("h-5 w-5", config.iconClassName)}/>
            </div>
            <div className="flex-1 min-w-0">
                <div className="font-semibold text-sm mb-2 leading-tight">
                    {displayTitle}
                </div>
                <div className="space-y-2 text-sm leading-relaxed">{children}</div>
            </div>
        </div>
    )
}