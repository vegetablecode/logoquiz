import { openModalWithId } from 'common/components/layout/Modal';

const UnlockWeek = ({ setPlan }) => (
  <div
    onClick={() => {
      setPlan('week');
      openModalWithId('premium');
    }}
    className="card text-white cursor-pointer p-5 flex flex-row justify-between bg-cover bg-green-pattern"
  >
    <div className="flex flex-col space-y-2">
      <div className="font-bold text-xl">
        Unlock all features <br /> for 7 days!
      </div>
      <div className="underline">💸 One-time payment</div>
    </div>
    <div className="flex flex-col justify-between items-end">
      <div className="line-through">10$</div>
      <div className="text-6xl font-bold -mb-1">
        6<span className="text-lg">$</span>
      </div>
    </div>
  </div>
);

export default UnlockWeek;
