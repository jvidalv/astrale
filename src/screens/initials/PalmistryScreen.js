import React from "react";
import {StyleSheet, TextInput, View} from "react-native";
import {Button, Headline, Text, TextInput as PaperTextInput} from "react-native-paper";
import {DefaultView} from "../../components/containers";
import Constellation from "../../svgs/Constellation";
import Aquarius from "../../svgs/Aquarius";
import Dices from "../../svgs/Dices";
import Palmistry from "../../svgs/Palmistry";

/**
 * @param navigation
 * @returns {*}
 * @constructor
 */
function PalmistryScreen({navigation}) {
    const [step, setStep] = React.useState(1);

    return (
        <DefaultView>
            <Aquarius width={80} height={80} style={styles.aquarius}/>
            <Constellation height={250} width={250} style={styles.constellation}/>
            <View style={styles.counterContainer}>
                <View style={styles.counterView}>
                    <Text style={styles.counterText}>5/5</Text>
                </View>
            </View>
            <View style={{flex: .5}}/>
            <View style={styles.textContainer}>
                <Headline style={styles.textHeadline}>Palmistry</Headline>
                <Text style={styles.textText}>Josep, to receive your palmistry readings please follow the instructions on the screen.</Text>
            </View>
            <View style={styles.palmistryContainer}>
                <Palmistry />
            </View>
            <View style={styles.buttonContainer}>
                <Button mode="contained" onPress={() => navigation.push('PalmistryScan')}>Continue</Button>
                <View style={{flex : .1}}/>
                <Button onPress={() => navigation.replace('LoadingScreen')}>Skip</Button>
            </View>
        </DefaultView>
    );
}

const styles = StyleSheet.create({
    constellation: {
        zIndex: 0, position: 'absolute', bottom: 20, left: 20, opacity: 0.1
    },
    aquarius: {
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
    palmistryContainer: {
        alignSelf: 'center', zIndex: 1, borderWidth: 2, padding: 20, borderRadius: 50, borderColor: '#FFFFFF50'
    },
    inputContainer: {
        flex: 1, paddingHorizontal: 20, opacity: 0.9, zIndex: 2
    },
    inputStyle: {
        borderRadius: 5, textAlign: 'center',
    },
    buttonContainer: {
        flex: 1, paddingHorizontal: 20, paddingTop: 35, justifyContent: 'flex-end', marginBottom: 20
    }
})


export default PalmistryScreen;