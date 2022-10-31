import axios from '../../api/axios';
import { useEffect, useState } from 'react';
import TutorCard from '../cards/TutorCard';
import FilledButton from '../utils/buttons/FilledButton';
import OutlinedButton from '../utils/buttons/OutlinedButton';
import { toast } from 'react-toastify';
import MessageModal from '../modals/MessageModal';

function TutorIndex(props) {
  const [data, setData] = useState(null);
  const [next, setNext] = useState(null);
  const [previous, setPrevious] = useState(null);
  const [messageModalOpen, setMessageModalOpen] = useState(false);

  const callTutorIndexRoute = (route) => {
    axios.get(route).then(
      (response) => {
        setData(response.data.results);
        setNext(response.data.next);
        setPrevious(response.data.previous);
      },
      (error) => {
        toast.error(error.message);
      }
    );
  };

  useEffect(() => {
    callTutorIndexRoute('/tutors');
  }, []);

  const nextPage = () => {
    callTutorIndexRoute(next);
    window.scrollTo(0, 0);
  };

  const previousPage = () => {
    callTutorIndexRoute(previous);
    window.scrollTo(0, 0);
  };

  const toggleMessageModal = () => {
    console.log('clicked')
    setMessageModalOpen(previous => !previous);
  }

  return (
    <>
      <section className="bg-background mt-4 sm:grid sm:grid-cols-2 gap-4 px-6">
        {!data
          ? ''
          : data.map((tutor, idx) => {
              return <TutorCard tutor={tutor} key={idx} toggleOpen={toggleMessageModal}/>;
            })}
      </section>
      <div className="flex justify-end gap-4 px-6">
        {previous ? <OutlinedButton label="Previous" action={previousPage} /> : ''}
        <FilledButton label="Next" action={nextPage} />
      </div>
      <MessageModal isOpen={messageModalOpen} toggleOpen={toggleMessageModal}/>
    </>
  );
}

export default TutorIndex;
