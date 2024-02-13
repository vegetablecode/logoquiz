'use client';

import Modal, { openModalWithId } from 'common/components/layout/Modal';
import { onError } from 'common/utils/sentry';
import Auth from 'modules/auth/components/Auth';
import useAuthStore from 'modules/auth/store';
import PremiumModal from 'modules/photos/components/PremiumModal';
import { getPhoto, removePhoto } from 'modules/photos/lib';
import { useParams, useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

import {
  makeErrorToast,
  makeSuccessToast,
} from 'common/components/layout/Toast';
import Filters from 'modules/photos/components/Filters';
import FilterPicker from 'modules/photos/components/FilterPicker';
import RenderModal from 'modules/photos/components/RenderModal';
import { getUserData } from 'modules/auth/lib';
import { unlockPro } from 'modules/payment/lib';
import StyleBuilderModal from 'modules/photos/components/StyleBuilderModal';
import UploadedPhoto from 'modules/photos/components/UploadedPhoto';
import ModelSwitcher from 'modules/photos/components/ModelSwitcher';
import classNames from 'common/utils/classNames';
import Header from 'modules/photos/components/Header';
import Navbar from 'modules/photos/components/Navbar';
import isPro from 'common/utils/isPro';
import UnlockWeek from 'modules/photos/components/UnlockWeek';
import {
  Cog6ToothIcon,
  EllipsisHorizontalIcon,
} from '@heroicons/react/24/outline';
import Badge from 'common/components/layout/Badge';
import Metadata from 'common/components/layout/Metadata';

const Page = () => {
  const [photo, setPhoto] = useState({ url: '' });
  const [style, setStyle] = useState(null);
  const [mode, setMode] = useState('room');
  const [plan, setPlan] = useState('week');
  const [model, setModel] = useState('makeover');
  const { user, setUserData, userData } = useAuthStore();
  const { photoId } = useParams();
  const router = useRouter();
  const searchParams = useSearchParams();
  const isUserPro = isPro(userData?.proUntil);

  useEffect(() => {
    const onLoad = async () => {
      if (searchParams.get('success')) {
        const paidPlan = searchParams.get('plan');
        await unlockPro(user, paidPlan);
        makeSuccessToast('You are PRO now! ✨');
        setUserData(await getUserData(user));
      }

      if (searchParams.get('canceled')) {
        makeErrorToast('Payment has been canceled! 😢');
      }
    };

    onLoad();
  }, [user]);

  useEffect(() => {
    const onLoad = async () => {
      try {
        if (photoId) {
          setPhoto(await getPhoto(user, photoId));
        }
      } catch (err) {
        onError(err, 'Unable to fetch photo');
      }
    };

    onLoad();
  }, [user]);

  useEffect(() => {
    if (style) {
      openModalWithId('render');
    }
  }, [style]);

  const handleDelete = async () => {
    try {
      await removePhoto(user, photoId);
      router.push('/photos');
    } catch (err) {
      onError(err, 'Unable to delete photo');
    }
  };

  const renderAuthModalContent = () => (
    <div>
      <div className="font-black text-2xl">Create an account ✨</div>
      <div className="text-lg">...to keep your data safe!</div>
      <Auth simpleMode isSignUpMode={true} />
    </div>
  );

  const renderFilterMenuContent = () => (
    <div className="flex flex-col space-y-3">
      {renderModelPicker()}
      <button onClick={() => handleDelete()} className="btn btn-neutral">
        <span>🗑️ Delete photo</span>
      </button>
    </div>
  );

  const renderFilters = () => (
    <Filters
      style={style}
      setStyle={setStyle}
      setPlan={setPlan}
      model={model}
      setModel={setModel}
    />
  );

  const renderModelPicker = () => (
    <div className="w-full flex flex-col space-y-2">
      <div className="flex flex-col items-center justify-center space-y-3">
        <div className="font-bold">Choose render mode ⬇️</div>
        <ModelSwitcher model={model} setModel={setModel} />
      </div>
      <div className="w-full p-5 card bg-white shadow-xl">
        {model === 'arrange'
          ? renderEnhanceDescription()
          : renderMakeoverDescription()}
      </div>
    </div>
  );

  const renderActions = () => (
    <div className="fixed w-full px-3 py-3 flex flex-col bottom-0 space-y-2">
      <div className="flex backdrop-blur bg-primary text-white mx-auto w-full left-0 right-0 max-w-xl justify-between rounded-full flex-row p-2">
        {['✨ Pick a preset', '🛠️ Build a style'].map((item, idx) => (
          <button
            key={item}
            onClick={() => openModalWithId(idx === 0 ? 'filters' : 'builder')}
            className={classNames(
              'font-bold py-3 flex-1 rounded-full',
              idx === 0
                ? 'border-r border-neutral rounded-r-none'
                : 'rounded-l-none'
            )}
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );

  const renderNavMenu = () => (
    <>
      <div className="flex space-x-2 items-center">
        {isUserPro ? (
          <div className="absolute -ml-12">
            <Badge text="pro" />
          </div>
        ) : (
          ''
        )}
        <button
          onClick={() => openModalWithId('filter-menu')}
          className="p-3 rounded-full bg-primary"
        >
          <Cog6ToothIcon className="h-5 w-5 text-white" />
        </button>
      </div>
    </>
  );

  const renderRedesign = () => (
    <button
      onClick={() => setStyle('default')}
      className="p-5 flex space-x-4 items-center justify-between card shadow flex-row bg-gradient-to-r from-blue-600  to-blue-800 w-full"
    >
      <div className="flex space-x-4 items-center">
        <div className="card bg-base-100 p-4">✨</div>
        <div className="font-bold text-white">Quick Redesign</div>
      </div>
      {!isPro(userData?.proUntil) ? (
        <div className="badge badge-success border-0 text-xs font-bold uppercase">
          free
        </div>
      ) : (
        ''
      )}
    </button>
  );

  const renderPickFilter = () => (
    <button
      onClick={() => openModalWithId('filters')}
      className="p-5 flex space-x-4 items-center card flex-row bg-gradient-to-r from-pink-600  to-pink-800 w-full"
    >
      <div className="card bg-base-100 p-4">🎨</div>
      <div className="font-bold text-white">Choose a filter</div>
    </button>
  );

  const renderBuildPrompt = () => (
    <button
      onClick={() => openModalWithId('builder')}
      className="p-5 flex space-x-4 items-center card flex-row bg-gradient-to-r from-green-600  to-green-800 w-full"
    >
      <div className="card bg-base-100 p-4">👷</div>
      <div className="font-bold text-white">Build a prompt</div>
    </button>
  );

  const renderMakeoverExample = () => (
    <div className="space-y-2">
      <div className="text-xl font-bold text-white">A total makeover ⬇️</div>
      <img className="card" src="/makeover-example.jpeg" />
    </div>
  );

  const renderArrangeExample = () => (
    <div className="space-y-2">
      <div className="text-xl font-bold">Enhanced interior ⬇️</div>
      <img className="card" src="/arrange-example.jpeg" />
    </div>
  );

  const renderEnhanceDescription = () => (
    <div className="flex flex-col space-y-2">
      <div>
        ⏳ Rendering time:{' '}
        <span className="text-red-500 font-bold">1-5 minutes</span>
      </div>
      <div className="text-yellow-500">👌 Small changes</div>
      <div>📸 PRO QUALITY - Looks like a real photo!</div>
      <div className="text-green-500">
        🚪 Doesn't change doors, windows, sourrandings etc.
      </div>
      <div className="uppercase text-center text-sm font-bold">example</div>
      <img src="/arrange/boho.jpeg" alt="interior" className="card" />
    </div>
  );

  const renderMakeoverDescription = () => (
    <div className="flex flex-col space-y-2">
      <div>
        ⏳ Rendering time:{' '}
        <span className="text-green-500 font-bold">1-2 minutes</span>
      </div>
      <div className="text-green-500">🎉 Big & more creative changes</div>
      <div>💻 Looks more like a render</div>
      <div className="text-orange-500">
        🚜 A total makeover - changes everything!
      </div>
      <div className="uppercase text-center text-sm font-bold">example</div>
      <img src="/images/boho.jpeg" alt="interior" className="card" />
    </div>
  );

  return (
    <>
      <Navbar
        showGoBack
        onPrev={() => router.push('/photos')}
        menu={renderNavMenu()}
      />
      <Metadata />
      <div className="flex flex-col space-y-4">
        <div className="text-2xl font-bold pb-2">🏡 Your interior</div>
        <UploadedPhoto image={photo.url} />
        {renderModelPicker()}
        <div className="flex flex-col space-y-2">
          {renderRedesign()}
          {renderPickFilter()}
          {renderBuildPrompt()}
        </div>
      </div>
      {renderFilters()}
      {renderActions()}
      <Modal id="signup" content={renderAuthModalContent()} />
      <Modal id="filter-menu" content={renderFilterMenuContent()} />
      <Modal id="makeover" content={renderMakeoverExample()} />
      <Modal id="arrange" content={renderArrangeExample()} />
      <PremiumModal plan={plan} setPlan={setPlan} />
      <FilterPicker model={model} style={style} setStyle={setStyle} />
      <StyleBuilderModal setStyle={setStyle} />
      <RenderModal
        model={model}
        setModel={setModel}
        image={photo.url}
        mode={mode}
        setMode={setMode}
        style={style}
        setStyle={setStyle}
      />
    </>
  );
};

export default Page;
