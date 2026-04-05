import React from "react";
import { Container } from "@/components/agenforce/container";
import { Heading } from "@/components/agenforce/heading";
import { Subheading } from "@/components/agenforce/subheading";
import { Button } from "@/components/agenforce/ui/button";
import { IconCircleCheckFilled } from "@tabler/icons-react";

export const Pricing = () => {
  return (
    <section
      id="pricing"
      className="py-10 md:py-20 lg:py-32 relative overflow-hidden"
    >
      <Container>
        <div className="text-center mb-10 md:mb-16">
          <Subheading className="mx-auto">Simple, flat-rate pricing. No surprises.</Subheading>
          <Heading className="mt-4">
            Pick your plan. We do the rest.
          </Heading>
          <p className="text-neutral-500 mt-4 max-w-xl mx-auto">
            Every plan includes setup, installation, and ongoing management. No hidden fees. No per-seat charges. No long-term contracts.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <PricingCard
            name="Entry"
            price="197"
            setup="497"
            description="One system. Ideal for solo practitioners who want to stop missing calls."
            ctaLink="/book"
            ctaText="Get Started"
            steps={[
              "Missed Call Text-Back",
              "Appointment Confirmations",
              "1 Review Request Sequence",
              "Monthly Report",
              "Email Support",
            ]}
          />
          <PricingCard
            name="Starter"
            price="797"
            setup="997"
            description="The full front desk system. Most popular for growing practices."
            ctaLink="/book"
            ctaText="Get Started"
            popular
            steps={[
              "Everything in Entry",
              "Nova AI Chat (24/7 booking)",
              "No-Show Recovery Sequences",
              "Google Review Automation",
              "Lead Pipeline Management",
              "Monthly Strategy Call",
            ]}
          />
          <PricingCard
            name="Growth"
            price="1,497"
            setup="1,497"
            description="Full system plus reactivation. For practices ready to scale."
            ctaLink="/book"
            ctaText="Get Started"
            steps={[
              "Everything in Starter",
              "Reactivation Campaigns",
              "Multi-location Support",
              "Custom Reporting Dashboard",
              "Priority Support (same day)",
              "Quarterly Business Review",
            ]}
          />
        </div>

        <p className="text-center text-neutral-400 text-sm mt-8">
          Not sure which plan fits? <a href="/book" className="underline text-neutral-600">Book a free audit</a> and we'll tell you exactly what you need.
        </p>
      </Container>
    </section>
  );
};

const PricingCard = ({
  name,
  price,
  setup,
  description,
  ctaLink,
  ctaText,
  steps,
  popular,
}: {
  name: string;
  price: string;
  setup: string;
  description: string;
  ctaLink: string;
  ctaText: string;
  steps: string[];
  popular?: boolean;
}) => {
  return (
    <div className={`p-6 md:p-8 rounded-2xl flex flex-col gap-6 ${popular ? "bg-neutral-900 text-white ring-2 ring-green-500" : "bg-neutral-100"}`}>
      {popular && (
        <div className="inline-flex w-fit items-center gap-1 px-2 py-0.5 rounded-full bg-green-500/20 border border-green-500/30 text-green-400 text-xs font-semibold">
          Most Popular
        </div>
      )}
      <div>
        <p className={`text-sm font-semibold uppercase tracking-wide ${popular ? "text-neutral-400" : "text-neutral-500"}`}>{name}</p>
        <div className="flex items-end gap-1 mt-1">
          <span className={`text-4xl font-bold font-display ${popular ? "text-white" : "text-neutral-900"}`}>${price}</span>
          <span className={`text-sm mb-1 ${popular ? "text-neutral-400" : "text-neutral-500"}`}>/mo</span>
        </div>
        <p className={`text-xs mt-1 ${popular ? "text-neutral-400" : "text-neutral-500"}`}>+ ${setup} one-time setup</p>
        <p className={`text-sm mt-3 ${popular ? "text-neutral-300" : "text-neutral-600"}`}>{description}</p>
      </div>

      <Button asChild className={popular ? "bg-green-500 hover:bg-green-600 text-white" : ""}>
        <a href={ctaLink}>{ctaText}</a>
      </Button>

      <ul className="flex flex-col gap-2">
        {steps.map((step, index) => (
          <Step key={step + index} title={step} popular={popular} />
        ))}
      </ul>
    </div>
  );
};

const Step = ({ title, popular }: { title: string; popular?: boolean }) => {
  return (
    <li className="flex items-center gap-2 font-medium text-sm">
      <IconCircleCheckFilled className={`size-4 shrink-0 ${popular ? "text-green-400" : "text-neutral-500"}`} />
      <p className={popular ? "text-neutral-300" : "text-neutral-600"}>{title}</p>
    </li>
  );
};
