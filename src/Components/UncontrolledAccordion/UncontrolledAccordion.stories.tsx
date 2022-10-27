import {action} from "@storybook/addon-actions";
import {UncontrolledAccordion} from "./UncontrolledAccordion";



export default {
    title: 'UncontrolledAccordion',
    component: UncontrolledAccordion
};
const callback = action('clicked')

export const AccordionCollapsed = () => {
    return <UncontrolledAccordion titleValue={'UncontrolledAccardion'}/>
}