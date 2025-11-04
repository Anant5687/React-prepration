import React, { useEffect, useState } from 'react';
import useDebounce from '../../hooks/useDebounce';

const UserList = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState('');
  const [renderData, setRenderData] = useState([]);
  const debouncedValue = useDebounce(search, 500);

  const fetchUsers = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const jsonRes = await res.json();
    setData(jsonRes);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  useEffect(() => {
    if (!data?.length) return;
    if (!debouncedValue) setRenderData(data);
    else {
      const filteredData = [...data]?.filter((ele) =>
        ele?.name?.toLowerCase().includes(debouncedValue?.toLowerCase())
      );
      setRenderData(filteredData);
    }
  }, [debouncedValue, data]);

  return (
    <div>
      <input
        value={search}
        placeholder="Search user..."
        onChange={(e) => setSearch(e.target.value)}
      />
      {renderData?.map((ele) => (
        <div key={ele?.id}>
          {ele?.name} | {ele?.email}
        </div>
      ))}
    </div>
  );
};

export default UserList;
