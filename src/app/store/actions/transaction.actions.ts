import { createAction, props } from '@ngrx/store';

const LOAD_WALLET_TRANSACTIONS = '[Wallet] Load Wallet Transactions';
const LOAD_WALLET_TRANSACTIONS_SUCCESS =
  '[Wallet] Load Wallet Transactions Success';
const LOAD_WALLET_TRANSACTIONS_FAIL = '[Wallet] Load Wallet Transactions Fail';
const UPDATE_WALLET_TRANSACTIONS_PAGINATION_SETTINGS =
  '[Wallet] Update Wallet Transactions Pagination Settings';
const RESET_WALLET_TRANSACTIONS_STATE =
  '[Wallet] Reset Wallet Transactions State';
const LOAD_WALLET_TRANSACTIONS_FIRST_PAGE =
  '[Wallet] Load Wallet Transactions First Page';
const LOAD_WALLET_TRANSACTION_DETAILS =
  '[Wallet] Load Wallet Transaction Details';
const LOAD_WALLET_TRANSACTION_DETAILS_SUCCESS =
  '[Wallet] Load Wallet Transaction Details Success';
const LOAD_WALLET_TRANSACTION_DETAILS_FAIL =
  '[Wallet] Load Wallet Transaction Details Fail';
const OPEN_TRANSACTION_DETAILS_DIALOG =
  '[Wallet] Open Transaction Details Dialog';

export const loadWalletTransactions = createAction(
  LOAD_WALLET_TRANSACTIONS,
  props<{ userId: number }>()
);
export const loadWalletTransactionsSuccess = createAction(
  LOAD_WALLET_TRANSACTIONS_SUCCESS,
  props<{ transactions: any[]; totalRows: number }>()
);
export const loadWalletTransactionsFail = createAction(
  LOAD_WALLET_TRANSACTIONS_FAIL
);
export const updateWalletTransactionsPaginationSettings = createAction(
  UPDATE_WALLET_TRANSACTIONS_PAGINATION_SETTINGS,
  props<{ paginationSettings: any; userId: number }>()
);
export const resetLoadedWalletTransactions = createAction(
  RESET_WALLET_TRANSACTIONS_STATE
);
export const loadWalletTransactionsFirstPage = createAction(
  LOAD_WALLET_TRANSACTIONS_FIRST_PAGE
);
export const loadWalletTransactionDetails = createAction(
  LOAD_WALLET_TRANSACTION_DETAILS,
  props<{ contractorId: number; transactionId: number }>()
);
export const loadWalletTransactionDetailsSuccess = createAction(
  LOAD_WALLET_TRANSACTION_DETAILS_SUCCESS,
  props<{ transactionId: number; transaction: any }>()
);
export const loadWalletTransactionDetailsFail = createAction(
  LOAD_WALLET_TRANSACTION_DETAILS_FAIL,
  props<{ transactionId: number }>()
);
export const openTransactionDetailsDialog = createAction(
  OPEN_TRANSACTION_DETAILS_DIALOG,
  props<{ contractorId: number; transactionId: number }>()
);
