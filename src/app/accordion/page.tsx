import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

export default function AccordSec() {
    return (
        <div className="m-20 p-20 text-4xl ">
         <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
                <AccordionTrigger>Is it accessible?</AccordionTrigger>
                <AccordionContent>
                    Yes. It adheres to the WAI-ARIA design pattern.
                </AccordionContent>
            </AccordionItem>
         </Accordion>
        </div>
    )
}