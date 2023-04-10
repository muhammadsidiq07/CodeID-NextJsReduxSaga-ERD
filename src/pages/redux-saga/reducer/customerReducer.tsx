import * as ActionType from "../constant/customerConstant";

const init_state = {
  customers: [],
  customer: [],
};

const CustomerReducer = (state = init_state, action: any) => {
  switch (action.type) {
    case ActionType.GET_CUSTOMER_REQUEST:
      return { ...state };
    case ActionType.GET_CUSTOMER_SUCCESS:
      return GetCustomer(state, action);
    case ActionType.ADD_CUSTOMER_REQUEST:
      return { ...state };
    case ActionType.ADD_CUSTOMER_SUCCESS:
      return AddCustomer(state, action);
    case ActionType.EDIT_CUSTOMER_REQUEST:
      return { ...state };
    case ActionType.EDIT_CUSTOMER_SUCCESS:
      return EditCustomer(state, action);
    case ActionType.DEL_CUSTOMER_REQUEST:
      return { ...state };
    case ActionType.DEL_CUSTOMER_SUCCESS:
      return DelCustomer(state, action);
    case ActionType.FIND_CUSTOMER_REQUEST:
      return { ...state };
    case ActionType.FIND_CUSTOMER_SUCCESS:
      return FindCustomer(state, action);
    default:
      return { ...state };
  }
};

const GetCustomer = (state: any, action: any) => {
  return {
    ...state,
    customers: action.payload,
  };
};

const AddCustomer = (state: any, action: any) => {
  const { payload } = action;
  return {
    ...state,
    customers: [...state.customers, payload],
  };
};

const DelCustomer = (state: any, action: any) => {
  return {
    ...state,
  };
};

const FindCustomer = (state: any, action: any) => {
  const { payload } = action;
  return {
    ...state,
    customer: payload,
  };
};

const EditCustomer = (state: any, action: any) => {
  return {
    ...state,
  };
};
export default CustomerReducer;