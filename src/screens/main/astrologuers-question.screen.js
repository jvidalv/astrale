import { BlurView } from 'expo-blur';
import i18n from 'i18n-js';
import React from 'react';
import {
  Image,
  Keyboard,
  ScrollView,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {
  Button,
  Divider,
  Headline,
  Subheading,
  Text,
  TextInput,
} from 'react-native-paper';

import Close from '../../components/navs/close';
import { useGlobals } from '../../contexts/global';
import { useIsDark } from '../../hooks/use-theme';
import PlatformUtils from '../../utils/platform';

/**
 * @param route
 * @param navigation
 * @returns {*}
 * @constructor
 */
function AstrologerQuestionScreen({ route, navigation }) {
  const dispatch = useGlobals()[1];
  const astrologist = route.params.astrologist;
  const setData = React.useState({
    message: null,
    email: null,
    astrologer: astrologist.name,
  })[1];
  const isDark = useIsDark();
  const isAndroid = PlatformUtils.isAndroid;
  const handleProceed = () => {
    try {
      dispatch({ type: 'toggleLoader' });
    } catch {
    } finally {
      dispatch({ type: 'toggleLoader' });
      navigation.pop();
    }
  };

  return (
    <BlurView
      style={[StyleSheet.absoluteFill, { flex: 1 }]}
      tint={isDark ? 'dark' : 'light'}
      intensity={isAndroid ? 150 : 100}
    >
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <ScrollView style={{ paddingBottom: 200 }}>
          <Close position="right" />
          <View style={{ margin: 20, alignItems: 'center' }}>
            <Headline>{astrologist.name}</Headline>
            <Subheading>
              {i18n.t(astrologist.school, { word: i18n.t('Astrology') })}
            </Subheading>
            <Image source={astrologist.photo} style={styles.image} />
          </View>
          <Divider />
          <View style={{ margin: 20 }}>
            <View style={{ height: 5 }} />
            <TextInput
              label={i18n.t('Your question')}
              multiline
              style={{ height: 150 }}
              maxLength={250}
              onChangeText={(text) =>
                setData((data) => ({ ...data, message: text }))
              }
            />
            <View style={{ height: 5 }} />
            <TextInput
              label={i18n.t('Your email')}
              keyboardType="email-address"
              onChangeText={(text) =>
                setData((data) => ({ ...data, email: text }))
              }
            />
          </View>
          <View style={{ marginHorizontal: 20, marginBottom: 20 }}>
            <Button
              onPress={handleProceed}
              mode="contained"
              style={{ borderRadius: 20 }}
              icon="send"
            >
              {i18n.t('Proceed')}
            </Button>
            <Text style={styles.advice}>
              *
              {i18n.t(
                "You'll need to see an ad before you can send the question"
              )}
            </Text>
          </View>
          <Divider />
        </ScrollView>
      </TouchableWithoutFeedback>
    </BlurView>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 80,
    height: 80,
    aspectRatio: 100 / 100,
    borderRadius: 100,
    marginTop: 10,
  },
  advice: {
    marginTop: 7,
    fontSize: 10,
    textAlign: 'center',
    opacity: 0.8,
  },
});

export default AstrologerQuestionScreen;
