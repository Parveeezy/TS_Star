import {OnOffControlled, OnOffPropsType} from "./OnOffControlled";
import {useState} from "react";
import {action} from "@storybook/addon-actions";

export default {
    title: 'OnOffControlled',
    component: OnOffControlled
};
const callback = action('clicked')

export const OnOffEnable = () => <OnOffControlled turn={true} setTurn={callback}/>
export const OnOffDisable = () => <OnOffControlled turn={false} setTurn={callback}/>

export const OnOffChanging = () => {
    const [turn, setTurn] = useState<boolean>(true);
    return <OnOffControlled turn={turn} setTurn={setTurn} />
}