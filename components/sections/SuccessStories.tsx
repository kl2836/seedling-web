'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import Image from 'next/image';
import Container from '@/components/Container';
import SectionTitle from '@/components/SectionTitle';

interface Story {
  id: string;
  name: string;
  category: string;
  shortSummary: string;
  fullStory: string;
  stats: string[];
  imageUrl: string;
}

const stories: Story[] = [
  {
    id: 'jennys-kitchen',
    name: "Jenny's Kitchen",
    category: 'Local business',
    shortSummary: 'A neighborhood café on the brink of closing that was pulled back to life by early supporters.',
    fullStory:
      "Jenny's Kitchen had been a quiet neighborhood staple for years, but rising costs and a sudden drop in weekday foot traffic pushed the café to the edge of closure. In most cities, a place like this would simply disappear: a handwritten sign on the door, a sad goodbye post, and then nothing. Instead, Jenny listed the café on Seedling. Regulars, neighbors, and remote fans who had discovered the café on trips to the city quickly endorsed it, shared the story across their networks, and signaled how much it mattered to them. Within days, Jenny's Kitchen collected hundreds of endorsements, moved into the 'Trending nearby' feed, and attracted a wave of new visitors and a few small community investments. The surge of visible support gave Jenny the leverage and confidence to renegotiate terms with suppliers and stay open—powered by the people who believed in the café first.",
    stats: ['540 endorsements in 6 days', '2x increase in weekly visits', "Moved into 'Trending nearby'"],
    imageUrl: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800&h=600&fit=crop&q=80',
  },
  {
    id: 'signalgrid-ai',
    name: 'SignalGrid AI',
    category: 'AI startup',
    shortSummary: 'An early-stage AI company whose early believers helped it break out of the noise and attract serious investors.',
    fullStory:
      'SignalGrid AI, a data-labeling and evaluation platform for AI teams (similar in spirit to early Scale AI), was quietly signing its first customers but struggling to stand out in a crowded funding environment. Traditional raises limited participation to a small group of accredited investors, leaving fans, early users, and junior engineers with no way to show support or participate. On Seedling, the founding team opened a profile that allowed anyone to endorse the company before a formal round, building a visible record of belief from practitioners, customers, and operators across the AI ecosystem. As endorsements stacked up and SignalGrid AI climbed into the "Most Endorsed in AI" category, several angels and micro-funds used the social proof and endorsement history as motivation to reach out. When the company finally opened a regulated raise, many of those early endorsers converted into small investments, and the round filled faster than expected—with everyday supporters sitting alongside professional investors.',
    stats: ['1,200+ endorsements from AI practitioners', "Featured in 'Most Endorsed in AI'", 'Pre-seed round filled in under 3 weeks'],
    imageUrl: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=600&fit=crop&q=80',
  },
  {
    id: 'lena-park-comedy',
    name: 'Lena Park, Stand-up Comedian',
    category: 'Creator',
    shortSummary: 'A rising comedian who turned scattered online fans into a committed base of early backers.',
    fullStory:
      'Lena Park had been posting short stand-up clips online for years. Individual videos would occasionally go viral, but the interest was fragmented—fans loved the content, yet there was no organized way to support her beyond likes and follows. On Seedling, Lena created a profile for her next big project: a self-produced comedy special and small tour. Fans could endorse her, signal which cities they wanted her to visit, and leave notes about how long they had been following her work. As endorsements piled up, promoters and small venues used the endorsement map to see where demand was strongest, and Lena used the visible support to negotiate better terms. When she later opened a limited revenue-sharing offer on ticket sales and digital downloads, many of the earliest endorsers were the first in line—finally able to participate in the upside of a creator they had backed from the beginning.',
    stats: ['3,400 endorsements across 9 cities', 'First tour stop sold out in 48 hours', 'Fans shared in a slice of tour revenue'],
    imageUrl: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800&h=600&fit=crop&q=80',
  },
];

