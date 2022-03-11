import React from 'react'
import 'boxicons'

const obj=[
    {
        name:"Savings",
        color:"#f9c851",
    },
    {
        name:"Investment",
        color:"#f9c851",
    },
    {
        name:"Expense",
        color:"rgb(255, 99, 132)",
    },
]

const List = () => {
  return (
    <div className='flex flex-col py-6 gap-3'>
        <h1 className="py-4 text-xl font-bold">History</h1>
        {obj.map((v,i)=>{
        return<Transaction category={v} key={i}/>
        }
        )}
    </div>
  )
}

function Transaction({category}){
    if(!category) return null;
    return (
        <div className="item flex justify-center bg-gray-50 py-2 rounded-r" style={{borderRight:`8px solid ${category.color ?? 'pink'}`}}>
            <button className='px-3'><box-icon size="20px" color={category.color?? 'Red'} name="trash"></box-icon></button>
            <span className="block w-full">{category.name?? ""}</span>
        </div>
    )
}

export default List