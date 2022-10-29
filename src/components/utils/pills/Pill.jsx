function Pill(props) {
  const { content } = props;
  return (
    <div className='border rounded-full px-2 text-center max-w-fit whitespace-nowrap bg-tertiary text-primary font-bold h-min'>
      {content}
    </div>
  );
}

export default Pill;
