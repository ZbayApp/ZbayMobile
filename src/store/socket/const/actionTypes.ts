import { ActionCreator, AnyAction } from 'redux';

interface ActionsBasicType {
  [k: string]: ActionCreator<AnyAction>;
}

export type ActionsType<actions extends ActionsBasicType> = {
  [k in keyof actions]: ReturnType<actions[k]>;
};

export type Keys<Actions> = keyof Actions;
export type ActionFromMapping<Actions> = Actions[Keys<Actions>];

export enum SocketActionTypes {
  RESPONSE_STORAGE_INITIALIZED = 'storageInitialized',
  CONNECT_TO_WEBSOCKET_SERVER = 'connectToWebsocketServer',
  GET_PUBLIC_CHANNELS = 'getPublicChannels',
  RESPONSE_GET_PUBLIC_CHANNELS = 'responseGetPublicChannels',
  SEND_IDS = 'sendIds',
  ASK_FOR_MESSAGES = 'askForMessages',
  RESPONSE_ASK_FOR_MESSAGES = 'responseFetchAllMessages',
  SUBSCRIBE_FOR_TOPIC = 'subscribeForTopic',
}