export default function SuccessStories() {
  const [activeStoryId, setActiveStoryId] = useState<string | null>(null);
  const activeStory = stories.find((s) => s.id === activeStoryId);

  useEffect(() => {
    if (activeStoryId) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [activeStoryId]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setActiveStoryId(null);
      }
    };
    if (activeStoryId) {
      window.addEventListener('keydown', handleEscape);
      return () => window.removeEventListener('keydown', handleEscape);
    }
  }, [activeStoryId]);

  return (
    <>
      <section className="py-20 md:py-24 bg-bg">
        <Container>
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-semibold text-neutral-900 mb-3">
              Stories from early believers
            </h2>
            <p className="mt-3 text-base text-neutral-600 max-w-2xl mx-auto">
              See how Seedling helps local businesses, ambitious startups, and creators turn early support into real momentum.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:gap-8 md:grid-cols-3">
            {stories.map((story, i) => (
              <motion.div
                key={story.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -8, transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] } }}
                className="group flex flex-col overflow-hidden rounded-3xl bg-white shadow-sm border border-neutral-100 cursor-pointer"
                onClick={() => setActiveStoryId(story.id)}
              >
                {/* Image area - 55-60% of card height */}
                <div className="relative w-full aspect-[4/3] overflow-hidden rounded-t-3xl">
                  <motion.div
                    className="relative h-full w-full"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <Image
                      src={story.imageUrl}
                      alt={story.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      unoptimized
                    />
                    {/* Gradient overlay with story name */}
                    <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
                    <h3 className="absolute left-4 bottom-3 text-sm font-semibold text-white z-10 drop-shadow-lg">
                      {story.name}
                    </h3>
                  </motion.div>
                </div>

                {/* Card body */}
                <div className="p-6 flex flex-col flex-1">
                  <div className="mb-3">
                    <span className="inline-flex rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700">
                      {story.category}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-neutral-900 mt-3 mb-1">{story.name}</h3>
                  <p className="text-sm text-neutral-600 mt-1 line-clamp-2 flex-1">{story.shortSummary}</p>
                  <motion.div
                    className="mt-4 inline-flex items-center text-sm font-medium text-emerald-700"
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.2 }}
                  >
                    Read story →
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Modal */}
      <AnimatePresence mode="wait">
        {activeStory && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
              onClick={() => setActiveStoryId(null)}
            />

            {/* Modal content - properly centered */}
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 10 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="relative w-full max-w-4xl max-h-[90vh] rounded-3xl bg-white shadow-2xl overflow-hidden pointer-events-auto"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close button */}
                <motion.button
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2, duration: 0.2 }}
                  onClick={() => setActiveStoryId(null)}
                  className="absolute right-4 top-4 cursor-pointer p-2 rounded-full hover:bg-neutral-100 transition-colors z-20 bg-white/90 backdrop-blur-sm"
                  aria-label="Close"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <X className="w-5 h-5 text-neutral-600" />
                </motion.button>

                <div className="flex flex-col md:flex-row max-h-[90vh]">
                  {/* Left side - Image */}
                  <div className="relative h-64 md:h-auto md:w-2/5 bg-neutral-100 flex-shrink-0">
                    <Image
                      src={activeStory.imageUrl}
                      alt={activeStory.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 40vw"
                      unoptimized
                    />
                    <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/40 to-transparent" />
                    <div className="absolute top-4 left-4 z-10">
                      <span className="inline-flex rounded-full bg-white/90 backdrop-blur-sm px-3 py-1 text-xs font-medium text-emerald-700 shadow-sm">
                        {activeStory.category}
                      </span>
                    </div>
                  </div>

                  {/* Right side - Text */}
                  <div className="p-6 md:p-8 flex flex-col gap-4 md:w-3/5 overflow-y-auto">
                    <motion.h2
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1, duration: 0.3 }}
                      className="text-2xl md:text-3xl font-semibold text-neutral-900"
                    >
                      {activeStory.name}
                    </motion.h2>
                    <motion.p
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2, duration: 0.3 }}
                      className="text-sm md:text-base text-neutral-700 leading-relaxed"
                    >
                      {activeStory.fullStory}
                    </motion.p>

                    {/* Stats */}
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3, duration: 0.3 }}
                      className="flex flex-wrap gap-2 mt-2"
                    >
                      {activeStory.stats.map((stat, i) => (
                        <motion.span
                          key={i}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.4 + i * 0.1, duration: 0.2 }}
                          className="inline-flex items-center rounded-full bg-neutral-100 px-3 py-1 text-xs font-medium text-neutral-700"
                        >
                          {stat}
                        </motion.span>
                      ))}
                    </motion.div>

                    {/* Close button */}
                    <motion.button
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4, duration: 0.3 }}
                      onClick={() => setActiveStoryId(null)}
                      className="mt-4 self-start rounded-full bg-emerald-600 px-4 py-2 text-sm font-medium text-white hover:bg-emerald-700 transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Close
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
