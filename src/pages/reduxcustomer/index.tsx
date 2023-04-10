import React, { use, useEffect, useState } from 'react'
import Customer from '../api/Customer'
import Layout from '@/component/layout'
import { useDispatch, useSelector } from 'react-redux'
import { DelCustomerRequest, GetCustomerRequest } from '../redux-saga/action/customerAction'
import FormikCustomerCreate from './CustomerFormikCreate'
import FormikCustomerEdit from './CustomerFormikEdit'


export default function CustomerRedux() {
  const dispatch = useDispatch();
  const { customers } = useSelector((state: any) => state.customerState);
  const [display, setDisplay] = useState<any>(false);
  const [refresh, setRefresh] = useState<any>(false);
  const [displayEdit, setDisplayEdit] = useState(false);
  const [id, setId] = useState();
    
    useEffect(() => {
        dispatch(GetCustomerRequest())
        setRefresh(false)
    }, [refresh, dispatch]);

    const onClick = (id: any) => {
        setDisplayEdit(true);
        setId(id);
      };

      const onDelete = (id: any) => {
        dispatch(DelCustomerRequest(id));
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
            <FormikCustomerEdit
              setRefresh={setRefresh}
              setDisplay={setDisplayEdit}
              id={id}
            />
          ) : display ? (
            <FormikCustomerCreate
              setRefresh={setRefresh}
              setDisplay={setDisplay}
            />
          ) : (
<>
<h2>List Customer</h2>
<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" onClick={()=>setDisplay(true)}> Add Customer </button>
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase dark:text-gray-400">
                <tr>
                    <th scope="col" className="px-6 py-3 bg-gray-50 dark:bg-gray-800">Customer ID</th>
                        <th scope="col" className="px-6 py-3">FirstName</th>
                        <th scope="col" className="px-6 py-3 bg-gray-50 dark:bg-gray-800">LastName</th>
                        <th scope="col" className="px-6 py-3">CreatedAT</th>
                        <th scope="col" className="px-6 py-3 bg-gray-50 dark:bg-gray-800">UpdatedAT</th>
                    <th scope="col" className="px-6 py-3">Action</th>
                </tr>
        </thead>
    <tbody>
{customers && customers.map((item: any) => {
    return (

<>
    <tr className="border-b border-gray-200 dark:border-gray-700">
        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
        {item.customerId}
    </th>
    <td className="px-6 py-4">
        {item.firstname}
    </td>
    <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
        {item.lastname}
    </td>
    <td className="px-6 py-4">
        {item.createdat}
    </td>
    <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
        {item.updatedat}
    </td>
    
    <td className="px-6 py-4">
    <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full" onClick={() => onClick(item.customerId)}>Update</button>                                                    
    <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full" onClick={() => onDelete(item.customerId)}>Delete</button>
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