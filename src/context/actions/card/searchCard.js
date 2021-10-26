import axiosInstance from '../../../helpers/axiosInstance';
import {
  SEARCH_CARD,
  SEARCH_CARD_SUCCESS,
  SEARCH_CARD_ERROR
} from '../../../constants/actionTypes'

export default (searchText) => (dispatch) => {
  dispatch({
    type: SEARCH_CARD,
    payload: searchText
  });
  axiosInstance()
    .get(`/search/photos?query=${searchText}&client_id=GsAbrGI8-gYnM1ghFXv6WFLy78ky4lwmCGxRgw5AYDM`)
    .then(res => {
      console.log(res);
      dispatch({
        type: SEARCH_CARD_SUCCESS,
        payload: res.data.results
      })
    })
    .catch(err => {
      dispatch({
        type: SEARCH_CARD_ERROR,
        payload: err
      })
    })
}