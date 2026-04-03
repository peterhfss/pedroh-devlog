import links from "@/lib/utils/links";
import Image from "next/image";
import HomeLink from "@/components/home-link";

import Profile from "../../../public/profile.jpg"

export default function About(){
    return(
        <section className="w-7xl h-256 m-auto flex flex-col">
            <header className="w-full border-b border-b-text-content/50 pb-4">
                <ul className="flex justify-between w-full">
                    {links.map((link) =>(
                        <li key={link.name} className="w-auto first:border-l-0 first:pl-0 px-4 flex flex-col gap-4 font-roboto-mono border-l border-l-text-content/50">
                            <span className=" text-neutral-600 text-base">
                                {link.name}
                            </span>
                            <a 
                                href={link.href} 
                                target={link.href.startsWith('http') ? "_blank" : undefined}
                                rel={link.href.startsWith('http') ? "noopener noreferrer" : undefined}
                                className="text-text-content text-sm hover:text-text-subtitle">
                                {link.href}
                            </a>
                        </li>
                    ))}
                </ul>
            </header>
            <main className="flex flex-col justify-center h-full gap-24">
                <div className="flex items-end gap-6">
                    <div className="w-[200px] h-[200px] rounded-full overflow-hidden">
                        <Image src={Profile} alt="Profile" className="grayscale-100"/>
                        
                    </div>
                    <span className="font-jetbrains-mono text-[20px] text-text-content">
                        Hello! I'm Pedro Henrique
                    </span>
                </div>
                
                <div className="border-t border-t-text-content/50 ">
                    <div className="pt-6 flex flex-col gap-6">
                    <h2 className=" font-medium text-neutral-600 text-2xl">
                        //about
                    </h2>
                        <p className="text-justify leading-[200%] font-roboto-mono text-base text-text-subtitle">
                            I&apos;m a full-stack developer passionate about technology, continuous learning, and sharing knowledge.
                            I created PedroH&apos;s DevLog to document my journey in the development world, from lines of code to career challenges.
                            My mission with this blog is to build a community for learning and sharing experiences, showing that every developer has their own unique path—and
                            that it&apos;s possible to grow with discipline, curiosity, and passion.
                            Outside of coding, I&apos;m a gaming, music, and fitness enthusiast, and I enjoy a balanced
                            life between work and play.
                            If you&apos;d like to share ideas, ask questions, or suggest topics, feel free to get in touch!
                        </p>
                    </div>
                </div>
            </main>
            <footer className="w-full">
                <HomeLink />
            </footer>
        </section>
    )
}