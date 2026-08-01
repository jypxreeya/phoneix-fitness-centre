import React from 'react';
import { Helmet } from 'react-helmet-async';
import Hero from '../components/Hero';
import WhyChooseUs from '../components/WhyChooseUs';
import ProgramsPreview from '../components/ProgramsPreview';
import TransformationsPreview from '../components/TransformationsPreview';
import GalleryPreview from '../components/GalleryPreview';
import TrainersPreview from '../components/TrainersPreview';
import Testimonials from '../components/Testimonials';
import ContactPreview from '../components/ContactPreview';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Phoenix High Performance & Fitness Centre | Best Gym in Chennai</title>
        <meta name="description" content="Award-winning premium fitness and sports performance centre in Chennai. Elite coaching, HYROX, Olympic Weightlifting, and personalized nutrition." />
      </Helmet>
      
      <Hero />
      
      <WhyChooseUs />
      <ProgramsPreview />
      <TransformationsPreview />
      <GalleryPreview />
      <TrainersPreview />
      <Testimonials />
      <ContactPreview />
    </>
  );
};

export default Home;
