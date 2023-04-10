import { call, put } from 'redux-saga/effects';
import Customer from '@/pages/api/Customer';
import { GetCustomerSuccess, GetCustomerFailed, 
    AddCustomerSuccess, AddCustomerFailed,
    EditCustomerSuccess, EditCustomerFailed,
    DelCustomerSuccess, DelCustomerFailed, 
    FindCustomerSuccess, FindCustomerFailed } from '../action/customerAction';

function* handleGetCustomer(): any {
    try {
        const result = yield call(Customer.GetData)
        yield put(GetCustomerSuccess(result))
    } catch (error) {
        yield put(GetCustomerFailed(error))
    }
}

function* handleCreateCustomer(action: any): any {
    const { payload } = action;
    try {
        const result = yield call(Customer.Create, payload)
        yield put(AddCustomerSuccess(result))
    } catch (error) {
        yield put(AddCustomerFailed(error))
    }
}

function* handleEditCustomer(action: any): any {
    const { payload } = action;
    try {
      const result = yield call(Customer.Update, payload);
      yield put(EditCustomerSuccess(result.data));
    } catch (error) {
      yield put(EditCustomerFailed(error));
    }
  }
  
  function* handleDelCustomer(action: any): any {
    const { payload } = action;
    try {
      const result = yield call(Customer.Deleted, payload);
      yield put(DelCustomerSuccess(result.data));
    } catch (error) {
      yield put(DelCustomerFailed(error));
    }
  }

  function* handleFindCustomer(action: any): any {
    const { payload } = action;
    try {
      const result = yield call(Customer.findData, payload);
      yield put(FindCustomerSuccess(result));
    } catch (error) {
      yield put(FindCustomerFailed(error));
    }
  }

  export { handleGetCustomer, handleCreateCustomer, 
    handleFindCustomer, handleEditCustomer, handleDelCustomer };