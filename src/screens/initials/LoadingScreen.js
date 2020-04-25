import React from "react";
import {Alert, StyleSheet, View} from "react-native";
import {Headline, Subheading, useTheme, withTheme,} from "react-native-paper";
import {DefaultView} from "../../components/containers";
import Constellation from "../../svgs/Constellation";
import SolarSystem from "../../svgs/SolarSystem";
import Rotation from "../../components/animations/Rotation";
import Leo from "../../svgs/Leo";

const phrases = [
    'Checking name fate...',
    'Analyzing birth date...',
    'Analyzing gender...',
    'Analyzing relationship status...',
    'Checking favourite number...',
    'Finishing analysis...'
]

/**
 * @param navigation
 * @returns {*}
 * @constructor
 */
function LoadingScreen({navigation}) {
    const {colors} = useTheme();
    const [phrase, setPhrase] = React.useState(0);
    const [number, setNumber] = React.useState(1);
    React.useEffect(() => {
        const intervalNumber = setInterval(() => {
            if (number < 100) {
                setNumber(number + 1);
            } else {
                clearInterval(intervalNumber)
            }
            if (number % 15 === 0 && phrase < 5) {
                setPhrase(phrase + 1)
            }
        }, 50)
        return () => clearInterval(intervalNumber);
    })

    React.useEffect(() => {
        number === 100 && Alert.alert('Hasta aquí hemos llegado hoy, gracias si te has animado a probar la app!');
    }, [number])


    return (
        <DefaultView>
            <Leo width={80} height={80} style={styles.leo}/>
            <Constellation height={250} width={250} style={styles.constellation}/>
            <View style={{flex: .5}}/>
            <View style={{flex: .8}}>
                <Headline style={{textAlign: 'center'}}>{number}%</Headline>
                <Subheading style={{textAlign: 'center', color: colors.primary}}>{phrases[phrase]}</Subheading>
            </View>
            <View style={styles.logoContainer}>
                <Rotation rotate={true}>
                    <SolarSystem/>
                </Rotation>
            </View>
        </DefaultView>
    );
}

const styles = StyleSheet.create({
    constellation: {
        zIndex: 0, position: 'absolute', bottom: 20, left: 20, opacity: 0.1
    },
    leo: {
        zIndex: 0, position: 'absolute', top: 20, right: 20, opacity: 0.2
    },
    counterContainer: {
        position: 'absolute', top: 20, left: 20
    },
    counterView: {
        padding: 5, borderRadius: 5, backgroundColor: '#00000050'
    },
    counterText: {
        letterSpacing: 2
    },
    textContainer: {
        flex: 1, alignSelf: 'center', paddingHorizontal: 20
    },
    textHeadline: {
        textAlign: 'center', textTransform: 'uppercase', fontWeight: 'bold'
    },
    textText: {
        textAlign: 'center', paddingVertical: 5
    },
    logoContainer: {
        flex: 2, alignSelf: 'center', paddingVertical: 40, zIndex: 1
    },
    inputContainer: {
        flex: 1, paddingHorizontal: 20, opacity: 0.9
    },
    inputStyle: {
        borderRadius: 5, fontSize: 30, textAlign: 'center',
    },
    buttonContainer: {
        flex: 1, paddingHorizontal: 20, paddingTop: 35, justifyContent: 'flex-end', marginBottom: 20
    }
})


export default withTheme(LoadingScreen);