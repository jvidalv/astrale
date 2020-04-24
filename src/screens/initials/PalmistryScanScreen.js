import React from "react";
import {StyleSheet, View} from "react-native";
import {ProgressBar, Text, useTheme, withTheme} from "react-native-paper";
import {DefaultView} from "../../components/containers";
import {Camera} from 'expo-camera';
import Palmistry from "../../svgs/Palmistry";

/**
 * @param navigation
 * @returns {*}
 * @constructor
 */
function PalmistryScanScreen({navigation}) {
    const {colors} = useTheme();
    const [step, setStep] = React.useState(1);
    const [hasPermission, setHasPermission] = React.useState(null);
    const [type, setType] = React.useState(Camera.Constants.Type.back);

    React.useEffect(() => {
        (async () => {
            const {status} = await Camera.requestPermissionsAsync();
            setHasPermission(status === 'granted');
        })();
    }, []);

    if (hasPermission === null) {
        return <View/>;
    }
    if (hasPermission === false) {
        return <Text>No access to camera</Text>;
    }
    return (
        <DefaultView>
            <Camera style={{flex: 1, justifyContent : 'center', alignItems : 'center'}} type={type}>
                <View style={{borderWidth:5, borderColor: 'white', height: '70%', width: '70%', borderRadius: 10, opacity: .5}}/>
            </Camera>
            <View style={styles.progressContainer}>
                <Text style={{textAlign: 'center', marginBottom: 10}}>Progress</Text>
                <ProgressBar progress={0} style={{borderRadius: 10, width: 200, alignSelf: 'center'}}/>
            </View>
        </DefaultView>
    );
}

const styles = StyleSheet.create({
    progressContainer : {
        paddingVertical : 20,
        paddingHorizontal: 20,
        zIndex: 1,
    },
})


export default withTheme(PalmistryScanScreen);