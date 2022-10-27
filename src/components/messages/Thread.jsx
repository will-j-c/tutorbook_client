import Avatar from "../avatars/Avatar";

function Thread(props) {
    console.log(props.data)
  return (
    <div className="flex items-center px-3 py-2 text-sm transition duration-150 ease-in-out border-b border-gray-300 cursor-pointer hover:bg-gray-100 focus:outline-none">
      <Avatar />
      <div className="w-full pb-2">
        <div className="flex justify-between">
          <span className="block ml-2 font-semibold">Jhon Don</span>
          <span className="block ml-2 text-sm">25 minutes</span>
        </div>
        <span className="block ml-2 text-sm">bye</span>
      </div>
    </div>
  );
}

export default Thread;
