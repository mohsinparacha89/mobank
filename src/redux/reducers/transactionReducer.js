import { GET_TRANSACTIONS } from "../actions/types";

const initialState = {
  transactions: [
    {
      id: "1",
      date: "22/07/2018",
      amount: "1000",
      description: "cash withdrawl"
    },
    {
      id: "2",
      date: "15/07/2018",
      amount: "587",
      description: "cash withdrawl"
    },
    {
      id: "3",
      date: "08/07/2018",
      amount: "674",
      description: "Retail"
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
