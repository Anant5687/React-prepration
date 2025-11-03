import React, { useState } from 'react';

const NestedReply = () => {
  const [comments, setComments] = useState([]);
  const [value, setValue] = useState('');
  const [reply, setReply] = useState({});

  const addComment = () => {
    const msg = {
      id: Date.now(),
      like: 0,
      replies: [],
      comment: value,
    };

    setComments([msg, ...comments]);
    setValue('');
  };

  const onLikeHandeler = (i) => {
    const newArr = [...comments].map((ele, index) => {
      if (index === i) {
        return {
          ...ele,
          like: (ele.like += 1),
        };
      } else return { ...ele };
    });
    setComments([...newArr]);
  };

  const onReplyChangeHandeler = (value, i) => {
    setReply({ ...value, [i]: value });
  };

  const onAddReply = (i) => {
    const newComment = {
      id: Date.now(),
      msg: reply[i],
      like: 0,
    };
    const newArr = [...comments].map((ele, index) => {
      if (index === i) {
        return {
          ...ele,
          replies: [...ele?.replies, newComment],
        };
      } else return { ...ele };
    });
    setComments([...newArr]);

    onReplyChangeHandeler('', i);
  };

  const onNestedLikeHandeler = (pIndex, cIndex) => {
    const newArr = [...comments].map((ele, index) => {
      if (index === pIndex) {
        return {
          ...ele,
          replies: ele?.replies?.map((cmnt, index) => {
            if (cIndex === index) {
              return { ...cmnt, like: (cmnt.like += 1) };
            } else return { ...cmnt };
          }),
        };
      } else return { ...ele };
    });
    setComments([...newArr]);
  };

  return (
    <div>
      <input
        value={value}
        type="text"
        onChange={(e) => setValue(e.target.value)}
      />
      <button onClick={addComment}>Add Cmnt</button>

      {comments.map((ele, i) => (
        <div
          style={{
            border: '1px solid black',
            borderRadius: '8px',
            padding: '16px',
            marginTop: '8px',
          }}
        >
          <p>
            {ele?.comment}{' '}
            <span
              onClick={() => onLikeHandeler(i)}
              style={{ cursor: 'pointer' }}
            >
              {' '}
              👍🏻 {ele?.like}
            </span>
          </p>
          <input
            value={reply[i]}
            type="text"
            onChange={(e) => onReplyChangeHandeler(e.target.value, i)}
          />
          <button onClick={() => onAddReply(i)}>Add Reply</button>
          {ele?.replies?.map((msg, index) => (
            <p>
              {msg?.msg}
              <span
                onClick={() => onNestedLikeHandeler(i, index)}
                style={{ cursor: 'pointer' }}
              >
                {' '}
                👍🏻 {msg?.like}
              </span>
            </p>
          ))}
        </div>
      ))}
    </div>
  );
};

export default NestedReply;
