import { useState } from 'react';
import { Popup } from 'sillytavern-utils-lib/components/react';
import { POPUP_TYPE } from 'sillytavern-utils-lib/types/popup';
import { MainPopup } from './MainPopup.js';
import { restoreConnectionState, snapshotConnectionState } from '../api-settings.js';
import type { ConnectionStateSnapshot } from '../api-settings.js';

export const PopupManager = () => {
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [connectionSnapshot, setConnectionSnapshot] = useState<ConnectionStateSnapshot | null>(null);

  // This function will be exposed to the global scope to be called by vanilla JS
  const openPopup = () => {
    setConnectionSnapshot(snapshotConnectionState());
    setIsPopupVisible(true);
  };
  const closePopup = () => setIsPopupVisible(false);

  // Expose the open function to the outside world
  // @ts-ignore
  window.openWorldInfoRecommenderPopup = openPopup;

  if (!isPopupVisible) {
    return null; // Don't render anything if the popup is closed
  }

  return (
    <Popup
      content={<MainPopup />}
      type={POPUP_TYPE.DISPLAY}
      onComplete={closePopup} // The popup component now controls closing
      options={{
        large: true,
        wide: true,
        onClose: async () => {
          await restoreConnectionState(connectionSnapshot);
          setConnectionSnapshot(null);
        },
      }}
    />
  );
};
