"use client";

import { useState } from "react";

export default function Contact() {
  const [agreed, setAgreed] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!agreed) {
      setError("U dient akkoord te gaan met het privacybeleid.");
      return;
    }
    setError("");
    setSubmitted(true);
  }

  return (
    <div className="bg-background text-textDark min-h-screen flex flex-col">
      {/* Content */}
      <main className="flex-1 py-16 px-4">
        <div className="max-w-2xl mx-auto py-16 px-4 w-full">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-primary leading-tight">Contact</h1>
          <p className="mb-8 text-lg">Bent u benieuwd naar wat Advies Over Cijfers voor uw onderneming kan betekenen? 
            Laat dan hier uw gegevens achter, op korte termijn ontvangt u een reactie. 
            Telefonsich contact of een vrijblijvend gesprek is de vervolgstap. 
            U kunt ook een e-mail sturen naar <a href="mailto:info@adviesovercijfers.nl" className="text-action underline">info@adviesovercijfers.nl</a>
          </p>
          {submitted ? (
            <div className="bg-action/10 border border-action text-action rounded p-6 text-lg font-medium">Bedankt voor uw bericht! We nemen spoedig contact met u op.</div>
          ) : (
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label className="block mb-1 font-semibold" htmlFor="bedrijf">Bedrijfsnaam *</label>
                <input required id="bedrijf" name="bedrijf" type="text" className="w-full border border-gray-300 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary" />
              </div>
              <div>
                <label className="block mb-1 font-semibold" htmlFor="plaats">Vestigingsplaats *</label>
                <input required id="plaats" name="plaats" type="text" className="w-full border border-gray-300 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block mb-1 font-semibold" htmlFor="voornaam">Voornaam *</label>
                  <input required id="voornaam" name="voornaam" type="text" className="w-full border border-gray-300 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary" />
                </div>
                <div>
                  <label className="block mb-1 font-semibold" htmlFor="achternaam">Achternaam *</label>
                  <input required id="achternaam" name="achternaam" type="text" className="w-full border border-gray-300 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary" />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block mb-1 font-semibold" htmlFor="email">E-mailadres *</label>
                  <input required id="email" name="email" type="email" className="w-full border border-gray-300 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary" />
                </div>
                <div>
                  <label className="block mb-1 font-semibold" htmlFor="telefoon">Telefoonnummer</label>
                  <input id="telefoon" name="telefoon" type="tel" className="w-full border border-gray-300 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary" />
                </div>
              </div>
              <div>
                <label className="block mb-1 font-semibold" htmlFor="bericht">Bericht *</label>
                <textarea required id="bericht" name="bericht" rows={5} className="w-full border border-gray-300 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary"></textarea>
              </div>
              <div className="flex items-start gap-2">
                <input id="akkoord" name="akkoord" type="checkbox" checked={agreed} onChange={e => setAgreed(e.target.checked)} className="mt-1" />
                <label htmlFor="akkoord" className="text-sm select-none">Ik ga akkoord met het privacybeleid en bevestig dat mijn persoonlijke gegevens in overeenstemming met de wet mogen worden gebruikt. <span className="text-action font-bold">*</span></label>
              </div>
              {error && <div className="text-red-600 font-medium">{error}</div>}
              <button type="submit" className="w-full bg-action text-white rounded-btn px-8 py-4 font-semibold shadow hover:bg-primary transition">Verzenden</button>
            </form>
          )}
        </div>
      </main>
    </div>
  );
}
