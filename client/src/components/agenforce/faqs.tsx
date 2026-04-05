import React, { useState } from "react";
import { Container } from "@/components/agenforce/container";
import { UserChatIcon } from "@/illustrations/general";
import { Heading } from "@/components/agenforce/heading";
import { IconMinus, IconPlus } from "@tabler/icons-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const FAQs = () => {
  const questions = [
    {
      question: "What if I already use a scheduling tool?",
      answer:
        "Great — we work alongside your existing booking software. We connect to it (or layer on top of it) so your schedule stays the same and the automation handles the gaps: missed calls, no-show confirmations, follow-ups, and review requests.",
    },
    {
      question: "How long does setup take?",
      answer:
        "Most practices are fully live in 5 to 7 business days. We handle the build, the installation, and the testing. You do not touch a single setting.",
    },
    {
      question: "Do I need to learn any software?",
      answer:
        "No. We manage everything on the back end. You will get a simple dashboard to check in on activity, but there is nothing to configure or maintain. If something needs adjusting, you text or email us.",
    },
    {
      question: "What if it doesn't work?",
      answer:
        "We offer a 30-day results guarantee. If you do not see a measurable improvement in no-shows or follow-up response within 30 days, we refund your setup fee in full. We have never had to issue one.",
    },
    {
      question: "Can I start with Entry and upgrade later?",
      answer:
        "Yes. All plans share the same infrastructure, so upgrading is seamless. Most practices start on Starter and move to Growth within 60 to 90 days once they see the numbers.",
    },
    {
      question: "Is there a contract?",
      answer:
        "No long-term contract. Month-to-month after the initial setup. We keep clients because the system works, not because of lock-in clauses.",
    },
  ];

  return (
    <section
      id="faqs"
      className="py-10 md:py-20 lg:py-32 relative overflow-hidden"
    >
      <Container>
        <UserChatIcon />
        <Heading className="my-10 md:my-20">Frequently Asked Questions</Heading>

        <div className="flex flex-col gap-4">
          {questions.map((question, index) => (
            <Question
              key={index}
              question={question.question}
              answer={question.answer}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

const Question = ({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) => {
  const [open, setOpen] = useState(false);

  return (
    <button
      onClick={() => setOpen(!open)}
      className="w-full rounded-3xl overflow-hidden bg-neutral-100 p-4 md:p-8 text-left"
    >
      <div className="flex items-center justify-between">
        <h3 className="text-lg md:text-2xl font-bold font-display">
          {question}
        </h3>
        <div className="size-6 rounded-full relative bg-black flex items-center justify-center shrink-0 ml-4">
          <IconMinus
            className={cn(
              "size-6 text-white absolute inset-0 transition-all duration-200",
              open && "scale-0 rotate-90"
            )}
          />
          <IconPlus
            className={cn(
              "size-6 text-white absolute inset-0 scale-0 -rotate-90 transition-all duration-200",
              open && "scale-100 rotate-0"
            )}
          />
        </div>
      </div>
      <motion.div
        initial={false}
        animate={{
          height: open ? "auto" : 0,
          opacity: open ? 1 : 0,
        }}
        exit={{
          height: 0,
          opacity: 0,
        }}
        transition={{ duration: 0.2 }}
        className="overflow-hidden"
      >
        <motion.p
          key={String(open)}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-left mt-4 text-neutral-600"
        >
          {answer}
        </motion.p>
      </motion.div>
    </button>
  );
};
