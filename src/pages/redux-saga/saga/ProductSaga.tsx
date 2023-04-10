import { call, put } from "redux-saga/effects";
import Product from "@/pages/api/Product";
import { GetProductSuccess, GetProductFailed, 
  AddProductSuccess, AddProductFailed, 
  FindProductSuccess, FindProductFailed, 
  EditProductSuccess, EditProductFailed, 
  DelProductSuccess, DelProductFailed } from "../action/productAction";

function* handleGetProduct(): any {
  try {
    const result = yield call(Product.GetData);
    yield put(GetProductSuccess(result));
  } catch (error) {
    yield put(GetProductFailed(error));
  }
}

function* handleAddProduct(action: any): any {
  const { payload } = action;
  try {
    const result = yield call(Product.Create, payload);
    yield put(AddProductSuccess(result.data));
  } catch (error) {
    yield put(AddProductFailed(error));
  }
}

function* handleFindProduct(action: any): any {
  const { payload } = action;
  try {
    const result = yield call(Product.findData, payload);
    yield put(FindProductSuccess(result));
  } catch (error) {
    yield put(FindProductFailed(error));
  }
}

function* handleEditProduct(action: any): any {
  const { payload } = action;
  try {
    const result = yield call(Product.Update, payload);
    yield put(EditProductSuccess(result.data));
  } catch (error) {
    yield put(EditProductFailed(error));
  }
}

function* handleDelProduct(action: any): any {
  const { payload } = action;
  try {
    const result = yield call(Product.Deleted, payload);
    yield put(DelProductSuccess(result.data));
  } catch (error) {
    yield put(DelProductFailed(error));
  }
}

export { handleGetProduct, handleAddProduct, handleFindProduct, handleEditProduct, handleDelProduct };