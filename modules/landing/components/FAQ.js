import { ChevronDownIcon } from '@heroicons/react/24/outline';
import Heading from './Heading';
import { useState } from 'react';

const FAQ = ({ data }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  const formatAnswer = (answer) => {
    return answer.split('\n').map((line, index) => (
      <p key={index} className="mb-2">
        {line}
      </p>
    ));
  };

  return (
    <div className="py-12 mx-auto max-w-3xl">
      <Heading
        title="Frequently Asked Questions ⬇️"
        subtitle="Explore our FAQ"
      />
      {data.map((faq, index) => (
        <div
          key={index}
          className="rounded-xl mb-2 bg-white cursor-pointer border border-gray-200"
          onClick={() => toggleFAQ(index)}
        >
          <div className="flex items-center justify-between p-4 rounded-t-xl transition-colors duration-300 ease-in-out">
            <h3 className="text-lg font-semibold">{faq.question}</h3>
            <ChevronDownIcon
              className={`w-6 h-6 transform transition-transform duration-300 ease-in-out ${
                activeIndex === index ? 'rotate-180' : ''
              }`}
            />
          </div>
          <div
            className={`overflow-hidden transition-all duration-500 ease-in-out ${
              activeIndex === index
                ? 'max-h-96 opacity-100 p-4'
                : 'max-h-0 opacity-0 p-0'
            }`}
            style={{ transitionProperty: 'max-height, opacity, padding' }}
          >
            <div className="text-secondary-content border-t -mt-4 rounded-b-xl pt-4 px-2">
              {formatAnswer(faq.answer)}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FAQ;
