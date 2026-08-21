import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Services from './components/Services/Services';
import WhyHireMe from './components/WhyHireMe/WhyHireMe';
import Experience from './components/Experience/Experience';
import InfoCardGrid from './components/InfoCardGrid/InfoCardGrid';
import Portfolio from './components/Portfolio/Portfolio';
import Testimonials from './components/Testimonials/Testimonials';
import Resume from './components/Resume/Resume';
import CTA from './components/CTA/CTA';
import Marquee from './components/Marquee/Marquee';
import Blog from './components/Blog/Blog';
import Footer from './components/Footer/Footer';
import { clinicalAreas, equipment, certifications, workshops } from './data/content';

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <WhyHireMe />
        <Services />
        <Experience />
        <InfoCardGrid {...clinicalAreas} variant="light" />
        <InfoCardGrid {...equipment} variant="dark" />
        <Portfolio />
        <InfoCardGrid {...certifications} variant="light" />
        <InfoCardGrid {...workshops} variant="light" />
        <Testimonials />
        <Resume />
        <CTA />
        <Marquee />
        <Blog />
      </main>
      <Footer />
    </>
  );
}
