function LoginRegister(props) {
  const {component} = props;

  return (
    <section className="bg-primary overflow-hidden bg-gray-50 sm:grid sm:grid-cols-2 h-screen">
      <img alt="Student" src="background_hero.jpg" className="h-full w-full object-cover hidden md:block" />
      <div className="p- md:p-12 lg:px-4 lg:py-24">
        {component}
      </div>
    </section>
  );
}

export default LoginRegister;
