'use client';

import { useState, FormEvent } from 'react';
import { motion } from 'framer-motion';
import Button from './Button';

export default function WaitlistForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: 'Supporter',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError('');
    setIsSubmitting(true);

    // Validate required fields
    if (!formData.name || !formData.email) {
      setError('Please fill in all required fields.');
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        setIsSuccess(true);
        setFormData({ name: '', email: '', role: 'Supporter', message: '' });
      } else {
        setError(data.error || 'Something went wrong. Please try again.');
      }
    } catch (err) {
      setError('Network error. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-surface rounded-[var(--radius-xl)] p-8 sm:p-12 text-center shadow-[var(--shadow-card)]"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: 'spring' }}
          className="w-16 h-16 mx-auto mb-4 rounded-full bg-[var(--grad-brand)] flex items-center justify-center"
        >
          <span className="text-3xl">✓</span>
        </motion.div>
        <h3 className="text-2xl font-bold text-ink mb-2">You're on the list!</h3>
        <p className="text-muted mb-6">
          We'll send you updates as we launch. Thanks for your interest!
        </p>
        <Button
          onClick={() => setIsSuccess(false)}
          variant="outline"
        >
          Submit Another
        </Button>
      </motion.div>
    );
  }

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
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full h-12 px-4 rounded-[var(--radius-md)] border border-border bg-surface text-ink focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent transition-all"
            placeholder="your@email.com"
          />
        </div>

        <div>
          <label htmlFor="role" className="block text-sm font-medium text-ink mb-2">
            Role
          </label>
          <select
            id="role"
            value={formData.role}
            onChange={(e) => setFormData({ ...formData, role: e.target.value })}
            className="w-full h-12 px-4 rounded-[var(--radius-md)] border border-border bg-surface text-ink focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent transition-all"
          >
            <option value="Founder">Founder</option>
            <option value="Investor">Investor</option>
            <option value="Supporter">Supporter</option>
          </select>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-ink mb-2">
            Message (Optional)
          </label>
          <textarea
            id="message"
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            rows={4}
            className="w-full px-4 py-3 rounded-[var(--radius-md)] border border-border bg-surface text-ink focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent transition-all resize-none"
            placeholder="Tell us what you're excited about..."
          />
        </div>

        {error && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="p-4 rounded-[var(--radius-md)] bg-red-50 border border-red-200 text-red-700 text-sm"
          >
            {error}
          </motion.div>
        )}

        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full"
          size="lg"
        >
          {isSubmitting ? 'Joining...' : 'Join Waitlist'}
        </Button>

        <p className="text-xs text-muted text-center">
          We'll only email you about early access — no spam.
        </p>
      </div>
    </motion.form>
  );
}

