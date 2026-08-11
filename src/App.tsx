import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Services from './components/Services/Services';
import Experience from './components/Experience/Experience';
import WhyHireMe from './components/WhyHireMe/WhyHireMe';
import Portfolio from './components/Portfolio/Portfolio';
import Testimonials from './components/Testimonials/Testimonials';
import CTA from './components/CTA/CTA';
import Marquee from './components/Marquee/Marquee';
import Blog from './components/Blog/Blog';
import Footer from './components/Footer/Footer';

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <Experience />
        <WhyHireMe />
        <Portfolio />
        <Testimonials />
        <CTA />
        <Marquee />
        <Blog />
      </main>
      <Footer />
    </>
  );
}
