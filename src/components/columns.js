import { ColumnFilter } from './ColumnFilter'

export const COLUMNS = [
  {
    Header: 'Id',

    accessor: 'id',
    Filter: ColumnFilter,
    disableFilters: true,
  },
  {
    Header: 'First name',

    accessor: 'first_name',
    Filter: ColumnFilter,
    disableFilters: true,
    disableSortBy: true
  },
  {
    Header: 'Last Name',

    accessor: 'last_name',
    Filter: ColumnFilter,
    disableFilters: true,
    disableSortBy: true
  },
  {
    Header: 'Email',

    accessor: 'email',
    Filter: ColumnFilter,
    disableFilters: true,
    disableSortBy: true
  },
  {
    Header: 'Gender',

    accessor: 'gender',
    Filter: ColumnFilter,
    disableFilters: true,
    disableSortBy: true
  },
  {
    Header: 'Age',

    accessor: 'age',
    Filter: ColumnFilter,
    disableFilters: true,
    disableSortBy: true
  },
  {
    Header: 'Country',
    accessor: 'country',
    Filter: ColumnFilter,
    disableSortBy: true
  },
  {
    Header: 'Address',

    accessor: 'address',
    Filter: ColumnFilter,
    disableFilters: true,
    disableSortBy: true
  },
  {
    Header: 'Phone',

    accessor: 'phone',
    Filter: ColumnFilter,
    disableFilters: true,
    disableSortBy: true
  },
]
