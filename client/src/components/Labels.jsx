import React from 'react'

const obj=[
    {
        type:"Savings",
        color:"#f9c851",
        percent:20
    },
    {
        type:"Investment",
        color:"#f9c851",
        percent:10
    },
    {
        type:"Expense",
        color:"rgb(255, 99, 132)",
        percent:30
    },
]

export const Labels = () => {
  return (
    <>
    {obj.map((v,i)=>{
        return <LabelComponent key={i} data={v}/>
    })}
    </>
  )
}

function LabelComponent({data}){
    if(!data)return <></>
    return (
        <div className="labels flex justify-between">
            <div className="flex gap-2">
                <div className="w-2 h-2 rounded py-3" style={{background:data.color ?? '#f9c851'}}></div>
                <h3 className='text-md'>{data.type ?? ""}</h3>
            </div>
            <h3 className='font-bold'>{data.percent ?? 0}</h3>
        </div>
    )
}

