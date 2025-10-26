import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { debounce } from '../../helpers/helpers';
import ChatRoom from './chat-room';

const MessageDashboard = () => {
  const [search, setSearch] = useState('');
  const [debounceSearch, setDebounceSearch] = useState('');
  const messages = useMemo(
    () => [
      {
        id: 1,
        user: 'Alice',
        text: 'Hey, are you free for a call?',
        timestamp: '2025-10-25T10:00:00Z',
        isMine: false,
        read: false,
      },
      {
        id: 2,
        user: 'You',
        text: 'Yes, give me 5 mins',
        timestamp: '2025-10-25T10:01:00Z',
        isMine: true,
        read: true,
      },
      {
        id: 3,
        user: 'Bob',
        text: "Don't forget the meeting at 11",
        timestamp: '2025-10-25T10:02:30Z',
        isMine: false,
        read: false,
      },
      {
        id: 4,
        user: 'You',
        text: 'Thanks for reminding, Bob',
        timestamp: '2025-10-25T10:03:00Z',
        isMine: true,
        read: true,
      },
      {
        id: 5,
        user: 'Alice',
        text: 'Can you share the report?',
        timestamp: '2025-10-25T10:04:10Z',
        isMine: false,
        read: false,
      },
      {
        id: 6,
        user: 'You',
        text: 'Sure, sending it now',
        timestamp: '2025-10-25T10:04:50Z',
        isMine: true,
        read: true,
      },
      {
        id: 7,
        user: 'Bob',
        text: 'Thanks!',
        timestamp: '2025-10-25T10:05:00Z',
        isMine: false,
        read: false,
      },
      {
        id: 8,
        user: 'You',
        text: 'No problem 🙂',
        timestamp: '2025-10-25T10:05:30Z',
        isMine: true,
        read: true,
      },
      {
        id: 9,
        user: 'Charlie',
        text: 'Hello everyone!',
        timestamp: '2025-10-25T10:06:00Z',
        isMine: false,
        read: false,
      },
      {
        id: 10,
        user: 'You',
        text: 'Hey Charlie!',
        timestamp: '2025-10-25T10:06:15Z',
        isMine: true,
        read: true,
      },
      {
        id: 11,
        user: 'Alice',
        text: 'Please review the latest updates.',
        timestamp: '2025-10-25T10:07:00Z',
        isMine: false,
        read: false,
      },
      {
        id: 12,
        user: 'You',
        text: 'On it, will check and respond.',
        timestamp: '2025-10-25T10:07:30Z',
        isMine: true,
        read: true,
      },
      {
        id: 13,
        user: 'Bob',
        text: 'Meeting rescheduled to 12 PM.',
        timestamp: '2025-10-25T10:08:00Z',
        isMine: false,
        read: false,
      },
      {
        id: 14,
        user: 'You',
        text: 'Noted, thanks!',
        timestamp: '2025-10-25T10:08:15Z',
        isMine: true,
        read: true,
      },
      {
        id: 15,
        user: 'Charlie',
        text: 'Are we starting the project today?',
        timestamp: '2025-10-25T10:09:00Z',
        isMine: false,
        read: false,
      },
    ],
    []
  );

  const renderMessages = useMemo(() => {
    if (debounceSearch) {
      const newData = messages.filter((ele) =>
        ele?.text?.toLowerCase()?.includes(debounceSearch)
      );

      return newData;
    } else return messages;
  }, [debounceSearch, messages]);

  const debouncedSearch = useMemo(
    () => debounce((val) => setDebounceSearch(val), 500),
    []
  );

  useEffect(() => {
    debouncedSearch(search);
  }, [search, debouncedSearch]);

  const onChange = useCallback((e) => setSearch(e.target.value), []);

  return (
    <div>
      <input
        type="text"
        placeholder="Search your message"
        onChange={onChange}
        id={'input'}
      />
      <ChatRoom messages={renderMessages} />
    </div>
  );
};

export default MessageDashboard;
