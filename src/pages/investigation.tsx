import { Faq } from '../components/organisms/Faq';
import { Project } from '../components/organisms/Project';
import { Footer } from '../components/organisms/footer';
import { Header } from '../components/organisms/header';

export function Investigation() {
  return (
    <>
      <Header heroType="normal" heroTextType="investigation" />
      <Project />
      <Faq className="relative z-[1]" />
      <Footer />
    </>
  );
}
