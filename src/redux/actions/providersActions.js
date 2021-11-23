import {
  ADD_PROVIDER,
  REMOVE_PROVIDER,
  EDIT_PROVIDER
} from '../../constants/providersTypes';
import { v4 as uuidv4 } from 'uuid';

export const creatorAddProvider = (provider) => {
  provider.id = uuidv4();

  return {
    type: ADD_PROVIDER,
    payload: provider
  };
};
export const creatorRemoveProvider = (providerId) => {
  return {
    type: REMOVE_PROVIDER,
    payload: providerId
  };
};

export const creatorEditProvider = (provider) => {
  return {
    type: EDIT_PROVIDER,
    payload: provider
  };
};
