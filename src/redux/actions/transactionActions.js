import { GET_TRANSACTIONS } from "./types";

export const getTransactions= () => dispatch => {
    dispatch({ type: GET_TRANSACTIONS });
};