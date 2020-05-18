import { Effect, ImmerReducer, Reducer, Subscription } from 'umi';

export interface StateModelStates {
  hide: boolean;
  lineStatus:boolean
}

export interface GlobalModelType {
  namespace: 'global';
  state: StateModelStates;
  effects: {
    query: Effect;
  };
  reducers: {
    save: Reducer<StateModelStates>;
  };
  // subscriptions: { setup: Subscription };
}

const GlobalModel: GlobalModelType = {
  namespace: 'global',
  state: {
    hide: false,
    lineStatus: true,
  },

  effects: {
    *query({ payload }, { call, put }) {
      // const response = yield call(login, payload);
    },
  },
  reducers: {
    save(state, action) {
      return {
        ...state,
        ...action.payload,
      };
    },
  },
};

export default GlobalModel;