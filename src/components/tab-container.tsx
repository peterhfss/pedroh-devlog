'use client'

import { AnimatePresence, motion } from 'motion/react'
import Link from "next/link";
import { usePathname } from "next/navigation";
import { tabs } from "@/lib/utils"


export const TabContainer = () => {
    const pathname = usePathname()

    return(
        <section className="pt-14 content-container">
            <div className="flex gap-9 mb-16 border-b border-border">
                {
                    tabs.map((section) => {
                        const isActive = pathname === section.pathName
                        return(
                            <Link
                                key={section.pathName} 
                                href={section.pathName}
                                className={`relative pb-5 border-0 bg-none  cursor-pointer text-xs lowercase font-mono transition-all duration-200 ease-in hover:text-text ${isActive ? 'text-text': 'text-muted'}`}
                            >
                                <span className='mr-2 text-[9px] text-gray'>
                                    0{tabs.indexOf(section) + 1}
                                </span>
                                {section.title}
                                <AnimatePresence>
                                    {isActive && (
                                        <motion.div
                                        initial={{ scaleX: 0 }}
                                        animate={{ scaleX: 1 }}
                                        exit={{ scaleX: 0 }}
                                        transition={{ duration: 0.3, ease: "easeOut" }}
                                        style={{ originX: 0 }}
                                        className="absolute left-0 right-0 -bottom-px h-px bg-green"
                                        />
                                    )}
                                </AnimatePresence>
                            </Link>
                        )
                    })
                }
            </div>
        </section>
    )
}