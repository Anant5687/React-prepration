import React, { lazy, Suspense } from 'react';
import { useTheme } from '../../context/theme.context';

const UserList = lazy(() => import('./user-list'));

const SuspenseUserList = () => {
  const { theme, changeTheme } = useTheme();
  return (
    <>
      <button onClick={changeTheme}>Change theme</button>
      <Suspense fallback={<h1>Loading....</h1>}>
        <UserList theme={theme} />
      </Suspense>
    </>
  );
};

export default SuspenseUserList;
