import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import * as types from '../gameTypes';
import { axiosWithAuth as axios } from '../../utils/axiosConfig';

export const useRoomActions = () => {
  const dispatch = useDispatch();

  const getRooms = useCallback(
    (token) => {
      dispatch({ type: types.GET_ROOMS_START });
      axios(token)
        .get('/api/adv/rooms/')
        .then((res) => {
          dispatch({ type: types.GET_ROOMS_SUCCESS, payload: res.data });
        })
        .catch((err) => {
          dispatch({ type: types.GET_ROOMS_FAILURE, payload: err.response });
        });
    },
    [dispatch]
  );

  return [getRooms];
};
