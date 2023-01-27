import { createReducer, on } from '@ngrx/store';
import * as fromWalletTransactions from '../actions/transaction.actions';

type transactionDetailsEntity = {
  details: any;
  loading: boolean;
  loaded: boolean;
};
export interface WalletTransactionsState {
  transactions: {
    [page: string]: {
      [rowsPerPage: string]: {
        transactionList: any[];
        loaded: boolean;
      };
    };
  };
  transactionDetails: {
    [transactionId: string]: transactionDetailsEntity;
  };
  paginationSettings: any;
  loading: boolean;
  loaded: boolean;
}

export const initialWalletTransactionsState: WalletTransactionsState = {
  transactions: {},
  transactionDetails: {},
  paginationSettings: {
    optionsRowsPerPage: [
      {
        value: 5,
        label: '5',
      },
      {
        value: 10,
        label: '10',
      },
      {
        value: 15,
        label: '15',
      },
      {
        value: 20,
        label: '20',
      },
      {
        value: 1000,
        label: '1000',
      },
    ],
    rowsPerPage: 10,
    rows: 0,
    page: 0,
  },
  loading: false,
  loaded: false,
};

export const walletTransactionsReducer = createReducer(
  initialWalletTransactionsState,
  on(fromWalletTransactions.resetLoadedWalletTransactions, () => {
    return { ...initialWalletTransactionsState };
  }),
  on(
    fromWalletTransactions.loadWalletTransactions,
    (state: WalletTransactionsState): WalletTransactionsState => {
      return {
        ...state,
        loading: true,
        loaded: false,
      };
    }
  ),
  on(
    fromWalletTransactions.loadWalletTransactionsSuccess,
    (state: WalletTransactionsState, action): WalletTransactionsState => {
      return {
        ...state,
        transactions: {
          ...state.transactions,
          [state.paginationSettings.page]: {
            ...state.transactions[state.paginationSettings.page],
            [state.paginationSettings.rowsPerPage]: {
              transactionList: action.transactions,
              loaded: true,
            },
          },
        },
        paginationSettings: {
          ...state.paginationSettings,
          rows: action.totalRows,
        },
        loading: false,
        loaded: true,
      };
    }
  ),
  on(
    fromWalletTransactions.loadWalletTransactionsFail,
    (state: WalletTransactionsState): WalletTransactionsState => {
      return {
        ...state,
        loading: false,
        loaded: true,
      };
    }
  ),
  on(
    fromWalletTransactions.updateWalletTransactionsPaginationSettings,
    (state: WalletTransactionsState, action): WalletTransactionsState => {
      return {
        ...state,
        paginationSettings: action.paginationSettings,
      };
    }
  ),
  on(
    fromWalletTransactions.loadWalletTransactionsFirstPage,
    (state: WalletTransactionsState): WalletTransactionsState => {
      return {
        ...state,
        paginationSettings: {
          ...state.paginationSettings,
          page: 0,
        },
      };
    }
  ),
  on(
    fromWalletTransactions.loadWalletTransactionDetails,
    (state: WalletTransactionsState, action): WalletTransactionsState => {
      const newTransactionDetails: transactionDetailsEntity = {
        details: null,
        loading: true,
        loaded: false,
      };

      return {
        ...state,
        transactionDetails: {
          ...state.transactionDetails,
          [action.transactionId]: newTransactionDetails,
        },
      };
    }
  ),
  on(
    fromWalletTransactions.loadWalletTransactionDetailsSuccess,
    (state: WalletTransactionsState, action): WalletTransactionsState => {
      const loadedTransactionDetails: transactionDetailsEntity = {
        details: action.transaction,
        loading: false,
        loaded: true,
      };

      return {
        ...state,
        transactionDetails: {
          ...state.transactionDetails,
          [action.transactionId]: loadedTransactionDetails,
        },
      };
    }
  ),
  on(
    fromWalletTransactions.loadWalletTransactionDetailsFail,
    (state: WalletTransactionsState, action): WalletTransactionsState => {
      const failedTransactionDetails: transactionDetailsEntity = {
        details: null,
        loading: false,
        loaded: true,
      };

      return {
        ...state,
        transactionDetails: {
          ...state.transactionDetails,
          [action.transactionId]: failedTransactionDetails,
        },
      };
    }
  ),
  on(
    fromWalletTransactions.openTransactionDetailsDialog,
    (state: WalletTransactionsState, action): WalletTransactionsState => {
      const transactionDetail: transactionDetailsEntity | undefined =
        state.transactionDetails[action.transactionId];

      if (!transactionDetail || !transactionDetail.details) {
        return {
          ...state,
          transactionDetails: {
            ...state.transactionDetails,
            [action.transactionId]: {
              details: null,
              loading: false,
              loaded: false,
            },
          },
        };
      }

      return {
        ...state,
      };
    }
  )
);

export const getWalletTransactionsLoading = (
  state: WalletTransactionsState
): boolean => state.loading;
export const getWalletTransactionsLoaded = (
  state: WalletTransactionsState
): boolean => state.loaded;
export const getWalletTransactionsPageSettings = (
  state: WalletTransactionsState
): any => {
  return state.paginationSettings;
};
