import axiosInstance from '../../../helpers/axiosInstance';
import {
  CARD_LOADING,
  CARD_LOADING_SUCCESS,
  CARD_LOADING_ERROR
} from '../../../constants/actionTypes'

export default (dispatch) => {
  dispatch({
    type: CARD_LOADING
  });
  axiosInstance()
    .get("/photos")
    .then(res => {
      dispatch({
        type: CARD_LOADING_SUCCESS,
        payload: res.data
      })
    })
    .catch(err => {
      dispatch({
        type: CARD_LOADING_ERROR,
        payload: err
      })
    })
}