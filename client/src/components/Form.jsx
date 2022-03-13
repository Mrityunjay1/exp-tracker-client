import React from 'react'
import {useForm} from 'react-hook-form'
import List from './List';
import {default as api} from '../store/apiSlice'

const Form = () => {
    const {register, handleSubmit, errors,resetField} = useForm();
    const [addTransaction] = api.useAddTransactionMutation();

    const onSubmit= async(data)=>{
        if(!data) return {};
        await addTransaction(data).unwrap();
        resetField('name')
        resetField('amount')
    }
  return (
    <div className='form max-w-sm mx-auto w-96'>
        <h1 className="font-bold pb-4 text-xl">Transaction</h1>
        <form onSubmit={handleSubmit(onSubmit)} id="form">
            <div className="grid gap-4">
                <div className="input-group">
                    <input  {...register('name')} type="text" placeholder='Salary,HouseRent, SIP' className='form-input' />
                </div>
                <select {...register('type')}className="form-input">
                    <option value='Investment' defaultValue>Investment</option>
                    <option value='Expense' defaultValue>Expense</option>
                    <option value='Savings' defaultValue>Savings</option>
                </select>
                <div className="input-group">
                    <input {...register('amount')} type="text" placeholder='amount' className='form-input' />
                </div>
                <div className="submit-btn">
                    <button className='border py-2 text-white bg-red-900 w-full'>Make transaction</button>
                </div>
            </div>
        </form>
        <List />
    </div>
  )
}

export default Form