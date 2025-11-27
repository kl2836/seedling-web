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
              className="relative mt-8 md:mt-0 flex justify-center md:justify-end"
            >
              <div className="w-full max-w-sm rounded-3xl bg-white p-4 sm:p-5 shadow-lg">
                {/* Top: user summary */}
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-100 text-sm font-semibold text-emerald-800">
                    KL
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-900">Your Seedling portfolio</p>
                    <p className="text-xs text-slate-500">Early endorsements & payouts</p>
                  </div>
                </div>

                {/* Endorsement block */}
                <div className="mb-3 rounded-2xl bg-slate-50 p-3">
                  <div className="flex items-center justify-between mb-1">
                    <div>
                      <p className="text-sm font-semibold text-slate-900">Nova AI Robotics</p>
                      <p className="text-xs text-slate-500">AI startup · Endorsed 7 months ago</p>
                    </div>
                    <span className="rounded-full bg-emerald-100 px-2.5 py-1 text-[11px] font-medium text-emerald-800">
                      Endorsed
                    </span>
                  </div>
                  <p className="text-xs text-slate-600">
                    You were <span className="font-semibold">#3 of 10,240</span> supporters to endorse.
                  </p>
                </div>

                {/* Milestone payout */}
                <div className="mb-3 rounded-2xl bg-emerald-50 p-3">
                  <div className="flex items-center justify-between mb-1">
                    <p className="text-xs font-semibold uppercase tracking-wide text-emerald-800">
                      Milestone payout
                    </p>
                    <p className="text-sm font-semibold text-emerald-800">+$64.20</p>
                  </div>
                  <p className="text-xs text-emerald-900">
                    Seedling issued this payout when Nova AI Robotics raised its Series A round.
                  </p>
                  <p className="mt-1 text-[11px] text-emerald-800">
                    Earlier endorsers earned higher rewards.
                  </p>
                </div>

                {/* Small footer stats */}
                <div className="flex items-center justify-between border-t border-slate-100 pt-3">
                  <div>
                    <p className="text-[11px] font-medium text-slate-500 uppercase tracking-wide">
                      Endorsements used
                    </p>
                    <p className="text-xs font-semibold text-slate-900">7 of 20</p>
                  </div>
                  <div>
                    <p className="text-[11px] font-medium text-slate-500 uppercase tracking-wide">
                      Total rewards
                    </p>
                    <p className="text-xs font-semibold text-slate-900">$212.80</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Why Join Seedling */}
      <section id="why-seedling-investors" className="py-16 md:py-24 bg-surface">
        <Container>
          <SectionTitle
            title="Why join Seedling as an individual or investor?"
            subtitle="Seedling makes it possible to participate earlier, with less friction, flexible check sizes, and more social context than traditional startup investing."
            className="mb-16"
          />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card>
              <h3 className="text-xl font-bold text-ink mb-3">
                Back companies your way — endorse or invest
              </h3>
              <p className="text-muted leading-relaxed">
                Some companies on Seedling accept free endorsements only, others let you invest money with flexible, smaller check sizes. For each company, you choose how you want to support them: endorse for free or invest directly when investing is available.
              </p>
            </Card>

            <Card delay={0.1}>
              <h3 className="text-xl font-bold text-ink mb-3">
                Potentially get rewarded sooner
              </h3>
              <p className="text-muted leading-relaxed">
                When the companies you backed hit key milestones, Seedling may issue cash rewards for your early endorsements — and can also unlock access to investment opportunities that others don't see.
              </p>
            </Card>

            <Card delay={0.2}>
              <h3 className="text-xl font-bold text-ink mb-3">
                Build a track record of early calls
              </h3>
              <p className="text-muted leading-relaxed">
                Your profile shows the businesses and creators you backed before they were obvious. Over time, this becomes proof of your early judgment — both socially and financially.
              </p>
            </Card>

            <Card delay={0.3}>
              <h3 className="text-xl font-bold text-ink mb-3">
                Follow people you trust
              </h3>
              <p className="text-muted leading-relaxed">
                See what friends, experts, and well-known investors are backing, so you're not making decisions in a vacuum or hunting for deals alone.
              </p>
            </Card>
          </div>
        </Container>
      </section>

      {/* How Endorsements Work */}
      <section className="py-20 bg-bg">
        <div className="max-w-3xl mx-auto text-center px-6">
          <h2 className="text-3xl font-semibold tracking-tight text-ink">
            How endorsements work
          </h2>
          <p className="mt-4 text-muted">
            Seedling lets you show belief early with free endorsements. 
            To see the full breakdown of how endorsements turn into visibility 
            and potential upside, explore the guide below.
          </p>

          <div className="mt-8">
            <a
              href="/endorsements"
              className="inline-flex items-center px-6 py-3 rounded-full 
                         bg-brand text-white font-medium hover:bg-brand/90 transition-colors"
            >
              Learn how endorsements work →
            </a>
          </div>
        </div>
      </section>

      {/* Visual Profile & Feed Section */}
      <section className="py-16 md:py-24 bg-surface">
        <Container>
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Left Column - Copy */}
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-ink mb-6">
                  Your calls become your reputation
                </h2>
                <p className="text-lg text-muted mb-6 leading-relaxed">
                  Every endorsement or investment you make builds a public track record. 
                  Your Seedling profile shows what you spotted early, how your picks are performing, 
                  and what you're known for across the network.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand flex-shrink-0 mt-2" />
                    <div>
                      <strong className="text-ink">Early wins</strong>
                      <span className="text-muted"> — see milestones from companies you endorsed early.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand flex-shrink-0 mt-2" />
                    <div>
                      <strong className="text-ink">Endorsement impact score</strong>
                      <span className="text-muted"> — track how much your early signals matter.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand flex-shrink-0 mt-2" />
                    <div>
                      <strong className="text-ink">Investment DNA</strong>
                      <span className="text-muted"> — understand the categories you consistently back.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand flex-shrink-0 mt-2" />
                    <div>
                      <strong className="text-ink">Rank & credibility</strong>
                      <span className="text-muted"> — see how your performance compares across Seedling.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand flex-shrink-0 mt-2" />
                    <div>
                      <strong className="text-ink">Shareable identity</strong>
                      <span className="text-muted"> — show friends and peers what you believe in.</span>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Right Column - Profile Mock */}
              <div className="flex justify-center md:justify-end">
                <DeviceFrame className="w-full max-w-[360px]" aspect="phone">
                  <CelebrityProfileShowcase />
                </DeviceFrame>
              </div>
            </div>
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
                  <span className="text-muted">Participate your way — <strong>endorse for free or invest directly</strong> when companies choose to offer it.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-brand flex-shrink-0 mt-0.5" />
                  <span className="text-muted">See what friends, experts, and trusted investors are backing.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-brand flex-shrink-0 mt-0.5" />
                  <span className="text-muted">Get recognized early when the companies you supported hit meaningful milestones.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-brand flex-shrink-0 mt-0.5" />
                  <span className="text-muted">Access startups, SMBs, and creators before they're mainstream.</span>
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
                  <span className="text-muted">Requires upfront checks and larger minimums.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-5 h-5 flex-shrink-0 mt-0.5 text-muted">•</span>
                  <span className="text-muted">Access limited to private networks and accredited investors.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-5 h-5 flex-shrink-0 mt-0.5 text-muted">•</span>
                  <span className="text-muted">No way to show early belief without spending capital.</span>
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
                  <span className="text-muted">Can only invest once companies are mature and listed.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-5 h-5 flex-shrink-0 mt-0.5 text-muted">•</span>
                  <span className="text-muted">Little connection to the people actually building the company.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-5 h-5 flex-shrink-0 mt-0.5 text-muted">•</span>
                  <span className="text-muted">No visibility into tiny early-stage companies.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-5 h-5 flex-shrink-0 mt-0.5 text-muted">•</span>
                  <span className="text-muted">Early upside is mostly gone by the time you can buy.</span>
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
                    <strong>Sign up for early access and create your profile.</strong>
                    <br />
                    Choose a display name, add a short bio, and tell us what you care about.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-brand-light/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-brand font-bold">2</span>
                </div>
                <div>
                  <p className="text-lg text-ink leading-relaxed">
                    <strong>Follow friends, experts, and businesses you care about.</strong>
                    <br />
                    Your feed improves as your network grows.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-brand-light/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-brand font-bold">3</span>
                </div>
                <div>
                  <p className="text-lg text-ink leading-relaxed">
                    <strong>Support companies your way — endorse for free or invest directly.</strong>
                    <br />
                    Use endorsements when you simply want to show belief.<br />
                    Invest small amounts when companies choose to offer it.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-brand-light/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-brand font-bold">4</span>
                </div>
                <div>
                  <p className="text-lg text-ink leading-relaxed">
                    <strong>Build your track record of early calls.</strong>
                    <br />
                    Over time, your endorsements and investments become a visible portfolio of what you saw early.
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

