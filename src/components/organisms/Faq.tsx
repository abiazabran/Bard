import { useState } from 'react';
import { textStroke } from '../../utils/text-stroke';
import { cn } from '../../utils/cn';
import { Container } from '../container';

const faqs = [
  {
    question: 'What is Justice Bird?',
    answer:
      'Justice Bird (JUBI) is a community-driven cryptocurrency platform focused on identifying and prosecuting fraudulent activities in the crypto space. Our mission is to bring justice and transparency back to cryptocurrency transactions globally.',
  },
  {
    question: 'How does Justice Bird track and prosecute bad actors?',
    answer:
      'We use a collaborative approach, involving the community in identifying suspicious activities. Once identified, our team works with law firms, private investigators, and debt collectors to legally pursue and prosecute these individuals or entities, ensuring justice is served.',
  },
  {
    question: 'How can I get involved with Justice Bird?',
    answer:
      'Anyone interested in joining our mission can participate by holding JUBI tokens, contributing to community surveillance efforts, and spreading awareness about our cause. Stay connected by joining our official social media channels and participating in community discussions.',
  },
  {
    question: 'What are the benefits of holding JUBI tokens?',
    answer:
      'Holders of JUBI tokens not only support the fight against crypto fraud but also potentially benefit from our recovery operations. A percentage of funds recovered from fraudulent activities is used to perform buybacks of JUBI tokens, potentially increasing their value.',
  },
  {
    question: 'How does Justice Bird ensure transparency and trust?',
    answer:
      'Transparency is at the core of our operations. We maintain open communication with our community, regularly update on our actions, and publicize the outcomes of our recovery efforts. Our founder, EL HAY ACHENOAM, is committed to ethical practices and upholds the highest standards of integrity in all our operations.',
  },
];

export function Faq({ className }: { className?: string }) {
  return (
    <div className={cn('py-12 rounded-[70px] [box-shadow:0px_4px_20px_rgba(0,0,0,0.15)]', className)}>
      <div className="flex flex-col items-center mb-12">
        <h2 style={textStroke(4, 'black')} className="font-extrabold text-[56px] text-yellow uppercase">
          FAQ
        </h2>
        <p className="text-xl font-semibold">Interactive Q&A setup</p>
      </div>
      <div>
        <Container>
          <div className="space-y-4">
            {faqs.map((item, index) => (
              <SingleFaq key={index} question={`${index + 1} . ${item.question}`} answer={item.answer} />
            ))}
          </div>
        </Container>
      </div>
    </div>
  );
}

function SingleFaq({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="bg-white rounded-2xl [box-shadow:0px_4px_40px_rgba(255,230,0,0.15)] p-4">
      <div
        onClick={() => setOpen(!open)}
        style={textStroke(3, 'black')}
        className="text-yellow cursor-pointer text-xl xl:text-[38px] font-extrabold"
      >
        {question}
      </div>
      <div className={cn(open ? 'h-[unset]' : 'h-0', 'duration-200 overflow-hidden')}>
        <div className="text-xl pt-4 font-semibold">{answer}</div>
      </div>
    </div>
  );
}
