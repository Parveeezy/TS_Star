import React, {useState} from 'react';
import {RatingValueType, UncontrolledRating} from "./UncontrolledRating";


export default {
    title: 'Uncontrolled Rating',
    component: UncontrolledRating,
};

export const ChangeRating = () => {
    const [value, setValue] = useState<RatingValueType>(1)
    return <UncontrolledRating defaultValue={value} onChange={setValue}/>
}


