import React, { use, useEffect, useState } from 'react'
import Layout from '@/component/layout'
import { useDispatch, useSelector } from 'react-redux'
import { DelProductRequest, GetProductRequest } from '../redux-saga/action/productAction'
import FormikProductCreate from './ProductFormikCreate'
import FormikProductEdit from './ProductFormikEdit'


export default function ProductRedux(props: any) {
    const dispatch = useDispatch();
    const { products } = useSelector((state: any) => state.productState);
    const [refresh, setRefresh] = useState<any>(false);
    const [display, setDisplay] = useState<any>(false);
    const [displayEdit, setDisplayEdit] = useState<any>(false);
    const [id, setId] = useState();
    const [prevImg, setPrevImg] = useState();
  
    useEffect(() => {
        dispatch(GetProductRequest());
        setPrevImg(props.preImg);
      }, [refresh, dispatch]);
  
    const onClick = (id: any) => {
      setDisplayEdit(true);
      setId(id);
    };
  
    const onDelete = async (id: any) => {
      dispatch(DelProductRequest(id));
      window.alert("Delete Successfully");
      setDisplay(false);
      setRefresh(true);
    };

    return (
        <div>
            <Layout>
                <>
            {displayEdit ? (
            <FormikProductEdit
              setRefresh={setRefresh}
              setDisplay={setDisplayEdit}
              id={id}
            />
          ) : display ? (
            <FormikProductCreate
              setRefresh={setRefresh}
              setDisplay={setDisplay}
            />
          ) : (
<>
<h2>List Product</h2>
<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" onClick={()=>setDisplay(true)}> Add Product </button>
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase dark:text-gray-400">
                <tr>
                    <th scope="col" className="px-6 py-3 bg-gray-50 dark:bg-gray-800">Product ID</th>
                        <th scope="col" className="px-6 py-3">Name</th>
                        <th scope="col" className="px-6 py-3 bg-gray-50 dark:bg-gray-800">Description</th>
                        <th scope="col" className="px-6 py-3">Category</th>
                        <th scope="col" className="px-6 py-3 bg-gray-50 dark:bg-gray-800">Price</th>
                        <th scope="col" className="px-6 py-3">Image</th>
                        <th scope="col" className="px-6 py-3 bg-gray-50 dark:bg-gray-800">CreatedAT</th>
                        <th scope="col" className="px-6 py-3">UpdatedAT</th>
                        <th scope="col" className="px-6 py-3 bg-gray-50 dark:bg-gray-800">Action</th>
                </tr>
        </thead>
    <tbody>
{products && products.map((item: any) => {
    return (

<>
    <tr className="border-b border-gray-200 dark:border-gray-700">
        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
        {item.productId}
    </th>
    <td className="px-6 py-4">{item.description}</td>
    <td className="px-4 py-4 bg-gray-50 dark:bg-gray-800">{item.category ? item.category.id : null}</td>
    <td className="px-6 py-4">{item.name}</td>
    <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">{item.price}</td>
    <td className="px-6 py-4"><img src={prevImg} alt={item.name} style={{ width: "100px", height: "100px" }} /> </td>
    <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">{item.createdat}</td>
    <td className="px-6 py-4">{item.updatedat}</td>
    <td className="px-6 py-4bg-gray-50 dark:bg-gray-800">
    <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full" onClick={() => onClick(item.productId)}>Update</button>                                                    
    <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full" onClick={() => onDelete(item.productId)}>Delete</button>
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