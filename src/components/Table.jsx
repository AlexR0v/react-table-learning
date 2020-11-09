import React, { useMemo } from 'react'
import { useTable, useSortBy, useFilters, usePagination } from 'react-table'
import { COLUMNS } from './columns'
import MOCK_DATA from './MOCK_DATA.json'
import './table.css'
import { ArrowDown, ArrowUp } from '../ui/Arrows'

const Table = () => {

  const columns = useMemo(() => COLUMNS, [])
  const data = useMemo(() => MOCK_DATA, [])

  const tableInstance = useTable({
    columns,
    data
  }, useFilters, useSortBy, usePagination)

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    nextPage,
    canNextPage,
    canPreviousPage,
    pageOptions,
    state,
    previousPage,
    gotoPage,
    pageCount,
    setPageSize
  } = tableInstance

  const {pageIndex, pageSize} = state

  return (
    <div style={{ width: '70%', margin: 'auto' }}>
      <table {...getTableProps()}>
        <thead>
        {
          headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {
                headerGroup.headers.map(column => (
                  <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                    {column.render('Header')}
                    <span>
                      {
                        column.isSorted ? (column.isSortedDesc ? <ArrowUp /> : <ArrowDown />) : null
                      }
                    </span>
                    <div>{column.canFilter ? column.render('Filter') : null}</div>
                  </th>
                ))
              }
            </tr>
          ))
        }
        </thead>
        <tbody {...getTableBodyProps()}>
        {
          page.map(row => {
            prepareRow(row)
            return (
              <tr {...row.getRowProps()}>
                {
                  row.cells.map(cell => (
                    <td {...cell.getCellProps()}>
                      {cell.render('Cell')}
                    </td>
                  ))
                }
              </tr>
            )
          })
        }
        </tbody>
      </table>
      <div>
        <span>
          Go to page{' '}
          <input
            type={'number'}
            defaultValue={pageIndex+1}
            onChange={e=>{
              const pageNumber = e.target.value ? +e.target.value - 1 : 0
              gotoPage(pageNumber)
            }}
            style={{width: '50px'}}
          />
        </span>
        <span>
          Page size:
          <select value={pageSize} onChange={e=>setPageSize(+e.target.value)}>
          <option value={5}>5</option>
          <option value={10}>10</option>
          <option value={15}>15</option>
          <option value={20}>20</option>
        </select>
        </span>
        <span>
          Page{' '}<strong>{pageIndex+1} of {pageOptions.length}</strong>{' '}
        </span>
        <button onClick={()=>gotoPage(0)} disabled={!canPreviousPage}>{'<<'}</button>
        <button onClick={()=>previousPage()} disabled={!canPreviousPage}>Prev</button>
        <button onClick={()=>nextPage()} disabled={!canNextPage}>Next</button>
        <button onClick={()=>gotoPage(pageCount-1)} disabled={!canNextPage}>{'>>'}</button>
      </div>
    </div>
  )
}

export default Table
