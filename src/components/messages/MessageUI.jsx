import { useCookies } from 'react-cookie';
import { useState, useEffect, useRef } from 'react';
import { toast } from 'react-toastify';
import axios from '../../api/axios';
import Avatar from '../avatars/Avatar';
import Thread from './Thread';
import Message from './Message';

function MessageUI() {
  const [cookies] = useCookies();
  const [data, setData] = useState('');
  const [activeThread, setActiveThread] = useState(null);
  const [activeUUID, setActiveUUID] = useState(null);
  const [newMessage, setNewMessage] = useState('');
  const messageText = useRef();
  const messageWindow = useRef();

  const callMessageUserRoute = async (route) => {
    axios.get(route, { headers: { Authorization: `Bearer ${cookies.idToken}` } }).then(
      (response) => {
        setData(response.data);
        return;
      },
      (error) => {
        toast.error(error.message);
        return;
      }
    );
  };

  const postMessage = () => {
    const body = {
      tutor: activeThread.tutor.id,
      user: activeThread.user.id,
      thread: activeThread.id,
      content: newMessage,
      sender: data.user
    };
    axios
      .post(`messages/${activeThread.thread_uuid}`, body, {
        headers: { Authorization: `Bearer ${cookies.idToken}` }
      })
      .then(
        (response) => {
          callMessageUserRoute(`messages`);
          return;
        },
        (error) => {
          toast.error(error?.response?.data.detail || 'Server error');
          return;
        }
      );
  };

  const handleTypeMessage = (event) => {
    event.preventDefault();
    setNewMessage(event.target.value);
  };

  const sendMessage = (event) => {
    // If the message box is empty, do nothing
    if (!newMessage) {
      return;
    }
    // Set to send on pressing enter or by clicking the send button
    if (event.keyCode !== 13 && event.keyCode !== 110 && event.nativeEvent.type !== 'click') {
      return;
    }
    messageText.current.value = '';
    postMessage();
    setNewMessage('');
  };

  const setActive = (event) => {
    event.stopPropagation();
    const thread_uuid = event.nativeEvent.path.find((target) => {
      if (target.id) {
        return target.id;
      }
      return null;
    });
    setActiveUUID(thread_uuid.id);
  };

  useEffect(() => {
    const thread = data?.threads?.find((thread) => {
      return thread.thread_uuid === activeUUID;
    });
    setActiveThread(thread);
  }, [activeUUID, data]);

  useEffect(() => {
    callMessageUserRoute(`messages`);
  }, []);

  const refresh = () => {
    callMessageUserRoute(`messages`);
  }

  return (
    <div className='container mx-auto mt-5 text-titleText border-tertiary'>
      <div className='min-w-full border rounded lg:grid lg:grid-cols-3'>
        <div className='border-r  lg:col-span-1'>
          <div className='mx-3 my-3'>
            <div className='relative'>
              <span className='absolute inset-y-0 left-0 flex items-center pl-2'>
                <svg
                  fill='none'
                  stroke='currentColor'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  viewBox='0 0 24 24'
                  className='w-6 h-6 text-gray-300'>
                  <path d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'></path>
                </svg>
              </span>
              <input
                type='search'
                className='block w-full py-2 pl-10 rounded outline-none'
                name='search'
                placeholder='Search'
                required
              />
            </div>
          </div>

          <h2 className='my-2 mb-2 ml-2 text-lg'>Chats</h2>

          {!data
            ? ''
            : data.threads.map((thread) => {
                return (
                  <Thread
                    data={{ thread, user: data.user }}
                    key={thread.thread_uuid}
                    onClick={setActive}
                    id={thread.thread_uuid}
                  />
                );
              })}
        </div>
        <div className='hidden lg:col-span-2 lg:block'>
          <div className='w-full h-[90vh]'>
            {activeThread ? (
              <>
                <div className='relative flex items-center p-3 border-b bg-primary'>
                  <Avatar
                    profile_img_url={
                      data.user === 'u'
                        ? activeThread.tutor.user.profile_img_url
                        : activeThread.user.profile_img_url
                    }
                    size={'h-12 w-12'}
                  />
                  <span className='block ml-2 font-bold'>
                    {data.user === 'u'
                      ? activeThread.tutor.user.first_name
                      : activeThread.user.first_name}
                  </span>
                  <span className='absolute w-3 h-3 rounded-full left-10 top-3'></span>
                </div>

                <div
                  className='relative w-full p-6 overflow-y-scroll h-[40rem]'
                  ref={messageWindow}>
                  <ul className='space-y-2'>
                    {activeThread?.messages.map((message) => {
                      return <Message key={message.id} data={{ message, user: data.user }} />;
                    })}
                  </ul>
                </div>

                <div className='flex items-center justify-between w-full p-3 border-t'>
                  <input
                    onChange={handleTypeMessage}
                    onKeyUp={sendMessage}
                    ref={messageText}
                    type='text'
                    placeholder='Message'
                    className='block w-full py-2 pl-4 mx-3 rounded-full outline-none focus:text-gray-700'
                    name='message'
                    required
                  />
                  <button onClick={refresh}>
                    <svg
                      className='w-5 h-5 origin-center'
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 30 30'
                      fill='currentColor'>
                      <path d='M12,2a10.032,10.032,0,0,1,7.122,3H16a1,1,0,0,0-1,1h0a1,1,0,0,0,1,1h4.143A1.858,1.858,0,0,0,22,5.143V1a1,1,0,0,0-1-1h0a1,1,0,0,0-1,1V3.078A11.981,11.981,0,0,0,.05,10.9a1.007,1.007,0,0,0,1,1.1h0a.982.982,0,0,0,.989-.878A10.014,10.014,0,0,1,12,2Z' />
                      <path d='M22.951,12a.982.982,0,0,0-.989.878A9.986,9.986,0,0,1,4.878,19H8a1,1,0,0,0,1-1H9a1,1,0,0,0-1-1H3.857A1.856,1.856,0,0,0,2,18.857V23a1,1,0,0,0,1,1H3a1,1,0,0,0,1-1V20.922A11.981,11.981,0,0,0,23.95,13.1a1.007,1.007,0,0,0-1-1.1Z' />
                    </svg>
                  </button>
                  <button onClick={sendMessage}>
                    <svg
                      className='w-5 h-5 origin-center transform rotate-90'
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 20 20'
                      fill='currentColor'>
                      <path d='M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z' />
                    </svg>
                  </button>
                </div>
              </>
            ) : (
              <h1>Please select a thread to view</h1>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MessageUI;
