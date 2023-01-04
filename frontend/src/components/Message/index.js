import { useEffect } from 'react';
import { MessagePill } from './MessageElements';

function Message({ message, setMessage }) {

  const { text } = message;

  // Remove the message after x seconds
  useEffect(() => {
    if (message.display === true) {
      setTimeout(() => {
        setMessage({
          ...message,
          display: false,
        })
      }, 4000);
    }
  }, [message]);

  return (
    <>
      <MessagePill>{text}</MessagePill>
    </>
  )
}
export default Message;