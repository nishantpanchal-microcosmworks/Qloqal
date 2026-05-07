import { Link } from 'react-router-dom';
import Container from '../ui/Container';
import { ButtonLink } from '../ui/Button';
import { cta } from '../../lib/analytics';

export default function CTABand() {
  return (
    <section className="bg-brand-green text-ink">
      <Container>
        <div className="grid items-center gap-6 py-14 sm:grid-cols-[1fr_auto] sm:py-20">
          <div className="max-w-xl">
            <h2 className="font-display text-3xl font-extrabold tracking-tight sm:text-4xl">
              Your shop is one message away from going online.
            </h2>
            <p className="mt-3 text-base">
              Free to list. Pay only on orders. Setup takes about ten minutes.
            </p>
          </div>
          <div className="flex flex-col items-start gap-3 sm:items-end">
            <ButtonLink to="/vendors" variant="secondary" size="lg" data-cta={cta.bandStartSelling} className="!border-ink !bg-ink !text-white hover:!bg-ink/90">
              Start selling on Qloqal
            </ButtonLink>
            <Link to="/customers" data-cta={cta.bandGetApp} className="text-sm font-semibold text-ink underline-offset-4 hover:underline">
              Or download the customer app →
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
