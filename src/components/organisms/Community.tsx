import { Container } from '../container';
import { Card } from '../molecules/Card';
import { textStroke } from '../../utils/text-stroke';
import { cn } from '../../utils/cn';
export function Community({ title, subtitle, titleClassName }: { title?: string; subtitle?: string; titleClassName?: string }) {
  return (
    <section id="community" className="bg-yellow rounded-[70px] pb-20">
      <Container>
        <div className="flex justify-center">
          <h1
            style={textStroke(4, 'black')}
            className={cn(
              'text-4xl xl:text-[56px] text-center font-extrabold text-[#4EAFFE] max-w-[20ch]  xl:leading-[55px] pt-24',
              titleClassName
            )}
          >
            {title ?? 'I NEED A BIG COMMUNITY TO GO TO MARS!'}
          </h1>
        </div>
        <p className="text-center text-xl font-bold mt-2">{subtitle ?? "I'll make friends here at the company that Elon Musk bought!"}</p>

        <div className="mt-8 flex justify-center relative -mb-5 z-10">
          <img className="w-[265px] h-[335px]" src="/assets/img/community-img.png" alt="" />
        </div>
        <Card />
      </Container>
    </section>
  );
}
