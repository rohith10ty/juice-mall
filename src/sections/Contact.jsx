import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiPhone, FiMail, FiMapPin, FiClock, FiSend, FiCheckCircle } from 'react-icons/fi';
import { SectionHeading } from '../components/SectionHeading';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'cleanse',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = 'Please provide your name';
    if (!formData.email.trim() || !formData.email.includes('@')) {
      errs.email = 'Please provide a valid email address';
    }
    if (!formData.message.trim() || formData.message.length < 10) {
      errs.message = 'Please provide a message (min 10 characters)';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({ name: '', email: '', subject: 'cleanse', message: '' });
      setTimeout(() => setIsSuccess(false), 5000);
    }, 1200);
  };

  return (
    <section id="contact" className="py-10 md:py-14 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="GET IN TOUCH"
          title="Connect With Our"
          highlight="Juice Sommelier"
          subtitle="Have a question about custom subscriptions, nutrition inquiries, or catering? We'd love to connect."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Contacts */}
          <div className="lg:col-span-5 space-y-4">
            <div className="p-6 sm:p-7 rounded-3xl bg-white dark:bg-[#1C0F12] border border-[#E5D3AF] dark:border-[#3D2026] shadow-sm space-y-5">
              <h3 className="text-xl font-bold text-[#1E0D10] dark:text-[#F5EFE1]">
                Juice Mall HQ & Tasting Room
              </h3>
              <p className="text-xs sm:text-sm text-[#5C4549] dark:text-[#E5D3AF]/80 leading-relaxed">
                Visit our downtown botanical cold-press bar to witness our hydraulic pressing process live every morning.
              </p>

              <div className="space-y-3 pt-1">
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-[#790D16]/10 text-[#790D16] dark:text-[#E5D3AF] flex items-center justify-center shrink-0">
                    <FiMapPin className="text-base" />
                  </div>
                  <div>
                    <h5 className="text-[11px] font-bold uppercase tracking-wider text-[#790D16] dark:text-[#E5D3AF]">Location</h5>
                    <p className="text-xs font-semibold text-[#1E0D10] dark:text-[#F5EFE1]">
                      42 Cold-Press Blvd, Eco District, Metro 560001
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-[#E5D3AF]/30 text-[#790D16] dark:text-[#E5D3AF] flex items-center justify-center shrink-0">
                    <FiClock className="text-base" />
                  </div>
                  <div>
                    <h5 className="text-[11px] font-bold uppercase tracking-wider text-[#790D16] dark:text-[#E5D3AF]">Hours</h5>
                    <p className="text-xs font-semibold text-[#1E0D10] dark:text-[#F5EFE1]">
                      Mon – Sun: 5:00 AM – 10:30 PM
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-[#AEC4D4]/20 text-[#790D16] dark:text-[#AEC4D4] flex items-center justify-center shrink-0">
                    <FiPhone className="text-base" />
                  </div>
                  <div>
                    <h5 className="text-[11px] font-bold uppercase tracking-wider text-[#790D16] dark:text-[#E5D3AF]">Phone</h5>
                    <p className="text-xs font-semibold text-[#1E0D10] dark:text-[#F5EFE1]">
                      +91 (800) 425-JUICE
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-[#790D16]/10 text-[#790D16] dark:text-[#E5D3AF] flex items-center justify-center shrink-0">
                    <FiMail className="text-base" />
                  </div>
                  <div>
                    <h5 className="text-[11px] font-bold uppercase tracking-wider text-[#790D16] dark:text-[#E5D3AF]">Email</h5>
                    <p className="text-xs font-semibold text-[#1E0D10] dark:text-[#F5EFE1]">
                      concierge@juicemall.com
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#1C0F12] border border-[#E5D3AF] dark:border-[#3D2026] shadow-sm">
              {isSuccess ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-12 text-center space-y-3"
                >
                  <div className="w-16 h-16 rounded-full bg-[#790D16]/15 text-[#790D16] dark:text-[#E5D3AF] flex items-center justify-center text-3xl mx-auto">
                    <FiCheckCircle />
                  </div>
                  <h3 className="text-xl font-bold text-[#1E0D10] dark:text-[#F5EFE1]">
                    Message Sent Successfully!
                  </h3>
                  <p className="text-xs text-[#5C4549] dark:text-[#E5D3AF]/80">
                    We will get back to you within 2 hours.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#790D16] dark:text-[#E5D3AF] mb-1.5">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Kiara Advani"
                        className={`w-full px-3.5 py-2.5 rounded-xl bg-[#F5EFE1]/60 dark:bg-[#2A171B] border text-xs sm:text-sm text-[#1E0D10] dark:text-[#F5EFE1] focus:outline-none focus:ring-2 focus:ring-[#790D16] ${
                          errors.name ? 'border-red-500' : 'border-[#E5D3AF] dark:border-[#3D2026]'
                        }`}
                      />
                      {errors.name && <p className="text-[11px] text-red-600 mt-1">{errors.name}</p>}
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#790D16] dark:text-[#E5D3AF] mb-1.5">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. kiara@example.com"
                        className={`w-full px-3.5 py-2.5 rounded-xl bg-[#F5EFE1]/60 dark:bg-[#2A171B] border text-xs sm:text-sm text-[#1E0D10] dark:text-[#F5EFE1] focus:outline-none focus:ring-2 focus:ring-[#790D16] ${
                          errors.email ? 'border-red-500' : 'border-[#E5D3AF] dark:border-[#3D2026]'
                        }`}
                      />
                      {errors.email && <p className="text-[11px] text-red-600 mt-1">{errors.email}</p>}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#790D16] dark:text-[#E5D3AF] mb-1.5">
                      Inquiry Topic
                    </label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#F5EFE1]/60 dark:bg-[#2A171B] border border-[#E5D3AF] dark:border-[#3D2026] text-xs sm:text-sm text-[#1E0D10] dark:text-[#F5EFE1] focus:outline-none focus:ring-2 focus:ring-[#790D16]"
                    >
                      <option value="cleanse">7-Day Cleanse & Detox Consultation</option>
                      <option value="corporate">Corporate Office Subscriptions</option>
                      <option value="custom">Custom Bulk Blends & Events</option>
                      <option value="other">General Feedback & Support</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#790D16] dark:text-[#E5D3AF] mb-1.5">
                      Message *
                    </label>
                    <textarea
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us about your requirements..."
                      className={`w-full px-3.5 py-2.5 rounded-xl bg-[#F5EFE1]/60 dark:bg-[#2A171B] border text-xs sm:text-sm text-[#1E0D10] dark:text-[#F5EFE1] focus:outline-none focus:ring-2 focus:ring-[#790D16] ${
                        errors.message ? 'border-red-500' : 'border-[#E5D3AF] dark:border-[#3D2026]'
                      }`}
                    />
                    {errors.message && <p className="text-[11px] text-red-600 mt-1">{errors.message}</p>}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 rounded-full text-xs font-bold uppercase tracking-wider bg-[#790D16] hover:bg-[#550910] text-[#F5EFE1] flex items-center justify-center gap-2 transition-all disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span>Sending...</span>
                    ) : (
                      <>
                        <FiSend className="text-sm" /> Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
