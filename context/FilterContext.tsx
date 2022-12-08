import {createContext} from 'react';

export type SortOrder = 'ascending' | 'descending';

type OrderCategory = 'stars' | 'rating' | 'price';

export interface Filters {
  name: string;
  sort: OrderCategory | undefined;
  order: SortOrder;
  price: Array<number>;
}

interface FiltersContext {
  filters: Filters;
  setFilters: (filters: Filters) => void;
}
export const defaultFilter: Filters = {
  name: '',
  sort: undefined,
  order: 'descending',
  price: [0, 500],
};

const FilterContext = createContext<FiltersContext>({
  filters: defaultFilter,
  setFilters: () => {},
});

export default FilterContext;
