import type { Metadata } from 'next';
import Container from '@/components/Container';

export const metadata: Metadata = {
  title: 'Seedling Whitepaper — Social Investing & Endorsements',
  description: 'A deeper dive into the economics of social signals, endorsements, and early reward mechanisms.',
};

export default function WhitepaperPage() {
  return (
    <main className="min-h-screen bg-neutral-50 pt-24 pb-16">
      <Container>
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
            Seedling Whitepaper
          </h1>
          <p className="text-lg text-neutral-700 mb-8">
            A deeper dive into the economics of social signals, endorsements, and early reward mechanisms.
          </p>

          <div className="bg-white rounded-2xl border border-neutral-200 shadow-sm p-8 md:p-12 space-y-6">
            <section>
              <h2 className="text-2xl font-semibold text-neutral-900 mb-3">
                Executive Summary
              </h2>
              <p className="text-neutral-700 leading-relaxed">
                Seedling introduces a new model for early-stage investing that combines social signals, 
                public endorsements, and community-driven discovery. This whitepaper outlines the 
                economic principles, user incentives, and platform mechanics that make Seedling 
                uniquely positioned to democratize access to early investment opportunities.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-neutral-900 mb-3">
                The Endorsement Economy
              </h2>
              <p className="text-neutral-700 leading-relaxed">
                Endorsements serve as public expressions of belief that precede financial commitment. 
                By allowing users to signal support before capital is required, Seedling creates a 
                transparent, social layer that helps founders build credibility and helps investors 
                discover opportunities through trusted networks.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-neutral-900 mb-3">
                Social Signals & Discovery
              </h2>
              <p className="text-neutral-700 leading-relaxed">
                The platform leverages social proof to surface high-quality opportunities. When 
                trusted investors, operators, and community members endorse businesses, their 
                networks gain visibility into those signals, creating a discovery mechanism that 
                scales with community engagement.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-neutral-900 mb-3">
                Early Reward Mechanisms
              </h2>
              <p className="text-neutral-700 leading-relaxed">
                Seedling explores mechanisms to recognize and reward early belief. Endorsers who 
                support businesses before they gain traction may be eligible for recognition, 
                early access to investment rounds, or other community benefits that acknowledge 
                their early support.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-neutral-900 mb-3">
                Platform Economics
              </h2>
              <p className="text-neutral-700 leading-relaxed">
                The platform is designed to align incentives between founders, investors, and 
                community members. By making endorsements public and trackable, Seedling creates 
                a transparent ecosystem where early belief is visible and can be converted to 
                investment when businesses are ready to raise capital.
              </p>
            </section>

            <div className="pt-6 border-t border-neutral-200">
              <p className="text-sm text-neutral-500">
                This is a draft preview. The full whitepaper will be available soon with detailed 
                analysis, data, and case studies.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
}

