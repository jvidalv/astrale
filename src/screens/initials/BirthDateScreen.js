import React from "react";
import {StyleSheet, View} from "react-native";
import {Button, Headline, Text} from "react-native-paper";
import {DefaultView} from "../../components/containers";
import Constellation from "../../svgs/Constellation";
import Scorpio from "../../svgs/Scorpio";
import {DateUtils, Platform} from "../../utils";
import RNDateTimePicker from "@react-native-community/datetimepicker";
import Logo from "../../svgs/Logo";

/**
 * @param navigation
 * @returns {*}
 * @constructor
 */
function BirthDateScreen({navigation}) {
    const [date, setDate] = React.useState(new Date());
    const [show, setShow] = React.useState(true);

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(Platform.isIos);
        setDate(currentDate);
    };

    const showDatePicker = () => {
        setShow(true);
    };

    return (
        <DefaultView>
            <Scorpio width={80} height={80} style={styles.scorpio}/>
            <Constellation height={250} width={250} style={styles.constellation}/>
            <View style={styles.counterContainer}>
                <View style={styles.counterView}>
                    <Text style={styles.counterText}>2/5</Text>
                </View>
            </View>
            <View style={{flex: 1}}/>
            <View style={styles.textContainer}>
                <Headline style={styles.textHeadline}>Your birthdate</Headline>
                <Text style={styles.textText}>Josep, to give you a precise personal prediction please
                    let us know some info about you.</Text>
            </View>
            <View style={styles.logoContainer}>
                <Logo width={70} height={70}/>
            </View>
            <View style={styles.dateContainer}>
                {Platform.isAndroid && <Button style={{alignSelf: 'center'}} onPress={showDatePicker}>Click to change</Button>}
                {show && <RNDateTimePicker
                    value={date}
                    display="spinner"
                    onChange={onChange}
                    minimumDate={new Date(1930, 0, 0)}
                    maximumDate={new Date(2010, 0, 0)}
                    style={{height: 50}}
                    textColor={'#ffffff'}
                />}
                {
                    Platform.isAndroid && (
                        <View style={{justifyContent: 'center', alignItems: 'center'}}>
                            <Text style={{fontSize: 40}} >{DateUtils.toEuropean(date)}</Text>
                        </View>
                    )
                }
            </View>
            <View style={styles.buttonContainer}>
                <Button mode="contained" disabled={!date} onPress={() => navigation.push('Sex')}>Continue</Button>
            </View>
        </DefaultView>
    );
}

const styles = StyleSheet.create({
    constellation: {
        zIndex: 0, position: 'absolute', bottom: 20, left: 20, opacity: 0.1
    },
    scorpio: {
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
    dateContainer: {
        flex: Platform.isIos ? 2 : 0, marginHorizontal: 20, paddingVertical: 10,  backgroundColor: '#FFFFFF3D', borderRadius: 5
    },
    buttonContainer: {
        flex: 1, paddingHorizontal: 20, paddingTop: 35, justifyContent : 'flex-end', marginBottom: 20
    }
})


export default BirthDateScreen;