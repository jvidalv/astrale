import React from "react";
import {StyleSheet, View} from "react-native";
import {Button, Paragraph, Surface, useTheme} from "react-native-paper";
import {DefaultScrollView} from "../../components/containers";
import ShadowHeadline from "../../components/paper/ShadowHeadline";
import Palmistry from "../../svgs/Palmistry";
import i18n from "i18n-js";

/**
 * @param navigation
 * @returns {*}
 * @constructor
 */
function PalmistryScreen({navigation}) {
    const {colors} = useTheme();
    const _handleScroll = useHideStatusBar();

    return (
        <React.Fragment>
            <DefaultScrollView onScrollCallback={_handleScroll}>
                <Palmistry width={80} color={colors.text} style={styles.backgroundStars}/>
                <View style={styles.headerContainer}>
                    <ShadowHeadline style={styles.headerHeadline}>
                        {i18n.t('Palmistry')}
                    </ShadowHeadline>
                </View>
                <View style={styles.surfaceContainer}>
                    <Surface style={styles.surfaceSurface}>
                        <Button style={styles.surfaceButton}
                                labelStyle={styles.surfaceButtonLabel}>✋ {i18n.t('Life line')}</Button>
                        <Paragraph style={styles.surfaceParagraph}>
                            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece
                            of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock,
                            a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure
                            Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the
                            word in classical literature, discovered the undoubtable source
                        </Paragraph>
                    </Surface>
                </View>
                <View style={styles.surfaceContainer}>
                    <Surface style={styles.surfaceSurface}>
                        <Button style={styles.surfaceButton}
                                labelStyle={styles.surfaceButtonLabel}>🖐 {i18n.t('Fate line')}</Button>
                        <Paragraph style={styles.surfaceParagraph}>
                            It has roots in a piece
                            of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock,
                            a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure
                            Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the
                            word in classical literature, discovered the undoubtable source
                        </Paragraph>
                    </Surface>
                </View>
                <View style={styles.surfaceContainer}>
                    <Surface style={styles.surfaceSurface}>
                        <Button style={styles.surfaceButton}
                                labelStyle={styles.surfaceButtonLabel}>🤚 {i18n.t('Love line')}</Button>
                        <Paragraph style={styles.surfaceParagraph}>
                            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece
                            of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock,
                            a Latin professor at Hampden-Sydney College in Virginia.
                        </Paragraph>
                    </Surface>
                </View>
                <View style={{height: 20}}/>
            </DefaultScrollView>
        </React.Fragment>

    );
}

const styles = StyleSheet.create({
    backgroundStars: {
        zIndex: 1, position: 'absolute', top: 20, right: 20, opacity: 0.15
    },
    headerContainer: {
        alignItems: 'center', justifyContent: 'center', marginHorizontal: 20, marginVertical: 20
    },
    headerHeadline: {
        fontWeight: 'bold', fontSize: 30, lineHeight: 34, marginTop: 10
    },
    surfaceContainer: {
        marginTop: 20, marginHorizontal: 20
    },
    surfaceSurface: {
        padding: 20, borderRadius: 10, elevation: 3
    },
    surfaceButton: {
        marginTop: -5, marginBottom: 10, marginLeft: -10
    },
    surfaceButtonLabel: {
        fontSize: 20, fontWeight: 'bold', letterSpacing: 4
    },
    surfaceParagraph: {
        fontSize: 14, lineHeight: 22, letterSpacing: 1,
    },
    bottomThreeContainer: {
        flexDirection: 'row', justifyContent: 'space-around'
    },
})


export default PalmistryScreen;