// import TutorCard from '../card/TutorCard';
import axios from '../../api/axios';
import {useEffect, useState} from 'react';

function TutorIndex(props) {
    const [data, setData] = useState(null);
    useEffect(() => {
        axios.get('/tutors').then(response => {
            console.log(response)
        }, error => {
            console.log(error)
        })
    }, []);
    return (
      <section className="bg-primary overflow-hidden sm:grid sm:grid-cols-4 h-screen">

      </section>
    );
  }
  
  export default TutorIndex;
  