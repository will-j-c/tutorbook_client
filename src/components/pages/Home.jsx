import FilledButton from '../utils/buttons/FilledButton';
function Home(props) {
  return (
    <div
      className="h-screen bg-center bg-cover"
      style={{ backgroundImage: `URL(${process.env.PUBLIC_URL}/background_hero.jpg)` }}>
      <div className="flex justify-end md:pr-10">
        <div className="flex items-center text-center flex-col max-w-sm text-secondaryTitleText font-bold text-2xl mt-10 gap-5">
          <p>
            At TutorBook, we connect Singapore’s deadicated tutor community with students and
            parents all over the island.
          </p>
          <p>
            Browse tutor profiles, post assignments, find jobs and send messages in just a few
            clicks.
          </p>
          <p>Sign up now to begin.</p>
          <div className='text-center flex flex-col gap-5'>
            <FilledButton label="I'm a tutor" />
            <FilledButton label="I'm looking for a tutor" linkTo='/tutors' />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
