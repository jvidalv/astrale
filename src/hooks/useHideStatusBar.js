import React from "react";
import {useScreens} from "../contexts/Screens";

const useHideStatusBar = () => {
    const [{statusBarHidden}, dispatch] = useScreens();
    return (event) => {
        const offset = event.nativeEvent.contentOffset.y > 200;
        return statusBarHidden !== offset && dispatch({type: 'setStatusBar', statusBarHidden: offset});
    }
}

export default useHideStatusBar;