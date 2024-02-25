import classNames from 'common/utils/classNames';

const options = ['Light Mode', 'Dark mode'];
console.log(options);

const ModePicker = ({ mode, setMode }) => {
  return (
    <div className="grid grid-cols-1 gap-4">
      {options.map((item) => (
        <button
          onClick={() => setMode(item)}
          className={classNames(
            'w-full h-full space-y-2 border-2 card py-8 px-2 text-center flex items-center flex-col',
            item === mode ? 'border-primary' : 'border-gray-200'
          )}
        >
          <div>{item}</div>
        </button>
      ))}
    </div>
  );
};

export default ModePicker;
