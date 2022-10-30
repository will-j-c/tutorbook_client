import { useState } from 'react';

function RadioGroup(props) {
  const { handleChange } = props;
  const [option, setOption] = useState(null);
  const checkChange = (event) => {
    setOption(event.target.name)
    handleChange(event);
  };

  return (
    <div
      role="radiogroup"
      className="mx-auto py-4 flex justify-center font-bold"
      >
      <div className="flex items-center">
        <div className="bg-background rounded-full w-4 h-4 flex flex-shrink-0 justify-center items-center relative">
          <input
            checked={option === 'tutor'}
            onChange={checkChange}
            aria-labelledby="tutor"
            type="radio"
            name="2"
            className="checkbox appearance-none focus:opacity-100 focus:ring-2 focus:ring-offset-2 focus:bg-primary focus:outline-none border rounded-full border-gray-400 absolute cursor-pointer w-full h-full checked:border-none"
          />
          <div className="check-icon hidden border-4 border-indigo-700 rounded-full w-full h-full z-1"></div>
        </div>
        <label id="label1" className="ml-2 text-sm leading-4 text-titleText">
          Tutor
        </label>
      </div>

      <div className="flex items-center ml-6">
        <div className="bg-background rounded-full w-4 h-4 flex flex-shrink-0 justify-center items-center relative">
          <input
            checked={option === 'default'}
            onChange={checkChange}
            aria-labelledby="default"
            type="radio"
            name="1"
            className="checkbox appearance-none focus:opacity-100 focus:ring-2 focus:ring-offset-2 focus:bg-primary focus:outline-none border rounded-full border-gray-400 absolute cursor-pointer w-full h-full checked:border-none"
          />
          <div className="check-icon hidden border-4 border-indigo-700 rounded-full w-full h-full z-1"></div>
        </div>
        <label id="label2" className="ml-2 text-sm leading-4 text-titleText">
          User
        </label>
      </div>
    </div>
  );
}

export default RadioGroup;
