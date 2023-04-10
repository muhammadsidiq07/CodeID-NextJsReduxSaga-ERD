import { call, put } from 'redux-saga/effects';
import OrderDetail from '@/pages/api/OrderDetail';
import { GetOrderDetailSuccess, GetOrderDetailFailed, 
    AddOrderDetailSuccess, AddOrderDetailFailed,
    EditOrderDetailSuccess, EditOrderDetailFailed,
    DelOrderDetailSuccess, DelOrderDetailFailed, 
    FindOrderDetailSuccess, FindOrderDetailFailed } from '../action/orderdetailAction';

function* handleGetOrderDetail(): any {
    try {
        const result = yield call(OrderDetail.GetData)
        yield put(GetOrderDetailSuccess(result))
    } catch (error) {
        yield put(GetOrderDetailFailed(error))
    }
}

function* handleCreateOrderDetail(action: any): any {
    const { payload } = action;
    try {
        const result = yield call(OrderDetail.Create, payload)
        yield put(AddOrderDetailSuccess(result))
    } catch (error) {
        yield put(AddOrderDetailFailed(error))
    }
}

function* handleEditOrderDetail(action: any): any {
    const { payload } = action;
    try {
      const result = yield call(OrderDetail.Update, payload);
      yield put(EditOrderDetailSuccess(result.data));
    } catch (error) {
      yield put(EditOrderDetailFailed(error));
    }
  }
  
  function* handleDelOrderDetail(action: any): any {
    const { payload } = action;
    try {
      const result = yield call(OrderDetail.Deleted, payload);
      yield put(DelOrderDetailSuccess(result.data));
    } catch (error) {
      yield put(DelOrderDetailFailed(error));
    }
  }

  function* handleFindOrderDetail(action: any): any {
    const { payload } = action;
    try {
      const result = yield call(OrderDetail.findData, payload);
      yield put(FindOrderDetailSuccess(result));
    } catch (error) {
      yield put(FindOrderDetailFailed(error));
    }
  }

  export { handleGetOrderDetail, handleCreateOrderDetail, 
    handleFindOrderDetail, handleEditOrderDetail, handleDelOrderDetail };