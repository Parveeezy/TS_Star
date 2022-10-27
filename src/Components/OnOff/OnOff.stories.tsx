import {action} from "@storybook/addon-actions";
import {OnOff} from "./OnOff";

export default {
    title: 'OnOff',
    component: OnOff
};
const callback = action('clicked')

export const OnOffChanging = () => {
    return <OnOff turn={true}/>
}
