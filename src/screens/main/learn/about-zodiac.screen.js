import i18n from 'i18n-js';
import React from 'react';
import { Dimensions, Image, ScrollView, StyleSheet, View } from 'react-native';
import { Text } from 'react-native-paper';

import SpaceSky from '../../../components/decorations/space-sky';

/**
 * @param navigation
 * @returns {*}
 * @constructor
 */
function AboutZodiacScreen({ navigation }) {
  return (
    <ScrollView style={{ flex: 1, paddingVertical: 20 }}>
      <SpaceSky />
      <View style={{ marginHorizontal: 20 }}>
        <Text>{i18n.t('ab_zo_1')}</Text>
      </View>
      <Image style={styles.image} source={require('./images/ab_zo_1.jpg')} />
      <View style={{ marginHorizontal: 20 }}>
        <Text>{i18n.t('ab_zo_2')}</Text>
      </View>
      <Image style={styles.image} source={require('./images/ab_zo_2.jpg')} />
      <View style={{ marginHorizontal: 20 }}>
        <Text>{i18n.t('ab_zo_3')}</Text>
      </View>
      <View style={{ height: 30 }} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  image: {
    width: Dimensions.get('window').width,
    height: 200,
    marginVertical: 20,
  },
});

export default AboutZodiacScreen;
