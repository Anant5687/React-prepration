import { useEffect, useMemo, useState } from 'react';

const ImageSlider = () => {
  const images = useMemo(
    () => [
      {
        id: 1,
        url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2400&q=100',
        title: 'Ocean Waves',
      },
      {
        id: 2,
        url: 'https://images.unsplash.com/photo-1519817914152-22d216bb9170?ixlib=rb-4.0.3&auto=format&fit=crop&w=2500&q=100',
        title: 'Mountain View',
      },
      {
        id: 3,
        url: 'https://images.unsplash.com/photo-1482192596544-9eb780fc7f66?ixlib=rb-4.0.3&auto=format&fit=crop&w=2600&q=100',
        title: 'Desert Sunset',
      },
      {
        id: 4,
        url: 'https://images.unsplash.com/photo-1493244040629-496f6d136cc3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2700&q=100',
        title: 'Forest Path',
      },
      {
        id: 5,
        url: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?ixlib=rb-4.0.3&auto=format&fit=crop&w=2800&q=100',
        title: 'City Skyline',
      },
      {
        id: 6,
        url: 'https://images.unsplash.com/photo-1491553895911-0055eca6402d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2900&q=100',
        title: 'Snow Mountains',
      },
      {
        id: 7,
        url: 'https://images.unsplash.com/photo-1470770903676-69b98201ea1c?ixlib=rb-4.0.3&auto=format&fit=crop&w=3000&q=100',
        title: 'Night Sky',
      },
      {
        id: 8,
        url: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&auto=format&fit=crop&w=3100&q=100',
        title: 'Rocky Hills',
      },
      {
        id: 9,
        url: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=3200&q=100',
        title: 'Lake Reflection',
      },
      {
        id: 10,
        url: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=3300&q=100',
        title: 'Waterfall',
      },
    ],
    []
  );

  const [index, setIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    images?.forEach((image) => {
      const img = new Image();
      img.src = image?.url;
      img.onload = () => {
        setLoading(false);
      };
    });
  }, [images]);

  if (loading) return <p>Loading....</p>;

  return (
    <div>
      <h3>{images?.[index]?.title}</h3>
      <img
        src={images?.[index]?.url}
        alt={`Image${index}`}
        sizes="80"
        style={{ height: '200px', width: '200px' }}
      />
      <button
        onClick={() => {
          if (index === 0) {
            setIndex(images?.length);
          } else {
            setIndex((pre) => pre - 1);
          }
        }}
      >
        Pre
      </button>
      <button
        onClick={() => {
          if (index === images?.length) {
            setIndex(0);
          } else {
            setIndex((pre) => pre + 1);
          }
        }}
      >
        Next
      </button>
    </div>
  );
};

export default ImageSlider;
