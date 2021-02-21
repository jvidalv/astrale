import { Platform } from 'react-native';

interface PlatformUtils {
  isIos: boolean;
  isAndroid: boolean;
}

const PlatformUtils: PlatformUtils = {
  isIos: Platform.OS === 'ios',
  isAndroid: Platform.OS === 'android',
};

export default PlatformUtils;
