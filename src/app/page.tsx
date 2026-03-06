import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from '@/components/home/Hero';
import About from '@/components/home/About';
import Industry from '@/components/home/Industry';
import Products from '@/components/home/Products';
import Contacts from '@/components/home/Contacts';
import Clients from '@/components/home/Clients';

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <Industry />
      <Products />
      <Contacts />
      <Clients />
      <Footer />
    </div>
  );
}
