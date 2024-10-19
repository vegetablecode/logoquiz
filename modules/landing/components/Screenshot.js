import classNames from 'common/utils/classNames';

const Screenshot = ({ img, bg }) => {
  return (
    <div
      className={classNames(
        'pt-8 rounded-3xl px-8 sm:px-32 overflow-hidden bg-gradient-to-t',
        bg
      )}
    >
      <img src={img} className="w-64 rounded-t-xl -mb-24 shadow-2xl" />
    </div>
  );
};

export default Screenshot;
