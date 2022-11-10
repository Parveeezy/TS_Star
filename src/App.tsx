import React, {useState} from 'react';
import './App.css'
import {Accordion} from "./Components/Accordion/Accordion";
import {Rating, RatingValueType} from "./Components/Rating/Rating";
import {OnOff} from "./Components/OnOff/OnOff";
import {UncontrolledAccordion} from "./Components/UncontrolledAccordion/UncontrolledAccordion";
import {UncontrolledRating} from "./Components/UncontrolledRating/UncontrolledRating";
import {OnOffControlled} from "./Components/OnOffControlled/OnOffControlled";

function App() {

    let [ratingValue, setRatingValue] = useState<RatingValueType>(0)
    const [collapsedValue, setCollapsedValue] = useState<boolean>(false)
    const [turn, setTurn] = useState(false)


    return (
        <div className="App">

            <OnOff turn={true}/>

            <Rating value={ratingValue} onClick={setRatingValue}/>

            <Accordion titleValue={'---Accordion---'}
                       collapsed={collapsedValue}
                       setCollapsed={setCollapsedValue}
            />

            OnOffControlled
            <OnOffControlled
                turn={turn}
                setTurn={setTurn}
            />

            UncontrolledAccordion
            <UncontrolledAccordion titleValue={'Menu'}/>

            UnControlledRating

            <UncontrolledRating
                defaultValue={1}
                onChange={setRatingValue}
            />

        </div>
    );
}

// function PageTitile(props: any) {
//     return (
//         <h1>{props.title}</h1>
//     )
// }

export default App;
