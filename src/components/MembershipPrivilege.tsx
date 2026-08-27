import React, { useState } from 'react';
import { MEMBERSHIP_PLANS, MembershipPlan } from '../data/spaData';
import { Crown, Check, Sparkles, X, CheckCircle2 } from 'lucide-react';
import confetti from 'canvas-confetti';

interface MembershipPrivilegeProps {
  onOpenBooking: (treatmentName?: string) => void;
}

export const MembershipPrivilege: React.FC<MembershipPrivilegeProps> = ({ onOpenBooking }) => {
  const [selectedPlan, setSelectedPlan] = useState<MembershipPlan | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    notes: '',
  });

  const handleOpenModal = (plan: MembershipPlan) => {
    setSelectedPlan(plan);
    setIsSuccess(false);
  };

  const handleRequestSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.6 },
        colors: ['#C8A96B', '#D8C08A', '#FAF8F3']
      });
    }, 800);
  };

  return (
    <section id="privilege" className="relative py-20 sm:py-28 md:py-36 bg-[#0B0B0B] text-[#FAF8F3] overflow-hidden">
      
      {/* Background Decorative Gold Radial */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#C8A96B]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-20">
          <div className="inline-flex items-center space-x-3 mb-4">
            <span className="h-[1px] w-8 bg-[#C8A96B]" />
            <Crown className="w-4 h-4 text-[#C8A96B]" />
            <span className="font-sans text-xs tracking-[0.35em] text-[#C8A96B] font-medium uppercase">
              EXECUTIVE CONCIERGE TIERS
            </span>
            <span className="h-[1px] w-8 bg-[#C8A96B]" />
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-light tracking-tight text-[#FAF8F3] uppercase">
            THE ROYAL <span className="italic text-[#C8A96B]">PRIVILEGE</span>
          </h2>
          <p className="font-sans text-sm sm:text-base text-[#F4F0E8]/70 font-light mt-3">
            “For those who believe wellness should become an elevated sacred ritual.”
          </p>
        </div>

        {/* 3 Tier Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch max-w-6xl mx-auto">
          {MEMBERSHIP_PLANS.map((plan) => (
            <div
              key={plan.id}
              className={`relative bg-[#151515] p-6 sm:p-10 flex flex-col justify-between transition-all duration-500 border ${
                plan.popular
                  ? 'border-[#C8A96B] shadow-[0_0_35px_rgba(200,169,107,0.15)] lg:-translate-y-3'
                  : 'border-[#C8A96B]/25 hover:border-[#C8A96B]/60'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#C8A96B] text-[#0B0B0B] font-sans text-[10px] uppercase tracking-[0.25em] font-bold px-4 py-1">
                  MOST COVETED
                </div>
              )}

              <div>
                {/* Tier Title */}
                <div className="text-center pb-6 border-b border-[#1F1F1F]">
                  <span className="font-sans text-[10px] tracking-[0.3em] text-[#C8A96B] uppercase block mb-1">
                    {plan.subtitle}
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl text-[#FAF8F3] uppercase tracking-wide">
                    {plan.tier}
                  </h3>
                  <div className="mt-4 flex items-baseline justify-center space-x-1">
                    <span className="font-serif text-4xl sm:text-5xl font-semibold text-[#FAF8F3]">{plan.price}</span>
                    <span className="text-xs font-sans text-[#F4F0E8]/60 uppercase tracking-widest">{plan.cadence}</span>
                  </div>
                </div>

                <p className="font-sans text-xs text-[#F4F0E8]/70 font-light text-center py-5 leading-relaxed">
                  {plan.description}
                </p>

                {/* Benefits List */}
                <div className="space-y-2.5 pt-2 pb-6 sm:pb-8">
                  {plan.benefits.map((benefit, bIdx) => (
                    <div key={bIdx} className="flex items-start space-x-2.5 text-xs sm:text-sm text-[#FAF8F3]/90 font-light">
                      <Check className="w-4 h-4 text-[#C8A96B] shrink-0 mt-0.5" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action */}
              <button
                onClick={() => handleOpenModal(plan)}
                data-cursor="book"
                className={`w-full py-3.5 sm:py-4 text-xs font-sans uppercase tracking-[0.2em] font-semibold transition-all duration-300 cursor-pointer ${
                  plan.popular
                    ? 'bg-[#C8A96B] hover:bg-[#D8C08A] text-[#0B0B0B]'
                    : 'border border-[#C8A96B] hover:bg-[#C8A96B] text-[#FAF8F3] hover:text-[#0B0B0B]'
                }`}
              >
                REQUEST MEMBERSHIP
              </button>
            </div>
          ))}
        </div>

      </div>

      {/* Membership Application Modal */}
      {selectedPlan && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-[#0B0B0B]/90 backdrop-blur-md animate-fade-in overflow-y-auto">
          <div className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto bg-[#151515] border border-[#C8A96B]/50 p-5 sm:p-10 shadow-2xl">
            
            <button
              onClick={() => setSelectedPlan(null)}
              className="absolute top-4 right-4 p-2 text-[#FAF8F3]/70 hover:text-[#C8A96B]"
            >
              <X className="w-6 h-6" />
            </button>

            {isSuccess ? (
              <div className="text-center py-6 sm:py-8 space-y-4">
                <div className="w-16 h-16 rounded-full bg-[#C8A96B]/20 border border-[#C8A96B] flex items-center justify-center mx-auto text-[#C8A96B]">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl text-[#FAF8F3] uppercase">
                  APPLICATION RECEIVED
                </h3>
                <p className="font-sans text-xs sm:text-sm text-[#F4F0E8]/80 font-light leading-relaxed">
                  Thank you, <span className="text-[#C8A96B]">{formData.name}</span>. Our Sovereign Concierge will personally review your request for the <strong className="text-[#FAF8F3]">{selectedPlan.tier}</strong> tier and contact you within 24 hours.
                </p>
                <button
                  onClick={() => setSelectedPlan(null)}
                  className="mt-4 px-8 py-3 bg-[#C8A96B] text-[#0B0B0B] font-sans text-xs uppercase tracking-widest font-semibold"
                >
                  RETURN TO SANCTUARY
                </button>
              </div>
            ) : (
              <form onSubmit={handleRequestSubmit} className="space-y-3 sm:space-y-4">
                <div className="flex items-center space-x-2 text-[#C8A96B] text-xs uppercase tracking-widest">
                  <Crown className="w-4 h-4" />
                  <span>PRIVILEGE APPLICATION</span>
                </div>

                <h3 className="font-serif text-2xl sm:text-3xl text-[#FAF8F3] uppercase">
                  {selectedPlan.tier}
                </h3>
                <p className="font-sans text-xs text-[#C8A96B] tracking-wider uppercase font-medium">
                  {selectedPlan.price} {selectedPlan.cadence}
                </p>

                <div className="pt-2 space-y-3">
                  <div>
                    <label className="block text-[11px] font-sans uppercase tracking-widest text-[#FAF8F3]/70 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Eleanor Vance"
                      className="w-full bg-[#0B0B0B] border border-[#C8A96B]/30 px-3 sm:px-4 py-2 text-xs sm:text-sm text-[#FAF8F3] focus:border-[#C8A96B] focus:outline-none"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[11px] font-sans uppercase tracking-widest text-[#FAF8F3]/70 mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="eleanor@domain.com"
                        className="w-full bg-[#0B0B0B] border border-[#C8A96B]/30 px-3 sm:px-4 py-2 text-xs sm:text-sm text-[#FAF8F3] focus:border-[#C8A96B] focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-sans uppercase tracking-widest text-[#FAF8F3]/70 mb-1">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+1 (555) 019-2831"
                        className="w-full bg-[#0B0B0B] border border-[#C8A96B]/30 px-3 sm:px-4 py-2 text-xs sm:text-sm text-[#FAF8F3] focus:border-[#C8A96B] focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-sans uppercase tracking-widest text-[#FAF8F3]/70 mb-1">
                      Preferred Wellness Objectives / Notes
                    </label>
                    <textarea
                      rows={2}
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      placeholder="Any specific therapist preferences, preferred schedule times..."
                      className="w-full bg-[#0B0B0B] border border-[#C8A96B]/30 px-3 sm:px-4 py-2 text-xs sm:text-sm text-[#FAF8F3] focus:border-[#C8A96B] focus:outline-none"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full mt-3 py-3 sm:py-3.5 bg-[#C8A96B] hover:bg-[#D8C08A] text-[#0B0B0B] font-sans text-xs uppercase tracking-widest font-bold transition-all disabled:opacity-50"
                >
                  {isSubmitting ? 'PROCESSING APPLICATION...' : 'SUBMIT MEMBERSHIP APPLICATION'}
                </button>
              </form>
            )}

          </div>
        </div>
      )}

    </section>
  );
};
