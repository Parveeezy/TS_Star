import React, {useState} from 'react';
import s from './OnOffControlled.module.css'

type OnOffPropsType = {
    turn: boolean
    setTurn: (turn: boolean) => void
}

const OnOffControlled = (props: OnOffPropsType) => {


    const onTurnOnHandler = () => {
        props.setTurn(true)
    }

    const onTurnOffHandler = () => {
        props.setTurn(false)
    }

    return (
        <div>
            <h2>SWITCHER</h2>
            <div className={s.OnOff}>
                <button className={props.turn ? s.activeOn : s.bg} onClick={onTurnOnHandler}>on</button>
                <button className={props.turn ? s.bg : s.activeOff} onClick={onTurnOffHandler}>off</button>
                <span className={props.turn ? s.circleOn : s.circleOff}></span>
            </div>
        </div>
    );
};

export default OnOffControlled;