import React from 'react'
import 'boxicons'

import {default as api} from '../store/apiSlice';

const List = () => {
    const {data,isFetching,isSuccess,isError} = api.useGetLabelsQuery()
    const [deleteTransaction]= api.useDeleteTransactionMutation()
    let Transactions;

    const handleClick =(e)=>{
        if(!e.target.dataset.id) return 0;
        deleteTransaction({_id:e.target.dataset.id})
    }

    if(isFetching){
        Transactions = <div>Loading</div>
    }else if(isSuccess){
        Transactions = data.map((v,i)=>{
        return <Transaction key={i} category={v} handler={handleClick}/>
    })
    }else if(isError){
        Transactions=<div>Error</div>
    }
    

  return (
    <div className='flex flex-col py-6 gap-3'>
        <h1 className="py-4 text-xl font-bold">History</h1>
        {Transactions}
    </div>
  )
}

function Transaction({category,handler}){
    if(!category) return null;
    return (
        <div className="item flex justify-center bg-gray-50 py-2 rounded-r" style={{borderRight:`8px solid ${category.color ?? 'pink'}`}}>
            <button className='px-3' onClick={handler}><box-icon size="20px" color={category.color?? 'Red'} name="trash" data-id={category._id?? ''}></box-icon></button>
            <span className="block w-full">{category.name?? ""}</span>
        </div>
    )
}

export default List