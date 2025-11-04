import React, { lazy, Suspense } from 'react';

const UserList = lazy(()=> import('./user-list'))

const SuspenseUserList = () => {
  return (
    <Suspense fallback={<h1>Loading....</h1>}>
      <UserList />
    </Suspense>
  );
};

export default SuspenseUserList;
