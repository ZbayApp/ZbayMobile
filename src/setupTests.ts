/* eslint-disable */

jest.mock('react-native-config', () => ({
  NODE_ENV: 'staging',
}));

jest.mock('zbayapp-nodejs-mobile-react-native', () => ({
  nodejs: jest.fn(),
}));

jest.mock('react-native-push-notification', () => ({
  PushNotification: jest.fn(),
}));
