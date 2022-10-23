// @ts-ignore

import React, {MouseEventHandler, useState} from "react";

type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
    setCollapsed: (collapsed: boolean) => void
}

function Accordion(props: AccordionPropsType) {

    console.log('Accordion rendering')
    return (
        <div>
            <AccordionTitle title={props.titleValue}
                            collapsed={props.collapsed}
                            setCollapsed={props.setCollapsed}
            />
            {!props.collapsed && <AccordionBody/>}
        </div>
    )
}

// function Accordion2(props: AccordionPropsType) {
//     console.log('Accordion rendering')
//     if (props.collapsed) {
//         return (
//             <div>
//                 <AccordionTitle title={props.titleValue}/>
//             </div>
//         )
//     } else {
//         return (
//             <div>
//                 <AccordionTitle title={props.titleValue} onClick={props.onClick}/>
//             </div>
//         )
//     }
// }

type AccordionTitlePropsType = {
    title: string
    collapsed: boolean
    setCollapsed: (collapsed: boolean) => void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    console.log('AccordionTitle rendering')
    return (
        <h3 onClick={() => props.setCollapsed(!props.collapsed)}>{props.title}</h3>
    )
}

function AccordionBody() {
    console.log('AccordionBody rendering')
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}

export default Accordion;