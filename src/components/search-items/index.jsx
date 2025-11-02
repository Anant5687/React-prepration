import React, { useMemo, useState } from 'react';
import Item from './item';
import useDebounce from '../../hooks/useDebounce';

const SearchItem = () => {
  const [search, setSearch] = useState('');
  const debouncedValue = useDebounce(search, 500);

  const items = useMemo(() => {
    return [
      'React',
      'Next.js',
      'Redux',
      'JavaScript',
      'TypeScript',
      'Tailwind',
    ].filter((ele) => ele.toLowerCase().includes(debouncedValue?.toLowerCase()));
  }, [debouncedValue]);

  return (
    <>
      <input
        type="text"
        value={search}
        placeholder="Search item here"
        onChange={(e) => setSearch(e.target.value)}
      />
      {items?.length ? (
        <>
          {items?.map((ele, i) => (
            <Item ele={ele} key={i} />
          ))}
        </>
      ) : (
        <p> No Data Found!</p>
      )}
    </>
  );
};

export default SearchItem;
