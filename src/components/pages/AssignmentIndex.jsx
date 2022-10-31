import axios from '../../api/axios';
import { useEffect, useState } from 'react';
import AssignmentCard from '../cards/AssignmentCard';
import FilledButton from '../utils/buttons/FilledButton';
import OutlinedButton from '../utils/buttons/OutlinedButton';
import { toast } from 'react-toastify';
import MessageModal from '../modals/MessageModal';

function AssignmentIndex(props) {
  const [data, setData] = useState(null);
  const [next, setNext] = useState(null);
  const [previous, setPrevious] = useState(null);
  const [messageModalIsOpen, setMessageModalIsOpen] = useState(false);
  const [assignmentUser, setAssignmentUser] = useState(null);

  const callAssignmentIndexRoute = (route) => {
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
    callAssignmentIndexRoute('/assignments');
  }, []);

  const toggleMessageModal = (event) => {
    setMessageModalIsOpen((previous) => !previous);
  };

  const nextPage = () => {
    callAssignmentIndexRoute(next);
    window.scrollTo(0, 0);
  };

  const previousPage = () => {
    callAssignmentIndexRoute(previous);
    window.scrollTo(0, 0);
  };

  return (
    <>
      <section className="bg-background mt-4 md:grid md:grid-cols-2 flex flex-col gap-4 px-6">
        {!data
          ? ''
          : data.map((assignment, idx) => {
              return (
                <AssignmentCard
                  assignment={assignment}
                  key={idx}
                  toggleOpen={toggleMessageModal}
                  setAssignmentUser={setAssignmentUser}
                />
              );
            })}
      </section>
      <div className="flex justify-end gap-4 px-6 mt-5">
        {previous ? <OutlinedButton label="Previous" action={previousPage} /> : ''}
        <FilledButton label="Next" action={nextPage} />
      </div>
      {assignmentUser ? (
        <MessageModal
          isOpen={messageModalIsOpen}
          toggleOpen={toggleMessageModal}
          source="assignment"
          user={assignmentUser}
        />
      ) : (
        ''
      )}
    </>
  );
}

export default AssignmentIndex;
