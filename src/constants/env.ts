import {Platform} from 'react-native';

/**
 *
 */
export const BASE_HTTP_API_URL = `http://${
  Platform.OS === 'android' ? '10.0.2.2' : 'localhost'
}:3002/bp`;
