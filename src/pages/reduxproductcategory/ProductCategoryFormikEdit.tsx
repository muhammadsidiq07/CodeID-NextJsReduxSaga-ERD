import React, { useEffect, useState } from "react";
import ProductCategory from '../api/ProductCategory'
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { EditProductCategoryRequest } from '../redux-saga/action/productcategoryAction'

export default function ProductCategoryFormikEdit(props: any) {
  const dispatch = useDispatch();
  const { productCategory } = useSelector((state: any) => state.productCategoryState);

  useEffect(() => {
    ProductCategory.findData(props.id);
  }, [props.id, dispatch]); 

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      id: props.id,
      name: productCategory.name,
      description: productCategory.description,
      updatedat: productCategory.updatedat,
    },

    onSubmit: async (values) => {
      let payload = {
        id: values.id,
        name: values.name,
        description: values.description,
        updatedat: values.updatedat,
      };

      dispatch(EditProductCategoryRequest(values));
      props.setDisplay(false);
      window.alert("Data Successfully Insert");
      props.setRefresh(true);
    },
  });

  
  return (
    
    <>
    <div className = "flex items-stretch justify-center py-12">
        <div className = "mx-auto w-full max-w-[400px]">
        <div className="mb-6">
            <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
                <input
                    type='text'
                    name='name'
                    id='name'
                    placeholder='Name'
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    value={formik.values.name}
                    onChange={formik.handleChange}>
                </input>
            </div>
            <div className="mb-6">
            <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
                <input
                    type='text'
                    name='description'
                    id='fdescription'
                    placeholder='Description'
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    value={formik.values.description}
                    onChange={formik.handleChange}>
                </input>
            </div>
          </div>
        </div>
            <div>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" onClick={() => formik.handleSubmit()}>Simpan</button>

                <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full" onClick={() => props.setDisplay(false)}>cancel</button>
            </div>
    </>
  )
}