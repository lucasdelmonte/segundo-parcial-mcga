import {
  ADD_PROVIDER,
  REMOVE_PROVIDER,
  EDIT_PROVIDER,
  GET_ALL_PROVIDER
} from '../../constants/providersTypes';
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';

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

export const creatorGetAllProvider = (provider) => {
  return {
    type: GET_ALL_PROVIDER,
    payload: provider
  };
};

export const creatorAsyncAdd = (provider) => {
  return async (dispatch) => {
    try {
      const res = await axios.post(
        'https://abm-heroku-parcial.herokuapp.com/api/providers/',
        provider
      );
      if (res.status === 202 || res.status === 202) {
        const action = creatorAddProvider(provider);
        dispatch(action);
      }
    } catch (error) {}
  };
};

export const creatorAsyncRemove = (providerId) => {
  return async (dispatch) => {
    try {
      const res = await axios.delete(
        'https://abm-heroku-parcial.herokuapp.com/api/providers/' + providerId
      );
      if (res.status === 200 || res.status === 202) {
        const action = creatorRemoveProvider(providerId);
        dispatch(action);
      }
    } catch (error) {}
  };
};

export const creatorAsyncEdit = (provider) => {
  return async (dispatch) => {
    try {
      const res = await axios.put(
        'https://abm-heroku-parcial.herokuapp.com/api/providers/619ec8939d9017ed17c4ef17'
      );
      console.log(res);
      if (res.status === 202 || res.status === 202) {
        const action = creatorEditProvider(provider);
        dispatch(action);
      }
    } catch (error) {}
  };
};
