import React, { useState, useEffect } from 'react';
import { TREATMENTS_DATA, SIGNATURE_EXPERIENCES } from '../data/spaData';
import { X, Calendar, Clock, User, Phone, Mail, Sparkles, CheckCircle2, ChevronRight } from 'lucide-react';
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
        colors: ['#C8A96B', '#FAF8F3', '#D8C08A']
      });
    }, 900);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-[#0B0B0B]/90 backdrop-blur-xl animate-fade-in overflow-y-auto">
      <div className="relative w-full max-w-3xl max-h-[92vh] overflow-y-auto my-auto bg-[#151515] border border-[#C8A96B]/50 p-5 sm:p-10 shadow-2xl text-[#FAF8F3]">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="sticky top-0 float-right p-2 -mr-2 -mt-2 text-[#FAF8F3]/80 hover:text-[#C8A96B] transition-colors focus:outline-none z-10 bg-[#151515]/90 rounded-full"
          aria-label="Close Reservation"
        >
          <X className="w-6 h-6" />
        </button>

        {isSuccess ? (
          /* Confirmation Luxury Screen */
          <div className="text-center py-6 sm:py-8 space-y-6 clear-both">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#C8A96B]/20 border border-[#C8A96B] flex items-center justify-center mx-auto text-[#C8A96B] shadow-[0_0_30px_rgba(200,169,107,0.3)]">
              <CheckCircle2 className="w-8 h-8 sm:w-10 sm:h-10" />
            </div>

            <div>
              <span className="font-sans text-xs tracking-[0.3em] text-[#C8A96B] uppercase block mb-1">
                RESERVATION CONFIRMED
              </span>
              <h3 className="font-serif text-2xl sm:text-4xl text-[#FAF8F3] uppercase">
                WE AWAIT YOUR ARRIVAL
              </h3>
            </div>

            <div className="bg-[#0B0B0B] border border-[#C8A96B]/30 p-5 sm:p-6 max-w-md mx-auto text-left space-y-2 text-xs sm:text-sm font-sans">
              <div className="flex justify-between border-b border-[#1F1F1F] pb-2">
                <span className="text-[#C8A96B]">Confirmation Ref:</span>
                <span className="font-mono font-bold text-[#FAF8F3]">{bookingRef}</span>
              </div>
              <div className="flex justify-between border-b border-[#1F1F1F] pb-2">
                <span className="text-[#FAF8F3]/70">Ritual:</span>
                <span className="text-[#FAF8F3] font-medium text-right text-xs sm:text-sm">{selectedTreatment}</span>
              </div>
              <div className="flex justify-between border-b border-[#1F1F1F] pb-2">
                <span className="text-[#FAF8F3]/70">Date & Slot:</span>
                <span className="text-[#FAF8F3] font-medium">{selectedDate} @ {selectedTime}</span>
              </div>
              <div className="flex justify-between border-b border-[#1F1F1F] pb-2">
                <span className="text-[#FAF8F3]/70">Guest(s):</span>
                <span className="text-[#FAF8F3] font-medium">{guests} Guest{guests > 1 ? 's' : ''}</span>
              </div>
              <div className="flex justify-between pt-1">
                <span className="text-[#FAF8F3]/70">Guest Name:</span>
                <span className="text-[#C8A96B] font-medium">{name}</span>
              </div>
            </div>

            <p className="font-sans text-xs text-[#F4F0E8]/70 max-w-md mx-auto leading-relaxed">
              A bespoke itinerary and arrival instructions have been dispatched to <strong className="text-[#FAF8F3]">{email}</strong>. Our concierge will attend to your reception.
            </p>

            <button
              onClick={onClose}
              className="px-8 py-3.5 bg-[#C8A96B] text-[#0B0B0B] font-sans text-xs uppercase tracking-widest font-bold hover:bg-[#D8C08A] transition-all"
            >
              CLOSE & EXPLORE SANCTUARY
            </button>
          </div>
        ) : (
          /* Hotel-Grade Reservation Form */
          <form onSubmit={handleBookingSubmit} className="space-y-5 clear-both">
            
            {/* Header */}
            <div>
              <div className="flex items-center space-x-2 text-[#C8A96B] text-xs tracking-[0.35em] uppercase font-semibold mb-1">
                <Sparkles className="w-3.5 h-3.5" />
                <span>PRIVATE SANCTUARY RESERVATION</span>
              </div>
              <h3 className="font-serif text-2xl sm:text-4xl text-[#FAF8F3] uppercase">
                RESERVE YOUR RITUAL
              </h3>
              <p className="font-sans text-xs text-[#F4F0E8]/70 font-light mt-1">
                Select your bespoke modalities and sanctuary schedule.
              </p>
            </div>

            {/* Treatment Selector */}
            <div>
              <label className="block text-[11px] font-sans uppercase tracking-widest text-[#C8A96B] font-medium mb-1.5">
                Select Treatment / Ritual *
              </label>
              <select
                value={selectedTreatment}
                onChange={(e) => setSelectedTreatment(e.target.value)}
                className="w-full bg-[#0B0B0B] border border-[#C8A96B]/40 px-3 sm:px-4 py-2.5 sm:py-3 text-xs sm:text-sm text-[#FAF8F3] focus:border-[#C8A96B] focus:outline-none"
              >
                {allTreatments.map((t, idx) => (
                  <option key={idx} value={t.name} className="bg-[#0B0B0B] text-[#FAF8F3]">
                    {t.name} ({t.duration} — {t.price})
                  </option>
                ))}
              </select>
            </div>

            {/* Date, Time & Guests Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
              <div>
                <label className="block text-[11px] font-sans uppercase tracking-widest text-[#C8A96B] font-medium mb-1.5">
                  Date of Visit *
                </label>
                <input
                  type="date"
                  required
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  className="w-full bg-[#0B0B0B] border border-[#C8A96B]/40 px-3 sm:px-4 py-2 sm:py-2.5 text-xs sm:text-sm text-[#FAF8F3] focus:border-[#C8A96B] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-[11px] font-sans uppercase tracking-widest text-[#C8A96B] font-medium mb-1.5">
                  Preferred Time *
                </label>
                <select
                  value={selectedTime}
                  onChange={(e) => setSelectedTime(e.target.value)}
                  className="w-full bg-[#0B0B0B] border border-[#C8A96B]/40 px-3 sm:px-4 py-2 sm:py-2.5 text-xs sm:text-sm text-[#FAF8F3] focus:border-[#C8A96B] focus:outline-none"
                >
                  {timeSlots.map((slot) => (
                    <option key={slot} value={slot} className="bg-[#0B0B0B] text-[#FAF8F3]">
                      {slot}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-[11px] font-sans uppercase tracking-widest text-[#C8A96B] font-medium mb-1.5">
                  Number of Guests
                </label>
                <select
                  value={guests}
                  onChange={(e) => setGuests(Number(e.target.value))}
                  className="w-full bg-[#0B0B0B] border border-[#C8A96B]/40 px-3 sm:px-4 py-2 sm:py-2.5 text-xs sm:text-sm text-[#FAF8F3] focus:border-[#C8A96B] focus:outline-none"
                >
                  <option value={1}>1 Guest (Private Suite)</option>
                  <option value={2}>2 Guests (Couples Suite)</option>
                  <option value={3}>3 Guests (Sanctuary Wing)</option>
                  <option value={4}>4 Guests (Private Retreat)</option>
                </select>
              </div>
            </div>

            {/* Optional Luxury Addons */}
            <div>
              <label className="block text-[11px] font-sans uppercase tracking-widest text-[#C8A96B] font-medium mb-2">
                Enhance Your Ritual (Optional)
              </label>
              <div className="space-y-2">
                {availableAddons.map((addon) => {
                  const isChecked = addons.includes(addon.id);
                  return (
                    <div
                      key={addon.id}
                      onClick={() => toggleAddon(addon.id)}
                      className={`flex items-center justify-between p-2.5 sm:p-3 border cursor-pointer transition-all ${
                        isChecked
                          ? 'bg-[#C8A96B]/15 border-[#C8A96B]'
                          : 'bg-[#0B0B0B] border-[#1F1F1F] hover:border-[#C8A96B]/40'
                      }`}
                    >
                      <div className="flex items-center space-x-2.5">
                        <div
                          className={`w-4 h-4 rounded-none border flex items-center justify-center shrink-0 ${
                            isChecked ? 'bg-[#C8A96B] border-[#C8A96B]' : 'border-[#C8A96B]/40'
                          }`}
                        >
                          {isChecked && <CheckCircle2 className="w-3.5 h-3.5 text-[#0B0B0B]" />}
                        </div>
                        <span className="font-sans text-xs text-[#FAF8F3]/90">{addon.name}</span>
                      </div>
                      <span className="font-serif text-xs sm:text-sm text-[#C8A96B] font-bold shrink-0 ml-2">{addon.price}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Guest Contact Details */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 pt-1">
              <div>
                <label className="block text-[11px] font-sans uppercase tracking-widest text-[#FAF8F3]/70 mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Eleanor Vance"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-[#0B0B0B] border border-[#C8A96B]/40 px-3 sm:px-4 py-2 sm:py-2.5 text-xs sm:text-sm text-[#FAF8F3] focus:border-[#C8A96B] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-[11px] font-sans uppercase tracking-widest text-[#FAF8F3]/70 mb-1">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="+1 (555) 019-2831"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full bg-[#0B0B0B] border border-[#C8A96B]/40 px-3 sm:px-4 py-2 sm:py-2.5 text-xs sm:text-sm text-[#FAF8F3] focus:border-[#C8A96B] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-[11px] font-sans uppercase tracking-widest text-[#FAF8F3]/70 mb-1">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  placeholder="eleanor@domain.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-[#0B0B0B] border border-[#C8A96B]/40 px-3 sm:px-4 py-2 sm:py-2.5 text-xs sm:text-sm text-[#FAF8F3] focus:border-[#C8A96B] focus:outline-none"
                />
              </div>
            </div>

            {/* Special Dietary/Pressure Requests */}
            <div>
              <label className="block text-[11px] font-sans uppercase tracking-widest text-[#FAF8F3]/70 mb-1">
                Special Requests or Somatic Focus (Optional)
              </label>
              <input
                type="text"
                placeholder="e.g. Focus on shoulder tension, lavender allergy..."
                value={specialRequests}
                onChange={(e) => setSpecialRequests(e.target.value)}
                className="w-full bg-[#0B0B0B] border border-[#C8A96B]/40 px-3 sm:px-4 py-2 sm:py-2.5 text-xs sm:text-sm text-[#FAF8F3] focus:border-[#C8A96B] focus:outline-none"
              />
            </div>

            {/* Submit Action */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3.5 sm:py-4 bg-[#C8A96B] hover:bg-[#D8C08A] text-[#0B0B0B] font-sans text-xs uppercase tracking-[0.25em] font-bold transition-all duration-300 shadow-[0_4px_25px_rgba(200,169,107,0.3)] disabled:opacity-50 cursor-pointer"
            >
              {isSubmitting ? 'CONFIRMING SANCTUARY RESERVATION...' : 'CONFIRM MY EXPERIENCE'}
            </button>
            
            <p className="text-center font-sans text-[10px] text-[#FAF8F3]/50 uppercase tracking-widest">
              Complimentary cancellation up to 24 hours prior to scheduled appointment.
            </p>

          </form>
        )}

      </div>
    </div>
  );
};
