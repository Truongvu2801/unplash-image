import axiosInstance from '../../../helpers/axiosInstance';
import {
  SEARCH_CARD,
  SEARCH_CARD_SUCCESS,
  SEARCH_CARD_ERROR
} from '../../../constants/actionTypes'

const searchCard = (page, limit) => (searchText) => (dispatch) => {
  dispatch({
    type: SEARCH_CARD,
    payload: searchText
  });
  axiosInstance()
    .get(`/search/photos?query=${searchText}&page=${page}&per_page=${limit}`)
    .then(res => {
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

export default searchCard;