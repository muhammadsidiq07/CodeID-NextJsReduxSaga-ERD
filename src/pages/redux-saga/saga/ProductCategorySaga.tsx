import { call, put } from 'redux-saga/effects';
import ProductCategory from '@/pages/api/ProductCategory';
import { GetProductCategorySuccess, GetProductCategoryFailed, 
    AddProductCategorySuccess, AddProductCategoryFailed,
    EditProductCategorySuccess, EditProductCategoryFailed,
    DeleteProductCategorySuccess, DeleteProductCategoryFailed, 
    FindProductCategorySuccess, FindProductCategoryFailed } from '../action/productcategoryAction';

function* handleGetProductCategory(): any {
    try {
        const result = yield call(ProductCategory.GetData)
        yield put(GetProductCategorySuccess(result))
    } catch (error) {
        yield put(GetProductCategoryFailed(error))
    }
}

function* handleCreateProductCategory(action: any): any {
    const { payload } = action;
    try {
        const result = yield call(ProductCategory.Create, payload)
        yield put(AddProductCategorySuccess(result))
    } catch (error) {
        yield put(AddProductCategoryFailed(error))
    }
}

function* handleEditProductCategory(action: any): any {
    const { payload } = action;
    try {
      const result = yield call(ProductCategory.Update, payload);
      yield put(EditProductCategorySuccess(result.data));
    } catch (error) {
      yield put(EditProductCategoryFailed(error));
    }
  }
  
  function* handleDelProductCategory(action: any): any {
    const { payload } = action;
    try {
      const result = yield call(ProductCategory.Deleted, payload);
      yield put(DeleteProductCategorySuccess(result.data));
    } catch (error) {
      yield put(DeleteProductCategoryFailed(error));
    }
  }

  function* handleFindProductCategory(action: any): any {
    const { payload } = action;
    try {
      const result = yield call(ProductCategory.findData, payload);
      yield put(FindProductCategorySuccess(result));
    } catch (error) {
      yield put(FindProductCategoryFailed(error));
    }
  }

  export { handleGetProductCategory, handleCreateProductCategory, 
    handleFindProductCategory, handleEditProductCategory, handleDelProductCategory };