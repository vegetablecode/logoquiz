import classNames from 'common/utils/classNames';
import { LOGOS } from 'modules/logo/consts';

function getUniqueStyles(logos) {
  let styles = new Set();
  for (let logo of logos) {
    for (let style of logo?.styles) {
      styles.add(style);
    }
  }
  return [...styles];
}

const options = getUniqueStyles(LOGOS);
console.log(options);

const StylePicker = ({ style, setStyle }) => {
  return (
    <div className="grid grid-cols-2 gap-4">
      {options.map((item) => (
        <button
          onClick={() => setStyle(item)}
          className={classNames(
            'w-full h-full space-y-2 border-2 card py-4 px-2 text-center flex items-center flex-col',
            item === style ? 'border-primary' : 'border-gray-200'
          )}
        >
          <div>{item}</div>
        </button>
      ))}
    </div>
  );
};

export default StylePicker;
