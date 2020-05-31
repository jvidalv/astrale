import { Notifications } from "expo";
import * as Permissions from "expo-permissions";
import { fetcher } from "../hooks/useFetch";
import api_calls from "../constants/apis";

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

  // only ask if permissions have not already been determined, because
  // iOS won't necessarily prompt the user a second time.
  if (existingStatus !== "granted") {
    // Android remote notification permissions are granted during the app
    // install, so this will only ask on iOS
    const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
    finalStatus = status;
  }

  // Stop here if the user did not grant permissions
  if (finalStatus !== "granted") {
    return false;
  }

  // Get the token that uniquely identifies this device
  session.expo_token = await Notifications.getExpoPushTokenAsync();
  // POST the token to backend server from where you can retrieve it to send push notifications.
  const { method, url, params } = api_calls.user;
  return await fetcher(method, url, params, session).then((res) => res.ok);
}

export default registerForPushNotificationsAsync;
