export const FILTER_TYPE = {
  ALL: 'All',
  ACTIVE: 'Active',
  COMPLETED: 'Completed',
} as const;

export const FILTER_TYPE_ARRAY = [FILTER_TYPE.ALL, FILTER_TYPE.ACTIVE, FILTER_TYPE.COMPLETED];
