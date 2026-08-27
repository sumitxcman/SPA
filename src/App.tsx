import React, { useState } from 'react';
import { CustomCursor } from './components/CustomCursor';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { EditorialPhilosophy } from './components/EditorialPhilosophy';
import { SignatureExperience } from './components/SignatureExperience';
import { TreatmentMenu } from './components/TreatmentMenu';
import { ChooseYourMood } from './components/ChooseYourMood';
import { RitualJourney } from './components/RitualJourney';
import { InteriorShowcase } from './components/InteriorShowcase';
import { WhyTheRoyal } from './components/WhyTheRoyal';
import { Testimonials } from './components/Testimonials';
import { MembershipPrivilege } from './components/MembershipPrivilege';
import { LocationSection } from './components/LocationSection';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';
import { AmbientSoundToggle } from './components/AmbientSoundToggle';

export const App: React.FC = () => {
  const [bookingOpen, setBookingOpen] = useState(false);
  const [selectedTreatmentForBooking, setSelectedTreatmentForBooking] = useState<string | undefined>(undefined);

  const handleOpenBooking = (treatmentName?: string) => {
    setSelectedTreatmentForBooking(treatmentName);
    setBookingOpen(true);
  };

  const handleCloseBooking = () => {
    setBookingOpen(false);
    setSelectedTreatmentForBooking(undefined);
  };

  return (
    <div className="min-h-screen bg-[#0B0B0B] text-[#FAF8F3] font-sans selection:bg-[#C8A96B] selection:text-[#0B0B0B] relative">
      {/* Desktop Adaptive Custom Cursor */}
      <CustomCursor />

      {/* Floating Glassmorphism Navbar */}
      <Navbar onOpenBooking={handleOpenBooking} />

      {/* Main Sanctuary Experience Flow */}
      <main>
        {/* Fullscreen Cinematic Hero */}
        <Hero onOpenBooking={handleOpenBooking} />

        {/* 01 The Philosophy (Ivory Editorial Section) */}
        <EditorialPhilosophy />

        {/* The Royal Experience (Horizontal Scroll Carousel) */}
        <SignatureExperience onOpenBooking={handleOpenBooking} />

        {/* Treatment Menu (Signature Massages & Wellness Rituals) */}
        <TreatmentMenu onOpenBooking={handleOpenBooking} />

        {/* "Choose Your Mood" Interactive Experience */}
        <ChooseYourMood onOpenBooking={handleOpenBooking} />

        {/* The 4-Stage Odyssey (Vertical Storytelling) */}
        <RitualJourney />

        {/* Sanctuary Interior Showcase (Masonry & Lightbox) */}
        <InteriorShowcase />

        {/* Why The Royal (Minimalist Luxury Statistics) */}
        <WhyTheRoyal />

        {/* Guest Reflections (Large Editorial Quotation Carousel) */}
        <Testimonials />

        {/* The Royal Privilege (Executive Membership Atelier) */}
        <MembershipPrivilege onOpenBooking={handleOpenBooking} />

        {/* Location, Valet Courtyard & FAQ */}
        <LocationSection />
      </main>

      {/* Grand Luxury Footer */}
      <Footer onOpenBooking={() => handleOpenBooking()} />

      {/* Hotel-Grade Booking Reservation Modal */}
      <BookingModal
        isOpen={bookingOpen}
        onClose={handleCloseBooking}
        initialTreatment={selectedTreatmentForBooking}
      />

      {/* Soothing Spa Atmosphere Drone Toggle */}
      <AmbientSoundToggle />
    </div>
  );
};

export default App;
