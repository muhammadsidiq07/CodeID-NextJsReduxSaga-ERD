import * as ActionType from "../constant/productConstant";

const init_state = {
  products: [],
  product: [],
};

const ProductReduce = (state = init_state, action: any) => {
  switch (action.type) {
    case ActionType.GET_PRODUCT_REQUEST:
      return { ...state };
    case ActionType.GET_PRODUCT_SUCCESS:
      return GetProduct(state, action);
    case ActionType.ADD_PRODUCT_REQUEST:
      return { ...state };
    case ActionType.ADD_PRODUCT_SUCCESS:
      return AddProduct(state, action);
    case ActionType.DEL_PRODUCT_REQUEST:
      return { ...state };
    case ActionType.DEL_PRODUCT_SUCCESS:
      return DelProduct(state, action);
    case ActionType.FIND_PRODUCT_REQUEST:
      return { ...state };
    case ActionType.FIND_PRODUCT_SUCCESS:
      return FindProduct(state, action);
    case ActionType.EDIT_PRODUCT_REQUEST:
      return { ...state };
    case ActionType.EDIT_PRODUCT_SUCCESS:
      return EditProduct(state, action);
    default:
      return { ...state };
  }
};

const GetProduct = (state: any, action: any) => {
  return {
    ...state,
    products: action.payload,
  };
};

const AddProduct = (state: any, action: any) => {
  const { payload } = action;
  return {
    ...state,
    products: [...state.products, payload],
  };
};

const DelProduct = (state: any, action: any) => {
  return {
    ...state,
  };
};

const FindProduct = (state: any, action: any) => {
  const { payload } = action;
  return {
    ...state,
    product: payload,
  };
};

const EditProduct = (state: any, action: any) => {
  return {
    ...state,
  };
};
export default ProductReduce;