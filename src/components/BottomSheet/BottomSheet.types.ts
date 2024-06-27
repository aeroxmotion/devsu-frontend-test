import {ReactNode} from 'react';
import {type ModalProps} from 'react-native';

export interface BottomSheetProps extends ModalProps {
  onClose: () => void;
  content: ReactNode;
  footer?: ReactNode;
}
