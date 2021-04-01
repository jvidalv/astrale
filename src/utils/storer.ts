import { AsyncStorage } from 'react-native';

const Storer = {
  set: async (key: string, content: any): Promise<void> => {
    return await AsyncStorage.setItem(key, JSON.stringify(content));
  },
  get: async (key: string): Promise<any> => {
    return await AsyncStorage.getItem(key)
      .then((res) => JSON.parse(res))
      .catch(() => null);
  },
  delete: async (key: string): Promise<void> => {
    return await AsyncStorage.removeItem(key);
  },
};

export default Storer;
