'use client';

import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Button from '@/components/Button';
import Container from '@/components/Container';
import SectionTitle from '@/components/SectionTitle';
import Card from '@/components/Card';
import FAQItem from '@/components/FAQItem';
import { Heart, ArrowRight, CheckCircle2, TrendingUp, Users, Star, Sparkles, Search } from 'lucide-react';

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
                An endorsement is a free, public signal that you believe in a business. It sits between a "like" and an investment—visible, meaningful, and with the potential for future financial upside when things go well.
              </p>
              
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-brand flex-shrink-0 mt-0.5" />
                  <span className="text-lg text-ink"><strong>Free to send:</strong> No money required to endorse.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-brand flex-shrink-0 mt-0.5" />
                  <span className="text-lg text-ink"><strong>Public and persistent:</strong> Shows up on your profile and the company's page.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-brand flex-shrink-0 mt-0.5" />
                  <span className="text-lg text-ink"><strong>Can lead to upside:</strong> Early endorsements may later unlock perks, access, or financial rewards when companies grow or raise.</span>
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
              <Card className="p-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-emerald-400 to-blue-400 flex items-center justify-center">
                      <span className="text-white text-sm font-bold">AC</span>
                    </div>
                    <div>
                      <div className="font-semibold text-ink">Alex Chen</div>
                      <div className="text-sm text-muted">endorsed</div>
                    </div>
                  </div>
                  <Card className="p-4 bg-brand-light/5">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-lg bg-[var(--grad-brand)] flex items-center justify-center">
                        <span className="text-white text-xs">🌱</span>
                      </div>
                      <div className="flex-1">
                        <div className="font-semibold text-ink">Jenny's Kitchen</div>
                        <div className="text-xs text-muted">Local food startup</div>
                      </div>
                      <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 text-xs font-semibold">
                        Endorsed
                      </span>
                    </div>
                    <div className="text-xs text-muted">
                      Endorsed 6 months ago · Influenced 230 backers
                    </div>
                  </Card>
                </div>
              </Card>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* One Sentence Definition */}
      <section className="py-16 md:py-24 bg-surface">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <div className="w-16 h-16 rounded-full bg-brand-light/20 flex items-center justify-center mx-auto mb-6">
              <Sparkles className="w-8 h-8 text-brand" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-ink mb-6">
              One sentence definition
            </h2>
            <p className="text-lg sm:text-xl text-muted leading-relaxed">
              An endorsement on Seedling is a scarce, public commitment that says "I believe in this business," recorded in your profile and the company's page, with the potential to convert into real investment value or rewards later—without requiring money up front.
            </p>
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
                  body: "You tap 'Endorse' to publicly back them. No money is required to do this.",
                  icon: Heart,
                },
                {
                  title: 'Signal',
                  body: 'Your endorsement appears on your profile and on the company page, contributing to their public endorsement count and momentum score.',
                  icon: Star,
                },
                {
                  title: 'Spread',
                  body: 'Your network can see what you endorsed, helping more people discover the business and creating social proof.',
                  icon: Users,
                },
                {
                  title: 'Event',
                  body: 'The business grows, raises a round, or decides to reward early supporters (for example: perks, access, or investment allocations).',
                  icon: TrendingUp,
                },
                {
                  title: 'Potential upside',
                  body: 'Depending on how the company chooses to reward endorsers, your early endorsement may translate into financial rewards, special access, or priority investment opportunities.',
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
                  {i < 5 && (
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
                  body: "You tap 'Endorse' to publicly back them. No money is required to do this.",
                  icon: Heart,
                },
                {
                  title: 'Signal',
                  body: 'Your endorsement appears on your profile and on the company page, contributing to their public endorsement count and momentum score.',
                  icon: Star,
                },
                {
                  title: 'Spread',
                  body: 'Your network can see what you endorsed, helping more people discover the business and creating social proof.',
                  icon: Users,
                },
                {
                  title: 'Event',
                  body: 'The business grows, raises a round, or decides to reward early supporters (for example: perks, access, or investment allocations).',
                  icon: TrendingUp,
                },
                {
                  title: 'Potential upside',
                  body: 'Depending on how the company chooses to reward endorsers, your early endorsement may translate into financial rewards, special access, or priority investment opportunities.',
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
                  {i < 5 && (
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

          {/* Network diagram visual */}
          <div className="max-w-2xl mx-auto">
            <Card className="p-8">
              <div className="flex items-center justify-center gap-4 flex-wrap">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="flex flex-col items-center gap-2">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-emerald-400 to-blue-400 flex items-center justify-center">
                      <span className="text-white text-xs font-bold">U{i}</span>
                    </div>
                    <div className="w-16 h-0.5 bg-brand-light"></div>
                    <div className="w-10 h-10 rounded-lg bg-[var(--grad-brand)] flex items-center justify-center">
                      <span className="text-white text-xs">B{i}</span>
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-center text-sm text-muted mt-4">
                Endorsements connect people and businesses
              </p>
            </Card>
          </div>
        </Container>
      </section>

      {/* Comparison Table */}
      <section className="py-16 md:py-24 bg-bg">
        <Container>
          <SectionTitle
            title="How endorsements compare to likes and investments"
            subtitle="Endorsements sit in the middle: stronger than a like, lighter than an investment."
            className="mb-16"
          />
          
          <div className="max-w-5xl mx-auto">
            <div className="bg-surface rounded-[var(--radius-xl)] shadow-[var(--shadow-card)] overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left p-4 font-semibold text-ink"></th>
                      <th className="text-left p-4 font-semibold text-ink">Likes</th>
                      <th className="text-left p-4 font-semibold text-ink">Endorsements</th>
                      <th className="text-left p-4 font-semibold text-ink">Investments</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-border">
                      <td className="p-4 font-medium text-ink">Cost</td>
                      <td className="p-4 text-muted">Free</td>
                      <td className="p-4 text-muted">Free to send</td>
                      <td className="p-4 text-muted">Requires money up front</td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="p-4 font-medium text-ink">Visibility</td>
                      <td className="p-4 text-muted">Often buried in feeds</td>
                      <td className="p-4 text-muted">Prominently displayed on your profile and the company page</td>
                      <td className="p-4 text-muted">May be private or visible only in specific contexts</td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="p-4 font-medium text-ink">Strength of signal</td>
                      <td className="p-4 text-muted">Low — casual approval</td>
                      <td className="p-4 text-muted">Medium-high — explicit, scarce commitment</td>
                      <td className="p-4 text-muted">Very high — financial commitment</td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="p-4 font-medium text-ink">Potential financial upside</td>
                      <td className="p-4 text-muted">None</td>
                      <td className="p-4 text-muted">Possible, if companies choose to reward early supporters or convert endorsements into investment allocations</td>
                      <td className="p-4 text-muted">Yes, but with risk and no guarantee</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-medium text-ink">Risk</td>
                      <td className="p-4 text-muted">None</td>
                      <td className="p-4 text-muted">Very low direct risk (no capital at stake), but reputational</td>
                      <td className="p-4 text-muted">High financial risk; you can lose money</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <p className="text-xs text-muted mt-4 text-center max-w-3xl mx-auto">
              Rewards and financial outcomes are never guaranteed. Any investing involves risk, including possible loss of capital.
            </p>
          </div>
        </Container>
      </section>

      {/* How Rewards Work */}
      <section className="py-16 md:py-24 bg-surface">
        <Container>
          <SectionTitle
            title="How rewards and financial upside can work"
            subtitle="Endorsements do not guarantee returns, but they can be used to recognize early supporters in several ways."
            className="mb-12"
          />
          
          <div className="max-w-3xl mx-auto mb-12">
            <p className="text-lg text-muted mb-6">
              Seedling gives businesses tools to recognize and reward early endorsers. Different companies may choose different approaches, but here are some examples of how your endorsement could matter financially over time:
            </p>
            
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-brand flex-shrink-0 mt-0.5" />
                <span className="text-muted">Priority access or allocations when a company opens a community round</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-brand flex-shrink-0 mt-0.5" />
                <span className="text-muted">Bonus terms or small investment multipliers for early endorsers</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-brand flex-shrink-0 mt-0.5" />
                <span className="text-muted">Revenue-sharing perks or loyalty-style rewards for early customers</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-brand flex-shrink-0 mt-0.5" />
                <span className="text-muted">Non-financial perks (access, experiences, or recognition) that still have real value</span>
              </li>
            </ul>
          </div>

          {/* Visual: Endorsement to Rewards */}
          <div className="max-w-2xl mx-auto">
            <Card className="p-6">
              <div className="text-center mb-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-light/20">
                  <Heart className="w-5 h-5 text-brand" />
                  <span className="font-semibold text-ink">Endorsement</span>
                </div>
              </div>
              <div className="flex justify-center mb-4">
                <ArrowRight className="w-6 h-6 text-muted rotate-90" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <Card className="p-4 bg-brand-light/5">
                  <div className="text-sm font-semibold text-ink mb-2">Priority Access</div>
                  <div className="text-xs text-muted">Early round allocations</div>
                </Card>
                <Card className="p-4 bg-brand-light/5">
                  <div className="text-sm font-semibold text-ink mb-2">Bonus Terms</div>
                  <div className="text-xs text-muted">Investment multipliers</div>
                </Card>
                <Card className="p-4 bg-brand-light/5">
                  <div className="text-sm font-semibold text-ink mb-2">Revenue Share</div>
                  <div className="text-xs text-muted">Loyalty rewards</div>
                </Card>
                <Card className="p-4 bg-brand-light/5">
                  <div className="text-sm font-semibold text-ink mb-2">Perks & Access</div>
                  <div className="text-xs text-muted">Experiences, recognition</div>
                </Card>
              </div>
            </Card>
          </div>

          <p className="text-xs text-muted mt-6 text-center max-w-3xl mx-auto">
            These examples are illustrative. Actual reward structures depend on each business and applicable regulations. Nothing here is investment advice or a promise of returns.
          </p>
        </Container>
      </section>

      {/* Strategic Use */}
      <section className="py-16 md:py-24 bg-bg">
        <Container>
          <SectionTitle
            title="Using your endorsements strategically"
            className="mb-12"
          />
          
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            <div>
              <p className="text-lg text-muted mb-6">
                Endorsements are free to send, but they're not meant to be spam. Treat them like a portfolio of your beliefs.
              </p>
              
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-brand flex-shrink-0 mt-0.5" />
                  <span className="text-muted"><strong className="text-ink">Be selective:</strong> endorse companies you truly believe have a shot at growing.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-brand flex-shrink-0 mt-0.5" />
                  <span className="text-muted"><strong className="text-ink">Diversify:</strong> back a mix of local businesses, ambitious startups, and creators.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-brand flex-shrink-0 mt-0.5" />
                  <span className="text-muted"><strong className="text-ink">Think long-term:</strong> many outcomes will take time; not every endorsement will lead to rewards.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-brand flex-shrink-0 mt-0.5" />
                  <span className="text-muted"><strong className="text-ink">Build a narrative:</strong> your endorsement history tells a story about what you see early.</span>
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
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-brand-light/5 rounded-lg">
                  <div className="w-10 h-10 rounded-lg bg-[var(--grad-brand)] flex items-center justify-center">
                    <span className="text-white text-xs">🚀</span>
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-semibold text-ink">TechFlow Solutions</div>
                    <div className="text-xs text-muted">AI startup</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-brand-light/5 rounded-lg">
                  <div className="w-10 h-10 rounded-lg bg-[var(--grad-brand)] flex items-center justify-center">
                    <span className="text-white text-xs">🎨</span>
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-semibold text-ink">Creative Studio</div>
                    <div className="text-xs text-muted">Creator</div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </Container>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-surface">
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
      <section className="py-16 md:py-24 bg-bg">
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

