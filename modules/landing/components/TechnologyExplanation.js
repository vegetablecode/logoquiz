import Heading from './Heading';
import { Book, Cpu, Layers, Lightbulb } from 'lucide-react';

const TechnologyExplanation = ({ technologyExplanation }) => {
  const getIconByIndex = (index) => {
    const iconArray = [
      <Cpu className="w-16 h-16 text-blue-600" />,
      <Layers className="w-16 h-16 text-green-600" />,
      <Lightbulb className="w-16 h-16 text-yellow-600" />,
    ];
    return iconArray[index] || <Book className="w-16 h-16 text-gray-600" />;
  };

  return (
    <div className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <Heading
          title={technologyExplanation.h1}
          subtitle={technologyExplanation.h2}
        />

        <div className="grid md:grid-cols-3 gap-8 mt-16 max-w-screen-lg mx-auto">
          {technologyExplanation.keyTechnologies.map((technology, index) => (
            <div
              key={technology.name}
              className="bg-white rounded-2xl p-6 transform transition duration-300 hover:scale-105"
            >
              <div className="flex justify-center mb-6">
                {getIconByIndex(index)}
              </div>

              <h3 className="text-xl font-bold text-center mb-4 text-gray-800">
                {technology.name}
              </h3>

              <p className="text-gray-600 text-center">
                {technology.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 py-8 max-w-4xl mx-auto text-center">
          <p className="text-2xl text-gray-700 font-light italic">
            "Your logo is the face of your business. It's not just a mark—it's
            your first impression, your handshake with the world, and the visual
            heart of your brand's story."
          </p>
        </div>
      </div>
    </div>
  );
};

export default TechnologyExplanation;
