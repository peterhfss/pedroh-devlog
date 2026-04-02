'use client'

import Link from "next/link"

export default function HomeLink(){
    return(
        <Link href='/' className="font-mono bg-[#1a1a1a] text-[#00ff00] px-1.5 py-2.5 rounded-sm border border-[#333] transition-all ease-in duration-300 hover:bg-[#00ff00] hover:text-[#1a1a1a] hover:shadow-emerald-500">
            cd ~/home
        </Link>
    )
}