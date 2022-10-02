import React from 'react';
import Accordion from "./Components/Accordion/Accordion";
import {Rating} from "./Components/Rating/Rating";
import OnOff from "./Components/OnOff/OnOff";

function App() {
    return (
        <div className="App">
            <PageTitile title={'This is APP'}/>
            <PageTitile title={'Hop Hey La La Ley'}/>
            Article 1
            <Rating value={0}/>
            <Rating value={2}/>
            <Rating value={3}/>
            <Rating value={4}/>
            <Rating value={5}/>
            <Accordion titleValue={'Menu'} collapsed={true}/>
            <Accordion titleValue={'List'} collapsed={false}/>
            Article 2
            <Rating value={1}/>
            <Rating value={2}/>
            <Rating value={3}/>
            <Rating value={4}/>
            <Rating value={5}/>
            <h2>SWITCHER</h2>
            <OnOff turn={true}/>
            <OnOff turn={false}/>
        </div>
    );
}

function PageTitile(props: any) {
    return (
        <h1>{props.title}</h1>
    )
}

export default App;
