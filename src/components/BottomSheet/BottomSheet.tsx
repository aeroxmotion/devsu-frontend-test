import React, {type FC} from 'react';
import {Modal, View, Text, TouchableOpacity, Pressable} from 'react-native';

import {type BottomSheetProps} from './BottomSheet.types';
import {useBottomSheetStyles} from './BottomSheet.styles';

export const BottomSheet: FC<BottomSheetProps> = ({
  onClose,
  content,
  footer,
  ...props
}) => {
  const styles = useBottomSheetStyles();

  return (
    <Modal animationType="slide" transparent {...props}>
      <Pressable style={styles.backdrop} onPress={onClose}>
        <View
          style={styles.container}
          onStartShouldSetResponder={() => true}
          onTouchEnd={e => e.stopPropagation()}>
          <View style={styles.header}>
            <TouchableOpacity style={styles.closeTouchable} onPress={onClose}>
              <Text style={styles.closeText}>×</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.content}>
            <Text style={styles.contentText}>{content}</Text>
          </View>

          {footer != null && <View style={styles.footer}>{footer}</View>}
        </View>
      </Pressable>
    </Modal>
  );
};
