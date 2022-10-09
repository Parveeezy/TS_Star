// @ts-ignore

import React, {useState} from "react";

type UncontrolledAccordionPropsType = {
    titleValue: string
    // collapsed?: boolean
}

function UncontrolledAccordion(props: UncontrolledAccordionPropsType) {
    console.log('Accordion rendering')

    const [collapsed, setCollapsed] = useState(false)

    const onCollapsedHandler = () => {
        setCollapsed(!collapsed)
    }
    console.log(collapsed)

    return (
        <div>
            <UncontrolledAccordionTitle title={props.titleValue}/>
            <button onClick={onCollapsedHandler}>Toggle</button>
            {collapsed && <UncontrolledAccordionBody/>}
        </div>
    )
}

type AccordionTitlePropsType = {
    title: string
}

function UncontrolledAccordionTitle(props: AccordionTitlePropsType) {
    console.log('AccordionTitle rendering')
    return (
        <h3>{props.title}</h3>
    )
}

function UncontrolledAccordionBody() {
    console.log('AccordionBody rendering')
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}

export default UncontrolledAccordion;