import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { MagnifierIcon, WalletIcon, ChartIcon } from "./Icons";
import IconLogoPng from "../assets/icon-light.png";

interface ServiceProps {
  title: string;
  description: string;
  icon: JSX.Element;
}

const serviceList: ServiceProps[] = [
  {
    title: "Fueling",
    description: "We provide high-quality fuels at our strategically located stations, ensuring safe, efficient, and reliable refueling for both private and commercial vehicles.",
    icon: <ChartIcon />,
  },
  {
    title: "Lubricants",
    description: "Our premium range of lubricants enhances engine performance, reduces wear, and extends vehicle lifespan. Suitable for all types of engines, including high-performance and heavy-duty applications.",
    icon: <WalletIcon />,
  },
  {
    title: "Car Service centre",
    description: "Our expert technicians offer comprehensive car maintenance and repair services—from routine checks to diagnostics and major repairs—using genuine parts and modern equipment.",
    icon: <MagnifierIcon />,
  },
  {
    title: "Wheel Balancing & Alignment",
    description: "We use advanced technology to ensure precise wheel balancing and alignment, improving driving comfort, extending tire life, and boosting fuel efficiency.",
    icon: <MagnifierIcon />,
  },
  {
    title: "CNG Conversion centre",
    description: "We offer certified CNG conversion services, enabling drivers to switch to a more economical and environmentally friendly fuel option without compromising performance.",
    icon: <MagnifierIcon />,
  },
];

export const Services = () => {
  return (
    <section className="container py-24 sm:py-32" id="services">
      <div className="grid lg:grid-cols-[1fr,1fr] gap-8 place-items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold">
            <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
              Our{" "}
            </span>
            Services
          </h2>

          <p className="text-muted-foreground text-xl mt-4 mb-8 ">
            Here are some of our mission critical works
          </p>

          <div className="flex flex-col gap-8">
            {serviceList.map(({ icon, title, description }: ServiceProps) => (
              <Card key={title}>
                <CardHeader className="space-y-1 flex md:flex-row justify-start items-start gap-4">
                  <div className="mt-1 bg-primary/20 p-1 rounded-2xl">
                    {icon}
                  </div>
                  <div>
                    <CardTitle>{title}</CardTitle>
                    <CardDescription className="text-md mt-2">
                      {description}
                    </CardDescription>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>

        <img
          src={IconLogoPng}
          className="w-[300px] md:w-[500px] lg:w-[600px] object-contain"
          alt="About services"
        />
      </div>
    </section>
  );
};
