import { takeEvery, all} from 'redux-saga/effects'
import * as ActionTypeUser from '../constant/userConstant'
import { handleSignin, handleSignout, handleSignup } from './UserSaga'
import { handleGetCustomer, handleCreateCustomer, 
    handleEditCustomer, handleDelCustomer, handleFindCustomer } from './CustomerSaga'
import * as ActionTypeCustomer from '../constant/customerConstant'
import { handleGetOrder, handleCreateOrder, 
    handleEditOrder, handleDelOrder, handleFindOrder } from './OrderSaga'
import * as ActionTypeOrder from '../constant/orderConstant'
import { handleGetProductCategory, handleCreateProductCategory, 
    handleEditProductCategory, handleDelProductCategory, handleFindProductCategory } from './ProductCategorySaga'
import * as ActionTypeProductCategory from '../constant/productcategoryConstant'
import { handleGetProduct, handleAddProduct, 
    handleEditProduct, handleDelProduct, handleFindProduct } from './ProductSaga'
import * as ActionTypeProduct from '../constant/productConstant'
import { handleGetOrderDetail, handleCreateOrderDetail, 
    handleEditOrderDetail, handleDelOrderDetail, handleFindOrderDetail } from './OrderDetailSaga'
import * as ActionTypeOrderDetail from '../constant/orderdetailConstant'

function* watchAll(){
    yield all([
        takeEvery(ActionTypeUser.USER_SIGNIN_REQUEST, handleSignin),
        takeEvery(ActionTypeUser.USER_SIGNOUT_REQUEST, handleSignout),
        takeEvery(ActionTypeUser.USER_SIGNUP_REQUEST, handleSignup),

        takeEvery(ActionTypeCustomer.GET_CUSTOMER_REQUEST, handleGetCustomer),
        takeEvery(ActionTypeCustomer.ADD_CUSTOMER_REQUEST, handleCreateCustomer),
        takeEvery(ActionTypeCustomer.EDIT_CUSTOMER_REQUEST, handleEditCustomer),
        takeEvery(ActionTypeCustomer.DEL_CUSTOMER_REQUEST, handleDelCustomer),
        takeEvery(ActionTypeCustomer.FIND_CUSTOMER_REQUEST, handleFindCustomer),

        takeEvery(ActionTypeOrder.GET_ORDER_REQUEST, handleGetOrder),
        takeEvery(ActionTypeOrder.ADD_ORDER_REQUEST, handleCreateOrder),
        takeEvery(ActionTypeOrder.EDIT_ORDER_REQUEST, handleEditOrder),
        takeEvery(ActionTypeOrder.DEL_ORDER_REQUEST, handleDelOrder),
        takeEvery(ActionTypeOrder.FIND_ORDER_REQUEST, handleFindOrder),

        takeEvery(ActionTypeProductCategory.GET_PRODUCTCATEGORY_REQUEST, handleGetProductCategory),
        takeEvery(ActionTypeProductCategory.ADD_PRODUCTCATEGORY_REQUEST, handleCreateProductCategory),
        takeEvery(ActionTypeProductCategory.EDIT_PRODUCTCATEGORY_REQUEST, handleEditProductCategory),
        takeEvery(ActionTypeProductCategory.DEL_PRODUCTCATEGORY_REQUEST, handleDelProductCategory),
        takeEvery(ActionTypeProductCategory.FIND_PRODUCTCATEGORY_REQUEST, handleFindProductCategory),

        takeEvery(ActionTypeProduct.GET_PRODUCT_REQUEST, handleGetProduct),
        takeEvery(ActionTypeProduct.ADD_PRODUCT_REQUEST, handleAddProduct),
        takeEvery(ActionTypeProduct.EDIT_PRODUCT_REQUEST, handleEditProduct),
        takeEvery(ActionTypeProduct.DEL_PRODUCT_REQUEST, handleDelProduct),
        takeEvery(ActionTypeProduct.FIND_PRODUCT_REQUEST, handleFindProduct),

        takeEvery(ActionTypeOrderDetail.GET_ORDERDETAIL_REQUEST, handleGetOrderDetail),
        takeEvery(ActionTypeOrderDetail.ADD_ORDERDETAIL_REQUEST, handleCreateOrderDetail),
        takeEvery(ActionTypeOrderDetail.EDIT_ORDERDETAIL_REQUEST, handleEditOrderDetail),
        takeEvery(ActionTypeOrderDetail.DEL_ORDERDETAIL_REQUEST, handleDelOrderDetail),
        takeEvery(ActionTypeOrderDetail.FIND_ORDERDETAIL_REQUEST, handleFindOrderDetail),

    ])
}

export default watchAll