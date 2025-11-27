'use client';

import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Button from '@/components/Button';
import Container from '@/components/Container';
import SectionTitle from '@/components/SectionTitle';
import Card from '@/components/Card';
import WaitlistForm from '@/components/WaitlistForm';
import FAQItem from '@/components/FAQItem';
import { Users, Heart, TrendingUp, Search, Eye, Zap, CheckCircle2, ArrowRight, Globe, Handshake, Trophy, Sparkles, Star } from 'lucide-react';
import DeviceFrame from '@/components/DeviceFrame';
import PhasedAutoShowcase from '@/components/PhasedAutoShowcase';
import HeroHomeFromApp from '@/components/showcase/HeroHomeFromApp';
import HeroFeedFromApp from '@/components/showcase/HeroFeedFromApp';
import MarkCubanProfileShowcase from '@/components/showcase/MarkCubanProfileShowcase';
import RotatingPhrase from '@/components/ui/RotatingPhrase';
import FeedShowcase from '@/components/showcase/FeedShowcase';
import CelebrityProfileShowcase from '@/components/showcase/CelebrityProfileShowcase';
import EndorsementsModuleShowcase from '@/components/showcase/EndorsementsModuleShowcase';
import SuccessStories from '@/components/sections/SuccessStories';
import LandingMockFeed from '@/components/landing/LandingMockFeed';
import SocialProofFeed from '@/components/landing/SocialProofFeed';

