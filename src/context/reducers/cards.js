import {
  CARD_LOADING,
  CARD_LOADING_SUCCESS,
  CARD_LOADING_ERROR,
  SEARCH_CARD_SUCCESS,
  SEARCH_CARD,
  SEARCH_CARD_ERROR,
  RESET_STATE
} from "../../constants/actionTypes";
import cardInitialState from "../initialStates/cardInitialState";

const cards = (state, { payload, type }) => {
  switch(type) {
    case CARD_LOADING: {
      return {
        ...state,
        cards: {
          ...state.cards,
          loading: true,
        }
      }
    }
    case CARD_LOADING_SUCCESS: {
      return {
        ...state,
        cards: {
          ...state.cards,
          loading: false,
          hasMore: payload.length > 0,
          data: [...state.cards.data, ...payload]
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
    case SEARCH_CARD: {
      return {
        ...state,
        cards: {
          ...state.cards,
          loading: true,
        }
      }
    }
    case SEARCH_CARD_SUCCESS: {
      return {
        ...state,
        cards: {
          ...state.cards,
          loading: false,
          data: [...state.cards.data, ...payload]
        }
      }
    }
    case SEARCH_CARD_ERROR: {
      return {
        ...state,
        cards: {
          ...state.cards,
          loading: false,
          error: payload
        }
      }
    }
    case RESET_STATE: {
      const { cards } = cardInitialState
      return {
        ...state,
        cards
      }
    }
    default:
      return state;
  }
}

export default cards;