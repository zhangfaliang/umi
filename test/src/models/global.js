const initState = {
  pageTitle: 'bet8win',
};

export default {
  namespace: 'global',
  state: initState,
  effects: {},
  reducers: {
    setPageTitle(state, { payload }) {
      state.pageTitle = payload;
    },
  },
  subscriptions: {},
};
