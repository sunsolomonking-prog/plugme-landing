export type FaqItem = {
  question: string;
  answer: string;
};

export const faqItems: FaqItem[] = [
  {
    question: 'What is PlugMe?',
    answer:
      'PlugMe is a connectivity access platform that helps you get data or airtime instantly and settle after use, while also allowing you exchange unused bundles for credits.'
  },
  {
    question: 'What happens if I do not have enough balance right now?',
    answer:
      'You can still activate PlugMe Boost for instant access. Your settlement is scheduled post-usage according to the plan terms you confirm upfront.'
  },
  {
    question: 'How does settlement work?',
    answer:
      'Every transaction clearly shows your service access fee, total amount due, and settlement date before you confirm.'
  },
  {
    question: 'What is PlugScore?',
    answer:
      'PlugScore is a trust score built from responsible usage behavior, timely settlement history, and account stability signals. Better PlugScore unlocks better limits.'
  },
  {
    question: 'Is my data secure?',
    answer:
      'Yes. PlugMe Shield uses device and behavior risk signals to reduce fraud, while we protect user data in line with NDPR requirements.'
  },
  {
    question: 'Who is eligible to use PlugMe?',
    answer:
      'Any verified user in supported locations can join. Access limits vary based on profile checks and PlugScore.'
  }
];
