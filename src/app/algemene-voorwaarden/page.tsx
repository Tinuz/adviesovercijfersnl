import Link from "next/link";

export default function AlgemeneVoorwaarden() {
  return (
    <div className="bg-background text-textDark min-h-screen flex flex-col">
      <main className="flex-1 py-16 px-4">
        <div className="max-w-2xl mx-auto py-12 px-4 w-full bg-white rounded-xl shadow">
          <h1 className="text-3xl md:text-4xl font-bold mb-8 text-primary leading-tight">Algemene Voorwaarden</h1>
          <div className="prose prose-primary max-w-none text-textDark">
            <h2 className="text-xl font-semibold mt-8 mb-2">Advies Over Cijfers (AOC)</h2>
            <h3 className="font-semibold mt-6 mb-2">Artikel 1 – Definities</h3>
            <p>In deze voorwaarden wordt verstaan onder:</p>
            <ul className="list-disc ml-6">
              <li><strong>Opdrachtnemer:</strong> Advies Over Cijfers (AOC);</li>
              <li><strong>Opdrachtgever:</strong> iedere natuurlijke of rechtspersoon die met AOC een overeenkomst sluit;</li>
              <li><strong>Diensten:</strong> alle werkzaamheden die AOC verricht in het kader van boekhouding, fiscaal advies en financiële ondersteuning.</li>
            </ul>
            <h3 className="font-semibold mt-6 mb-2">Artikel 2 – Toepasselijkheid</h3>
            <p>Deze voorwaarden zijn van toepassing op alle aanbiedingen, overeenkomsten en leveringen van diensten door AOC, tenzij schriftelijk anders overeengekomen.</p>
            <h3 className="font-semibold mt-6 mb-2">Artikel 3 – Totstandkoming overeenkomst</h3>
            <p>Een overeenkomst komt tot stand op het moment dat AOC de opdracht schriftelijk bevestigt of met de uitvoering begint.</p>
            <h3 className="font-semibold mt-6 mb-2">Artikel 4 – Uitvoering van de opdracht</h3>
            <p>AOC zal zich inspannen de opdracht zorgvuldig en professioneel uit te voeren. De opdrachtgever verstrekt tijdig alle gegevens die noodzakelijk zijn voor een goede uitvoering.</p>
            <h3 className="font-semibold mt-6 mb-2">Artikel 5 – Geheimhouding</h3>
            <p>Beide partijen zijn verplicht tot geheimhouding van vertrouwelijke informatie die zij in het kader van de overeenkomst van elkaar verkrijgen.</p>
            <h3 className="font-semibold mt-6 mb-2">Artikel 6 – Aansprakelijkheid</h3>
            <p>AOC is slechts aansprakelijk voor directe schade die het gevolg is van opzet of grove nalatigheid. Iedere aansprakelijkheid is beperkt tot het bedrag dat in het desbetreffende geval door de beroepsaansprakelijkheidsverzekering wordt uitgekeerd.</p>
            <h3 className="font-semibold mt-6 mb-2">Artikel 7 – Betaling</h3>
            <p>Facturen dienen te worden voldaan binnen 14 dagen na factuurdatum, tenzij anders overeengekomen. Bij overschrijding is AOC gerechtigd wettelijke rente en incassokosten in rekening te brengen.</p>
            <h3 className="font-semibold mt-6 mb-2">Artikel 8 – Wijziging en annulering</h3>
            <p>Wijzigingen in de opdracht of annuleringen dienen schriftelijk overeengekomen te worden. Kosten voor reeds verrichte werkzaamheden kunnen in rekening worden gebracht.</p>
            <h3 className="font-semibold mt-6 mb-2">Artikel 9 – Toepasselijk recht en geschillen</h3>
            <p>Op alle overeenkomsten is Nederlands recht van toepassing. Geschillen worden bij voorkeur in onderling overleg opgelost; indien dat niet lukt, is de rechtbank in de vestigingsplaats van AOC bevoegd.</p>
            <div className="mt-8">
              <Link href="/" className="inline-block bg-action text-white rounded-btn px-6 py-3 font-semibold shadow hover:bg-primary transition">Terug naar home</Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