export default function Home() {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      // Account for fixed navbar: h-16 (64px) on mobile, h-20 (80px) on desktop
      const navbarHeight = window.innerWidth >= 640 ? 80 : 64;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - navbarHeight - 16; // Extra 16px for breathing room

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
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-16 lg:pb-20">
        <div className="absolute inset-0 bg-[var(--grad-cream)] opacity-50" />
        <div className="absolute inset-0 bg-gradient-to-br from-brand/5 via-transparent to-brand-light/5" />
        
        <Container className="relative z-10">
          <div className="grid md:grid-cols-2 gap-8 md:items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-ink mb-6 leading-tight">
                Endorse or Invest.
              </h1>
              <p className="text-xl sm:text-2xl text-muted mb-8 leading-relaxed">
                The social investing platform for backing startups, creators, and businesses — with free endorsements, direct investing, and fast payouts for <em>both</em>.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  onClick={() => scrollTo('waitlist')}
                  size="lg"
                  className="w-full sm:w-auto"
                >
                  Get Early Access
                </Button>
                <Button
                  onClick={() => scrollTo('how-it-works')}
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto"
                >
                  How It Works
                </Button>
              </div>
              <p className="text-xs text-gray-500 mt-4">
                *Endorsement rewards are separate from investment outcomes. Investing involves risk and may take time to realize returns.*
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-10 lg:mt-0 flex justify-center lg:justify-end"
            >
              <LandingMockFeed />
            </motion.div>
          </div>
        </Container>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="pt-12 lg:pt-16 pb-20 bg-gradient-to-b from-emerald-50 to-white">
        <Container>
          <SectionTitle
            title="How Seedling Works"
            className="mb-8"
          />
          <div className="relative grid md:grid-cols-3 gap-8">
            {/* Connecting line on desktop */}
            <div className="hidden md:block absolute top-1/2 left-0 right-0 border-t border-gray-200 z-0" />
            
            <Card delay={0.1} className="relative z-10">
              <div className="flex flex-col items-center mb-3">
                <p className="text-sm text-gray-400 font-medium mb-1">Step 1</p>
                <Users className="w-9 h-9 text-[#16a34a]" />
              </div>
              <h3 className="text-2xl font-bold text-ink mb-4 text-center">
                Discover with your network
              </h3>
              <p className="text-muted leading-relaxed text-center">
                See which startups, creators, and businesses your friends and favorite investors are backing.
              </p>
            </Card>

            <Card delay={0.2} className="relative z-10">
              <div className="flex flex-col items-center mb-3">
                <p className="text-sm text-gray-400 font-medium mb-1">Step 2</p>
                <Star className="w-9 h-9 text-[#16a34a]" />
              </div>
              <h3 className="text-2xl font-bold text-ink mb-4 text-center">
                Endorse for free or invest
              </h3>
              <p className="text-muted leading-relaxed text-center">
                Depending on the business, give a free endorsement in a few taps or invest real capital when you're ready — with no minimums to start.
              </p>
            </Card>

            <Card delay={0.3} className="relative z-10">
              <div className="flex flex-col items-center mb-3">
                <p className="text-sm text-gray-400 font-medium mb-1">Step 3</p>
                <Trophy className="w-9 h-9 text-[#16a34a]" />
              </div>
              <h3 className="text-2xl font-bold text-ink mb-4 text-center">
                Earn sooner than typical investing
              </h3>
              <p className="text-muted leading-relaxed text-center">
                When the businesses you backed hit key moments — like a Series A, a revenue milestone, or a new funding round — Seedling can start issuing early returns instead of making you wait years for an IPO.
              </p>
            </Card>
          </div>
          <p className="text-xs text-gray-500 mt-6 text-center max-w-3xl mx-auto">
            *Endorsement rewards are separate from investment outcomes. Investing involves risk and may take time to realize returns.*
          </p>
        </Container>
      </section>

      {/* Social Proof — See who your friends and the pros back */}
      <section id="for-investors" className="py-20 md:py-28 bg-bg">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 lg:items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl font-semibold text-neutral-900 sm:text-3xl lg:text-4xl whitespace-nowrap">
                See who <RotatingPhrase /> back.
              </h2>
              <ul className="mt-6 space-y-3 text-base text-neutral-700 sm:text-lg">
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-2 w-2 rounded-full bg-emerald-500"></span>
                  <span>See which startups, creators, and local spots people you follow are backing.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-2 w-2 rounded-full bg-emerald-500"></span>
                  <span>Follow friends, creators, and top investors to get their signals in one feed.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-2 w-2 rounded-full bg-emerald-500"></span>
                  <span>Let social signals guide when you endorse or invest.</span>
                </li>
              </ul>
              <p className="mt-4 text-sm text-neutral-500">
                Endorsements are expressions of support. Investing involves risk.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex justify-center md:justify-end"
            >
              <div className="w-full max-w-xs sm:max-w-sm rounded-[32px] border border-neutral-200 bg-white shadow-xl shadow-black/5">
                <SocialProofFeed />
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Endorsements Section */}
      <section id="endorsements" className="py-24 bg-surface">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-ink mb-4">
              Endorsements: the signal that powers Seedling
            </h2>
            <p className="text-lg sm:text-xl text-muted max-w-2xl mx-auto">
              Show belief early. Use your limited free endorsements to boost companies you love—and get rewarded when they win.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <Card>
              <div className="w-12 h-12 rounded-full bg-brand-amber/20 flex items-center justify-center mb-4">
                <Heart className="w-6 h-6 text-brand-amber" />
              </div>
              <h3 className="text-xl font-bold text-ink mb-3">
                Endorse for free
              </h3>
              <p className="text-muted">
                You get a limited number of free endorsements. Use them on companies you genuinely believe in—no money required.
              </p>
            </Card>

            <Card>
              <div className="w-12 h-12 rounded-full bg-brand-light/20 flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-brand" />
              </div>
              <h3 className="text-xl font-bold text-ink mb-3">
                Your endorsement moves the needle
              </h3>
              <p className="text-muted">
                Endorsing boosts a company's credibility, helps them trend, and increases their visibility to investors and supporters.
              </p>
            </Card>

            <Card>
              <div className="w-12 h-12 rounded-full bg-brand/20 flex items-center justify-center mb-4">
                <ArrowRight className="w-6 h-6 text-brand" />
              </div>
              <h3 className="text-xl font-bold text-ink mb-3">
                Early believers get rewarded
              </h3>
              <p className="text-muted">
                When endorsed companies hit key milestones—traction, revenue, or fundraising—you get paid for getting it right early.
              </p>
            </Card>
          </div>

          <div className="text-center">
            <Button
              href="/endorsements"
              size="lg"
            >
              Learn more about endorsements
            </Button>
          </div>
        </Container>
      </section>

      {/* Dual Pathways — For Individuals & Investors + For Businesses & Founders */}
      <section className="py-16 md:py-24 bg-surface">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            {/* Left Column — For Individuals & Investors */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex flex-col h-full"
            >
              <h3 className="text-xl md:text-2xl font-semibold text-ink mb-4">
                For Individuals & Investors
              </h3>
              <h2 className="text-3xl sm:text-4xl font-bold text-ink mb-4">
                Back companies your way — endorse for free or invest directly
              </h2>
              <p className="text-lg text-muted mb-8">
                Use endorsements to back companies for free, or invest directly when an opportunity is open. Either way, your early conviction can turn into real financial upside.
              </p>

              <div className="grid gap-6 mb-8">
                <Card>
                  <h3 className="text-xl font-bold text-ink mb-3">
                    Choose how you want to support: endorse or invest
                  </h3>
                  <p className="text-muted leading-relaxed">
                    Some companies on Seedling accept investments, others only accept endorsements. Use your free endorsements to support companies you believe in, or invest directly when a raise opens.
                  </p>
                </Card>

                <Card delay={0.1}>
                  <h3 className="text-xl font-bold text-ink mb-3">
                    Get paid for early conviction
                  </h3>
                  <p className="text-muted leading-relaxed">
                    When companies you've backed—through endorsements or investments—hit milestones like revenue, growth, or funding, you can earn cash rewards and other financial upside for getting it right early.
                  </p>
                </Card>

                <Card delay={0.2}>
                  <h3 className="text-xl font-bold text-ink mb-3">
                    Turn your picks into a public track record
                  </h3>
                  <p className="text-muted leading-relaxed">
                    Your profile shows who you've backed and how those picks perform over time. As your calls play out, your history becomes visible proof of skill and a potential source of financial gain.
                  </p>
                </Card>
              </div>

              <div className="mt-auto">
                <Button
                  href="/investors"
                  size="lg"
                  className="w-full sm:w-auto"
                >
                  Learn more as an investor
                </Button>
              </div>
            </motion.div>

            {/* Right Column — For Businesses & Founders */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex flex-col h-full"
            >
              <h3 className="text-xl md:text-2xl font-semibold text-ink mb-4">
                For Businesses & Founders
              </h3>
              <h2 className="text-3xl sm:text-4xl font-bold text-ink mb-4">
                Turn belief into traction for your business
              </h2>
              <p className="text-lg text-muted mb-8">
                Collect public support, prove real demand, and get raise-ready with AI that helps you turn endorsements into a compelling story.
              </p>

              <div className="grid gap-6 mb-8">
                <Card>
                  <h3 className="text-xl font-bold text-ink mb-3">
                    Capture belief and build your supporter list
                  </h3>
                  <p className="text-muted leading-relaxed">
                    Collect endorsements from customers and fans before and during your raise. Turn them into a warm list of backers you own, so you're not starting from zero when you fundraise.
                  </p>
                </Card>

                <Card delay={0.1}>
                  <h3 className="text-xl font-bold text-ink mb-3">
                    Show investors real demand
                  </h3>
                  <p className="text-muted leading-relaxed">
                    Use public endorsements, follower signals, and your supporter list to prove there's genuine interest behind your business—not just a pitch deck or a slide.
                  </p>
                </Card>

                <Card delay={0.2}>
                  <h3 className="text-xl font-bold text-ink mb-3">
                    AI that helps you launch and raise faster
                  </h3>
                  <p className="text-muted leading-relaxed">
                    Seedling's AI helps you turn endorsements into a polished business page, surfaces your strongest signals, and guides you through the steps to get raise-ready while you work with your own advisors where needed.
                  </p>
                </Card>
              </div>

              <div className="mt-auto">
                <Button
                  href="/founders"
                  size="lg"
                  className="w-full sm:w-auto"
                >
                  Learn more as a founder
                </Button>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Gallery / Product Strip */}
      {false && (
      <section className="py-24 bg-bg overflow-hidden">
        <Container>
          <SectionTitle
            title="See Seedling in action"
            className="mb-12"
          />
          <div className="flex gap-6 overflow-x-auto pb-6 scrollbar-hide">
            {/* Card 1: Browse businesses */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0 }}
              className="flex-shrink-0 w-80"
            >
              <div className="bg-surface rounded-[var(--radius-xl)] p-6 shadow-[var(--shadow-card)]">
                <div className="aspect-video bg-gradient-to-br from-brand/10 to-brand-light/10 rounded-[var(--radius-md)] mb-4 p-4 flex flex-col justify-between">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 p-2 bg-white/80 rounded-lg">
                      <div className="w-8 h-8 rounded-lg bg-[var(--grad-brand)] flex items-center justify-center">
                        <span className="text-white text-xs">🌱</span>
                      </div>
                      <div className="flex-1">
                        <div className="text-xs font-semibold text-ink">Jenny's Kitchen</div>
                        <div className="text-[10px] text-muted">Local food startup</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 p-2 bg-white/80 rounded-lg">
                      <div className="w-8 h-8 rounded-lg bg-[var(--grad-brand)] flex items-center justify-center">
                        <span className="text-white text-xs">☕</span>
                      </div>
                      <div className="flex-1">
                        <div className="text-xs font-semibold text-ink">Daily Grind Café</div>
                        <div className="text-[10px] text-muted">Community coffee</div>
                      </div>
                    </div>
                  </div>
                </div>
                <h3 className="font-semibold text-ink mb-1">Browse businesses</h3>
                <p className="text-sm text-muted">Discover startups in your area</p>
              </div>
            </motion.div>

            {/* Card 2: Endorse early */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex-shrink-0 w-80"
            >
              <div className="bg-surface rounded-[var(--radius-xl)] p-6 shadow-[var(--shadow-card)]">
                <div className="aspect-video bg-gradient-to-br from-brand/10 to-brand-light/10 rounded-[var(--radius-md)] mb-4 p-4 flex items-center justify-center">
                  <div className="bg-white/90 rounded-xl p-4 w-full">
                    <div className="flex items-center justify-between mb-3">
                      <div className="text-xs font-semibold text-ink">TechFlow Solutions</div>
                      <Heart className="w-4 h-4 text-brand" />
                    </div>
                    <button className="w-full px-3 py-2 rounded-lg bg-emerald-600 text-white text-xs font-semibold flex items-center justify-center gap-2">
                      <Heart className="w-3 h-3" />
                      Endorse
                    </button>
                  </div>
                </div>
                <h3 className="font-semibold text-ink mb-1">Endorse early</h3>
                <p className="text-sm text-muted">Show your support before funding</p>
              </div>
            </motion.div>

            {/* Card 3: Track community growth */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex-shrink-0 w-80"
            >
              <div className="bg-surface rounded-[var(--radius-xl)] p-6 shadow-[var(--shadow-card)]">
                <div className="aspect-video bg-gradient-to-br from-brand/10 to-brand-light/10 rounded-[var(--radius-md)] mb-4 p-4 flex items-end">
                  <div className="w-full space-y-2">
                    <div className="flex items-end gap-1 h-8">
                      <div className="flex-1 bg-[var(--grad-brand)] rounded-t" style={{ height: '40%' }}></div>
                      <div className="flex-1 bg-[var(--grad-brand)] rounded-t" style={{ height: '60%' }}></div>
                      <div className="flex-1 bg-[var(--grad-brand)] rounded-t" style={{ height: '80%' }}></div>
                      <div className="flex-1 bg-[var(--grad-brand)] rounded-t" style={{ height: '100%' }}></div>
                    </div>
                    <div className="text-xs text-muted text-center">Community growth</div>
                  </div>
                </div>
                <h3 className="font-semibold text-ink mb-1">Track community growth</h3>
                <p className="text-sm text-muted">Watch momentum build</p>
              </div>
            </motion.div>

            {/* Card 4: Get rewarded sooner */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex-shrink-0 w-80"
            >
              <div className="bg-surface rounded-[var(--radius-xl)] p-6 shadow-[var(--shadow-card)]">
                <div className="aspect-video bg-gradient-to-br from-brand/10 to-brand-light/10 rounded-[var(--radius-md)] mb-4 p-4 flex items-center justify-center">
                  <div className="bg-white/90 rounded-xl p-4 w-full text-center">
                    <div className="text-2xl mb-2">🏆</div>
                    <div className="text-sm font-semibold text-ink mb-1">Influenced 23</div>
                    <div className="text-xs text-muted">startups this month</div>
                  </div>
                </div>
                <h3 className="font-semibold text-ink mb-1">Get rewarded sooner</h3>
                <p className="text-sm text-muted">Earn when businesses gain traction.</p>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>
      )}

      {/* Success Stories */}
      {false && <SuccessStories />}

      {/* Testimonials */}
      {false && (
      <section className="py-24 bg-surface">
        <Container>
          <SectionTitle
            title="What early users are saying"
            className="mb-16"
          />
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                role: 'Angel Investor',
                quote: 'I discovered my favorite local brand on Seedling before they raised.',
                name: 'Sarah Chen',
              },
              {
                role: 'Founder',
                quote: 'Our endorsements turned into real investors. The platform works.',
                name: 'Marcus Johnson',
              },
              {
                role: 'Community Member',
                quote: "It's exciting to see who my friends believe in and support early.",
                name: 'Alex Rivera',
              },
            ].map((testimonial, i) => (
              <Card key={i} delay={i * 0.1}>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-[var(--grad-brand)] flex items-center justify-center">
                    <span className="text-white font-semibold">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <div className="font-semibold text-ink">{testimonial.name}</div>
                    <div className="text-sm text-muted">{testimonial.role}</div>
                  </div>
                </div>
                <p className="text-muted leading-relaxed italic">"{testimonial.quote}"</p>
              </Card>
            ))}
          </div>
        </Container>
      </section>
      )}

      {/* Whitepaper Section */}
      <section id="whitepaper" className="py-16 md:py-24 bg-neutral-50">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-neutral-900 mb-4">
              Seedling Whitepaper
            </h2>
            <p className="mt-4 text-neutral-700 text-lg">
              A deeper dive into the economics of social signals, endorsements, and early reward mechanisms.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href="/whitepaper"
                className="rounded-xl border border-neutral-300 bg-white px-5 py-3 font-medium text-neutral-900 hover:bg-neutral-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-emerald-600 transition-colors"
              >
                Open in Browser
              </a>
              <a
                href="/seedling-whitepaper.pdf"
                className="rounded-xl bg-emerald-600 px-5 py-3 text-white font-medium hover:bg-emerald-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-emerald-600 transition-colors"
              >
                Download PDF
              </a>
            </div>
            <p className="mt-3 text-xs text-neutral-500">
              Draft preview — contents may evolve.
            </p>
          </div>
        </Container>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-24 bg-bg">
        <Container>
          <SectionTitle
            title="Frequently Asked Questions"
            className="mb-16"
          />
          <div className="max-w-3xl mx-auto bg-surface rounded-[var(--radius-xl)] shadow-[var(--shadow-card)] overflow-hidden">
              {[
                {
                  q: "What's an endorsement on Seedling?",
                  a: "An endorsement is a public expression of support for a startup or business. It's a way to show you believe in a company before they're ready to accept investments. Endorsements help founders build credibility and can later convert to investments when funding opens.",
                },
                {
                  q: 'Is this crowdfunding?',
                  a: "Not exactly. Seedling focuses on endorsements first—public support that helps startups gain visibility. When businesses are ready, endorsements can convert to investments. We're building a social investing platform that emphasizes community and early belief.",
                },
                {
                  q: 'How do founders join?',
                  a: "Founders can join the waitlist to get early access. Once launched, you'll be able to create a profile for your business, share updates, and start gathering endorsements from your community.",
                },
                {
                  q: 'When will investing be open?',
                  a: "We're launching with endorsements first, and investing features will follow as we ensure compliance and build out the infrastructure. Join the waitlist to be notified when investing becomes available.",
                },
                {
                  q: 'Is Seedling regulated?',
                  a: "We're working closely with legal advisors to ensure full compliance with securities regulations. Investing features will only launch once we've met all regulatory requirements.",
                },
                {
                  q: 'How are endorsements different from likes?',
                  a: "Endorsements are more meaningful than likes—they're public commitments of support that can convert to investments. They carry more weight and help founders demonstrate real traction and community belief.",
                },
              ].map((faq, i) => (
                <FAQItem key={i} question={faq.q} answer={faq.a} />
              ))}
          </div>
        </Container>
      </section>

      {/* Join Waitlist */}
      <section id="waitlist" className="py-24 bg-surface">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-ink mb-4">
              Be the first to join Seedling
            </h2>
            <p className="text-xl text-muted max-w-2xl mx-auto">
              Tell us who you are so we can invite you to the right early features, perks, and founder tools.
            </p>
          </motion.div>
          <WaitlistForm />
        </Container>
      </section>

      <Footer />
      </main>
  );
}
