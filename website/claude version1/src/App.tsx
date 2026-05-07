import { Routes, Route } from 'react-router-dom';
import { Layout } from '@/components/layout/Layout';
import { Home } from '@/pages/Home';
import { Customers } from '@/pages/Customers';
import { Vendors } from '@/pages/Vendors';
import { HowItWorks } from '@/pages/HowItWorks';
import { Pricing } from '@/pages/Pricing';
import { About } from '@/pages/About';
import { FAQ } from '@/pages/FAQ';
import { Contact } from '@/pages/Contact';
import { Privacy } from '@/pages/Privacy';
import { Terms } from '@/pages/Terms';
import { ThankYou } from '@/pages/ThankYou';
import { NotFound } from '@/pages/NotFound';

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="customers" element={<Customers />} />
        <Route path="vendors" element={<Vendors />} />
        <Route path="how-it-works" element={<HowItWorks />} />
        <Route path="pricing" element={<Pricing />} />
        <Route path="about" element={<About />} />
        <Route path="faq" element={<FAQ />} />
        <Route path="contact" element={<Contact />} />
        <Route path="privacy" element={<Privacy />} />
        <Route path="terms" element={<Terms />} />
        <Route path="thank-you" element={<ThankYou />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
