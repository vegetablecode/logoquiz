import { useRouter } from 'next/navigation';
import Heading from './Heading';
import PrimaryButton from './PrimaryButton';

const TakeAction = ({ h1, h2, buttonText }) => {
  const router = useRouter();
  return (
    <div className="pt-12 pb-24 mx-auto">
      <Heading title={h1} subtitle={h2} />
      <div className="flex flex-col max-w-5xl mx-auto md:flex-row justify-center space-x-0 space-y-4 md:space-y-0 md:space-x-4 items-center"></div>
      <div className="flex items-center justify-center">
        <PrimaryButton
          title={buttonText}
          onClick={() => router.push('/quiz')}
        />
      </div>
    </div>
  );
};

export default TakeAction;
