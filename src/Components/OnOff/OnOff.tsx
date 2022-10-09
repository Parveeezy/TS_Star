import React, {useState} from 'react';
import s from './OnOff.module.css'

type OnOffPropsType = {
    turn: boolean
}

const OnOff = (props: OnOffPropsType) => {

    const [turn, setTurn] = useState(false)

    const onTurnOnHandler = () => {
        setTurn(true)
    }

    const onTurnOffHandler = () => {
        setTurn(false)
    }

    return (
        <div>
            <div className={s.OnOff}>
                <button className={turn ? s.activeOn : s.bg} onClick={onTurnOnHandler}>on</button>
                <button className={turn ? s.bg : s.activeOff} onClick={onTurnOffHandler}>off</button>
                <span className={turn ? s.circleOn : s.circleOff}></span>
            </div>
        </div>
    );
};

export default OnOff;