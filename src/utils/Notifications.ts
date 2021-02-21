import { Notifications } from 'expo';
import * as Permissions from 'expo-permissions';

import api_calls from '../constants/apis';

/**
 * Push notification request
 */
async function registerForPushNotificationsAsync(
  session: any
): Promise<boolean> {
  const { status: existingStatus } = await Permissions.getAsync(
    Permissions.NOTIFICATIONS
  );
  let finalStatus = existingStatus;
  session.expo_token = null;

  try {
    // only ask if permissions have not already been determined, because
    // iOS won't necessarily prompt the user a second time.
    if (existingStatus !== 'granted') {
      // Android remote notification permissions are granted during the app
      // install, so this will only ask on iOS
      const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
      finalStatus = status;
    }

    // Stop here if the user did not grant permissions
    if (finalStatus !== 'granted') {
      // Get the token that uniquely identifies this device
      return false;
    }
    session.expo_token = await Notifications.getExpoPushTokenAsync();
  } catch (error) {
    session.error = error.toString();
  }

  // POST the token to backend server from where you can retrieve it to send push notifications.
  // const {method, url} = api_calls.user;
  // return fetch(url, {
  //     method: method,
  //     headers: {
  //         Accept: "application/json",
  //         "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(session),
  // }).then((res) => res.ok);
  return true;
}

export default registerForPushNotificationsAsync;
