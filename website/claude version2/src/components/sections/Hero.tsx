import Container from '../ui/Container';
import { ButtonLink } from '../ui/Button';
import { cta } from '../../lib/analytics';
import WhatsAppMockup from './WhatsAppMockup';
import PhoneMockup, { NearbyShopsScreen } from './PhoneMockup';
import Badge from '../ui/Badge';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-brand-green-soft via-white to-brand-blue-soft">
      <Container>
        <div className="grid gap-12 py-16 lg:grid-cols-2 lg:gap-8 lg:py-24">
          <div className="flex flex-col justify-center">
            <Badge tone="green" className="self-start">
              <span className="h-2 w-2 rounded-full bg-brand-green-dark" /> Built on WhatsApp
            </Badge>
            <h1 className="mt-5 font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-ink sm:text-5xl lg:text-6xl">
              Run your shop on <span className="text-brand-blue">WhatsApp.</span>
            </h1>
            <p className="mt-5 max-w-xl text-lg text-muted">
              Qloqal turns any small business into an online shop. Orders come straight to your WhatsApp — no app to install, no tablet, no training. Customers order from the Qloqal app; you just tap <span className="font-semibold text-ink">Accept</span>.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink to="/vendors" variant="primary" size="lg" data-cta={cta.heroStartSelling}>
                Start selling on Qloqal
              </ButtonLink>
              <ButtonLink to="/customers" variant="secondary" size="lg" data-cta={cta.heroGetApp}>
                Get the customer app
              </ButtonLink>
            </div>
            <p className="mt-5 text-sm text-muted">
              Free to list · No setup fee · Pay only on orders
            </p>
          </div>

          <div className="relative grid grid-cols-2 items-end gap-4 sm:gap-6">
            <div className="lg:translate-y-6">
              <p className="mb-2 text-center text-xs font-bold uppercase tracking-wider text-brand-blue">Customer app</p>
              <PhoneMockup>
                <NearbyShopsScreen />
              </PhoneMockup>
            </div>
            <div>
              <p className="mb-2 text-center text-xs font-bold uppercase tracking-wider text-brand-green-dark">Vendor's WhatsApp</p>
              <WhatsAppMockup
                shopName="Qloqal Orders"
                lines={[
                  { kind: 'system', text: 'Today' },
                  {
                    kind: 'order',
                    orderNo: 'QL-1842',
                    address: 'Apt 4B, Elm Street',
                    items: [
                      { name: 'Sourdough loaf', qty: '1', price: '$6.50' },
                      { name: 'Croissant', qty: '2', price: '$4.00' },
                    ],
                    total: '$10.50',
                    time: '9:42',
                  },
                  { kind: 'buttons', labels: ['Accept', 'Reject'], time: '9:42' },
                ]}
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
