import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as walletStore from '..';
import * as walletTransactionsStore from '../reducers/transaction.reducer';

export const getWalletState =
  createFeatureSelector<walletStore.WalletState>('wallet');

export const getWalletTransactionSate = createSelector(
  getWalletState,
  (state: walletStore.WalletState) => state.transactions
);

export const getWalletTransactionsLoading = createSelector(
  getWalletTransactionSate,
  walletTransactionsStore.getWalletTransactionsLoading
);

export const getWalletTransactionsLoaded = createSelector(
  getWalletTransactionSate,
  walletTransactionsStore.getWalletTransactionsLoaded
);

export const getWalletTransactionsPageSettings = createSelector(
  getWalletTransactionSate,
  walletTransactionsStore.getWalletTransactionsPageSettings
);

export const getWalletTransactions = createSelector(
  getWalletTransactionSate,
  (state: walletTransactionsStore.WalletTransactionsState): any[] =>
    state.transactions &&
    state.transactions[state.paginationSettings.page] &&
    state.transactions[state.paginationSettings.page][
      state.paginationSettings.rowsPerPage
    ] &&
    state.transactions[state.paginationSettings.page][
      state.paginationSettings.rowsPerPage
    ].transactionList
      ? state.transactions[state.paginationSettings.page][
          state.paginationSettings.rowsPerPage
        ].transactionList
      : []
);

export const getWalletTransactionsPageLoaded = createSelector(
  getWalletTransactionSate,
  (state: walletTransactionsStore.WalletTransactionsState): boolean =>
    state.transactions &&
    state.transactions[state.paginationSettings.page] &&
    state.transactions[state.paginationSettings.page][
      state.paginationSettings.rowsPerPage
    ]
      ? state.transactions[state.paginationSettings.page][
          state.paginationSettings.rowsPerPage
        ].loaded
      : false
);

export const getTransactionDetails = (transactionId: number) =>
  createSelector(
    getWalletTransactionSate,
    (state: walletTransactionsStore.WalletTransactionsState): any =>
      state.transactionDetails[transactionId]?.details
  );

export const isTransactionDetailsLoading = (transactionId: number) =>
  createSelector(
    getWalletTransactionSate,
    (
      state: walletTransactionsStore.WalletTransactionsState
    ): { loading: boolean; loaded: boolean } => ({
      loading: state.transactionDetails[transactionId]?.loading,
      loaded: state.transactionDetails[transactionId]?.loaded,
    })
  );
