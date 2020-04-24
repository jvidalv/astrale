import React from "react";
import {StyleSheet, View} from "react-native";
import {Button, Headline, Text} from "react-native-paper";
import {DefaultView} from "../../components/containers";
import Constellation from "../../svgs/Constellation";
import TouchableRipple from "react-native-paper/src/components/TouchableRipple/index";
import Married from "../../svgs/Married";
import Cool from "../../svgs/Cool";
import InLove from "../../svgs/InLove";
import ItsDifficult from "../../svgs/ItsDifficult";
import Taurus from "../../svgs/Taurus";

/**
 * @param navigation
 * @returns {*}
 * @constructor
 */
function RelationshipScreen({navigation}) {
    const [relationshipStatus, setRelationshipStatus] = React.useState('');
    const buttonDisabled = !relationshipStatus;
    return (
        <DefaultView>
            <Taurus width={80} height={80} style={styles.taurus}/>
            <Constellation height={250} width={250} style={styles.constellation}/>
            <View style={styles.counterContainer}>
                <View style={styles.counterView}>
                    <Text style={styles.counterText}>3/5</Text>
                </View>
            </View>
            <View style={{flex: .4}}/>
            <View style={styles.textContainer}>
                <Headline style={styles.textHeadline}>What is your relationship status?</Headline>
                <Text style={styles.textText}>Josep, to give you a precise personal prediction please
                    let us know some info about you.</Text>
            </View>
            <View style={styles.sexContainer}>
                <TouchableRipple onPress={() => setRelationshipStatus('married')} rippleColor="rgba(0, 0, 0, .1)">
                    <View>
                        <Married width={100} style={{opacity: relationshipStatus === 'married' ? 1 : 0.5}}/>
                        <Text
                            style={{textAlign: 'center', textTransform: 'uppercase', fontWeight: 'bold'}}>Married</Text>
                    </View>
                </TouchableRipple>
                <TouchableRipple onPress={() => setRelationshipStatus('single')} rippleColor="rgba(0, 0, 0, .1)">
                    <View>
                        <Cool width={100} style={{opacity: relationshipStatus === 'single' ? 1 : 0.5}}/>
                        <Text
                            style={{textAlign: 'center', textTransform: 'uppercase', fontWeight: 'bold'}}>Single</Text>
                    </View>
                </TouchableRipple>
            </View>
            <View style={{flex: .1}}/>
            <View style={styles.sexContainer}>
                <TouchableRipple onPress={() => setRelationshipStatus('in love')} rippleColor="rgba(0, 0, 0, .1)">
                    <View>
                        <InLove width={100} style={{opacity: relationshipStatus === 'in love' ? 1 : 0.5}}/>
                        <Text style={{textAlign: 'center', textTransform: 'uppercase', fontWeight: 'bold'}}>In
                            love</Text>
                    </View>
                </TouchableRipple>
                <TouchableRipple onPress={() => setRelationshipStatus('its difficult')} rippleColor="rgba(0, 0, 0, .1)">
                    <View>
                        <ItsDifficult width={100} style={{opacity: relationshipStatus === 'its difficult' ? 1 : 0.5}}/>
                        <Text style={{textAlign: 'center', textTransform: 'uppercase', fontWeight: 'bold'}}>It's
                            difficult</Text>
                    </View>
                </TouchableRipple>
            </View>
            <View style={styles.buttonContainer}>
                <Button mode="contained" disabled={buttonDisabled}
                        onPress={() => navigation.push('Number')}>Continue</Button>
            </View>
        </DefaultView>
    );
}

const styles = StyleSheet.create({
    constellation: {
        zIndex: 0, position: 'absolute', bottom: 20, left: 20, opacity: 0.1
    },
    taurus: {
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
        flex: .5, paddingHorizontal: 20, paddingTop: 35, justifyContent: 'flex-end', marginBottom: 20
    }
})


export default RelationshipScreen;