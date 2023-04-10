import { call, put } from 'redux-saga/effects';
import Order from '@/pages/api/Order';
import { GetOrderSuccess, GetOrderFailed, 
    AddOrderSuccess, AddOrderFailed,
    EditOrderSuccess, EditOrderFailed,
    DelOrderSuccess, DelOrderFailed, 
    FindOrderSuccess, FindOrderFailed } from '../action/orderAction';

function* handleGetOrder(): any {
    try {
        const result = yield call(Order.GetData)
        yield put(GetOrderSuccess(result))
    } catch (error) {
        yield put(GetOrderFailed(error))
    }
}

function* handleCreateOrder(action: any): any {
    const { payload } = action;
    try {
        const result = yield call(Order.Create, payload)
        yield put(AddOrderSuccess(result))
    } catch (error) {
        yield put(AddOrderFailed(error))
    }
}

function* handleEditOrder(action: any): any {
    const { payload } = action;
    try {
      const result = yield call(Order.Update, payload);
      yield put(EditOrderSuccess(result.data));
    } catch (error) {
      yield put(EditOrderFailed(error));
    }
  }
  
  function* handleDelOrder(action: any): any {
    const { payload } = action;
    try {
      const result = yield call(Order.Deleted, payload);
      yield put(DelOrderSuccess(result.data));
    } catch (error) {
      yield put(DelOrderFailed(error));
    }
  }

  function* handleFindOrder(action: any): any {
    const { payload } = action;
    try {
      const result = yield call(Order.findData, payload);
      yield put(FindOrderSuccess(result));
    } catch (error) {
      yield put(FindOrderFailed(error));
    }
  }

  export { handleGetOrder, handleCreateOrder, 
     handleEditOrder, handleDelOrder, handleFindOrder };