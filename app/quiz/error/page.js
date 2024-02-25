import Link from 'next/link';

const Page = () => {
  return (
    <div className="h-screen w-full bg-gradient-to-b from-[#005B64] to-[#016D79]">
      <div className="px-5 pt-3">
        <progress
          className="progress progress-secondary w-full"
          value="9"
          max="9"
        ></progress>
      </div>
      <div className="text-center p-8 pt-8 text-white flex justify-center items-center flex-col space-y-4">
        <div className="flex flex-col space-y-2">
          <div className="text-4xl font-semibold">❌</div>
          <div>
            There was a problem <br /> with your payment!
          </div>
        </div>
      </div>
      <div className="bg-white fixed bottom-0 w-full h-[445px] rounded-t-[30px] p-6 flex flex-col justify-between">
        <div className="flex flex-col space-y-4">
          <div>
            <div>
              We could not process your payment. Please check your balance and
              try again.
            </div>
            <div className="text-2xl pt-2 font-bold">What's next? 🤔</div>
            <div className="pt-2 flex flex-col space-y-2">
              <div>👉 try with another card</div>
              <div>👉 try again later</div>
              <div>
                If you're unable to pay you can contact us by clicking{' '}
                <Link
                  href="mailto:superlogostore@gmail.com"
                  className="underline"
                >
                  here
                </Link>
              </div>
            </div>
          </div>
        </div>
        <Link className="w-full" href="/">
          <button className="btn w-full btn-primary">
            Go back to home page
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Page;
