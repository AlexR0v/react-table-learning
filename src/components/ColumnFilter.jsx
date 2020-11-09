import React from 'react'

export const ColumnFilter = ({column}) => {
  const {setFilter} = column
  return (
    <>
      <select onChange={(e)=>{
        setFilter(e.target.value)
      }}>
        <option value=''>All</option>
        <option value={'China'}>China</option>
        <option value={'Russia'}>Russia</option>
      </select>
      {/*<input*/}
      {/*  value={filterValue || ''}*/}
      {/*  onChange={e=>setFilter(e.target.value)}*/}
      {/*/>*/}
    </>
  )
}