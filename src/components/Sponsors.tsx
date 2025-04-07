import { Radar } from "lucide-react";
import FederalTransport from "../assets/federal-ministry-of-transportation.png";
import FederalEmployment from "../assets/Federal-Ministry-of-Labour-and-Employment.png";
import PCNGI from "../assets/PCNGI.png";
import GCEGPAN from "../assets/GCEGPAN.jpeg";

interface SponsorProps {
  icon: JSX.Element;
  name: string;
}

const sponsors: SponsorProps[] = [
  {
    icon: <img src={GCEGPAN} alt="GCEGPAN" className="w-44" />,

    name: "",
  },
  {
    icon: <img src={PCNGI} alt="PCNGI" className="w-44" />,
    name: "",
  },
  {
    icon: (
      <img
        src={FederalTransport}
        alt="federal-ministry-of-transportation"
        className="w-36"
      />
    ),
    name: "",
  },
  {
    icon: (
      <img
        src={FederalEmployment}
        alt="Federal-Ministry-of-Labour-and-Employment"
        className="w-32"
      />
    ),
    name: "",
  },
];

export const Sponsors = () => {
  return (
    <section id="sponsors" className="container pt-24 sm:py-32">
      <h2 className="text-center text-md lg:text-xl font-bold mb-8 text-ring">
        Trusted By
      </h2>

      <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8">
        {sponsors.map(({ icon, name }: SponsorProps) => (
          <div key={name} className="flex items-center gap-1 text-primary">
            <span>{icon}</span>
            <h3 className="text-xl  font-bold">{name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};
