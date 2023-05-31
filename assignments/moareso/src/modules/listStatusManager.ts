import { useState } from 'react';

export type VisibleStatus<U> = 'all' | U;

// list의 현재 status와 status에 따른 필터링된 list를 관리하는 매니져
// list가 가질 수 있는 모든 status에 'all' 이라는 기본 status를 더해 관리한다.
const listStatusManager = <T extends { status: U }, U>(list: T[], initialStatus: VisibleStatus<U> = 'all') => {
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

export default listStatusManager;
