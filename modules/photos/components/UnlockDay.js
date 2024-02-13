import { openModalWithId } from 'common/components/layout/Modal';

const UnlockDay = ({ setPlan }) => (
  <div
    onClick={() => {
      setPlan('day');
      openModalWithId('premium');
    }}
    className="card text-white cursor-pointer p-5 flex flex-row justify-between bg-cover bg-bottom bg-interior-pattern"
  >
    <div className="flex flex-col space-y-2">
      <div className="font-bold text-xl">
        Unlock all features <br /> for 24 hours!
      </div>
      <div className="underline">💸 One-time payment</div>
    </div>
    <div className="flex flex-col justify-between items-end">
      <div className="line-through">6$</div>
      <div className="text-6xl font-bold -mb-1">
        3<span className="text-lg">$</span>
      </div>
    </div>
  </div>
);

export default UnlockDay;
