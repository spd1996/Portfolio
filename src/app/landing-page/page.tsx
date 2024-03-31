'use client'

import Link from 'next/link';
import React from 'react';

// Header Component
const Header = () => (
  <header className="flex justify-between items-center p-4 bg-accent-blue text-white">
    <div className='flex flex-row'>
    <Link href={"/"}>
              <h2 className="text-2xl font-semibold text-primary">Home</h2>
    </Link>
    <img src="/logo.svg" alt="My App Logo" width={50} height={50} />
    </div>
    <nav>
      <a href="#about" className="mx-2">About</a>
      <a href="#courses" className="mx-2">Courses</a>
      <a href="#testimonials" className="mx-2">Testimonials</a>
    </nav>
  </header>
);

// Hero Section with Image
const HeroSection = () => (
    <div className="text-center p-10 bg-gray-200 h-[1500px]" style={{ backgroundImage: `url('images/nature.png')`, backgroundSize: 'cover' }}>
      <div className="bg-white bg-opacity-75 p-5 h-full">
        <h2 className="text-4xl font-bold">Welcome to EduCenter</h2>
        <p className="mt-4">Your journey towards success begins here!</p>
        <button className="mt-4 bg-accent-blue text-white py-2 px-4 rounded">Get Started</button>
        <Banner message={`Did you know that the Romans had a goddess of the sewer system? Her name was Cloacina, derived from the Latin word "Cloaca," which means sewer. She was originally a protector goddess of Rome's main sewer, the Cloaca Maxima, but later became associated with the purification of people and the protection of sexual intercourse in marriage. The worship of Cloacina highlights the Romans' reverence for the infrastructure and practical aspects of daily life, as well as their tendency to deify elements of their society and environment.`}></Banner>
        <Banner message='New courses coming soon...'></Banner>
      </div>
    </div>
  );
  

// About Section
const AboutSection = () => (
  <div id="about" className="p-10">
    <h3 className="text-3xl font-bold">About Us</h3>
    <p className="mt-4">EduCenter is a leading coaching center providing top-notch education...</p>
  </div>
);

// Courses Section
const CoursesSection = () => (
  <div id="courses" className="p-10 bg-gray-100">
    <h3 className="text-3xl font-bold">Our Courses</h3>
    {/* Course items */}
    <div className="flex mt-4">
      <div className="flex-1 m-2 p-4 shadow">Course 1</div>
      <div className="flex-1 m-2 p-4 shadow">Course 2</div>
      <div className="flex-1 m-2 p-4 shadow">Course 3</div>
    </div>
  </div>
);

// Testimonials Section
const TestimonialsSection = () => (
  <div id="testimonials" className="p-10">
    <h3 className="text-3xl font-bold">What Our Students Say</h3>
<div className="mt-4 italic">&quot;I had a great learning experience...&quot; - Student</div>
  </div>
);

// Footer Component
const Footer = () => (
  <footer className="p-4 bg-accent-blue text-white text-center">
    <p>Contact us at info@educenter.com</p>
    <p>Follow us on social media</p>
  </footer>
);


interface BannerProps {
  message: string;
}

const Banner: React.FC<BannerProps> = ({ message }) => {
  return (
    <div className="bg-gradient-to-r from-accent-purple to-accent-pink animate-pulse shadow-lg rounded-md p-4 max-w-2xl mx-auto my-4">
      <h1 className="text-white font-bold text-xl text-center">
        Fun Fact of the Day
      </h1>
      <p className="text-white text-center mt-2">{message}</p>
    </div>
  );
};



// Main Landing Page Component
const LandingPage = () => (
  <div>
    <Header />
    <HeroSection />
    <AboutSection />
    <CoursesSection />
    <TestimonialsSection />
    <Footer />
  </div>
);

export default LandingPage;


