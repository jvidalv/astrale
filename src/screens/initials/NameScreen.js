import React from "react";
import {StyleSheet, View} from "react-native";
import {Button, Headline, Text, TextInput} from "react-native-paper";
import {DefaultView} from "../../components/containers";
import Logo from "../../svgs/Logo";
import Constellation from "../../svgs/Constellation";

/**
 * @param navigation
 * @returns {*}
 * @constructor
 */
function NameScreen({navigation}) {
    const [name, setName] = React.useState();
    return (
        <DefaultView style={{zIndex: 1}}>
            <Constellation height={250} width={250} style={styles.constellation}/>
            <View style={styles.counterContainer}>
                <Text style={styles.counterText}>1/5</Text>
            </View>
            <View style={{flex: 1}}/>
            <View style={styles.textContainer}>
                <Headline style={styles.textHeadline}>What is your name?</Headline>
                <Text style={styles.textText}>To give you a precise personal prediction please
                    let us know some info about you.</Text>
            </View>
            <View style={styles.logoContainer}>
                <Logo width={70} height={70}/>
            </View>

            <View style={styles.inputContainer}>
                <TextInput
                    value={name}
                    onChangeText={(text) => setName(text)}
                    textAlign='center'
                    autoFocus={true}
                    style={styles.inputStyle}
                    underlineColor='#ffffff00'
                />
            </View>
            <View style={styles.buttonContainer}>
                <Button mode="contained" disabled={!name} onPress={() => navigation.push('BirthDate')}>Continue</Button>
            </View>
        </DefaultView>
    );
}

const styles = StyleSheet.create({
    constellation: {
        zIndex: 0, position: 'absolute', bottom: 20, left: 20, opacity: 0.5
    },
    counterContainer: {position: 'absolute', top: 20, left: 20},
    counterText: {padding: 5, backgroundColor: '#00000050', borderRadius: 5},
    textContainer: {
        flex: 1, alignSelf: 'center', paddingHorizontal: 20
    },
    textHeadline: {
        textAlign: 'center', textTransform: 'uppercase'
    },
    textText: {
        textAlign: 'center', paddingVertical: 5
    },
    logoContainer: {
        flex: 1, alignSelf: 'center', paddingVertical: 25, zIndex: 1
    },
    inputContainer: {
        flex: 1, paddingHorizontal: 20, opacity: 0.9
    },
    inputStyle: {borderRadius: 5, textAlign: 'center'},
    buttonContainer: {
        flex: 1, paddingHorizontal: 20, paddingTop: 35
    }
})


export default NameScreen;