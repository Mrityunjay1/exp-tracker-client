import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react';


const baseUri = 'https://money-tracker123.herokuapp.com/'
export const apiSlice = createApi({
    baseQuery: fetchBaseQuery({baseUrl: baseUri}),
    endpoints : builder =>({
        getCategories : builder.query({
            query:()=> '/api/categories',
            provideTags: ['categories']
        }),
        getLabels:builder.query({
            query:()=>'/api/labels',
            provideTags: ['transaction']
        }),
        //add new transaction
         addTransaction : builder.mutation({
            query : (initialTransaction) => ({
                  // post: 'http://localhost:8080/api/transaction'
                url: '/api/transaction',
                method: "POST",
                body: initialTransaction
            }),
            invalidatesTags: ['transaction']
        }),
        //delete record
        deleteTransaction: builder.mutation({
            query: recordid =>({
                url: '/api/transaction',
                method:'DELETE',
                body : recordid
            }),
            invalidatesTags: ['transaction']
        })

    })
})
export default apiSlice;