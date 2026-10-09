import { ArrowRightIcon, EnvelopeSimpleIcon } from "@phosphor-icons/react"

interface SubscriptionProps {
    subscribed: boolean
}

export const Subscription = ({subscribed}: SubscriptionProps) => {
    return(
        <section id="newsletter" className="grid items-center gap-14 mt-28  py-10 px-11 border border-border card-subscription">
            <div className="flex justify-start gap-5">
                <span className="border border-px grow-0 shrink-0 basis-auto border-border-icon bg-bg-icon w-10.5 h-10.5 flex items-center justify-center">
                    <EnvelopeSimpleIcon size={18} className="text-green" />
                </span>
                <div>
                    <p className="eyebrow">Occasional dispatches</p>
                    <h2 className="mt-1.5 mb-1.5 text-[24px] font-medium tracking-6">Good notes, no noise.</h2>
                    <p className="m-0 text-[13px]">
                        One thoughtful email when there's something worth sharing.
                    </p>
                </div>
            </div>
            {subscribed ? (
                <p className="text-text font-mono text-[11px]">
                    <span className="mr-1.5 text-green">✓</span> You’re on the list. Check your inbox.
                </p>
            ) : (
                <form className="flex">
                    <label htmlFor="email" className="absolute w-px h-px p-0 -m-px overflow-hidden text-nowrap border-0 clip-text">
                        Email address
                    </label>
                    <input
                        id="email"
                        name= 'email'
                        placeholder="you@example.com"
                        required
                        type="email"
                        className="w-56 h-11 py-0 px-3.5 border border-border border-r-0 outline-0 bg-bg text-text font-mono text-[11px] focus:border-border-input-focus"
                    />
                    <button type="submit" className="h-10.5 flex items-center gap-2 py-0 px-4 border text-bg border-green bg-green cursor-pointer text-[10px] font-semibold hover:bg-[#9aefa1] hover:translate-x-0.5 transition-all duration-200 ease-in ">
                        Subscribe 
                        <ArrowRightIcon size={16} />
                    </button>
                </form>
            )}

        </section>
    )
}