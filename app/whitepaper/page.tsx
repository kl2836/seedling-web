'use client';

import Container from '@/components/Container';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function WhitepaperPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      <section className="py-16 md:py-24 bg-neutral-50">
        <Container>
          <div className="max-w-4xl mx-auto">
            {/* Intro section */}
            <div className="mb-10">
              <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-neutral-900 mb-4">
                Seedling Whitepaper
              </h1>
              <p className="text-lg text-neutral-700 leading-relaxed">
                A deeper dive into the economics of social signals, endorsements, and early reward mechanisms.
              </p>
            </div>

            {/* PDF Embed */}
            <section className="mt-10">
              <h2 className="text-sm font-medium text-neutral-500 mb-3">
                Full whitepaper (PDF)
              </h2>
              <div className="w-full overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-50">
                <iframe
                  src="/seedling-whitepaper.pdf#view=FitH"
                  className="w-full h-[70vh]"
                  title="Seedling Whitepaper PDF"
                />
              </div>
              <p className="mt-3 text-xs text-neutral-500">
                If the PDF viewer doesn't load, you can{' '}
                <a
                  href="/seedling-whitepaper.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-1 underline underline-offset-2 text-emerald-700"
                >
                  open it in a new tab
                </a>
                .
              </p>
            </section>
          </div>
        </Container>
      </section>

      <Footer />
    </main>
  );
}

