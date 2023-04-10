import { useFormik } from 'formik'
import React, { useState } from 'react'
import OrderDetail from '../api/OrderDetail'
import { useDispatch } from 'react-redux'
import { AddOrderDetailRequest } from '../redux-saga/action/orderdetailAction'


export default function OrderDetailFormikCreate(props: any) {
    const dispatch = useDispatch();
    const formik = useFormik({
        initialValues: {
            quantity: undefined,
        },

        onSubmit: async (values) => {
            let payload = {
            quantity: values.quantity,
            };

            dispatch(AddOrderDetailRequest(payload))
            props.setDisplay(false)
            window.alert('Data Successfully Insert')
            props.setRefresh(true)
        },
    })

    return (
    <>
        <div className = "flex items-stretch justify-center py-12">
        <div className = "mx-auto w-full max-w-[400px]">
            <div className="mb-6">
            <label htmlFor="quantity" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Quantity</label>
                <input
                    type='text'
                    name='quantity'
                    id='quantity'
                    placeholder='quantity'
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    value={formik.values.quantity}
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