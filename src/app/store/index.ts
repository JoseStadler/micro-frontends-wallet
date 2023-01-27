import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';

import * as fromTransactions from './reducers/transaction.reducer';

export interface WalletState {
  transactions: fromTransactions.WalletTransactionsState;
}

export const walletReducers: ActionReducerMap<WalletState> = {
  transactions: fromTransactions.walletTransactionsReducer,
};

export * from './selectors';
export * from './actions';
