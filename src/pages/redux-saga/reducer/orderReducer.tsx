import * as ActionType from '../constant/orderConstant';

const init_state = {
  orders: [],
  order: [],
};

const OrderReducer = (state = init_state, action: any) => {
  switch (action.type) {
    case ActionType.GET_ORDER_REQUEST:
      return { ...state };
    case ActionType.GET_ORDER_SUCCESS:
      return GetOrder(state, action);
    case ActionType.ADD_ORDER_REQUEST:
      return { ...state };
    case ActionType.ADD_ORDER_SUCCESS:
      return AddOrder(state, action);
    case ActionType.EDIT_ORDER_REQUEST:
      return { ...state };
    case ActionType.EDIT_ORDER_SUCCESS:
      return EditOrder(state, action);
    case ActionType.DEL_ORDER_REQUEST:
      return { ...state };
    case ActionType.DEL_ORDER_SUCCESS:
      return DelOrder(state, action);
    case ActionType.FIND_ORDER_REQUEST:
      return { ...state };
    case ActionType.FIND_ORDER_SUCCESS:
      return FindOrder(state, action);
    default:
      return { ...state };
  }
};

const GetOrder = (state: any, action: any) => {
  return {
    ...state,
    orders: action.payload,
  };
};

const AddOrder = (state: any, action: any) => {
  const { payload } = action;
  return {
    ...state,
    orders: [...state.orders, payload],
  };
};

const DelOrder = (state: any, action: any) => {
  return {
    ...state,
  };
};

const FindOrder = (state: any, action: any) => {
  const { payload } = action;
  return {
    ...state,
    order: payload,
  };
};

const EditOrder = (state: any, action: any) => {
  return {
    ...state,
  };
};
export default OrderReducer;