import { Notifications } from "expo";
import * as Permissions from "expo-permissions";
import { fetcher } from "../hooks/useFetch";
import { Language } from "./index";

type Session = {
  name: string;
  sign: string;
  birthDate: string;
  sex: null;
  relationship: null;
  number: null;
  days: 0;
  daysRow: 0;
  basicsDone: false;
  notifications: false;
};

/**
 * Push notification request
 */
async function registerForPushNotificationsAsync(
  session: Session
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
    return;
  }

  // Get the token that uniquely identifies this device
  let token = await Notifications.getExpoPushTokenAsync();

  // POST the token to backend server from where you can retrieve it to send push notifications.
  const { method, url, params } = api_calls.astrology;
  const response = await fetcher(method, url, params, {
    name: session.name,
    sign: null,
    birthDate: null,
    sex: null,
    relationship: null,
    number: null,
    palmistry: false,
    days: 0,
    daysRow: 0,
    basicsDone: false,
    notifications: false,
    language: Language.filteredLocale(),
  });

  return true;
}

export default registerForPushNotificationsAsync;
