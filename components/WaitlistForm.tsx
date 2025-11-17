'use client';

import { useState, FormEvent } from 'react';
import { motion } from 'framer-motion';
import Button from './Button';

export default function WaitlistForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: 'Supporter or fan',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setStatus('idle');

    // Read form values
    const name = formData.name.trim();
    const email = formData.email.trim();
    const role = formData.role;
    const message = formData.message.trim();

    // Basic validation
    if (!name || !email) {
      setStatus('error');
      return;
    }

    // Log to console
    console.log('waitlist submission', { name, email, role, message });

    // Reset form and show success
    setFormData({ name: '', email: '', role: 'Supporter or fan', message: '' });
    setStatus('success');
  };

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      onSubmit={handleSubmit}
      className="bg-surface rounded-[var(--radius-xl)] p-8 sm:p-12 shadow-[var(--shadow-card)] max-w-2xl mx-auto"
    >
      <div className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-ink mb-2">
            Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full h-12 px-4 rounded-[var(--radius-md)] border border-border bg-surface text-ink focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent transition-all"
            placeholder="Your name"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-ink mb-2">
            Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full h-12 px-4 rounded-[var(--radius-md)] border border-border bg-surface text-ink focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent transition-all"
            placeholder="your@email.com"
          />
        </div>

        <div>
          <label htmlFor="role" className="block text-sm font-medium text-ink mb-2">
            I am primarily a... *
          </label>
          <select
            id="role"
            name="role"
            required
            value={formData.role}
            onChange={(e) => setFormData({ ...formData, role: e.target.value })}
            className="w-full h-12 px-4 rounded-[var(--radius-md)] border border-border bg-surface text-ink focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent transition-all"
          >
            <option value="Supporter or fan">Supporter or fan</option>
            <option value="Individual investor">Individual investor</option>
            <option value="Founder">Founder</option>
            <option value="Local business / SMB">Local business / SMB</option>
            <option value="Creator / influencer">Creator / influencer</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-ink mb-2">
            Message (Optional)
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            rows={3}
            className="w-full px-4 py-3 rounded-[var(--radius-md)] border border-border bg-surface text-ink focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent transition-all resize-none"
            placeholder="Tell us what you're most interested in (backing startups, getting my business discovered, etc.)."
          />
        </div>

        {status === 'error' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="p-4 rounded-[var(--radius-md)] bg-red-50 border border-red-200 text-red-700 text-sm"
          >
            Something went wrong. Please try again.
          </motion.div>
        )}

        {status === 'success' && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center text-green-600 mt-4"
          >
            🎉 You're in! We'll email you as we launch.
          </motion.div>
        )}

        <Button
          type="submit"
          className="w-full"
          size="lg"
        >
          Get Early Access
        </Button>

        <p className="text-xs text-muted text-center">
          We'll only email you about Seedling and early access — no spam.
        </p>
      </div>
    </motion.form>
  );
}
