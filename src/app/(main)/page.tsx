
import { Prompt } from "@/components";

export default function Writing() {

    return (
        <section className="content-container">
            <div className="flex flex-end justify-between gap-10 mb-7">
                <div>
                    <Prompt command="find ./writing -type f" />
                    <h2 className="font-medium text-[43px] tracking-6 ">Latest writing</h2>
                    <p className="text-soft m-0 text-[15px]">Notes from building, breaking, and understanding software.</p>
                </div>
            </div>
        </section>
    )
}