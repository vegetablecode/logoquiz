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
      <div className="text-center p-8 pt-16 text-white flex justify-center items-center flex-col space-y-4">
        <div className="flex flex-col space-y-2">
          <div className="text-4xl font-semibold">💸</div>
          <div>
            You've paid for the logo <br /> successfully!
          </div>
        </div>
      </div>
      <div className="bg-white fixed bottom-0 w-full h-[calc(100vh-280px)] rounded-t-[30px] p-6 flex flex-col justify-between">
        <div className="flex flex-col space-y-4">
          <div>
            <div>
              Thank you for ordering the logo design from Superlogo. We
              appreciate your trust in our service. Your logo will be ready in
              the next 12 hours. We will send you an e-mail when it's done.
            </div>
            <div className="text-2xl pt-2 font-bold">What's next? 🤔</div>

            <div className="pt-2 flex flex-col space-y-2">
              <div>👉 you'll receive an e-mail confirmation</div>
              <div>👉 in the next 12h you'll get 3 logo proposals</div>
              <div>
                You'll be able to download your logo right away or to ask for up
                two 2 additional revisions ✨
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
