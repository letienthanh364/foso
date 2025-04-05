export interface Pagination {
  count: number;
  numberOfPages: number;
  page: number;
  limit: number;
  hasNext: boolean;
  hasPrevious: boolean;
}

export interface PagingParams {
  page?: number | string;
  limit?: number | string;
}

export const defaultPagingQueryConfig: PagingParams = {
  limit: 50,
  page: 1,
};

export const defaultPagination: Pagination = {
  count: 100,
  numberOfPages: 2,
  page: 1,
  limit: 50,
  hasNext: true,
  hasPrevious: true,
};
