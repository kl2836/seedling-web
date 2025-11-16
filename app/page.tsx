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
import { AnimatedWord } from '@/components/ui/AnimatedWord';
import FeedShowcase from '@/components/showcase/FeedShowcase';
import CelebrityProfileShowcase from '@/components/showcase/CelebrityProfileShowcase';
import EndorsementsModuleShowcase from '@/components/showcase/EndorsementsModuleShowcase';

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
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-ink mb-6 leading-tight">
                Believe Early. Get Rewarded Fast.
              </h1>
              <p className="text-xl sm:text-2xl text-muted mb-8 leading-relaxed">
                The social investing platform where you can join early, spend nothing, and still share in the upside.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  onClick={() => scrollTo('waitlist')}
                  size="lg"
                  className="w-full sm:w-auto"
                >
                  Join Waitlist
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
              className="relative mt-8 md:mt-0"
            >
              <DeviceFrame className="w-full max-w-[420px] mx-auto md:mx-0" aspect="phone">
                <div className="relative h-full">
                  <PhasedAutoShowcase
                    first={<HeroHomeFromApp />}
                    second={<HeroFeedFromApp />}
                    firstDuration={15000}
                    secondDuration={15000}
                    crossfadeMs={120}
                    blink={true}
                    scrollSpeed={1.6}
                    scrollOnce={true}
                    scrollStartDelayMs={500}
                  />
                </div>
              </DeviceFrame>
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
                Discover through your network
              </h3>
              <p className="text-muted leading-relaxed text-center">
                See which startups, creators, and local businesses your friends, mentors, and top investors are backing.
              </p>
            </Card>

            <Card delay={0.2} className="relative z-10">
              <div className="flex flex-col items-center mb-3">
                <p className="text-sm text-gray-400 font-medium mb-1">Step 2</p>
                <Star className="w-9 h-9 text-[#16a34a]" />
              </div>
              <h3 className="text-2xl font-bold text-ink mb-4 text-center">
                Back what you believe in
              </h3>
              <p className="text-muted leading-relaxed text-center">
                Endorse or invest in ideas you support — no money required to start.
              </p>
            </Card>

            <Card delay={0.3} className="relative z-10">
              <div className="flex flex-col items-center mb-3">
                <p className="text-sm text-gray-400 font-medium mb-1">Step 3</p>
                <Trophy className="w-9 h-9 text-[#16a34a]" />
              </div>
              <h3 className="text-2xl font-bold text-ink mb-4 text-center">
                Earn early when belief pays off
              </h3>
              <p className="text-muted leading-relaxed text-center">
                Get recognized — and sometimes rewarded — sooner than traditional investing.
              </p>
            </Card>
          </div>
          <p className="text-xs text-gray-500 mt-6 text-center max-w-3xl mx-auto">
            *Endorsement rewards are separate from investment outcomes. Investing involves risk and may take time to realize returns.*
          </p>
        </Container>
      </section>

      {/* For Investors */}
      <section id="for-investors" className="py-16 md:py-24 bg-surface">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2
                className="
                  text-4xl md:text-5xl font-semibold tracking-tight text-neutral-900 leading-tight
                  md:whitespace-nowrap inline-block
                "
              >
                {"See who "}
                <AnimatedWord
                  words={["the pros", "your friends"]}
                  intervalMs={3000}
                  fallback="the pros and your friends"
                  className="text-emerald-700 font-semibold"
                />
                {" back."}
              </h2>
              <ul className="mt-6 space-y-3.5 text-neutral-700">
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-2 w-2 rounded-full bg-emerald-600 flex-shrink-0"></span>
                  <span className="text-base md:text-lg">Social signals built in</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-2 w-2 rounded-full bg-emerald-600 flex-shrink-0"></span>
                  <span className="text-base md:text-lg">Follow famous investors and friends</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-2 w-2 rounded-full bg-emerald-600 flex-shrink-0"></span>
                  <span className="text-base md:text-lg">Spot opportunities before they trend</span>
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
              <DeviceFrame className="w-full max-w-[360px] md:max-w-[380px] hover:shadow-lg transition-shadow">
                <PhasedAutoShowcase
                  first={<MarkCubanProfileShowcase />}
                  second={<HeroFeedFromApp />}
                  firstDuration={15000}
                  secondDuration={15000}
                  crossfadeMs={120}
                  blink={true}
                  scrollSpeed={1.6}
                  scrollOnce={true}
                  scrollStartDelayMs={500}
                  activateOnVisible={true}
                  startOnVisibleDelayMs={1200}
                />
              </DeviceFrame>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* For Founders */}
      <section id="for-founders" className="py-24 bg-bg">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:order-2"
            >
              <h2 className="text-4xl sm:text-5xl font-bold text-ink mb-6">
                Turn early belief into momentum.
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-brand-light flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle2 className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-ink mb-1">Gather public endorsements that show traction</h3>
                    <p className="text-muted">Build credibility through community support before your funding round.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-brand-light flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle2 className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-ink mb-1">Convert community support into funding</h3>
                    <p className="text-muted">Turn endorsements into investments when you're ready to raise.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-brand-light flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle2 className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-ink mb-1">Engage investors with transparent updates</h3>
                    <p className="text-muted">Share your journey and build trust with potential backers.</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:order-1 flex justify-center lg:justify-start"
            >
              <div className="w-full max-w-[520px]">
                <EndorsementsModuleShowcase />
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Endorsements Section */}
      <section id="endorsements" className="py-24 bg-surface">
        <Container>
          <SectionTitle
            title="Endorsements: proof before funding"
            subtitle="Show your belief early, help startups gain visibility, and optionally convert to investment later."
            className="mb-16"
          />
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card>
              <div className="w-12 h-12 rounded-full bg-brand-amber/20 flex items-center justify-center mb-4">
                <Heart className="w-6 h-6 text-brand-amber" />
              </div>
              <h3 className="text-xl font-bold text-ink mb-3">
                Signal belief before financial setup
              </h3>
              <p className="text-muted">
                Endorse startups you believe in, even before they're ready to accept investments.
              </p>
            </Card>

            <Card>
              <div className="w-12 h-12 rounded-full bg-brand-light/20 flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-brand" />
              </div>
              <h3 className="text-xl font-bold text-ink mb-3">
                Social validation amplifies visibility
              </h3>
              <p className="text-muted">
                Your endorsement helps founders build credibility and attract more supporters.
              </p>
            </Card>

            <Card>
              <div className="w-12 h-12 rounded-full bg-brand/20 flex items-center justify-center mb-4">
                <ArrowRight className="w-6 h-6 text-brand" />
              </div>
              <h3 className="text-xl font-bold text-ink mb-3">
                Optionally convert to investment later
              </h3>
              <p className="text-muted">
                When companies open funding, your endorsement can seamlessly become an investment.
              </p>
            </Card>
          </div>

          <div className="bg-gradient-to-r from-brand/5 to-brand-light/5 rounded-[var(--radius-xl)] p-8 text-center">
            <div className="inline-flex items-center gap-2 bg-surface rounded-full px-6 py-3 shadow-[var(--shadow-card)] mb-4">
              <span className="text-2xl">🏆</span>
              <span className="font-semibold text-ink">Influenced 23 startups this month</span>
            </div>
            <p className="text-sm text-muted max-w-2xl mx-auto mb-6">
              Endorsements are expressions of support, not investment advice. Investing involves risk.
            </p>
            <a
              href="#whitepaper"
              onClick={(e) => {
                e.preventDefault();
                const element = document.getElementById('whitepaper');
                if (element) {
                  const navbarHeight = window.innerWidth >= 640 ? 80 : 64;
                  const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
                  const offsetPosition = elementPosition - navbarHeight - 16;
                  window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                  });
                }
              }}
              className="inline-flex items-center rounded-xl bg-emerald-600 px-5 py-3 text-white font-medium hover:bg-emerald-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-emerald-600 transition-colors"
            >
              Read the Whitepaper
            </a>
          </div>
        </Container>
      </section>

      {/* Gallery / Product Strip */}
      <section className="py-24 bg-bg overflow-hidden">
        <Container>
          <SectionTitle
            title="See Seedling in action"
            className="mb-12"
          />
          <div className="flex gap-6 overflow-x-auto pb-6 scrollbar-hide">
            {[
              { title: 'Browse businesses', desc: 'Discover startups in your area' },
              { title: 'Endorse early', desc: 'Show your support before funding' },
              { title: 'Track community growth', desc: 'Watch momentum build' },
              { title: 'Get rewarded sooner', desc: 'Earn when businesses gain traction.' },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex-shrink-0 w-80"
              >
                <div className="bg-surface rounded-[var(--radius-xl)] p-6 shadow-[var(--shadow-card)]">
                  <div className="aspect-video bg-gradient-to-br from-brand/10 to-brand-light/10 rounded-[var(--radius-md)] mb-4 flex items-center justify-center">
                    <span className="text-muted text-sm">Mockup {i + 1}</span>
                  </div>
                  <h3 className="font-semibold text-ink mb-1">{item.title}</h3>
                  <p className="text-sm text-muted">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Testimonials */}
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
                href="/whitepaper.pdf"
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
              Sign up to get early access and updates as we launch.
            </p>
          </motion.div>
          <WaitlistForm />
        </Container>
      </section>

      <Footer />
      </main>
  );
}
