import React from 'react';
import s from './OnOff.module.css'

type OnOffPropsType = {
    turn: boolean
}

const OnOff = (props: OnOffPropsType) => {
    return (
        <div >
            {props.turn ?
                <div className={s.OnOff}>
                    <button className={s.activeOn}>on</button>
                    <button>off</button>
                    <span className={s.circleOn}></span>
                </div> :
                <div className={s.OnOff}>
                    <button>on</button>
                    <button className={s.activeOff}>off</button>
                    <span className={s.circleOff}></span>
                </div>}
        </div>
    );
};

export default OnOff;