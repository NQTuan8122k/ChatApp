import {ACTION_TYPES} from '../actionTypes';

export const USER_ACTION_TYPES = {
  GET_CURRENT_USER: ACTION_TYPES('USER/GET_CURRENT_USER'),
  GET_ALL_USER: ACTION_TYPES('USER/GET_ALL_USER'),
  CHANGE_PASSWORD: ACTION_TYPES('USER/CHANGE_PASSWORD'),
  UPDATE_USER: ACTION_TYPES('USER/UPDATE_USER'),
};
