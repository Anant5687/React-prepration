import React, { useEffect, useState } from 'react';
import useInfiniteScroll from '../hooks/useInfiniteScroll';

const InfiniteScroll = () => {
  const [page, setPage] = useState(1);
  const [posts, setPosts] = useState([]);
  const [loader, setLoader] = useState(false);

  const [ref, isInterSecting] = useInfiniteScroll({ threshold: 1.0 });

  useEffect(() => {
    setLoader(true);
    fetch(`https://jsonplaceholder.typicode.com/posts?_page=${page}`)
      .then((res) => res.json())
      .then((data) => setPosts((prev) => [...prev, ...data]));
    setLoader(false);
  }, [page]);

  useEffect(() => {
    if (isInterSecting) {
      setPage((pre) => pre + 1);
    }
  }, [isInterSecting]);

  if (loader) return <p>Loading...</p>;

  return (
    <div className="post-container">
      {posts.map((p) => (
        <div key={p.id} className="post" style={{ marginBottom: '40%' }}>
          {p.title}
        </div>
      ))}

      
      {posts.length && <div ref={ref}></div>}
    </div>
  );
};

export default InfiniteScroll;
