import Image from "next/image";
import Link from "next/link";

export default function Diensten() {
  return (
    <div className="bg-background text-textDark min-h-screen flex flex-col">
      {/* Content */}
      <main className="flex-1">
        <div className="max-w-3xl mx-auto py-16 px-4 w-full">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-primary leading-tight">Maatwerk dienstverlening</h1>
          <p className="mb-6 text-lg">Afhankelijk van uw behoefte kan Advies Over Cijfers bijpassende financiële diensten aanbieden. Meest voorkomend zijn:</p>
          <ul className="list-disc pl-6 space-y-2 mb-8 text-textDark">
            <li>Opstellen jaarcijfers (jaarrekening)</li>
            <li>Advisering over financiële sturing (tussentijdse rapportages) binnen uw onderneming</li>
            <li>Belastingaangiften (omzetbelasting, inkomstenbelasting)</li>
            <li>Boekhouding opzetten of bijhouden (bij voorkeur in online boekhoudpakket)</li>
            <li>Trainingen verzorgen (bijvoorbeeld: efficiënt werken met Excel of rapporteren)</li>
            <li>Diversen: Begroting, liquiditeitsprognose, advisering bij investeringsbeslissingen</li>
          </ul>
          <p className="mb-8">Omdat AOC maatwerk dienstverlening aanbiedt, bepaalt u welke diensten u wilt afnemen. Ook in de doorlooptijd van uitvoering kan AOC flexibel zijn.</p>
          <h2 className="text-2xl font-bold mb-4 text-primary">Kosten besparen?</h2>
          <p className="mb-2">AOC helpt u om zoveel mogelijk uw boekhouding zelf te voeren. Enerzijds omdat dit u kosten bespaart, maar ook omdat dit de inzage in uw onderneming vergroot. Wanneer u hier niet direct klaar voor bent, kan AOC u coachen om op termijn zelf uw financiële administratie te voeren. Want: hoe meer u zelf doet, hoe lager uw kosten voor financiële dienstverlening.</p>
        </div>
      </main>
    </div>
  );
}
