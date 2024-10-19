import classNames from 'common/utils/classNames';
import PrimaryButton from './PrimaryButton';

const HorizontalHero = ({
  title,
  img,
  description,
  buttonText,
  buttonAction,
  right = false,
}) => {
  return (
    <div className="hero bg-base-200">
      <div
        className={classNames(
          'hero-content flex-col lg:space-x-16',
          right ? 'lg:flex-row-reverse lg:space-x-reverse' : 'lg:flex-row'
        )}
      >
        {img}
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold max-w-lg">{title}</h1>
          <p className="py-6 max-w-md lg:ml-0 text-lg text-gray-600 mx-auto">
            {description}
          </p>
          <div className="mt-5">
            <PrimaryButton title={buttonText} onClick={buttonAction} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HorizontalHero;
