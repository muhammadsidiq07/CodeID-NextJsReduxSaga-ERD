import React, { use, useEffect, useState } from 'react'
import Layout from '@/component/layout'
import { useDispatch, useSelector } from 'react-redux'
import { DelOrderRequest, GetOrderRequest } from '../redux-saga/action/orderAction'
import FormikOrderCreate from './OrderFormikCreate'
import FormikOrderEdit from './OrderFormikEdit'

export default function CustomerRedux() {
  const dispatch = useDispatch();
  const { orders } = useSelector((state: any) => state.orderState);
  const [display, setDisplay] = useState<any>(false);
  const [refresh, setRefresh] = useState<any>(false);
  const [displayEdit, setDisplayEdit] = useState(false);
  const [id, setId] = useState();
    
    useEffect(() => {
        dispatch(GetOrderRequest())
        setRefresh(false)
    }, [refresh, dispatch]);

    const onClick = (id: any) => {
        setDisplayEdit(true);
        setId(id);
      };

      const onDelete = (id: any) => {
        dispatch(DelOrderRequest(id));
        window.alert("Delete Data Successfully ");
        setDisplay(false)
        setRefresh(!refresh)
        setId(id)
      };

    return (
        <div>
            <Layout>
                <>
            {displayEdit ? (
            <FormikOrderEdit
              setRefresh={setRefresh}
              setDisplay={setDisplayEdit}
              id={id}
            />
          ) : display ? (
            <FormikOrderCreate
              setRefresh={setRefresh}
              setDisplay={setDisplay}
            />
          ) : (
<>
<h2>List Customer</h2>
<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" onClick={()=>setDisplay(true)}> Add Order </button>
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase dark:text-gray-400">
                <tr>
                    <th scope="col" className="px-6 py-3 bg-gray-50 dark:bg-gray-800">Order ID</th>
                        <th scope="col" className="px-6 py-3">Total Product</th>
                        <th scope="col" className="px-6 py-3 bg-gray-50 dark:bg-gray-800">Total Price</th>
                        <th scope="col" className="px-6 py-3">CreatedAT</th>
                        <th scope="col" className="px-6 py-3 bg-gray-50 dark:bg-gray-800">UpdatedAT</th>
                    <th scope="col" className="px-6 py-3">Action</th>
                </tr>
        </thead>
    <tbody>
{orders && orders.map((item: any) => {
    return (

<>
    <tr className="border-b border-gray-200 dark:border-gray-700">
        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
        {item.orderId}
    </th>
    <td className="px-6 py-4">
        {item.totalproduct}
    </td>
    <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
        {item.totalprice}
    </td>
    <td className="px-6 py-4">
        {item.createdat}
    </td>
    <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
        {item.updatedat}
    </td>
    
    <td className="px-6 py-4">
    <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full" onClick={() => onClick(item.orderId)}>Update</button>                                                    
    <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full" onClick={() => onDelete(item.orderId)}>Delete</button>
</td>
    </tr>
        </>
            )
                })}
                    </tbody>
                            </table>
                                </div>
                            </>
                        )}
                    </>
                </Layout>
            </div>
        )
}