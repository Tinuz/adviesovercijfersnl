import Link from "next/link";

export default function Privacyverklaring() {
  return (
    <div className="bg-background text-textDark min-h-screen flex flex-col">
      <main className="flex-1 py-16 px-4">
        <div className="max-w-2xl mx-auto py-12 px-4 w-full bg-white rounded-xl shadow">
          <h1 className="text-3xl md:text-4xl font-bold mb-8 text-primary leading-tight">Privacyverklaring</h1>
          <div className="prose prose-primary max-w-none text-textDark">
            <h2 className="text-xl font-semibold mt-8 mb-2">1. Wie zijn wij?</h2>
            <p>Deze privacyverklaring is van toepassing op alle diensten van Advies Over Cijfers, hierna: AOC. AOC is gevestigd in Nederland en bereikbaar via <a href="mailto:info@adviesovercijfers.nl" className="text-action underline">info@adviesovercijfers.nl</a>.</p>
            <h2 className="text-xl font-semibold mt-8 mb-2">2. Verwerking van persoonsgegevens</h2>
            <p>AOC verwerkt uitsluitend persoonsgegevens die noodzakelijk zijn om haar diensten aan te kunnen bieden, waaronder:</p>
            <ul className="list-disc ml-6">
              <li>het beantwoorden van informatieverzoeken;</li>
              <li>het uitvoeren van opdrachten;</li>
              <li>het onderhouden van contact met klanten.</li>
            </ul>
            <h2 className="text-xl font-semibold mt-8 mb-2">3. Doeleinden en grondslagen</h2>
            <p>Uw gegevens worden uitsluitend verwerkt:</p>
            <ul className="list-disc ml-6">
              <li>voor de uitvoering van overeenkomsten met u of uw onderneming;</li>
              <li>wanneer u daarvoor toestemming hebt gegeven;</li>
              <li>om te voldoen aan wettelijke verplichtingen.</li>
            </ul>
            <p>AOC gebruikt uw gegevens niet voor andere doeleinden en deelt deze niet met derden, tenzij u daar expliciet toestemming voor hebt gegeven of dit wettelijk verplicht is.</p>
            <h2 className="text-xl font-semibold mt-8 mb-2">4. Beveiliging</h2>
            <p>AOC neemt passende technische en organisatorische maatregelen om uw persoonsgegevens te beveiligen tegen verlies of enige vorm van onrechtmatige verwerking.</p>
            <h2 className="text-xl font-semibold mt-8 mb-2">5. Uw rechten</h2>
            <p>U hebt het recht om:</p>
            <ul className="list-disc ml-6">
              <li>uw gegevens in te zien;</li>
              <li>correctie of verwijdering aan te vragen;</li>
              <li>bezwaar te maken tegen verwerking;</li>
              <li>een klacht in te dienen bij de Autoriteit Persoonsgegevens.</li>
            </ul>
            <p>Voor verzoeken kunt u contact opnemen via <a href="mailto:info@adviesovercijfers.nl" className="text-action underline">info@adviesovercijfers.nl</a>.</p>
            <h2 className="text-xl font-semibold mt-8 mb-2">6. Cookies en websitegebruik</h2>
            <p>De website van AOC gebruikt functionele en analytische cookies om instellingen te onthouden en het gebruik van de website te analyseren. Deze gegevens zijn niet tot personen te herleiden en worden niet gedeeld met derden.</p>
            <h2 className="text-xl font-semibold mt-8 mb-2">7. Contact</h2>
            <p>Voor vragen of klachten over deze verklaring of over de verwerking van uw gegevens, kunt u contact opnemen via:</p>
            <p className="font-semibold">Advies Over Cijfers<br />✉️ <a href="mailto:info@adviesovercijfers.nl" className="text-action underline">info@adviesovercijfers.nl</a></p>
            <div className="mt-8">
              <Link href="/" className="inline-block bg-action text-white rounded-btn px-6 py-3 font-semibold shadow hover:bg-primary transition">Terug naar home</Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
