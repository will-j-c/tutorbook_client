function LoginRegister(props) {
  const {component} = props;

  return (
    <section class="overflow-hidden bg-gray-50 sm:grid sm:grid-cols-2 h-screen">
      <img alt="Student" src="background_hero.jpg" class="h-full w-full object-cover hidden md:block" />
      <div class="p-8 md:p-12 lg:px-16 lg:py-24">
        {component}
      </div>
    </section>
  );
}

export default LoginRegister;
