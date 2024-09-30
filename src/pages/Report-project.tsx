import { Community } from '../components/organisms/Community';
// import { Faq } from '../components/organisms/Faq';
import { Footer } from '../components/organisms/footer';
import { Header } from '../components/organisms/header';

export function ReportProjects() {
  return (
    <>
      <Header heroType="report-project" />
      {/* <Faq /> */}
      <div className="pt-8 pb-40">
        <Community
          title={"let's catch the bad guys together!"}
          subtitle="Join our community and lets bring justice to the crypto world!"
          titleClassName="max-w-[16ch]"
        />
      </div>
      <Footer />
    </>
  );
}
