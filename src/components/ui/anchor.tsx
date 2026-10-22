import type React from 'react'
import type { AnchorHTMLAttributes } from 'react'

interface AnchorProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
    children: React.ReactNode;
    href: string;
}

export const Anchor = ({children, href, className, ...rest}: AnchorProps) => {
    return(
        <a
            href={href}
            rel="noopener"
            target='_blank'
            className={`p-2 text-muted hover:text-text hover:bg-surface-raised hover:-translate-y-0.5 transition-colors rounded  ${className}`}
            {...rest}
        >
            {children}
        </a>
    )
}