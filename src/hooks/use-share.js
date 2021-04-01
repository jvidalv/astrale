import React from 'react';
import { Share } from 'react-native';

import PlatformUtils from '../utils/platform';

/**
 * @param message {string}
 * @param url {string}
 * @returns {{setStartShare: React.Dispatch<React.SetStateAction<boolean>>}}
 */
const useShare = (message, url) => {
  const [startShare, setStartShare] = React.useState(false);

  React.useEffect(() => {
    const sharing = async () => {
      try {
        const buildContent = () => {
          const content = {};
          if (PlatformUtils.isIos) {
            content.message = message;
            content.url = url;
          } else {
            content.message = url;
            content.title = message;
          }
          return content;
        };
        const content = buildContent();
        const result = await Share.share(content);

        if (result.action === Share.sharedAction) {
          if (result.activityType) {
            // shared with activity type of result.activityType
          } else {
            // shared
          }
        } else if (result.action === Share.dismissedAction) {
          // dismissed
        }
      } catch (error) {
        // todo
      }
      return true;
    };

    if (startShare) {
      sharing().then(() => setStartShare(false));
    }
  }, [startShare]);

  return { setStartShare };
};

export default useShare;
