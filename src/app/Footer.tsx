import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-footer text-white py-10 px-4 mt-auto">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-8">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <Image src="/file.svg" alt="Logo" width={28} height={28} />
            <span className="font-bold text-lg">Advies Over Cijfers</span>
          </div>
          <p className="text-textLight">info@adviesovercijfers.nl<br />+31 6 12345678<br />Kvk: 12345678</p>
        </div>
        <div className="flex flex-col gap-2">
          <a href="#" className="hover:underline">Privacyverklaring</a>
          <a href="#" className="hover:underline">Algemene voorwaarden</a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:underline">LinkedIn</a>
        </div>
        <div className="flex gap-4 items-center">
          <a href="#" aria-label="LinkedIn" className="hover:text-accent"><svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm15.5 11.268h-3v-5.604c0-1.337-.025-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.968v5.699h-3v-10h2.881v1.367h.041c.401-.761 1.381-1.563 2.844-1.563 3.043 0 3.604 2.004 3.604 4.609v5.587z"/></svg></a>
        </div>
      </div>
    </footer>
  );
}
