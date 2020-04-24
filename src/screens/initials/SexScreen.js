import React from "react";
import {StyleSheet, View} from "react-native";
import {Button, Headline, Text} from "react-native-paper";
import {DefaultView} from "../../components/containers";
import Constellation from "../../svgs/Constellation";
import Aquarius from "../../svgs/Aquarius";
import Male from "../../svgs/Male";
import Female from "../../svgs/Female";
import TouchableRipple from "react-native-paper/src/components/TouchableRipple/index";
import Leo from "../../svgs/Leo";

/**
 * @param navigation
 * @returns {*}
 * @constructor
 */
function SexScreen({navigation}) {
    const [sex, setSex] = React.useState('');
    const buttonDisabled = !sex;
    return (
        <DefaultView>
            <Leo width={80} height={80} style={styles.leo}/>
            <Constellation height={250} width={250} style={styles.constellation}/>
            <View style={styles.counterContainer}>
                <View style={styles.counterView}>
                    <Text style={styles.counterText}>3/5</Text>
                </View>
            </View>
            <View style={{flex: 1}}/>
            <View style={styles.textContainer}>
                <Headline style={styles.textHeadline}>Your gender</Headline>
                <Text style={styles.textText}>Josep, to give you a precise personal prediction please
                    let us know some info about you.</Text>
            </View>
            <View style={styles.sexContainer}>
                <TouchableRipple onPress={() => setSex('male')} rippleColor="rgba(0, 0, 0, .1)">
                    <View>
                        <Male style={{opacity: sex === 'male' ? 1 : 0.5}}/>
                        <Text style={{textAlign: 'center', textTransform: 'uppercase', fontWeight: 'bold'}}>Male</Text>
                    </View>
                </TouchableRipple>
                <TouchableRipple onPress={() => setSex('female')} rippleColor="rgba(0, 0, 0, .1)">
                <View>
                    <Female style={{opacity: sex === 'female' ? 1 : 0.5}}/>
                    <Text style={{textAlign: 'center', textTransform: 'uppercase', fontWeight: 'bold'}}>Female</Text>
                </View>
                </TouchableRipple>

            </View>
            <View style={styles.buttonContainer}>
                <Button mode="contained" disabled={buttonDisabled}
                        onPress={() => navigation.push('Relationship')}>Continue</Button>
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
        flex: 1, alignSelf: 'center', paddingVertical: 25, zIndex: 1
    },
    sexContainer: {
        flex: 1, paddingHorizontal: 60, flexDirection: 'row', justifyContent: 'space-between'
    },
    buttonContainer: {
        flex: 1, paddingHorizontal: 20, paddingTop: 35, justifyContent : 'flex-end', marginBottom: 20
    }
})


export default SexScreen;