import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
dayjs.extend(relativeTime);

function Message(props) {
  const user = props.data.user;
  const { content, created_at, sender } = props.data.message;
  const currentUSerIsSender = user === sender;
  const justify = currentUSerIsSender ? 'justify-end' : 'justify-start'
  const color = justify === 'justify-end' ? 'bg-primary' : 'bg-tertiary'
  return (
    <li className={`flex ${justify}`}>
      <div className={`relative max-w-xl px-4 py-2 rounded shadow ${color}`}>
        <span className="block">{content}</span>
        <span className="block text-secondaryTitleText">{dayjs(created_at).fromNow()}</span>
      </div>
    </li>
  );
}

export default Message;
