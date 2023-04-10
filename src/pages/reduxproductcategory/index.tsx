import React, { useEffect, useState } from 'react'
import Layout from '@/component/layout'
import { useDispatch, useSelector } from 'react-redux'
import { DeleteProductCategoryRequest, GetProductCategoryRequest } from '../redux-saga/action/productcategoryAction'
import FormikProductCategoryCreate from './ProductCategoryFromikCreate'
import FormikProductCategoryEdit from './ProductCategoryFormikEdit'


export default function ProductCategoryRedux() {
  const dispatch = useDispatch();
  const { productCategorys } = useSelector((state: any) => state.productCategoryState);
  const [refresh, setRefresh] = useState<boolean>(false);
  const [display, setDisplay] = useState<boolean>(false);
  const [displayEdit, setDisplayEdit] = useState<boolean>(false);
  const [id, setId] = useState();
    
    useEffect(() => {
        dispatch(GetProductCategoryRequest())
        setRefresh(false)
    }, [refresh]);

    const onClick = (id: any) => {
        setDisplayEdit(true);
        setId(id);
      };

      const onDelete = (id: any) => {
        dispatch(DeleteProductCategoryRequest(id));
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
            <FormikProductCategoryEdit
              setRefresh={setRefresh}
              setDisplay={setDisplayEdit}
              id={id}
            />
          ) : display ? (
            <FormikProductCategoryCreate
              setRefresh={setRefresh}
              setDisplay={setDisplay}
            />
          ) : (
<>
<h2>List Product Category</h2>
<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" onClick={()=>setDisplay(true)}> Add Customer </button>
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase dark:text-gray-400">
                <tr>
                    <th scope="col" className="px-6 py-3 bg-gray-50 dark:bg-gray-800">Product Category ID</th>
                        <th scope="col" className="px-6 py-3">Name</th>
                        <th scope="col" className="px-6 py-3 bg-gray-50 dark:bg-gray-800">Description</th>
                        <th scope="col" className="px-6 py-3">CreatedAT</th>
                        <th scope="col" className="px-6 py-3 bg-gray-50 dark:bg-gray-800">UpdatedAT</th>
                    <th scope="col" className="px-6 py-3">Action</th>
                </tr>
        </thead>
    <tbody>
{productCategorys  && productCategorys.map((item: any) => {
    return (

<>
    <tr className="border-b border-gray-200 dark:border-gray-700">
        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
        {item.customerId}
    </th>
    <td className="px-6 py-4">
        {item.name}
    </td>
    <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
        {item.description}
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