import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

export default function AccordSec() {
    return (
        <div className="p-20 text-2xl bg-slate-300 w-screen md:h-96 h-[95%]  -mt-[17%] text-black ">
            <h1 className="text-cyan-500 text-6xl font-bold"> FAQ's</h1>
         <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
                <AccordionTrigger className="font-bold"> What services do you offer?</AccordionTrigger>
                <AccordionContent className="text-start text-xl font-semibold">
                Comprehensive wedding planning, from venue selection to day-of coordination.
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
                <AccordionTrigger className="font-bold">  Can you customize packages to fit our needs and budget?</AccordionTrigger>
                <AccordionContent className="text-start text-xl font-semibold">
                Yes, fully customizable packages to suit your preferences and budget.
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
                <AccordionTrigger className="font-bold">How do you handle unforeseen challenges on the wedding day?</AccordionTrigger>
                <AccordionContent className="text-start text-xl font-semibold">
                Experienced team with contingency plans for seamless execution.
                </AccordionContent>
            </AccordionItem>
         </Accordion>
        </div>
    )
}