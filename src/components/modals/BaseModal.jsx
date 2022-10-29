function ReviewModal(props) {
  const { isOpen, toggleOpen } = props;
  const hidden = isOpen ? '' : 'hidden';
  return (
    <div className={`${hidden} fixed inset-0 bg-primary bg-opacity-50 overflow-y-auto h-screen w-screen`} onClick={() => toggleOpen(false)}>
      
    </div>
  );
}

export default ReviewModal;
