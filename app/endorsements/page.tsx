'use client';

import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Button from '@/components/Button';
import Container from '@/components/Container';
import SectionTitle from '@/components/SectionTitle';
import Card from '@/components/Card';
import FAQItem from '@/components/FAQItem';
import { Heart, ArrowRight, CheckCircle2, TrendingUp, Users, Star, Sparkles, Search, DollarSign, Key, Zap, Gift } from 'lucide-react';

export default function EndorsementsPage() {
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
                ENDORSEMENTS ON SEEDLING
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-ink mb-6 leading-tight">
                What is an endorsement on Seedling?
              </h1>
              <p className="text-xl sm:text-2xl text-muted mb-8 leading-relaxed">
                An endorsement is a free, limited signal that you believe in a business. It's more meaningful than a like, less committing than an investment, and it can earn you rewards when the companies you back succeed. Every endorsement is public on your profile and on the company's page, so your calls become part of your visible track record.
              </p>
              
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-brand flex-shrink-0 mt-0.5" />
                  <span className="text-lg text-ink"><strong>Free & limited:</strong> You only get a limited number of endorsements—use them on companies you genuinely believe in.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-brand flex-shrink-0 mt-0.5" />
                  <span className="text-lg text-ink"><strong>Public & persistent:</strong> Your endorsements are visible on your profile and on each company you support.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-brand flex-shrink-0 mt-0.5" />
                  <span className="text-lg text-ink"><strong>Can earn rewards:</strong> When endorsed companies hit key milestones—traction, revenue, or funding—your early endorsements may unlock financial rewards, perks, or access.</span>
                </li>
              </ul>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  href="/#waitlist"
                  size="lg"
                  className="w-full sm:w-auto"
                >
                  Join early as an endorser
                </Button>
                <Button
                  href="/"
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto"
                >
                  Back to homepage
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative mt-8 md:mt-0"
            >
              <div className="space-y-4 rounded-[var(--radius-2xl)] bg-white shadow-[var(--shadow-card)] p-4 sm:p-6">
                {/* Card 1 – endorsement + rank */}
                <div className="rounded-2xl bg-slate-50 p-4 sm:p-5">
                  <div className="text-xs font-medium uppercase tracking-wider text-slate-500 mb-3">
                    Your endorsement
                  </div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-400 to-blue-400 flex items-center justify-center">
                        <span className="text-white text-sm font-bold">AC</span>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-slate-900">Alex Chen</p>
                        <p className="text-xs text-slate-500">Endorsed Nova AI Robotics</p>
                      </div>
                    </div>
                    <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-medium text-emerald-700">
                      Endorsed
                    </span>
                  </div>
                  <div className="text-xs text-slate-600">
                    Endorsed 8 months ago · You were <span className="font-semibold">#14 of 9,220 supporters</span>.
                  </div>
                </div>

                {/* Card 2 – payout */}
                <div className="rounded-2xl bg-emerald-50 p-4 sm:p-5">
                  <div className="flex items-center justify-between mb-2">
                    <div className="text-xs font-medium uppercase tracking-wider text-emerald-700">
                      Milestone payout unlocked
                    </div>
                    <div className="text-lg font-bold text-emerald-800">
                      +$58.40
                    </div>
                  </div>
                  <div className="text-xs text-emerald-900 mb-2">
                    From <span className="font-semibold">Nova AI Robotics</span> · Series A milestone
                  </div>
                  <div className="text-xs text-emerald-900 leading-relaxed">
                    Because you were an early endorser (<span className="font-semibold">#14 of 9,220</span>),
                    this milestone unlocked a cash reward for you—long before any IPO or exit.
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Endorsement Lifecycle */}
      <section className="py-16 md:py-24 bg-bg">
        <Container>
          <SectionTitle
            title="The endorsement lifecycle: from first tap to potential upside"
            subtitle="What actually happens when you endorse a business on Seedling."
            className="mb-16"
          />
          
          <div className="relative">
            {/* Desktop: Horizontal flow */}
            <div className="hidden md:flex items-center gap-4 overflow-x-auto pb-6">
              {[
                {
                  title: 'Discover',
                  body: 'You find a startup, local business, or creator in your feed or via search.',
                  icon: Search,
                },
                {
                  title: 'Endorse',
                  body: 'You tap "Endorse" to publicly back them using one of your limited free endorsements—no money required.',
                  icon: Heart,
                },
                {
                  title: 'Your signal builds momentum',
                  body: 'Your endorsement appears on your profile, the company page, and in friends\' feeds, helping grow their endorsement count and social proof.',
                  icon: Star,
                },
                {
                  title: 'Potential upside',
                  body: 'When the business hits key milestones—like revenue growth or a funding round—your early endorsement may unlock financial rewards, perks, or special access.',
                  icon: Sparkles,
                },
              ].map((step, i) => (
                <div key={i} className="flex items-center gap-4 flex-shrink-0">
                  <Card className="w-64">
                    <div className="flex flex-col items-center mb-3">
                      <div className="w-12 h-12 rounded-full bg-brand-light/20 flex items-center justify-center mb-3">
                        <step.icon className="w-6 h-6 text-brand" />
                      </div>
                      <p className="text-sm text-gray-400 font-medium mb-1">Step {i + 1}</p>
                    </div>
                    <h3 className="text-lg font-bold text-ink mb-3 text-center">
                      {step.title}
                    </h3>
                    <p className="text-sm text-muted text-center leading-relaxed">
                      {step.body}
                    </p>
                  </Card>
                  {i < 3 && (
                    <ArrowRight className="w-6 h-6 text-muted flex-shrink-0" />
                  )}
                </div>
              ))}
            </div>

            {/* Mobile: Vertical stack */}
            <div className="md:hidden space-y-6">
              {[
                {
                  title: 'Discover',
                  body: 'You find a startup, local business, or creator in your feed or via search.',
                  icon: Search,
                },
                {
                  title: 'Endorse',
                  body: 'You tap "Endorse" to publicly back them using one of your limited free endorsements—no money required.',
                  icon: Heart,
                },
                {
                  title: 'Your signal builds momentum',
                  body: 'Your endorsement appears on your profile, the company page, and in friends\' feeds, helping grow their endorsement count and social proof.',
                  icon: Star,
                },
                {
                  title: 'Potential upside',
                  body: 'When the business hits key milestones—like revenue growth or a funding round—your early endorsement may unlock financial rewards, perks, or special access.',
                  icon: Sparkles,
                },
              ].map((step, i) => (
                <div key={i} className="flex items-start gap-4">
                  <Card className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-full bg-brand-light/20 flex items-center justify-center flex-shrink-0">
                        <step.icon className="w-5 h-5 text-brand" />
                      </div>
                      <div>
                        <p className="text-xs text-gray-400 font-medium">Step {i + 1}</p>
                        <h3 className="text-lg font-bold text-ink">
                          {step.title}
                        </h3>
                      </div>
                    </div>
                    <p className="text-sm text-muted leading-relaxed">
                      {step.body}
                    </p>
                  </Card>
                  {i < 3 && (
                    <div className="flex flex-col items-center pt-2">
                      <ArrowRight className="w-5 h-5 text-muted rotate-90" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Why Endorsements Matter */}
      <section className="py-16 md:py-24 bg-surface">
        <Container>
          <SectionTitle
            title="Why endorsements matter"
            subtitle="Endorsements create value for individuals, founders, and the entire discovery ecosystem."
            className="mb-16"
          />
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card>
              <h3 className="text-xl font-bold text-ink mb-3">
                For individuals & investors
              </h3>
              <p className="text-muted leading-relaxed">
                Endorsements let you go on record early, without committing capital. Over time, your pattern of early picks becomes a track record—and when businesses reward early supporters, that track record may translate into real financial upside.
              </p>
            </Card>

            <Card delay={0.1}>
              <h3 className="text-xl font-bold text-ink mb-3">
                For businesses & founders
              </h3>
              <p className="text-muted leading-relaxed">
                Endorsements give you visible social proof before, during, and after a raise. They show investors there's real demand, provide a warm list of potential backers, and give you a way to recognize the people who believed in you first.
              </p>
            </Card>

            <Card delay={0.2}>
              <h3 className="text-xl font-bold text-ink mb-3">
                For the Seedling network
              </h3>
              <p className="text-muted leading-relaxed">
                Endorsements turn fragmented opinions into structured signal. They help the platform surface promising companies earlier, improve recommendations, and build a living map of who believes in what.
              </p>
            </Card>
          </div>

          <p className="mt-12 text-center text-lg md:text-xl text-ink max-w-3xl mx-auto font-medium">
            Early endorsements push promising companies into the spotlight — and can pay back the people who saw it early.
          </p>
        </Container>
      </section>

      {/* How Rewards Work */}
      <section className="py-16 md:py-24 bg-bg">
        <Container>
          <SectionTitle
            title="How rewards and financial upside can work"
            subtitle="Endorsements do not guarantee returns. But Seedling can reward early supporters when the companies they backed hit meaningful milestones."
            className="mb-12"
          />
          
          <div className="max-w-3xl mx-auto mb-12">
            <p className="text-lg text-muted mb-6">
              Seedling tracks milestones across the businesses you endorse — including traction, revenue growth, and fundraising events. When a company reaches one of these verified milestones, Seedling may issue milestone-based rewards to early endorsers based on how early they backed the company.
            </p>
            
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-brand-light/20 flex items-center justify-center flex-shrink-0">
                  <DollarSign className="w-5 h-5 text-brand" />
                </div>
                <div>
                  <strong className="text-ink block mb-1">Cash payouts</strong>
                  <span className="text-muted">Seedling may issue real-money milestone rewards when a company hits key traction or fundraising milestones.</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-brand-light/20 flex items-center justify-center flex-shrink-0">
                  <Key className="w-5 h-5 text-brand" />
                </div>
                <div>
                  <strong className="text-ink block mb-1">Priority access</strong>
                  <span className="text-muted">Seedling can offer endorsers early or preferred access to community rounds or allocation opportunities when investing opens.</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-brand-light/20 flex items-center justify-center flex-shrink-0">
                  <Zap className="w-5 h-5 text-brand" />
                </div>
                <div>
                  <strong className="text-ink block mb-1">Reward multipliers</strong>
                  <span className="text-muted">Early positions may receive boosted rewards or multipliers when Seedling issues milestone payouts.</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-brand-light/20 flex items-center justify-center flex-shrink-0">
                  <Gift className="w-5 h-5 text-brand" />
                </div>
                <div>
                  <strong className="text-ink block mb-1">Perks & recognition</strong>
                  <span className="text-muted">Optional non-financial benefits companies may choose to offer, such as access, experiences, or recognition.</span>
                </div>
              </li>
            </ul>
          </div>
        </Container>
      </section>

      {/* Strategic Use */}
      <section className="py-16 md:py-24 bg-surface">
        <Container>
          <SectionTitle
            title="Using your endorsements strategically"
            className="mb-12"
          />
          
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            <div>
              <p className="text-lg text-muted mb-6">
                Endorsements are free to send, but they're not meant to be spam. Treat them like a portfolio of your strongest beliefs.
              </p>
              
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-brand flex-shrink-0 mt-0.5" />
                  <span className="text-muted"><strong className="text-ink">Be selective:</strong> Endorse the companies you genuinely believe can hit real milestones. Your rewards improve when you get it right early.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-brand flex-shrink-0 mt-0.5" />
                  <span className="text-muted"><strong className="text-ink">Diversify:</strong> Back a mix of local spots, ambitious startups, and creators so you're not relying on a single outcome.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-brand flex-shrink-0 mt-0.5" />
                  <span className="text-muted"><strong className="text-ink">Expect some misses:</strong> Not every endorsement will lead to rewards — and that's okay. Think in terms of a portfolio, not a perfect hit rate.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-brand flex-shrink-0 mt-0.5" />
                  <span className="text-muted"><strong className="text-ink">Build your track record:</strong> Over time, your endorsement history becomes visible proof of your early calls and can influence the rewards you earn as companies grow.</span>
                </li>
              </ul>
            </div>

            <Card className="p-6">
              <h4 className="font-semibold text-ink mb-4">Endorsement Portfolio</h4>
              <div className="space-y-3">
                <div className="flex items-center gap-3 p-3 bg-brand-light/5 rounded-lg">
                  <div className="w-10 h-10 rounded-lg bg-[var(--grad-brand)] flex items-center justify-center">
                    <span className="text-white text-xs">☕</span>
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-semibold text-ink">Daily Grind Café</div>
                    <div className="text-xs text-muted">Local café</div>
                    <div className="text-xs text-emerald-700 mt-1">
                      Early endorsement · You were <span className="font-semibold">#12 of 847</span> supporters
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-brand-light/5 rounded-lg">
                  <div className="w-10 h-10 rounded-lg bg-[var(--grad-brand)] flex items-center justify-center">
                    <span className="text-white text-xs">🚀</span>
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-semibold text-ink">TechFlow Solutions</div>
                    <div className="text-xs text-muted">AI startup</div>
                    <div className="text-xs text-emerald-700 mt-1">
                      Early endorsement · You were <span className="font-semibold">#3 of 10,240</span> supporters
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-brand-light/5 rounded-lg">
                  <div className="w-10 h-10 rounded-lg bg-[var(--grad-brand)] flex items-center justify-center">
                    <span className="text-white text-xs">🎨</span>
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-semibold text-ink">Creative Studio</div>
                    <div className="text-xs text-muted">Creator</div>
                    <div className="text-xs text-emerald-700 mt-1">
                      Early endorsement · You were <span className="font-semibold">#28 of 2,103</span> supporters
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </Container>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-bg">
        <Container>
          <SectionTitle
            title="Endorsement FAQ"
            className="mb-16"
          />
          <div className="max-w-3xl mx-auto bg-bg rounded-[var(--radius-xl)] shadow-[var(--shadow-card)] overflow-hidden">
            <FAQItem
              question="Does endorsing a company mean I'm investing?"
              answer="No. Endorsing is free and does not transfer any money. It's a public signal of belief that may later be recognized by the company through rewards or investment opportunities."
            />
            <FAQItem
              question="Can I lose money by endorsing?"
              answer="You don't put capital at risk when you endorse, but any actual investments you make later always carry risk, including the possibility of losing your entire investment."
            />
            <FAQItem
              question="Are rewards guaranteed for endorsers?"
              answer="No. Businesses decide if and how to reward early endorsers. Seedling provides tools; outcomes depend on each company and applicable regulations."
            />
            <FAQItem
              question="Can businesses see who endorsed them?"
              answer="Yes. Founders can see a list of endorsers, which helps them understand who's excited and who to invite when they're ready to raise or share upside."
            />
            <FAQItem
              question="Can I remove an endorsement?"
              answer="Yes. You can un-endorse a company if you change your mind, although past endorsement history may still inform aggregate analytics."
            />
          </div>
        </Container>
      </section>

      {/* Final CTA */}
      <section className="py-16 md:py-24 bg-surface">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-ink mb-4">
              Ready to start endorsing?
            </h2>
            <p className="text-lg text-muted mb-8">
              Join Seedling as an early supporter, build your track record, and be part of the first wave of visible belief.
            </p>
            <Button
              href="/#waitlist"
              size="lg"
            >
              Get early access
            </Button>
          </div>
        </Container>
      </section>

      <Footer />
    </main>
  );
}

