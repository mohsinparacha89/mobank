import { GET_TRANSACTIONS } from "../actions/types";

const initialState = {
  transactions: [
    {
      id: "1",
      date: new Date(),
      amount: "1000",
      description: "cash withdrawl"
    }
  ]
};
export default function(state = initialState, action) {
  switch (action.type) {
    case GET_TRANSACTIONS: {
        console.log("calling get transactions", ...state);
      return {
          
        ...state
      };
    }
    default:
      return state;
  }
}
