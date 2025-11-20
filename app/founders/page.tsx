'use client';

import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Button from '@/components/Button';
import Container from '@/components/Container';
import SectionTitle from '@/components/SectionTitle';
import Card from '@/components/Card';
import FAQItem from '@/components/FAQItem';
import { CheckCircle2 } from 'lucide-react';

export default function FoundersPage() {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const navbarHeight = window.innerWidth >= 640 ? 80 : 64;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - navbarHeight - 16;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden pt-20 pb-16 lg:pb-20">
        <div className="absolute inset-0 bg-[var(--grad-cream)] opacity-50" />
        <div className="absolute inset-0 bg-gradient-to-br from-brand/5 via-transparent to-brand-light/5" />
        
        <Container className="relative z-10">
          <div className="grid md:grid-cols-2 gap-8 md:items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-xs uppercase tracking-wider text-muted mb-4">
                Seedling for founders & owners
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-ink mb-6 leading-tight">
                Turn early belief into momentum, funding, and loyal backers.
              </h1>
              <p className="text-xl sm:text-2xl text-muted mb-8 leading-relaxed">
                Seedling gives you a home for your community, where endorsements, updates, and future funding all stay connected—whether you're a startup, local business, or creator.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  href="/#waitlist"
                  size="lg"
                  className="w-full sm:w-auto"
                >
                  Get early access
                </Button>
                <Button
                  onClick={() => scrollTo('how-it-works')}
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto"
                >
                  See how it works
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative mt-8 md:mt-0"
            >
              <Card className="p-8">
                <div className="aspect-video bg-gradient-to-br from-brand/10 to-brand-light/10 rounded-[var(--radius-md)] mb-4 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 rounded-full bg-[var(--grad-brand)] flex items-center justify-center mx-auto mb-4">
                      <span className="text-white font-bold text-2xl">🌱</span>
                    </div>
                    <p className="text-muted text-sm">Your Seedling company page</p>
                  </div>
                </div>
                <h3 className="font-semibold text-ink mb-2">Example Business</h3>
                <p className="text-sm text-muted mb-4">Building the future of [your industry]</p>
                <div className="flex items-center gap-4 text-sm">
                  <div>
                    <span className="font-semibold text-ink">127</span>
                    <span className="text-muted ml-1">endorsements</span>
                  </div>
                  <div>
                    <span className="font-semibold text-ink">89</span>
                    <span className="text-muted ml-1">followers</span>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Why Founders Use Seedling */}
      <section id="why-seedling" className="py-16 md:py-24 bg-surface">
        <Container>
          <SectionTitle
            title="Why founders and owners use Seedling"
            subtitle="Not just another campaign page. Seedling is a persistent home for your supporters and future funding."
            className="mb-16"
          />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card>
              <h3 className="text-xl font-bold text-ink mb-3">
                Build visible traction before you raise
              </h3>
              <p className="text-muted leading-relaxed">
                Collect public endorsements and followers before you open a round. Show investors that real people care about what you're building.
              </p>
            </Card>

            <Card delay={0.1}>
              <h3 className="text-xl font-bold text-ink mb-3">
                Turn community into funding, not just likes
              </h3>
              <p className="text-muted leading-relaxed">
                Endorsements and followers give you a warm list of potential backers you can invite when you decide to raise—rather than begging cold strangers to care.
              </p>
            </Card>

            <Card delay={0.2}>
              <h3 className="text-xl font-bold text-ink mb-3">
                Own your supporter graph over time
              </h3>
              <p className="text-muted leading-relaxed">
                Most platforms give you a static campaign that dies once it closes. Seedling gives you a persistent profile where your endorsements, followers, and updates continue to compound.
              </p>
            </Card>

            <Card delay={0.3}>
              <h3 className="text-xl font-bold text-ink mb-3">
                Made for startups, SMBs, and creators
              </h3>
              <p className="text-muted leading-relaxed">
                Whether you're an AI startup, local café, or creator, Seedling helps you capture belief early and translate it into long-term support and funding.
              </p>
            </Card>
          </div>
        </Container>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-16 md:py-24 bg-bg">
        <Container>
          <SectionTitle
            title="How Seedling works for founders"
            subtitle="From first endorsement to your next raise, everything lives in one place."
            className="mb-16"
          />
          
          <div className="relative">
            {/* Connecting line on desktop */}
            <div className="hidden md:block absolute top-1/2 left-0 right-0 border-t border-gray-200 z-0" />
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
              <Card>
                <div className="flex flex-col items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-brand-light/20 flex items-center justify-center mb-3">
                    <span className="text-2xl font-bold text-brand">1</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-ink mb-3 text-center">
                  Claim or create your page
                </h3>
                <p className="text-muted leading-relaxed text-center">
                  Set up your business profile with a short description, logo, and what you're building.
                </p>
              </Card>

              <Card delay={0.1}>
                <div className="flex flex-col items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-brand-light/20 flex items-center justify-center mb-3">
                    <span className="text-2xl font-bold text-brand">2</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-ink mb-3 text-center">
                  Invite your community to endorse
                </h3>
                <p className="text-muted leading-relaxed text-center">
                  Share your Seedling page with customers, friends, and followers so they can endorse you for free.
                </p>
              </Card>

              <Card delay={0.2}>
                <div className="flex flex-col items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-brand-light/20 flex items-center justify-center mb-3">
                    <span className="text-2xl font-bold text-brand">3</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-ink mb-3 text-center">
                  Share updates and grow support
                </h3>
                <p className="text-muted leading-relaxed text-center">
                  Post lightweight updates to keep supporters in the loop and build a track record of progress.
                </p>
              </Card>

              <Card delay={0.3}>
                <div className="flex flex-col items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-brand-light/20 flex items-center justify-center mb-3">
                    <span className="text-2xl font-bold text-brand">4</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-ink mb-3 text-center">
                  Convert belief into funding when you're ready
                </h3>
                <p className="text-muted leading-relaxed text-center">
                  When you open a round or offer revenue share, you already have a list of warm supporters who've raised their hand.
                </p>
              </Card>
            </div>
          </div>
        </Container>
      </section>

      {/* Comparison Section */}
      <section className="py-16 md:py-24 bg-surface">
        <Container>
          <SectionTitle
            title="How Seedling compares to existing options"
            subtitle="We sit between traditional crowdfunding and doing everything manually."
            className="mb-16"
          />
          
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <h3 className="text-xl font-bold text-ink mb-6 text-center">
                Seedling
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-brand flex-shrink-0 mt-0.5" />
                  <span className="text-muted">Start collecting endorsements even before a round.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-brand flex-shrink-0 mt-0.5" />
                  <span className="text-muted">Anyone can endorse for free; some may later invest.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-brand flex-shrink-0 mt-0.5" />
                  <span className="text-muted">Persistent profile with endorsements, followers, and updates.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-brand flex-shrink-0 mt-0.5" />
                  <span className="text-muted">Social discovery and signal built into the platform.</span>
                </li>
              </ul>
            </Card>

            <Card delay={0.1}>
              <h3 className="text-xl font-bold text-ink mb-6 text-center">
                Traditional crowdfunding
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="w-5 h-5 flex-shrink-0 mt-0.5 text-muted">•</span>
                  <span className="text-muted">Only useful once a live campaign is running.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-5 h-5 flex-shrink-0 mt-0.5 text-muted">•</span>
                  <span className="text-muted">Visitors must decide on the spot whether to invest.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-5 h-5 flex-shrink-0 mt-0.5 text-muted">•</span>
                  <span className="text-muted">Campaign page mostly ends when the raise closes.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-5 h-5 flex-shrink-0 mt-0.5 text-muted">•</span>
                  <span className="text-muted">Limited social graph; focus is on funding totals.</span>
                </li>
              </ul>
            </Card>

            <Card delay={0.2}>
              <h3 className="text-xl font-bold text-ink mb-6 text-center">
                DIY (social + spreadsheets)
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="w-5 h-5 flex-shrink-0 mt-0.5 text-muted">•</span>
                  <span className="text-muted">Scattered between email, social, and different tools.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-5 h-5 flex-shrink-0 mt-0.5 text-muted">•</span>
                  <span className="text-muted">No clean supporter list tied to future funding.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-5 h-5 flex-shrink-0 mt-0.5 text-muted">•</span>
                  <span className="text-muted">Hard to see who truly believes vs casual likes.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-5 h-5 flex-shrink-0 mt-0.5 text-muted">•</span>
                  <span className="text-muted">Time-consuming and easy to lose momentum.</span>
                </li>
              </ul>
            </Card>
          </div>
        </Container>
      </section>

      {/* Who It's For */}
      <section className="py-16 md:py-24 bg-bg">
        <Container>
          <SectionTitle
            title="Who Seedling is built for"
            className="mb-16"
          />
          
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <h3 className="text-xl font-bold text-ink mb-3">
                Early-stage startups
              </h3>
              <p className="text-muted leading-relaxed">
                Validate demand, rally early adopters, and show real-world traction before talking to institutional investors.
              </p>
            </Card>

            <Card delay={0.1}>
              <h3 className="text-xl font-bold text-ink mb-3">
                Local businesses & SMBs
              </h3>
              <p className="text-muted leading-relaxed">
                Give your regulars a place to show public support and be first in line when you expand or raise funds.
              </p>
            </Card>

            <Card delay={0.2}>
              <h3 className="text-xl font-bold text-ink mb-3">
                Creators & individuals
              </h3>
              <p className="text-muted leading-relaxed">
                Let fans endorse your projects now and stay connected when you launch bigger initiatives later.
              </p>
            </Card>
          </div>
        </Container>
      </section>

      {/* Getting Started */}
      <section className="py-16 md:py-24 bg-surface">
        <Container>
          <SectionTitle
            title="Getting started is simple"
            className="mb-12"
          />
          
          <div className="max-w-2xl mx-auto">
            <div className="space-y-6 mb-10">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-brand-light/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-brand font-bold">1</span>
                </div>
                <div>
                  <p className="text-lg text-ink leading-relaxed">
                    Apply for early access and tell us a bit about your business.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-brand-light/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-brand font-bold">2</span>
                </div>
                <div>
                  <p className="text-lg text-ink leading-relaxed">
                    We'll help you set up your Seedling page and initial supporter invites.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-brand-light/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-brand font-bold">3</span>
                </div>
                <div>
                  <p className="text-lg text-ink leading-relaxed">
                    Start collecting endorsements and sharing updates with your community.
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center">
              <Button
                href="/#waitlist"
                size="lg"
              >
                Apply as a founder
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-bg">
        <Container>
          <SectionTitle
            title="Frequently Asked Questions"
            className="mb-16"
          />
          <div className="max-w-3xl mx-auto bg-surface rounded-[var(--radius-xl)] shadow-[var(--shadow-card)] overflow-hidden">
            <FAQItem
              question="Do I have to be raising money right now to use Seedling?"
              answer="No. Many founders use Seedling purely to collect endorsements and build visible traction before they're ready to raise."
            />
            <FAQItem
              question="Is this only for tech startups?"
              answer="No. Seedling is designed for startups, local businesses, and creators—anyone who benefits from early belief and future backers."
            />
            <FAQItem
              question="How much does it cost?"
              answer="During the early-access period we're working closely with founders and will share pricing details as we roll out business tools and funding features."
            />
            <FAQItem
              question="Can I use Seedling if I'm not in the US?"
              answer="We're starting with US-based businesses, but we're planning to expand internationally. Join the waitlist to be notified when we launch in your region."
            />
          </div>
        </Container>
      </section>

      <Footer />
    </main>
  );
}

