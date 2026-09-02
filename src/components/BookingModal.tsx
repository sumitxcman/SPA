import React, { useState, useEffect } from 'react';
import { TREATMENTS_DATA, SIGNATURE_EXPERIENCES } from '../data/spaData';
import { X, Calendar, Clock, User, Phone, Mail, Sparkles, CheckCircle2 } from 'lucide-react';
import confetti from 'canvas-confetti';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialTreatment?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  initialTreatment,
}) => {
  const allTreatments = [
    ...SIGNATURE_EXPERIENCES.map((e) => ({ name: e.title, price: e.price, duration: e.duration })),
    ...TREATMENTS_DATA.map((t) => ({ name: t.name, price: t.price, duration: t.duration })),
  ];

  const [selectedTreatment, setSelectedTreatment] = useState(
    initialTreatment || allTreatments[0].name
  );
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('14:00');
  const [guests, setGuests] = useState(1);
  const [addons, setAddons] = useState<string[]>([]);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [specialRequests, setSpecialRequests] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [bookingRef, setBookingRef] = useState('');

  useEffect(() => {
    if (initialTreatment) {
      setSelectedTreatment(initialTreatment);
    }
  }, [initialTreatment]);

  useEffect(() => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const dateStr = tomorrow.toISOString().split('T')[0];
    setSelectedDate(dateStr);
  }, []);

  if (!isOpen) return null;

  const timeSlots = [
    '10:00 AM',
    '11:30 AM',
    '01:00 PM',
    '02:30 PM',
    '04:00 PM',
    '05:30 PM',
    '07:00 PM',
    '08:30 PM'
  ];

  const availableAddons = [
    { id: 'steam', name: 'Private Eucalyptus Steam Session (20 Min)', price: '+₹500' },
    { id: 'gold', name: '24k Gold Facial Scalp Elixir Infusion', price: '+₹750' },
    { id: 'champagne', name: 'Vintage Imperial Champagne & Cacao Service', price: '+₹950' }
  ];

  const toggleAddon = (id: string) => {
    setAddons((prev) =>
      prev.includes(id) ? prev.filter((a) => a !== id) : [...prev, id]
    );
  };

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const randomRef = 'RYL-' + Math.floor(100000 + Math.random() * 900000);
    setBookingRef(randomRef);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      confetti({
        particleCount: 70,
        spread: 70,
        origin: { y: 0.55 },
        colors: ['#FBE8A6', '#FFFFFF', '#FFF4CC']
      });
    }, 900);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-[#0B0B0B]/90 backdrop-blur-xl animate-fade-in overflow-y-auto">
      <div className="relative w-full max-w-3xl max-h-[92vh] overflow-y-auto my-auto bg-[#151515] border border-[#FBE8A6]/50 p-5 sm:p-10 shadow-2xl text-[#FFFFFF]">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close Reservation Modal"
          className="absolute top-4 right-4 sm:top-6 sm:right-6 p-2 text-[#FFFFFF]/70 hover:text-[#FBE8A6] transition-colors z-10 cursor-pointer"
        >
          <X className="w-6 h-6" />
        </button>

        {!isSuccess ? (
          <div>
            {/* Modal Header */}
            <div className="text-center mb-8 border-b border-[#1F1F1F] pb-6">
              <div className="inline-flex items-center space-x-2 text-[#FBE8A6] text-xs uppercase tracking-[0.3em] font-semibold mb-2">
                <Sparkles className="w-3.5 h-3.5 text-[#FBE8A6]" />
                <span>PRIVATE SANCTUARY RESERVATION</span>
              </div>
              <h2 className="font-serif text-2xl sm:text-4xl text-[#FFFFFF] uppercase tracking-wide">
                BOOK YOUR <span className="italic text-[#FBE8A6]">RITUAL</span>
              </h2>
              <p className="font-sans text-xs sm:text-sm text-[#FFFFFF]/75 font-light mt-1">
                Central Market, Sector 6 Dwarka • Open 24 Hours
              </p>
            </div>

            {/* Booking Form */}
            <form onSubmit={handleBookingSubmit} className="space-y-6">
              
              {/* Step 1: Modality Selection */}
              <div>
                <label className="block font-sans text-xs uppercase tracking-widest text-[#FBE8A6] mb-2 font-bold">
                  01. Select Treatment Modality *
                </label>
                <select
                  value={selectedTreatment}
                  onChange={(e) => setSelectedTreatment(e.target.value)}
                  className="w-full bg-[#0B0B0B] border border-[#FBE8A6]/30 text-[#FFFFFF] text-xs sm:text-sm px-4 py-3 focus:outline-none focus:border-[#FBE8A6]"
                >
                  <optgroup label="Signature Experiences">
                    {SIGNATURE_EXPERIENCES.map((exp) => (
                      <option key={exp.id} value={exp.title}>
                        {exp.title} ({exp.duration} — {exp.price})
                      </option>
                    ))}
                  </optgroup>
                  <optgroup label="Massages & Rituals">
                    {TREATMENTS_DATA.map((t) => (
                      <option key={t.id} value={t.name}>
                        {t.name} ({t.duration} — {t.price})
                      </option>
                    ))}
                  </optgroup>
                </select>
              </div>

              {/* Step 2: Date & Time */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-sans text-xs uppercase tracking-widest text-[#FBE8A6] mb-2 font-bold">
                    02. Preferred Date *
                  </label>
                  <div className="relative">
                    <input
                      type="date"
                      required
                      value={selectedDate}
                      onChange={(e) => setSelectedDate(e.target.value)}
                      className="w-full bg-[#0B0B0B] border border-[#FBE8A6]/30 text-[#FFFFFF] text-xs sm:text-sm px-4 py-3 focus:outline-none focus:border-[#FBE8A6]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-sans text-xs uppercase tracking-widest text-[#FBE8A6] mb-2 font-bold">
                    03. Preferred Time Slot *
                  </label>
                  <select
                    value={selectedTime}
                    onChange={(e) => setSelectedTime(e.target.value)}
                    className="w-full bg-[#0B0B0B] border border-[#FBE8A6]/30 text-[#FFFFFF] text-xs sm:text-sm px-4 py-3 focus:outline-none focus:border-[#FBE8A6]"
                  >
                    {timeSlots.map((slot) => (
                      <option key={slot} value={slot}>
                        {slot}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Step 3: Guests & Addons */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-sans text-xs uppercase tracking-widest text-[#FBE8A6] mb-2 font-bold">
                    04. Number of Guests
                  </label>
                  <div className="flex space-x-2">
                    {[1, 2, 3, 4].map((num) => (
                      <button
                        type="button"
                        key={num}
                        onClick={() => setGuests(num)}
                        className={`flex-1 py-2.5 text-xs font-sans uppercase border transition-all ${
                          guests === num
                            ? 'bg-[#FBE8A6] text-[#0B0B0B] border-[#FBE8A6] font-bold'
                            : 'bg-[#0B0B0B] text-[#FFFFFF]/70 border-[#FBE8A6]/30 hover:border-[#FBE8A6]'
                        }`}
                      >
                        {num} {num === 1 ? 'Guest' : 'Guests'}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block font-sans text-xs uppercase tracking-widest text-[#FBE8A6] mb-2 font-bold">
                    05. Sovereign Add-ons
                  </label>
                  <div className="space-y-2">
                    {availableAddons.map((addon) => {
                      const isSelected = addons.includes(addon.id);
                      return (
                        <div
                          key={addon.id}
                          onClick={() => toggleAddon(addon.id)}
                          className={`flex items-center justify-between p-2.5 sm:p-3 border cursor-pointer transition-all ${
                            isSelected
                              ? 'bg-[#FBE8A6]/10 border-[#FBE8A6] text-[#FFFFFF]'
                              : 'bg-[#0B0B0B] border-[#FBE8A6]/20 text-[#FFFFFF]/70 hover:border-[#FBE8A6]/50'
                          }`}
                        >
                          <div className="flex items-center space-x-2">
                            <div
                              className={`w-4 h-4 rounded-none border flex items-center justify-center shrink-0 ${
                                isSelected ? 'bg-[#FBE8A6] border-[#FBE8A6]' : 'border-[#FBE8A6]/40'
                              }`}
                            >
                              {isSelected && <span className="text-[#0B0B0B] text-[10px] font-bold">✓</span>}
                            </div>
                            <span className="font-sans text-[11px] sm:text-xs">{addon.name}</span>
                          </div>
                          <span className="font-serif text-xs sm:text-sm text-[#FBE8A6] font-bold shrink-0 ml-2">
                            {addon.price}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Step 4: Personal Information */}
              <div className="border-t border-[#1F1F1F] pt-4">
                <label className="block font-sans text-xs uppercase tracking-widest text-[#FBE8A6] mb-3 font-bold">
                  06. Guest Contact Details *
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Your Full Name *"
                      className="w-full bg-[#0B0B0B] border border-[#FBE8A6]/30 text-[#FFFFFF] text-xs sm:text-sm px-4 py-2.5 focus:outline-none focus:border-[#FBE8A6]"
                    />
                  </div>
                  <div>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="Phone / WhatsApp Number *"
                      className="w-full bg-[#0B0B0B] border border-[#FBE8A6]/30 text-[#FFFFFF] text-xs sm:text-sm px-4 py-2.5 focus:outline-none focus:border-[#FBE8A6]"
                    />
                  </div>
                </div>
                <div className="mt-3">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email Address (Optional for receipt)"
                    className="w-full bg-[#0B0B0B] border border-[#FBE8A6]/30 text-[#FFFFFF] text-xs sm:text-sm px-4 py-2.5 focus:outline-none focus:border-[#FBE8A6]"
                  />
                </div>
                <div className="mt-3">
                  <textarea
                    rows={2}
                    value={specialRequests}
                    onChange={(e) => setSpecialRequests(e.target.value)}
                    placeholder="Special requests, pressure preferences, or health notes..."
                    className="w-full bg-[#0B0B0B] border border-[#FBE8A6]/30 text-[#FFFFFF] text-xs sm:text-sm px-4 py-2 focus:outline-none focus:border-[#FBE8A6]"
                  />
                </div>
              </div>

              {/* Submit CTA */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-[#FBE8A6] hover:bg-[#FFF4CC] text-[#0B0B0B] font-sans text-xs uppercase tracking-[0.25em] font-bold transition-all shadow-xl cursor-pointer disabled:opacity-50"
                >
                  {isSubmitting ? 'CONFIRMING SANCTUARY RESERVATION...' : 'CONFIRM ROYAL RESERVATION'}
                </button>
                <p className="text-center font-sans text-[11px] text-[#FFFFFF]/60 mt-2">
                  * No pre-payment required online. Pay seamlessly upon arrival at Sector 6 Dwarka.
                </p>
              </div>

            </form>
          </div>
        ) : (
          /* Confirmation State */
          <div className="text-center py-8 sm:py-12 space-y-6">
            <CheckCircle2 className="w-16 h-16 sm:w-20 sm:h-20 text-[#FBE8A6] mx-auto animate-bounce" />

            <div>
              <span className="font-sans text-xs text-[#FBE8A6] uppercase tracking-[0.3em] font-bold block mb-1">
                SANCTUARY CONFIRMED
              </span>
              <h3 className="font-serif text-3xl sm:text-5xl text-[#FFFFFF] uppercase">
                RESERVATION RECEIVED
              </h3>
            </div>

            <div className="bg-[#0B0B0B] p-6 border border-[#FBE8A6]/30 max-w-md mx-auto space-y-3 text-left">
              <div className="flex justify-between border-b border-[#1F1F1F] pb-2">
                <span className="text-xs font-sans text-[#FFFFFF]/70">Reference:</span>
                <span className="text-xs font-mono font-bold text-[#FBE8A6]">{bookingRef}</span>
              </div>
              <div className="flex justify-between border-b border-[#1F1F1F] pb-2">
                <span className="text-xs font-sans text-[#FFFFFF]/70">Treatment:</span>
                <span className="text-xs font-serif text-[#FFFFFF] uppercase">{selectedTreatment}</span>
              </div>
              <div className="flex justify-between border-b border-[#1F1F1F] pb-2">
                <span className="text-xs font-sans text-[#FFFFFF]/70">Date & Time:</span>
                <span className="text-xs font-sans text-[#FBE8A6]">{selectedDate} @ {selectedTime}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-xs font-sans text-[#FFFFFF]/70">Guest:</span>
                <span className="text-xs font-sans text-[#FFFFFF]">{name} ({phone})</span>
              </div>
            </div>

            <p className="font-sans text-xs sm:text-sm text-[#FFFFFF]/80 max-w-md mx-auto leading-relaxed">
              Our wellness concierge has logged your reservation at Central Market, Sector 6 Dwarka. A confirmation SMS/WhatsApp has been sent to <span className="text-[#FBE8A6] font-medium">{phone}</span>.
            </p>

            <button
              onClick={onClose}
              className="px-8 py-3.5 bg-[#FBE8A6] hover:bg-[#FFF4CC] text-[#0B0B0B] font-sans text-xs uppercase tracking-widest font-bold shadow-xl transition-all"
            >
              CLOSE & RETURN TO SANCTUARY
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
