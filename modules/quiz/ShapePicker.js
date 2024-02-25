import classNames from 'common/utils/classNames';

const options = [
  {
    id: 'vertical',
    label: 'Text under the image',
    icon: (
      <div className="flex flex-col space-y-2 items-center">
        <div className="bg-gray-200 h-10 w-10 rounded-full" />
        <div className="bg-gray-200 h-3 rounded-lg w-24" />
      </div>
    ),
  },

  {
    id: 'horizontal',
    label: 'Text after the image',
    icon: (
      <div className="flex space-x-2 items-center">
        <div className="bg-gray-200 h-10 w-10 rounded-full" />
        <div className="bg-gray-200 h-3 rounded-lg w-24" />
      </div>
    ),
  },
  {
    id: 'hybrid',
    label: 'Text on the image',
    icon: (
      <div className="flex space-x-2 items-center">
        <div className="bg-gray-200 flex items-center justify-center h-12 w-12 rounded-full">
          <div className="bg-gray-200 h-4 rounded-lg w-12 border-2 border-white" />
        </div>
      </div>
    ),
  },
  {
    id: 'image',
    label: 'Image only',
    icon: (
      <div className="flex space-x-2 items-center">
        <div className="bg-gray-200 h-12 w-12 rounded-full" />
      </div>
    ),
  },
];

const ShapePicker = ({ shape, setShape }) => {
  return (
    <div className="grid grid-cols-2 gap-2">
      {options.map((item) => (
        <button
          onClick={() => setShape(item.id)}
          className={classNames(
            'w-full h-full space-y-2 border-2 card py-4 px-2 text-center flex items-center flex-col',
            item.id === shape ? 'border-primary' : 'border-gray-200'
          )}
        >
          <div className="text-sm">{item.label}</div>
          <div className="h-full flex items-center justify-center">
            <div>{item.icon}</div>
          </div>
        </button>
      ))}
    </div>
  );
};

export default ShapePicker;
