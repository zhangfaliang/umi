import { createSelector } from 'reselect';
import { get } from 'lodash';

export const selectGameDataSource = state => get(state, 'game.dataSource');

export const makeSelectGameDataSource = () =>
  createSelector(selectGameDataSource, dataSource => dataSource);
