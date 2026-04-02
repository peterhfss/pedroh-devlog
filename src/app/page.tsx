import navigationLinks from "@/lib/utils/navigation-links";
import Link from "next/link";

export default function Home() {

  return (
    <section className="w-7xl m-auto h-96">
      <main className="flex flex-col gap-12">
        <h1 className="text-7xl font-geist-sans font-bold text-text-title">
          PedroH&rsquo;s DevLog
        </h1>
        <h2 className="font-roboto-mono text-zinc-300">
          const stacks = [<span className="text-[#00ff00]/80">'Full Stack Developer'</span>,<span className="text-[#00ff00]/80">'Game Developer'</span>]; <span className="text-text-content">// Coding, Building & Playing</span>
        </h2>
        <nav className="w-2xs h-8 flex flex-col gap-6 ">
        <ul className="flex gap-6 flex-col">
          {navigationLinks.map((link) =>(
            <li key={link.name}>
              <Link href={link.href} className="font-roboto-mono text-base text-neutral-400 hover:text-neutral-200">
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
        </nav>
      </main>
    </section>
  );
}
