import Image from "next/image";

const cards = [
  {
    icon: <Image src="/icons/card-1.svg" alt="how-1" width={80} height={80} />,
    text: "Open data is a powerful resource. It can help us investigate corrupted actions and actors through a data-driven process.",
  },
  {
    icon: <Image src="/icons/card-2.svg" alt="how-2" width={80} height={80} />,
    text: "Regional collaboration with data standards would enable knowledge sharing and empower the cross-border actions.",
  },
  {
    icon: <Image src="/icons/card-3.svg" alt="how-3" width={80} height={80} />,
    text: "Civic society, active citizens, or anyone can learn from our studies and join the partnership to start working with your context of interest.",
  },
];

const HowSection = () => {
  return (
    <div
      className="flex flex-col gap-4 max-w-[776px] mx-auto md:p-8 md:mt-16 p-4 mt-2"
      id="how?"
    >
      <h2 className="font-bold text-blue-01 text-h5">How?</h2>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {cards.map((card, index) => (
          <div
            key={index}
            className="flex flex-col items-center gap-2.5 rounded-xl bg-blue-03 px-4 py-6 text-center text-white"
          >
            <div>{card.icon}</div>
            <p className="text-b5 font-bold">{card.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowSection;
