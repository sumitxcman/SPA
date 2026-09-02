import React, { useState } from 'react';
import { MEMBERSHIP_PLANS, MembershipPlan } from '../data/spaData';
import { Check, Sparkles, X, CheckCircle2 } from 'lucide-react';
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
        colors: ['#FBE8A6', '#FFF4CC', '#FFFFFF']
      });
    }, 800);
  };

  return (
    <section id="privilege" className="relative py-20 sm:py-28 md:py-36 bg-[#0B0B0B] text-[#FFFFFF] overflow-hidden">
      
      {/* Background Decorative Radial */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#FBE8A6]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-20">
          <div className="inline-flex items-center space-x-3 mb-4">
            <span className="h-[1px] w-8 bg-[#FBE8A6]" />
            <span className="font-sans text-xs tracking-[0.35em] text-[#FBE8A6] font-semibold uppercase">
              EXECUTIVE CONCIERGE TIERS
            </span>
            <span className="h-[1px] w-8 bg-[#FBE8A6]" />
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-light tracking-tight text-[#FFFFFF] uppercase">
            THE ROYAL <span className="italic text-[#FBE8A6]">PRIVILEGE</span>
          </h2>
          <p className="font-sans text-sm sm:text-base text-[#FFFFFF]/80 font-light mt-3">
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
                  ? 'border-[#FBE8A6] shadow-[0_0_35px_rgba(251,232,166,0.15)] lg:-translate-y-3'
                  : 'border-[#FBE8A6]/25 hover:border-[#FBE8A6]/70'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#FBE8A6] text-[#0B0B0B] font-sans text-[10px] uppercase tracking-[0.25em] font-bold px-4 py-1 shadow-md">
                  MOST COVETED
                </div>
              )}

              <div>
                {/* Tier Title */}
                <div className="text-center pb-6 border-b border-[#1F1F1F]">
                  <span className="font-sans text-[10px] tracking-[0.3em] text-[#FBE8A6] uppercase block mb-1 font-semibold">
                    {plan.subtitle}
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl text-[#FFFFFF] uppercase tracking-wide">
                    {plan.tier}
                  </h3>
                  <div className="mt-4 flex items-baseline justify-center space-x-1">
                    <span className="font-serif text-4xl sm:text-5xl font-semibold text-[#FFFFFF]">{plan.price}</span>
                    <span className="text-xs font-sans text-[#FBE8A6]/80 uppercase tracking-widest">{plan.cadence}</span>
                  </div>
                </div>

                <p className="font-sans text-xs text-[#FFFFFF]/75 text-center font-light py-4">
                  {plan.description}
                </p>

                {/* Benefits List */}
                <ul className="space-y-3 pt-2 pb-6">
                  {plan.benefits.map((b, idx) => (
                    <li key={idx} className="flex items-start space-x-2.5 text-xs font-sans text-[#FFFFFF]/90 font-light">
                      <Check className="w-4 h-4 text-[#FBE8A6] shrink-0 mt-0.5" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Card Action Button */}
              <div className="pt-4 border-t border-[#1F1F1F]">
                <button
                  onClick={() => handleOpenModal(plan)}
                  data-cursor="book"
                  className={`w-full py-3.5 sm:py-4 text-xs font-sans uppercase tracking-[0.2em] font-bold transition-all duration-300 cursor-pointer ${
                    plan.popular
                      ? 'bg-[#FBE8A6] hover:bg-[#FFF4CC] text-[#0B0B0B] shadow-lg'
                      : 'bg-[#1F1F1F] hover:bg-[#FBE8A6] text-[#FFFFFF] hover:text-[#0B0B0B] border border-[#FBE8A6]/30'
                  }`}
                >
                  APPLY FOR {plan.tier}
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Membership Application Modal */}
      {selectedPlan && (
        <div
          onClick={() => setSelectedPlan(null)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#0B0B0B]/90 backdrop-blur-md p-4 animate-fade-in"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-[#151515] border border-[#FBE8A6]/50 max-w-lg w-full p-6 sm:p-8 shadow-2xl relative"
          >
            <button
              onClick={() => setSelectedPlan(null)}
              aria-label="Close Modal"
              className="absolute top-4 right-4 p-1 text-[#FFFFFF]/70 hover:text-[#FBE8A6]"
            >
              <X className="w-6 h-6" />
            </button>

            {!isSuccess ? (
              <div>
                <span className="font-sans text-xs text-[#FBE8A6] uppercase tracking-widest block mb-1">
                  PRIVILEGE APPLICATION
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl text-[#FFFFFF] uppercase">
                  {selectedPlan.tier}
                </h3>
                <p className="font-serif text-lg text-[#FBE8A6] mt-0.5">
                  {selectedPlan.price} {selectedPlan.cadence}
                </p>

                <form onSubmit={handleRequestSubmit} className="mt-6 space-y-4">
                  <div>
                    <label className="block font-sans text-xs uppercase tracking-wider text-[#FFFFFF]/80 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Lord / Lady Henderson"
                      className="w-full bg-[#0B0B0B] border border-[#FBE8A6]/30 px-3 py-2 text-sm text-[#FFFFFF] focus:outline-none focus:border-[#FBE8A6]"
                    />
                  </div>

                  <div>
                    <label className="block font-sans text-xs uppercase tracking-wider text-[#FFFFFF]/80 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="noble@sanctuary.in"
                      className="w-full bg-[#0B0B0B] border border-[#FBE8A6]/30 px-3 py-2 text-sm text-[#FFFFFF] focus:outline-none focus:border-[#FBE8A6]"
                    />
                  </div>

                  <div>
                    <label className="block font-sans text-xs uppercase tracking-wider text-[#FFFFFF]/80 mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 98765 43210"
                      className="w-full bg-[#0B0B0B] border border-[#FBE8A6]/30 px-3 py-2 text-sm text-[#FFFFFF] focus:outline-none focus:border-[#FBE8A6]"
                    />
                  </div>

                  <div>
                    <label className="block font-sans text-xs uppercase tracking-wider text-[#FFFFFF]/80 mb-1">
                      Personal Wellness Requests
                    </label>
                    <textarea
                      rows={2}
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      placeholder="Preferred therapist modality or health notes..."
                      className="w-full bg-[#0B0B0B] border border-[#FBE8A6]/30 px-3 py-2 text-sm text-[#FFFFFF] focus:outline-none focus:border-[#FBE8A6]"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 bg-[#FBE8A6] hover:bg-[#FFF4CC] text-[#0B0B0B] font-sans text-xs uppercase tracking-widest font-bold shadow-xl transition-all cursor-pointer"
                  >
                    {isSubmitting ? 'PROCESSING PRIVILEGE...' : 'SUBMIT PRIVILEGE APPLICATION'}
                  </button>
                </form>
              </div>
            ) : (
              <div className="text-center py-8 space-y-4">
                <CheckCircle2 className="w-16 h-16 text-[#FBE8A6] mx-auto animate-bounce" />
                <h4 className="font-serif text-3xl text-[#FFFFFF] uppercase">
                  APPLICATION RECEIVED
                </h4>
                <p className="font-sans text-xs sm:text-sm text-[#FFFFFF]/80 font-light max-w-sm mx-auto">
                  Your profile has been forwarded to our Head Concierge. We will contact you at <span className="text-[#FBE8A6] font-medium">{formData.phone}</span> within 2 hours.
                </p>
                <button
                  onClick={() => setSelectedPlan(null)}
                  className="mt-6 px-6 py-2.5 bg-[#FBE8A6] text-[#0B0B0B] font-sans text-xs uppercase tracking-widest font-bold"
                >
                  RETURN TO SANCTUARY
                </button>
              </div>
            )}

          </div>
        </div>
      )}

    </section>
  );
};
