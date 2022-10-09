import React from 'react';
import Accordion from "./Components/Accordion/Accordion";
import {Rating} from "./Components/Rating/Rating";
import OnOff from "./Components/OnOff/OnOff";
import UncontrolledAccordion from "./Components/UncontrolledAccordion/UncontrolledAccordion";
import {UncontrolledRating} from "./Components/UncontrolledRating/UncontrolledRating";

function App() {
    return (
        <div className="App">
            {/*<PageTitile title={'This is APP'}/>*/}
            {/*<PageTitile title={'Hop Hey La La Ley'}/>*/}

            {/*Article 1*/}
            {/*<UncontrolledRating value={0}/>*/}
            {/*<UncontrolledRating value={2}/>*/}
            {/*<UncontrolledRating value={3}/>*/}
            {/*<UncontrolledRating value={4}/>*/}
            {/*<UncontrolledRating value={5}/>*/}
            {/*<Accordion titleValue={'Menu'} collapsed={true}/>*/}
            {/*<Accordion titleValue={'List'} collapsed={false}/>*/}

            {/*Article 2*/}
            {/*<UncontrolledRating value={1}/>*/}
            {/*<UncontrolledRating value={2}/>*/}
            {/*<UncontrolledRating value={3}/>*/}
            {/*<UncontrolledRating value={4}/>*/}
            {/*<UncontrolledRating value={5}/>*/}

            {/*<h2>SWITCHER</h2>*/}
            {/*<OnOff turn={true}/>*/}

            UncontrolledAccordion
            <UncontrolledAccordion titleValue={'Menu'}/>

            UnControlledRating

            <UncontrolledRating/>
        </div>
    );
}

function PageTitile(props: any) {
    return (
        <h1>{props.title}</h1>
    )
}

export default App;
