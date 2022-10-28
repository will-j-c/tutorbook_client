import { useCookies } from 'react-cookie';
import { useState, useEffect } from 'react';
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
  console.log(activeThread)
  return (
    <div className="container mx-auto mt-5">
      <div className="min-w-full border rounded lg:grid lg:grid-cols-3">
        <div className="border-r border-gray-300 lg:col-span-1">
          <div className="mx-3 my-3">
            <div className="relative text-gray-600">
              <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  className="w-6 h-6 text-gray-300">
                  <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                </svg>
              </span>
              <input
                type="search"
                className="block w-full py-2 pl-10 bg-gray-100 rounded outline-none"
                name="search"
                placeholder="Search"
                required
              />
            </div>
          </div>

          <h2 className="my-2 mb-2 ml-2 text-lg text-gray-600">Chats</h2>

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
        <div className="hidden lg:col-span-2 lg:block">
          <div className="w-full h-screen">
            {activeThread ? (
              <>
                <div className="relative flex items-center p-3 border-b border-gray-300">
                  <Avatar profile_img_url={data.user === 'u' ? activeThread.tutor.user.profile_img_url : activeThread.user.profile_img_url} size={'h-12 w-12'}/>
                  <span className="block ml-2 font-bold text-gray-600">{data.user === 'u' ? activeThread.tutor.user.first_name : activeThread.user.first_name}</span>
                  <span className="absolute w-3 h-3 bg-green-600 rounded-full left-10 top-3"></span>
                </div>

                <div className="relative w-full p-6 overflow-y-auto h-[40rem]">
                  <ul className="space-y-2">{activeThread?.messages.map(message => {
                    return <Message key={message.id} data={{message, user: data.user}}/>
                  })}</ul>
                </div>

                <div className="flex items-center justify-between w-full p-3 border-t border-gray-300">
                  <input
                    type="text"
                    placeholder="Message"
                    className="block w-full py-2 pl-4 mx-3 bg-gray-100 rounded-full outline-none focus:text-gray-700"
                    name="message"
                    required
                  />

                  <button type="submit">
                    <svg
                      className="w-5 h-5 text-gray-500 origin-center transform rotate-90"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor">
                      <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
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
