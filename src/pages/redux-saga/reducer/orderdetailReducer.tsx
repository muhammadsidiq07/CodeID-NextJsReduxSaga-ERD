import * as ActionType from "../constant/orderdetailConstant";

const init_state = {
  orderDetails: [],
  orderDetail: [],
};

const OrderDetailReducer = (state = init_state, action: any) => {
  switch (action.type) {
    case ActionType.GET_ORDERDETAIL_REQUEST:
      return { ...state };
    case ActionType.GET_ORDERDETAIL_SUCCESS:
      return GetOrderDetail(state, action);
    case ActionType.ADD_ORDERDETAIL_REQUEST:
      return { ...state };
    case ActionType.ADD_ORDERDETAIL_SUCCESS:
      return AddOrderDetail(state, action);
    case ActionType.EDIT_ORDERDETAIL_REQUEST:
      return { ...state };
    case ActionType.EDIT_ORDERDETAIL_SUCCESS:
      return EditOrderDetail(state, action);
    case ActionType.DEL_ORDERDETAIL_REQUEST:
      return { ...state };
    case ActionType.DEL_ORDERDETAIL_SUCCESS:
      return DelOrderDetail(state, action);
    case ActionType.FIND_ORDERDETAIL_REQUEST:
      return { ...state };
    case ActionType.FIND_ORDERDETAIL_SUCCESS:
      return FindOrderDetail(state, action);
    default:
      return { ...state };
  }
};

const GetOrderDetail = (state: any, action: any) => {
  return {
    ...state,
    orderDetails: action.payload,
  };
};

const AddOrderDetail = (state: any, action: any) => {
  const { payload } = action;
  return {
    ...state,
    orderDetails: [...state.orderDetails, payload],
  };
};

const DelOrderDetail = (state: any, action: any) => {
  return {
    ...state,
  };
};

const FindOrderDetail = (state: any, action: any) => {
  const { payload } = action;
  return {
    ...state,
    OrderDetail: payload,
  };
};

const EditOrderDetail = (state: any, action: any) => {
  return {
    ...state,
  };
};
export default OrderDetailReducer;