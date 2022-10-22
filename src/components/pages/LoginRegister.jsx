import Loading from '../utils/feedback/Loading';
import { useState, cloneElement } from 'react';

function LoginRegister(props) {
  const { component } = props;
  const [loading, setLoading] = useState(false);
  const componentToRender = cloneElement(component, { setLoading });
  return (
    <section className="bg-primary overflow-hidden sm:grid sm:grid-cols-2 h-screen relative">
      <img
        alt="Student"
        src="background_hero.jpg"
        className="h-full w-full object-cover hidden md:block"
      />
      <div className="p- md:p-12 lg:px-4 lg:py-24">{componentToRender}</div>
      {loading ? <Loading /> : ''}
    </section>
  );
}

export default LoginRegister;
