import React from 'react';
import Accordion from "./Components/Accordion/Accordion";
import {Rating} from "./Components/Rating/Rating";

function App() {
    return (
        <div className="App">
            <PageTitile title={'This is APP'}/>
            <PageTitile title={'Hop Hey La La Ley'}/>
            Article 1
            <Rating value={1}/>
            <Rating value={2}/>
            <Rating value={3}/>
            <Rating value={4}/>
            <Rating value={5}/>
            <Accordion titleValue={'Menu'} collapsed={true}/>
            <Accordion titleValue={'List'} collapsed={true}/>
            Article 2
            <Rating value={1}/>
            <Rating value={2}/>
            <Rating value={3}/>
            <Rating value={4}/>
            <Rating value={5}/>
        </div>
    );
}

function PageTitile(props: any) {
    return (
        <h1>{props.title}</h1>
    )
}

export default App;
