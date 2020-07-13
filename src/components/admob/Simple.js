import React from "react";
import {Button, useTheme} from "react-native-paper";
import PropTypes from "prop-types";

/**
 * @param children
 * @param intensity
 * @returns {*}
 * @constructor
 */
function Simple({children, intensity}) {
    const {colors} = useTheme();
    return (
        <React.Fragment>
            <Button
                mode="contained"
                style={{borderRadius: 20, width: 250}}
                icon="movie"
            >
                Watch an ad
            </Button>
            <Button
                mode="contained"
                style={{
                    borderRadius: 20,
                    width: 250,
                    marginTop: 20,
                    borderWidth: 2,
                    borderColor: colors.primary,
                }}
                theme={{colors: {primary: colors.background + "50"}}}
            >
                Unlock forever
            </Button>
        </React.Fragment>
    );
}

Simple.propTypes = {
    intensity: PropTypes.number,
};

Simple.defaultProps = {
    intensity: 100,
};

export default Simple;
