'use client';

import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Button from '@/components/Button';
import Container from '@/components/Container';
import SectionTitle from '@/components/SectionTitle';
import Card from '@/components/Card';
import FAQItem from '@/components/FAQItem';
import { CheckCircle2, Heart, Users, TrendingUp } from 'lucide-react';
import EndorsementsModuleShowcase from '@/components/showcase/EndorsementsModuleShowcase';
import CelebrityProfileShowcase from '@/components/showcase/CelebrityProfileShowcase';
import DeviceFrame from '@/components/DeviceFrame';

export default function InvestorsPage() {
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
                Seedling for individuals & investors
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-ink mb-6 leading-tight">
                Back what you believe in now. Get upside when it grows.
              </h1>
              <p className="text-xl sm:text-2xl text-muted mb-8 leading-relaxed">
                Seedling lets you show belief early, build a public track record, and potentially get rewarded sooner—without needing to invest from day one.
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
                  onClick={() => scrollTo('how-endorsements-work')}
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto"
                >
                  See how endorsements work
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative mt-8 md:mt-0"
            >
              <DeviceFrame className="w-full max-w-[360px] mx-auto md:mx-0" aspect="phone">
                <CelebrityProfileShowcase />
              </DeviceFrame>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Why Join Seedling */}
      <section id="why-seedling-investors" className="py-16 md:py-24 bg-surface">
        <Container>
          <SectionTitle
            title="Why join Seedling as an individual or investor?"
            subtitle="Seedling makes it possible to participate earlier, with less friction, and with more social context than traditional startup investing."
            className="mb-16"
          />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card>
              <h3 className="text-xl font-bold text-ink mb-3">
                Start with belief, not a big check
              </h3>
              <p className="text-muted leading-relaxed">
                Endorse a company for free to put your name behind it. You don't have to decide on a dollar amount on day one.
              </p>
            </Card>

            <Card delay={0.1}>
              <h3 className="text-xl font-bold text-ink mb-3">
                Potentially get rewarded sooner
              </h3>
              <p className="text-muted leading-relaxed">
                When companies raise or offer upside later, your early endorsement can unlock perks, early access, or investment opportunities that others don't see.
              </p>
            </Card>

            <Card delay={0.2}>
              <h3 className="text-xl font-bold text-ink mb-3">
                Build a track record of early calls
              </h3>
              <p className="text-muted leading-relaxed">
                Your profile shows the businesses and creators you backed before they were obvious. Over time, this becomes a social and reputational asset.
              </p>
            </Card>

            <Card delay={0.3}>
              <h3 className="text-xl font-bold text-ink mb-3">
                Follow people you trust
              </h3>
              <p className="text-muted leading-relaxed">
                See what friends, experts, or well-known investors are backing, so you're not making decisions in a vacuum.
              </p>
            </Card>
          </div>
        </Container>
      </section>

      {/* How Endorsements Work */}
      <section id="how-endorsements-work" className="py-16 md:py-24 bg-bg">
        <Container>
          <SectionTitle
            title="How endorsements work on Seedling"
            subtitle="A simple way to participate early, with the potential for upside later."
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
                  Create your Seedling profile
                </h3>
                <p className="text-muted leading-relaxed text-center">
                  Sign up, choose a display name, and add a short bio about what you care about.
                </p>
              </Card>

              <Card delay={0.1}>
                <div className="flex flex-col items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-brand-light/20 flex items-center justify-center mb-3">
                    <span className="text-2xl font-bold text-brand">2</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-ink mb-3 text-center">
                  Discover startups, SMBs, and creators
                </h3>
                <p className="text-muted leading-relaxed text-center">
                  Browse the feed, see what others are backing, and filter by category or stage.
                </p>
              </Card>

              <Card delay={0.2}>
                <div className="flex flex-col items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-brand-light/20 flex items-center justify-center mb-3">
                    <Heart className="w-6 h-6 text-brand" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-ink mb-3 text-center">
                  Endorse the ones you believe in
                </h3>
                <p className="text-muted leading-relaxed text-center">
                  Click the 'Endorse' button to publicly back a company. This costs you nothing and simply records your belief.
                </p>
              </Card>

              <Card delay={0.3}>
                <div className="flex flex-col items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-brand-light/20 flex items-center justify-center mb-3">
                    <TrendingUp className="w-6 h-6 text-brand" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-ink mb-3 text-center">
                  Stay updated and unlock future opportunities
                </h3>
                <p className="text-muted leading-relaxed text-center">
                  As endorsed companies grow and raise, they can choose to reward early endorsers with perks, access, or investment opportunities—subject to risk and eligibility.
                </p>
              </Card>
            </div>
          </div>
        </Container>
      </section>

      {/* Visual Profile & Feed Section */}
      <section className="py-16 md:py-24 bg-surface">
        <Container>
          <SectionTitle
            title="Your belief becomes part of your profile"
            className="mb-12"
          />
          
          <div className="max-w-4xl mx-auto">
            <Card>
              <div className="grid md:grid-cols-2 gap-8">
                {/* Profile Section */}
                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-emerald-400 to-blue-400 border-2 border-white shadow-lg flex items-center justify-center">
                      <span className="text-white text-xl font-bold">AC</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-ink">Alex Chen</h3>
                      <p className="text-sm text-muted">Backs AI, local food, and climate tech</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-6 text-sm mb-6">
                    <div>
                      <span className="font-semibold text-ink">23</span>
                      <span className="text-muted ml-1">endorsements</span>
                    </div>
                    <div>
                      <span className="font-semibold text-ink">12</span>
                      <span className="text-muted ml-1">following</span>
                    </div>
                  </div>
                </div>

                {/* Recent Endorsements */}
                <div>
                  <h4 className="text-sm font-semibold text-ink mb-4">Recent endorsements</h4>
                  <div className="space-y-3">
                    {[
                      { name: "Jenny's Kitchen", time: "Endorsed 6 months ago", status: "Raised a round since" },
                      { name: "Daily Grind Café", time: "Endorsed 3 months ago", status: "Growing fast" },
                      { name: "TechFlow Solutions", time: "Endorsed 1 month ago", status: "New" },
                    ].map((item, i) => (
                      <div key={i} className="flex items-start gap-3 p-3 bg-neutral-50 rounded-xl">
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center flex-shrink-0">
                          <span className="text-white text-xs font-bold">{item.name[0]}</span>
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="text-sm font-semibold text-ink">{item.name}</div>
                          <div className="text-xs text-muted mt-1">{item.time}</div>
                          <div className="text-xs text-emerald-600 font-medium mt-1">{item.status}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </Container>
      </section>

      {/* Comparison Section */}
      <section className="py-16 md:py-24 bg-bg">
        <Container>
          <SectionTitle
            title="How Seedling differs from traditional startup investing"
            subtitle="Designed for participation first, investment later."
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
                  <span className="text-muted">Start with free endorsements; invest later if you choose.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-brand flex-shrink-0 mt-0.5" />
                  <span className="text-muted">See what friends and trusted investors are backing.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-brand flex-shrink-0 mt-0.5" />
                  <span className="text-muted">Potential to be recognized and rewarded for early belief.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-brand flex-shrink-0 mt-0.5" />
                  <span className="text-muted">Focus on startups, SMBs, and creators before they're mainstream.</span>
                </li>
              </ul>
            </Card>

            <Card delay={0.1}>
              <h3 className="text-xl font-bold text-ink mb-6 text-center">
                Traditional angel investing
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="w-5 h-5 flex-shrink-0 mt-0.5 text-muted">•</span>
                  <span className="text-muted">Requires checks upfront and larger minimums.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-5 h-5 flex-shrink-0 mt-0.5 text-muted">•</span>
                  <span className="text-muted">Access often limited to networks and accredited investors.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-5 h-5 flex-shrink-0 mt-0.5 text-muted">•</span>
                  <span className="text-muted">No simple way to show belief without committing capital.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-5 h-5 flex-shrink-0 mt-0.5 text-muted">•</span>
                  <span className="text-muted">Hard to build a public, social track record.</span>
                </li>
              </ul>
            </Card>

            <Card delay={0.2}>
              <h3 className="text-xl font-bold text-ink mb-6 text-center">
                Public markets
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="w-5 h-5 flex-shrink-0 mt-0.5 text-muted">•</span>
                  <span className="text-muted">Only invest once companies are mature and listed.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-5 h-5 flex-shrink-0 mt-0.5 text-muted">•</span>
                  <span className="text-muted">Little connection to the people actually building the company.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-5 h-5 flex-shrink-0 mt-0.5 text-muted">•</span>
                  <span className="text-muted">No visibility into early-stage local businesses or creators.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-5 h-5 flex-shrink-0 mt-0.5 text-muted">•</span>
                  <span className="text-muted">Hard to get truly 'early' upside.</span>
                </li>
              </ul>
            </Card>
          </div>
        </Container>
      </section>

      {/* Getting Started */}
      <section className="py-16 md:py-24 bg-surface">
        <Container>
          <SectionTitle
            title="Getting started on Seedling"
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
                    Sign up for early access and create your profile.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-brand-light/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-brand font-bold">2</span>
                </div>
                <div>
                  <p className="text-lg text-ink leading-relaxed">
                    Follow friends, experts, and businesses you care about.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-brand-light/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-brand font-bold">3</span>
                </div>
                <div>
                  <p className="text-lg text-ink leading-relaxed">
                    Start endorsing and build your track record of early belief.
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center mb-6">
              <Button
                href="/#waitlist"
                size="lg"
              >
                Join as an early supporter
              </Button>
            </div>

            <p className="text-xs text-muted text-center max-w-xl mx-auto">
              Nothing on Seedling is investment advice, and rewards or financial returns are not guaranteed. Any future investing involves risk, including possible loss of capital.
            </p>
          </div>
        </Container>
      </section>

      <Footer />
    </main>
  );
}

