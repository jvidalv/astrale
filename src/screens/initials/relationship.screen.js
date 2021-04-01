import i18n from 'i18n-js';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Headline, Text } from 'react-native-paper';
import TouchableRipple from 'react-native-paper/src/components/TouchableRipple/index';

import { DefaultView } from '../../components/containers';
import SpaceSky from '../../components/decorations/space-sky';
import { useGlobals } from '../../contexts/global';
import Cool from '../../svgs/Cool';
import InLove from '../../svgs/InLove';
import ItsDifficult from '../../svgs/ItsDifficult';
import Married from '../../svgs/Married';
import Taurus from '../../svgs/Taurus';

/**
 * @param navigation
 * @returns {*}
 * @constructor
 */
function RelationshipScreen({ navigation }) {
  const [{ session }, dispatch] = useGlobals();
  const [relationshipStatus, setRelationshipStatus] = React.useState('');
  const buttonDisabled = !relationshipStatus;
  const _handleContinue = () => {
    dispatch({
      type: 'setSession',
      fields: { relationship: relationshipStatus },
    });
    navigation.push('Number');
  };

  return (
    <DefaultView>
      <SpaceSky />
      <Taurus width={60} height={60} style={styles.taurus} />
      <View style={{ flex: 0.4 }} />
      <View style={styles.textContainer}>
        <Headline style={styles.textHeadline}>
          {i18n.t('What is your relationship status')}
        </Headline>
        <Text style={styles.textText}>
          {i18n.t(
            '{name}, to give you accurate and personal information we need to know some info',
            { name: session.name }
          )}
        </Text>
      </View>
      <View style={styles.sexContainer}>
        <TouchableRipple
          onPress={() => setRelationshipStatus('Married')}
          rippleColor="rgba(0,0,0,0)"
        >
          <View>
            <Married
              width={100}
              style={{ opacity: relationshipStatus === 'Married' ? 1 : 0.5 }}
            />
            <Text style={styles.sexText}>{i18n.t('Married')}</Text>
          </View>
        </TouchableRipple>
        <TouchableRipple
          onPress={() => setRelationshipStatus('Single')}
          rippleColor="rgba(0,0,0,0)"
        >
          <View>
            <Cool
              width={100}
              style={{ opacity: relationshipStatus === 'Single' ? 1 : 0.5 }}
            />
            <Text style={styles.sexText}>{i18n.t('Single')}</Text>
          </View>
        </TouchableRipple>
      </View>
      <View style={{ flex: 0.1 }} />
      <View style={styles.sexContainer}>
        <TouchableRipple
          onPress={() => setRelationshipStatus('In love')}
          rippleColor="rgba(0,0,0,0)"
        >
          <View>
            <InLove
              width={100}
              style={{ opacity: relationshipStatus === 'In love' ? 1 : 0.5 }}
            />
            <Text style={styles.sexText}>{i18n.t('In love')}</Text>
          </View>
        </TouchableRipple>
        <TouchableRipple
          onPress={() => setRelationshipStatus("It's difficult")}
          rippleColor="rgba(0,0,0,0)"
        >
          <View>
            <ItsDifficult
              width={100}
              style={{
                opacity: relationshipStatus === "It's difficult" ? 1 : 0.5,
              }}
            />
            <Text style={styles.sexText}>{i18n.t("It's difficult")}</Text>
          </View>
        </TouchableRipple>
      </View>
      <View style={styles.buttonContainer}>
        <Button
          mode="contained"
          disabled={buttonDisabled}
          onPress={_handleContinue}
        >
          {i18n.t('Continue')}
        </Button>
      </View>
    </DefaultView>
  );
}

const styles = StyleSheet.create({
  constellation: {
    zIndex: 0,
    position: 'absolute',
    bottom: 20,
    left: 20,
    opacity: 0.1,
  },
  taurus: {
    zIndex: 0,
    position: 'absolute',
    top: 20,
    right: 20,
    opacity: 0.2,
  },
  textContainer: {
    flex: 1,
    alignSelf: 'center',
    paddingHorizontal: 20,
  },
  textHeadline: {
    textAlign: 'center',
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
  textText: {
    textAlign: 'center',
    paddingVertical: 5,
  },
  logoContainer: {
    flex: 1,
    alignSelf: 'center',
    paddingVertical: 25,
    zIndex: 1,
  },
  sexContainer: {
    flex: 1,
    paddingHorizontal: 60,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  sexText: {
    textAlign: 'center',
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
  buttonContainer: {
    flex: 0.5,
    paddingHorizontal: 20,
    paddingTop: 35,
    justifyContent: 'flex-end',
    marginBottom: 20,
  },
});

export default RelationshipScreen;
