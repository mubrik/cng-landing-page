import { HeroCards } from "./HeroCards";

export const Hero = () => {
  return (
    <section className="container grid lg:grid-cols-2 place-items-center py-20 md:py-32 gap-10">
      <div className="text-center lg:text-start space-y-6">
        <main className="text-5xl md:text-6xl font-bold">
          <h1 className="inline">
            <span className="inline bg-gradient-to-r from-[#F596D3]  to-[#D247BF] text-transparent bg-clip-text">
              AMK
            </span>{" "}
            integrated
          </h1>{" "}
          {/* for{" "} */}
          {/* <h2 className="inline">
            <span className="inline bg-gradient-to-r from-[#61DAFB] via-[#1fc0f1] to-[#03a3d7] text-transparent bg-clip-text">
              Add
            </span>{" "}
            details
          </h2> */}
        </main>

        <p className="text-xl text-muted-foreground md:w-10/12 mx-auto lg:mx-0">
          We are a multinational oil and gas company with operations spanning
          the entire energy value chain — from exploration and production to
          refining, distribution, and energy innovation. With a strong
          commitment to safety, sustainability, and performance, we deliver the
          energy the world needs to thrive today and transition toward a
          lower-carbon future. Our diverse teams and global presence enable us
          to drive progress, create value, and shape the future of energy.
        </p>
      </div>

      {/* Hero cards sections */}
      <div className="z-10">
        <HeroCards />
      </div>

      {/* Shadow effect */}
      <div className="shadow"></div>
    </section>
  );
};
