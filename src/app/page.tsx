import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-background text-textDark min-h-screen flex flex-col">
      {/* Hero Section */}
      <section
        className="bg-hero w-full py-16 md:py-24 px-4"
        id="hero"
      >
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-primary leading-tight">
              Jouw cijfers, onze expertise
            </h1>
            <p className="text-lg md:text-xl text-textLight mb-8 max-w-xl">
              Professioneel advies en ondersteuning voor ondernemers en
              particulieren. Transparant, betrokken en altijd up-to-date.
            </p>
            <a
              href="#contact"
              className="inline-block bg-action text-white rounded-btn px-8 py-4 font-semibold shadow hover:bg-primary transition"
            >
              Gratis intake
            </a>
          </div>
          <div className="flex-1 flex justify-center">
            <Image
              src="/logo.png"
              alt="Illustratie cijfers"
              width={720}
              height={540}
              className="w-full max-w-xs md:max-w-md"
            />
          </div>
        </div>
      </section>

      {/* Diensten */}
      <section
        className="py-16 px-4 bg-background"
        id="diensten"
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-primary">
            Onze diensten
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Dienst 1 */}
            <div className="bg-white rounded-xl shadow p-6 flex flex-col items-start">
              <div className="bg-secondary/10 p-3 rounded-full mb-4">
                <Image
                  src="/file.svg"
                  alt="Boekhouding"
                  width={32}
                  height={32}
                />
              </div>
              <h3 className="font-semibold text-lg mb-2">Boekhouding</h3>
              <p className="text-textLight mb-4">
                Volledige ontzorging van je administratie, van factuur tot
                jaarrekening.
              </p>
              <Link
                href="/diensten"
                className="text-action font-medium hover:underline"
              >
                Lees meer
              </Link>
            </div>
            {/* Dienst 2 */}
            <div className="bg-white rounded-xl shadow p-6 flex flex-col items-start">
              <div className="bg-secondary/10 p-3 rounded-full mb-4">
                <Image
                  src="/window.svg"
                  alt="Jaarrekening"
                  width={32}
                  height={32}
                />
              </div>
              <h3 className="font-semibold text-lg mb-2">Jaarrekening</h3>
              <p className="text-textLight mb-4">
                Heldere jaarrekeningen en rapportages, altijd conform de laatste
                wetgeving.
              </p>
              <Link
                href="/diensten"
                className="text-action font-medium hover:underline"
              >
                Lees meer
              </Link>
            </div>
            {/* Dienst 3 */}
            <div className="bg-white rounded-xl shadow p-6 flex flex-col items-start">
              <div className="bg-secondary/10 p-3 rounded-full mb-4">
                <Image
                  src="/vercel.svg"
                  alt="Fiscaal advies"
                  width={32}
                  height={32}
                />
              </div>
              <h3 className="font-semibold text-lg mb-2">Fiscaal advies</h3>
              <p className="text-textLight mb-4">
                Praktisch en actueel fiscaal advies voor ondernemers en
                particulieren.
              </p>
              <Link
                href="/diensten"
                className="text-action font-medium hover:underline"
              >
                Lees meer
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Waarom wij */}
      <section className="py-16 px-4" id="over">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-primary">
              Waarom kiezen voor ons?
            </h2>
            <ul className="space-y-4 mb-6">
              <li className="flex items-start gap-3">
                <span className="text-action mt-1">✔</span> Persoonlijk en
                betrokken advies
              </li>
              <li className="flex items-start gap-3">
                <span className="text-action mt-1">✔</span> Altijd up-to-date
                kennis
              </li>
              <li className="flex items-start gap-3">
                <span className="text-action mt-1">✔</span> Transparante tarieven
              </li>
              <li className="flex items-start gap-3">
                <span className="text-action mt-1">✔</span> Snel en accuraat
              </li>
            </ul>
            <a
              href="#contact"
              className="inline-block bg-accent text-white rounded-btn px-8 py-4 font-semibold shadow hover:bg-primary transition"
            >
              Neem contact op
            </a>
          </div>
          <div className="flex justify-center">
            <Image
              src="/hero.png"
              alt="USP illustratie"
              width={320}
              height={240}
              className="w-full max-w-xs md:max-w-md"
            />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4 bg-background">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-primary">
            Wat klanten zeggen
          </h2>
          <div className="flex flex-col md:flex-row gap-8 overflow-x-auto">
            {/* Testimonial 1 */}
            <div className="bg-white rounded-xl shadow p-6 min-w-[280px] flex-1">
              <p className="text-lg mb-4">
                “Zeer professioneel en altijd bereikbaar. Mijn administratie is in
                goede handen!”
              </p>
              <span className="block text-textLight font-medium">
                - Jan de Vries
              </span>
            </div>
            {/* Testimonial 2 */}
            <div className="bg-white rounded-xl shadow p-6 min-w-[280px] flex-1">
              <p className="text-lg mb-4">
                “Helder advies en snelle service. Aanrader voor iedere ondernemer.”
              </p>
              <span className="block text-textLight font-medium">
                - Fatima Yilmaz
              </span>
            </div>
            {/* Testimonial 3 */}
            <div className="bg-white rounded-xl shadow p-6 min-w-[280px] flex-1">
              <p className="text-lg mb-4">
                “Transparant, duidelijk en altijd up-to-date. Prettige
                samenwerking!”
              </p>
              <span className="block text-textLight font-medium">
                - Pieter van Leeuwen
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
