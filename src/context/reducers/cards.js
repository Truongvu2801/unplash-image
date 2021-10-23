import {
  CARD_LOADING,
  CARD_LOADING_SUCCESS,
  CARD_LOADING_ERROR
} from "../../constants/actionTypes";

const cards = (state, { payload, type }) => {
  switch(type) {
    case CARD_LOADING: {
      return {
        ...state,
        cards: {
          ...state.cards,
          loading: true
        }
      }
    }
    case CARD_LOADING_SUCCESS: {
      return {
        ...state,
        cards: {
          ...state.cards,
          loading: false,
          data: payload
        }
      }
    }
    case CARD_LOADING_ERROR: {
      return {
        ...state,
        cards: {
          ...state.cards,
          loading: false,
          error: payload
        }
      }
    }
    default:
      return state;
  }
}

export default cards;