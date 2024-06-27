import {StyleSheet} from 'react-native';

import {ThemeColor} from '../../constants';

export const useBottomSheetStyles = () =>
  StyleSheet.create({
    backdrop: {
      flex: 1,
      backgroundColor: 'rgba(0, 0, 0, .7)',
    },
    container: {
      marginTop: 'auto',
      borderTopLeftRadius: 16,
      borderTopRightRadius: 16,
      backgroundColor: ThemeColor.Background,
    },
    content: {
      padding: 24,
    },
    contentText: {
      fontSize: 14,
      textAlign: 'center',
      color: ThemeColor.Text,
    },
    header: {
      paddingVertical: 6,
      paddingHorizontal: 16,
      flexDirection: 'row',
      borderBottomColor: ThemeColor.Border,
      borderBottomWidth: 1,
    },
    closeTouchable: {
      marginLeft: 'auto',
    },
    closeText: {
      fontSize: 32,
      fontWeight: '300',
      color: ThemeColor.Text,
    },
    footer: {
      borderTopWidth: 1,
      padding: 16,
      borderTopColor: ThemeColor.Border,
    },
  });
