const initialState = {
  loading: true,
  loaded: false,
  error: false,
  count: 0,
  fulfillments: []
};

const LOAD_FULFILLMENTS = 'fulfillments/LOAD_FULFILLMENTS';
const LOAD_FULFILLMENTS_SUCCESS = 'fulfillments/LOAD_FULFILLMENTS_SUCCESS';
const LOAD_FULFILLMENTS_FAIL = 'fulfillments/LOAD_FULFILLMENTS_FAIL';

function loadFulfillments(searchOptions) {
  return { type: LOAD_FULFILLMENTS, searchOptions };
}

function loadFulfillmentsSuccess(fulfillments) {
  return {
    type: LOAD_FULFILLMENTS_SUCCESS,
    fulfillments: fulfillments.results,
    count: fulfillments.count
  };
}

function loadFulfillmentsFail(error) {
  return { type: LOAD_FULFILLMENTS_FAIL, error };
}

function FulfillmentsReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_FULFILLMENTS: {
      const { searchOptions } = action;
      return {
        ...state,
        loading: true,
        loaded: false,
        count: 0,
        error: false,
        searchOptions
      };
    }
    case LOAD_FULFILLMENTS_SUCCESS: {
      const { fulfillments, count, searchOptions } = action;

      return {
        ...state,
        loading: false,
        loaded: true,
        error: false,
        fulfillments,
        count,
        searchOptions
      };
    }
    case LOAD_FULFILLMENTS_FAIL: {
      return {
        ...state,
        loading: false,
        loaded: true,
        error: true
      };
    }
    default:
      return state;
  }
}

export const actions = {
  loadFulfillments,
  loadFulfillmentsSuccess,
  loadFulfillmentsFail
};

export const actionTypes = {
  LOAD_FULFILLMENTS,
  LOAD_FULFILLMENTS_SUCCESS,
  LOAD_FULFILLMENTS_FAIL
};

export default FulfillmentsReducer;