import { Roadmap } from '../components/molecules/Roadmap';
import { About } from '../components/organisms/About';
import { Community } from '../components/organisms/Community';
import { Faq } from '../components/organisms/Faq';
import { Justice } from '../components/organisms/Justice';
import { Partners } from '../components/organisms/Partners';
import { Token } from '../components/organisms/Token';
import { Footer } from '../components/organisms/footer';
import { Header } from '../components/organisms/header';

export function HomePage() {
  return (
    <>
      <Header heroType="normal" heroTextType="normal" />
      <Justice />
      <Partners />
      <About />
      <Community />
      <Token />
      <Roadmap />
      <Faq />
      <Footer />
    </>
  );
}
