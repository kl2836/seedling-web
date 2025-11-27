'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Button from '@/components/Button';
import Container from '@/components/Container';
import SectionTitle from '@/components/SectionTitle';
import Card from '@/components/Card';
import FAQItem from '@/components/FAQItem';
import { CheckCircle2, Sparkles, Zap, Target, Network } from 'lucide-react';

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
                Turn early supporters into momentum — and raise when YOU decide.
              </h1>
              <p className="text-xl sm:text-2xl text-muted mb-8 leading-relaxed">
                Seedling gives your business a powerful early audience — endorsements, AI-matched supporters, social discovery, and real traction signals — all before you ever open a round. Start with belief and visibility, then enable investing when the time is right.
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
                  onClick={() => scrollTo('why-seedling')}
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto"
                >
                  See how founder pages work
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative mt-8 md:mt-0"
            >
              <Card className="p-6 bg-white">
                {/* Header with company info */}
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-brand to-brand-light flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-xl">🌱</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-ink text-lg mb-1">NeuralCraft AI</h3>
                    <p className="text-sm text-muted leading-snug">AI-powered design tools for creative teams</p>
                  </div>
                  <div className="px-3 py-1 bg-brand/10 rounded-full flex-shrink-0">
                    <span className="text-xs font-semibold text-brand">Trending in AI Startups</span>
                  </div>
                </div>

                {/* Endorsements section */}
                <div className="mb-4 pb-4 border-b border-slate-100">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-semibold text-ink">243 endorsements</span>
                    <div className="flex items-center gap-1.5 px-2 py-1 bg-brand/5 rounded-md">
                      <Sparkles className="w-3 h-3 text-brand" />
                      <span className="text-xs font-medium text-brand">17 AI-matched this week</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    {/* Avatar stack */}
                    <div className="flex -space-x-2">
                      {[1, 2, 3, 4, 5, 6].map((i) => (
                        <div
                          key={i}
                          className="w-8 h-8 rounded-full bg-gradient-to-br from-slate-200 to-slate-300 border-2 border-white flex items-center justify-center text-xs font-medium text-slate-600"
                        >
                          {String.fromCharCode(64 + i)}
                        </div>
                      ))}
                      <div className="w-8 h-8 rounded-full bg-slate-100 border-2 border-white flex items-center justify-center text-xs font-medium text-slate-500">
                        +237
                      </div>
                    </div>
                  </div>
                </div>

                {/* Momentum graph */}
                <div className="mb-4 pb-4 border-b border-slate-100">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-semibold text-ink">Support momentum</span>
                    <span className="text-xs text-brand">↗ +68%</span>
                  </div>
                  <div className="h-12 flex items-end gap-1">
                    {[0.2, 0.3, 0.35, 0.45, 0.5, 0.55, 0.65, 0.7, 0.8, 0.85, 0.95, 1].map((height, i) => (
                      <div
                        key={i}
                        className="flex-1 bg-gradient-to-t from-brand to-brand-light rounded-sm"
                        style={{ height: `${height * 100}%` }}
                      />
                    ))}
                  </div>
                  <div className="flex justify-between mt-1">
                    <span className="text-xs text-muted">30d ago</span>
                    <span className="text-xs text-muted">Today</span>
                  </div>
                </div>

                {/* Enable investing CTA */}
                <div className="bg-gradient-to-br from-brand/5 to-brand-light/5 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <p className="text-xs text-muted mb-0.5">Ready to raise?</p>
                      <p className="text-sm font-semibold text-ink">Turn your momentum into funding</p>
                    </div>
                  </div>
                  <button className="w-full px-4 py-2 bg-white border border-brand/20 hover:bg-brand/5 rounded-lg text-sm font-semibold text-brand transition-colors">
                    Enable investing
                  </button>
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
            subtitle="Not just another fundraising page. Seedling is a network that turns early belief into traction, discovery, and flexible funding options."
            className="mb-16"
          />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card>
              <div className="text-3xl mb-4">📈</div>
              <h3 className="text-xl font-bold text-ink mb-3">
                Build visible momentum before raising
              </h3>
              <p className="text-muted leading-relaxed">
                Collect public endorsements and followers before you open anything. Show investors and customers that real people believe in what you're building — ranked, public, and growing over time.
              </p>
            </Card>

            <Card delay={0.1}>
              <div className="text-3xl mb-4">💸</div>
              <h3 className="text-xl font-bold text-ink mb-3">
                Raise your way: endorsements, investments, or both
              </h3>
              <p className="text-muted leading-relaxed">
                Seedling gives founders flexible capital options. Let people endorse you for free, invest with low minimums, or mix both — depending on what fits your goals. No large checks required, no rigid fundraising structure.
              </p>
            </Card>

            <Card delay={0.2}>
              <div className="text-3xl mb-4">🧠</div>
              <h3 className="text-xl font-bold text-ink mb-3">
                A supporter network that compounds with AI
              </h3>
              <p className="text-muted leading-relaxed">
                Unlike static campaigns, Seedling builds you a persistent profile. AI matches you with the right supporters, surfaces you to investors, and grows your follower graph automatically as momentum builds.
              </p>
            </Card>

            <Card delay={0.3}>
              <div className="text-3xl mb-4">👥</div>
              <h3 className="text-xl font-bold text-ink mb-3">
                Designed for all types of builders
              </h3>
              <p className="text-muted leading-relaxed">
                Whether you're an AI startup, local café, creator, SMB, or online brand, Seedling helps you capture early belief, stay connected with supporters, and turn that community into long-term backers and revenue opportunities.
              </p>
            </Card>
          </div>
        </Container>
      </section>

      {/* How Seedling's AI Works for Founders */}
      <section className="py-16 md:py-24 bg-bg">
        <Container>
          <SectionTitle
            title="How Seedling's AI works for founders"
            subtitle="From setting up your page to getting investor-ready, Seedling's AI turns early endorsements and traction into clear signal investors can act on."
            className="mb-16"
          />
          
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Left Side - Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-lg text-muted mb-8 leading-relaxed">
                Instead of spending weeks writing a pitch profile, guessing what investors care about, and navigating prep alone, Seedling's AI acts like a co-pilot. It helps you launch fast, understand what resonates, and get ready for real fundraising when momentum is there.
              </p>

              <div className="space-y-6">
                {/* AI Page Setup */}
                <Card>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-brand/10 flex items-center justify-center flex-shrink-0">
                      <Sparkles className="w-5 h-5 text-brand" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-ink mb-2">
                        AI page setup
                      </h3>
                      <p className="text-muted leading-relaxed">
                        Answer a few questions and let our AI draft your Seedling page — from headline and story to traction framing and what to highlight for supporters. You keep full control and edit anything, but you never start from a blank page.
                      </p>
                    </div>
                  </div>
                </Card>

                {/* Investor-Ready Prep */}
                <Card delay={0.1}>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-brand/10 flex items-center justify-center flex-shrink-0">
                      <Zap className="w-5 h-5 text-brand" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-ink mb-2">
                        Investor-ready prep
                      </h3>
                      <p className="text-muted leading-relaxed">
                        Once you've built enough endorsements or interest, Seedling surfaces a tailored checklist of what investors will expect: key metrics, disclosures, and next steps for your stage and jurisdiction. We help you organize and streamline this prep, but we don't replace your legal or tax advisors.
                      </p>
                    </div>
                  </div>
                </Card>

                {/* AI Targeting and Matching */}
                <Card delay={0.2}>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-brand/10 flex items-center justify-center flex-shrink-0">
                      <Target className="w-5 h-5 text-brand" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-ink mb-2">
                        AI targeting and matching
                      </h3>
                      <p className="text-muted leading-relaxed">
                        Our AI looks at who has endorsed you, who follows similar companies, and what different backers care about to surface the most aligned supporters and potential investors — instead of shouting into a generic crowd.
                      </p>
                    </div>
                  </div>
                </Card>

                {/* AI Investor Matching & Smart Intros */}
                <Card delay={0.3}>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-brand/10 flex items-center justify-center flex-shrink-0">
                      <Network className="w-5 h-5 text-brand" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-ink mb-2">
                        AI investor matching & smart intros
                      </h3>
                      <p className="text-muted leading-relaxed">
                        As your endorsement graph and traction grow, Seedling's AI can identify investors who back similar companies and highlight when you're a strong fit. Over time, this helps turn social signal and early belief into the right introductions and real financing opportunities.
                      </p>
                    </div>
                  </div>
                </Card>
              </div>
            </motion.div>

            {/* Right Side - Visual Mockup */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <Card className="p-6">
                <div className="mb-4">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-8 h-8 rounded-full bg-brand/10 flex items-center justify-center">
                      <Sparkles className="w-4 h-4 text-brand" />
                    </div>
                    <span className="text-sm font-semibold text-ink">AI setup</span>
                    <span className="text-xs text-muted ml-auto">Founder co-pilot</span>
                  </div>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                      <span className="text-sm text-ink">Business profile</span>
                      <span className="text-sm font-semibold text-brand">90% complete</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                      <span className="text-sm text-ink">Endorsements</span>
                      <span className="text-sm font-semibold text-brand">145 supporters</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                      <span className="text-sm text-ink">Next step</span>
                      <span className="text-sm font-semibold text-brand">Prepare investor-ready summary</span>
                    </div>
                  </div>

                  <div className="border-t border-slate-200 pt-4">
                    <div className="bg-brand/5 rounded-lg p-4">
                      <div className="flex items-start gap-2 mb-2">
                        <span className="text-xs font-semibold text-brand uppercase tracking-wide">AI Suggestion</span>
                      </div>
                      <h4 className="text-sm font-semibold text-ink mb-1">Suggested headline</h4>
                      <p className="text-xs text-muted mb-3">"Building the future of sustainable food delivery"</p>
                      <h4 className="text-sm font-semibold text-ink mb-1">Suggested pitch angle</h4>
                      <p className="text-xs text-muted">Emphasize your early customer traction and local market validation</p>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Comparison Section */}
      <section className="py-16 md:py-24 bg-surface">
        <Container>
          <SectionTitle
            title="How Seedling compares to other fundraising paths"
            subtitle="Seedling sits between social validation and real investment — unlocking momentum earlier than any other path."
            className="mb-16"
          />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card>
              <h3 className="text-xl font-bold text-ink mb-6 text-center">
                Seedling
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-brand flex-shrink-0 mt-0.5" />
                  <span className="text-muted">Start collecting endorsements and followers before you ever open a round.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-brand flex-shrink-0 mt-0.5" />
                  <span className="text-muted">Let people endorse for free, invest with low minimums, or use both — depending on your strategy.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-brand flex-shrink-0 mt-0.5" />
                  <span className="text-muted">Persistent profile with endorsements, followers, updates, and AI-powered discovery.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-brand flex-shrink-0 mt-0.5" />
                  <span className="text-muted">Social signal and momentum are built into the platform, not bolted on.</span>
                </li>
              </ul>
            </Card>

            <Card delay={0.1}>
              <h3 className="text-xl font-bold text-ink mb-6 text-center">
                Traditional crowdfunding (e.g., Wefunder, Republic)
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="w-5 h-5 flex-shrink-0 mt-0.5 text-muted">•</span>
                  <span className="text-muted">Only useful once a live fundraising campaign is running.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-5 h-5 flex-shrink-0 mt-0.5 text-muted">•</span>
                  <span className="text-muted">Visitors must decide on the spot whether to invest or leave.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-5 h-5 flex-shrink-0 mt-0.5 text-muted">•</span>
                  <span className="text-muted">Campaign page mostly stops working for you when the raise closes.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-5 h-5 flex-shrink-0 mt-0.5 text-muted">•</span>
                  <span className="text-muted">Focus is on funding totals, not long-term supporter graphs or signal.</span>
                </li>
              </ul>
            </Card>

            <Card delay={0.2}>
              <h3 className="text-xl font-bold text-ink mb-6 text-center">
                Campaign platforms (Kickstarter, Indiegogo)
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="w-5 h-5 flex-shrink-0 mt-0.5 text-muted">•</span>
                  <span className="text-muted">Optimized for pre-orders and one-off product launches, not long-term backers.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-5 h-5 flex-shrink-0 mt-0.5 text-muted">•</span>
                  <span className="text-muted">No investment or ownership — mostly transactional rewards.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-5 h-5 flex-shrink-0 mt-0.5 text-muted">•</span>
                  <span className="text-muted">Hype fades quickly once the campaign ends.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-5 h-5 flex-shrink-0 mt-0.5 text-muted">•</span>
                  <span className="text-muted">Not designed around startup or SMB metrics investors care about.</span>
                </li>
              </ul>
            </Card>

            <Card delay={0.3}>
              <h3 className="text-xl font-bold text-ink mb-6 text-center">
                Manual lists & communities (email, Discord, spreadsheets)
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="w-5 h-5 flex-shrink-0 mt-0.5 text-muted">•</span>
                  <span className="text-muted">Supporters scattered across email, social, spreadsheets, and different tools.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-5 h-5 flex-shrink-0 mt-0.5 text-muted">•</span>
                  <span className="text-muted">No clean supporter graph tied to future funding or investment.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-5 h-5 flex-shrink-0 mt-0.5 text-muted">•</span>
                  <span className="text-muted">Hard to see who truly believes vs who casually follows.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-5 h-5 flex-shrink-0 mt-0.5 text-muted">•</span>
                  <span className="text-muted">Time-consuming to manage and easy to lose momentum.</span>
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
              <div className="text-3xl mb-4">🚀</div>
              <h3 className="text-xl font-bold text-ink mb-3">
                Early-stage startups
              </h3>
              <p className="text-muted leading-relaxed">
                Validate demand, rally early believers, and show real traction before you approach angels, funds, or accelerators.
              </p>
            </Card>

            <Card delay={0.1}>
              <div className="text-3xl mb-4">🏪</div>
              <h3 className="text-xl font-bold text-ink mb-3">
                Local businesses & SMBs
              </h3>
              <p className="text-muted leading-relaxed">
                Turn regulars into public supporters who vouch for you, help new customers discover you, and are first in line when you expand or raise community funding.
              </p>
            </Card>

            <Card delay={0.2}>
              <div className="text-3xl mb-4">🎨</div>
              <h3 className="text-xl font-bold text-ink mb-3">
                Creators & individuals
              </h3>
              <p className="text-muted leading-relaxed">
                Let fans endorse your projects now and stay connected when you launch bigger initiatives, offers, or even future investment opportunities.
              </p>
            </Card>
          </div>
        </Container>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-surface">
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

      {/* Getting Started */}
      <section className="py-16 md:py-24 bg-bg">
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
                    We'll help you set up your Seedling page and invite your first supporters.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-brand-light/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-brand font-bold">3</span>
                </div>
                <div>
                  <p className="text-lg text-ink leading-relaxed">
                    Start collecting endorsements, sharing updates, and building your supporter graph.
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center">
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
                <Button
                  href="/#waitlist"
                  size="lg"
                >
                  Apply as a founder
                </Button>
                <Button
                  href="/founders/portal"
                  variant="outline"
                  size="lg"
                >
                  Already started? Open founder portal
                </Button>
              </div>
              <p className="text-sm text-slate-500 mb-2">
                Seedling combines social signal and AI so when it's time to raise, you're not starting from zero or alone.
              </p>
              <p className="text-sm text-slate-500">
                Prototype demo: The founder portal shows how our AI tools will help you collect endorsements and prepare for an investor-ready raise.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <Footer />
    </main>
  );
}

