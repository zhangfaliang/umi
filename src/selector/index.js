import { get } from 'lodash';
import { createSelector } from 'reselect';

const selectPageTitle = state => get(state, 'global.pageTitle');

export const makePageTitle = createSelector(selectPageTitle, title => title);
