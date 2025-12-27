"use client";

import { Avatar, Column, Flex, Text } from "@/once-ui/components";
import styles from "./Testimonials.module.scss";

interface Testimonial {
  quote: string;
  name: string;
  title: string;
  avatar: string;
}

const testimonials: Testimonial[] = [
  {
    quote: "Working with Derick through his agency, Abundant.dev, has been transformative for Amplication's docs. Thanks to his work, we saw a huge 53% jump in the average number of doc pages visited per user, which directly impacted our user onboarding and trial-to-paid conversions. I highly recommend Derick and his agency!",
    name: "Paz Yanover",
    title: "VP Product at Applitools",
    avatar: "/images/recommendations/paz-yanover.jpeg",
  },
  {
    quote: "I've had the privilege of working closely with Derick as he contributed to Amplication's developer documentation. If you're looking for someone who can bridge the gap between technical complexity and user-friendliness, he's your person. I wholeheartedly recommend Derick for any endeavor in the developer documentation domain.",
    name: "Erez Greenberg",
    title: "Gaming Product Expert",
    avatar: "/images/recommendations/erez-greenberg.jpeg",
  },
  {
    quote: "Derick was the engine behind our recent documentation sprint. He quickly understood our existing documentation; designed a new architecture for knowledge sharing across our product, engineering, and data teams; and researched and wrote new Quick Starts and How Tos for critical products, tools, and procedures.",
    name: "Evan Tachovsky",
    title: "Product, Engineering & Data Lead at WRI",
    avatar: "/images/recommendations/evan-tachovsky.jpeg",
  },
  {
    quote: "Derick did an excellent job at Crossmint. He joined at a time where the team had just launched developer tools but hadn't had time to properly evaluate the developer experience or document them. Derick independently assessed limitations and went one by one improving docs, error messages and writing explainer blogs.",
    name: "Alfonso Gómez-Jordana Mañas",
    title: "Founder at Crossmint",
    avatar: "/images/recommendations/alfonso-manas.jpeg",
  },
  {
    quote: "We hired Derick for a 4-month contract to help work on some of Text Blaze's most important efforts like making Text Blaze easier to use on websites such as Gmail and LinkedIn, and a huge overhaul of Text Blaze's technical documentation for tens of thousands of users. Derick has a rare combination of empathy, collaboration skills, and technical expertise.",
    name: "Dan Barak",
    title: "Text Blaze",
    avatar: "/images/recommendations/dan-barak.jpeg",
  },
  {
    quote: "Derick provided exceptional technical support and guidance for IFTTT's customers. During a time when we needed resourceful, technically accomplished, and empathetic engineers to unblock our customers with direction through the IFTTT integration process and documentation, Derick stepped up in a BIG way.",
    name: "Alexander Tibbets",
    title: "Helping startups go to market",
    avatar: "/images/recommendations/alexander-tibbets.jpeg",
  },
];

const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => (
  <Flex
    className={styles.card}
    direction="column"
    padding="24"
    background="surface"
    border="neutral-alpha-weak"
    radius="l"
  >
    <Flex flex={1} className={styles.quoteSection}>
      <Text variant="body-default-s" onBackground="neutral-weak">
        "{testimonial.quote}"
      </Text>
    </Flex>
    <Flex gap="12" vertical="center" className={styles.authorSection} paddingTop="16">
      <Avatar size="s" src={testimonial.avatar} />
      <Column gap="2">
        <Text variant="label-strong-s">{testimonial.name}</Text>
        <Text variant="label-default-xs" onBackground="neutral-weak">
          {testimonial.title}
        </Text>
      </Column>
    </Flex>
  </Flex>
);

export const Testimonials = () => {
  const row1 = testimonials.slice(0, 3);
  const row2 = testimonials.slice(3, 6);

  return (
    <Column fillWidth gap="16" className={styles.container}>
      <div className={styles.scrollRow}>
        <div className={styles.scrollTrack}>
          {[...row1, ...row1, ...row1].map((testimonial, index) => (
            <TestimonialCard key={`row1-${index}`} testimonial={testimonial} />
          ))}
        </div>
      </div>
      <div className={styles.scrollRow}>
        <div className={`${styles.scrollTrack} ${styles.reverse}`}>
          {[...row2, ...row2, ...row2].map((testimonial, index) => (
            <TestimonialCard key={`row2-${index}`} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </Column>
  );
};

