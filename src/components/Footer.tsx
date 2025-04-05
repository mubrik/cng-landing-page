import { IconLogo } from "./Icons";

export const Footer = () => {
  return (
    <footer id="footer">
      <hr className="w-11/12 mx-auto" />

      <section className="container py-20 grid grid-cols-2 md:grid-cols-4 gap-x-12 gap-y-8">
        <div className="col-span-full">
          <a
            rel="noreferrer noopener"
            href="/"
            className="font-bold text-xl flex"
          >
            <IconLogo />
          </a>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-lg">Head Office</h3>
          <div>
            <p className="opacity-60 hover:opacity-100" >
            Apapa Oshodi Expressway,
            Berger Cement B/Stop,
            Opp.Acromaritime Building, Lagos
            1, Segilola Street, Off Pero Bus Stop,
            Agege, Lagos
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-lg">Branch Office</h3>
          <div>
            <p className="opacity-60 hover:opacity-100" >
            53, Agad Transport Sharada, Kano
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-lg">Contact</h3>
          <div>
            <p
              className="opacity-60 hover:opacity-100"
            >
              Tel: 08023333151, 08100005440
            </p>
          </div>

          <div>
            <p className="opacity-60 hover:opacity-100" >
              Email: ankoki3@gmail.com
            </p>
          </div>
        </div>
      </section>

      <section className="container pb-14 text-center">
        <h3>
          &copy; {new Date().getFullYear()} AMK Integrated
        </h3>
      </section>
    </footer>
  );
};
