import { PAGE_SIZE, SORT_VALUE } from './constants';

const initialState = {
  loading: true,
  loaded: false,
  error: false,
  offset: 0,
  count: 0,
  sort: SORT_VALUE,
  searchOptions: {},
  bounties: []
};

const LOAD_BOUNTIES = 'bounties/LOAD_BOUNTIES';
const LOAD_BOUNTIES_SUCCESS = 'bounties/LOAD_BOUNTIES_SUCCESS';
const LOAD_BOUNTIES_FAIL = 'bounties/LOAD_BOUNTIES_FAIL';

const LOAD_MORE = 'bounties/LOAD_MORE';

function loadMoreBounties() {
  return { type: LOAD_MORE };
}

function loadBounties(searchOptions) {
  return { type: LOAD_BOUNTIES, searchOptions };
}

function loadBountiesSuccess(bounties) {
  return {
    type: LOAD_BOUNTIES_SUCCESS,
    bounties: bounties.results,
    count: bounties.count
  };
}

function loadBountiesFail(error) {
  return { type: LOAD_BOUNTIES_FAIL, error };
}

function BountiesReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_BOUNTIES: {
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
    case LOAD_BOUNTIES_SUCCESS: {
      const { bounties, count, searchOptions } = action;

      return {
        ...state,
        loading: false,
        loaded: true,
        error: false,
        bounties,
        count,
        searchOptions
      };
    }
    case LOAD_BOUNTIES_FAIL: {
      const { searchOptions } = action;
      return {
        ...state,
        loading: false,
        loaded: true,
        error: true,
        searchOptions
      };
    }
    case LOAD_MORE: {
      return {
        ...state,
        offset: state.offset + PAGE_SIZE
      };
    }
    default:
      return state;
  }
}

export const actions = {
  loadBounties,
  loadBountiesSuccess,
  loadBountiesFail,
  loadMoreBounties
};

export const actionTypes = {
  LOAD_BOUNTIES,
  LOAD_BOUNTIES_SUCCESS,
  LOAD_BOUNTIES_FAIL
};

export default BountiesReducer;