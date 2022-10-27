import {useState} from "react";
import {action} from "@storybook/addon-actions";
import {Accordion} from "./Accordion";


export default {
    title: 'Accordion',
    component: Accordion
};
const callback = action('clicked')

export const Collapsed = () => <Accordion collapsed={true} setCollapsed={callback} titleValue={'Collapsed'}/>
export const UnCollapsed = () => <Accordion collapsed={false} setCollapsed={callback} titleValue={'UnCollapsed'}/>

export const AccordionCollapsed = () => {
    const [collapsed, setCollapsed] = useState<boolean>(true);
    return <Accordion collapsed={collapsed} setCollapsed={setCollapsed} titleValue={'Accordion'}/>
}