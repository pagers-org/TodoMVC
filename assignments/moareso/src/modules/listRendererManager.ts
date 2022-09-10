import { useState } from 'react';

export type VisibleStatus<U> = 'all' | U;

const listRendererManager = <T extends { status: U }, U>(list: T[], initialStatus: VisibleStatus<U> = 'all') => {
  const [visibleStatus, setVisibleStatus] = useState<VisibleStatus<U>>(initialStatus);

  const updateVisibleStatus = (nextStatus: VisibleStatus<U>) => {
    setVisibleStatus(nextStatus);
  };

  const getListBy = (status: VisibleStatus<U>) => {
    if (status === 'all') return list;
    return list.filter(item => item.status === status);
  };

  return {
    visibleStatus,
    updateVisibleStatus,
    getListBy,
  };
};

export default listRendererManager;
