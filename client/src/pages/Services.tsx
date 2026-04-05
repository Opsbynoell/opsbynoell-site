import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import { Container } from '@/components/agenforce/container';
import { Heading } from '@/components/agenforce/heading';
import { Subheading } from '@/components/agenforce/subheading';
import { GradientDivider } from '@/components/agenforce/gradient-divider';
import { Button } from '@/components/agenforce/ui/button';
import { Pricing } from '@/components/agenforce/pricing';
import { FAQs } from '@/components/agenforce/faqs';
import {
  CardContent,
  CardDescription,
  CardSkeleton,
} from '@/components/agenforce/features-secondary/index';
import { SkeletonOne as SecSkeletonOne } from '@/components/agenforce/features-secondary/skeletons/first';
import { SkeletonTwo as SecSkeletonTwo } from '@/components/agenforce/features-secondary/skeletons/second';
import React from 'react';

const steps = [
  {
    num: '01',
    title: 'Audit',
    description:
      'We map your current client journey in 30 minutes: where calls go unanswered, where no-shows happen, where reviews stall. You see the revenue gap in real numbers.',
  },
  {
    num: '02',
    title: 'Build',
    description:
      'We configure every automation to match your practice: your name, your tone, your booking system. Nothing generic. We test everything before we go live.',
  },
  {
    num: '03',
    title: 'Run',
    description:
      'We manage and monitor the system for you. When something needs adjusting, we handle it. You get a monthly report showing what it caught and what it recovered.',
  },
];

const systems = [
  {
    title: 'Missed Call Text-Back',
    description:
      'When a client calls and you miss it, they get a text within seconds. Personalized, on-brand, and with a direct booking link. 85% of callers never call back after voicemail — this catches them first.',
  },
  {
    title: 'Nova AI Chat',
    description:
      'A 24/7 chat assistant trained on your services, pricing, and availability. Books appointments, answers questions, and qualifies leads while you sleep.',
  },
  {
    title: 'Appointment Confirmations',
    description:
      'Automated confirmation texts and 24-hour reminders that dramatically reduce no-shows. Includes a one-tap confirm or reschedule option so you know who is actually coming.',
  },
  {
    title: 'Review Generation',
    description:
      'After every completed appointment, a timed review request goes out automatically. Clients who had a great experience become your loudest advocates on Google.',
  },
  {
    title: 'Lead Pipeline',
    description:
      'Every inquiry that does not book immediately gets tracked and followed up with. Automated nurture sequences that turn leads into clients without manual effort.',
  },
  {
    title: 'Reactivation Campaigns',
    description:
      'Past clients who have gone quiet get a targeted re-engagement sequence. On average, one campaign recovers 8 to 12 lapsed clients per send.',
  },
];

export default function Services() {
  return (
    <>
      <Nav />
      <main className="pt-[72px]">

        {/* ── HERO ── */}
        <section className="pt-10 md:pt-20 lg:pt-32 relative overflow-hidden bg-white">
          <Container className="text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-100 border border-neutral-200 text-sm font-medium text-neutral-600 mb-6 font-inter">
              The System
            </div>
            <Heading as="h1" className="mx-auto max-w-3xl">
              Everything your practice needs to stop leaking revenue.
            </Heading>
            <Subheading className="mx-auto mt-4 mb-8">
              Six systems. One flat rate. We build it, install it, and manage it.
            </Subheading>
            <Button asChild>
              <a href="/book">Get Your Free Audit</a>
            </Button>
          </Container>
          <GradientDivider />
        </section>

        {/* ── 6 SYSTEMS ── */}
        <section className="pt-10 md:pt-20 lg:pt-32 relative overflow-hidden">
          <Container>
            <div className="text-center mb-10 md:mb-16">
              <Subheading className="mx-auto">What We Build</Subheading>
              <Heading className="mt-2">Six systems. All managed for you.</Heading>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 border-y border-neutral-200 divide-y md:divide-y-0 md:divide-x divide-neutral-200">
              <div>
                <CardContent>
                  <h2 className="text-lg font-bold text-neutral-800">{systems[0].title}</h2>
                  <CardDescription>{systems[0].description}</CardDescription>
                </CardContent>
                <CardSkeleton>
                  <SecSkeletonOne />
                </CardSkeleton>
              </div>
              <div>
                <CardContent>
                  <h2 className="text-lg font-bold text-neutral-800">{systems[1].title}</h2>
                  <CardDescription>{systems[1].description}</CardDescription>
                </CardContent>
                <CardSkeleton className="mask-radial-from-50% mask-t-from-50%">
                  <SecSkeletonTwo />
                </CardSkeleton>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 border-b border-neutral-200 divide-y md:divide-y-0 md:divide-x divide-neutral-200">
              <div>
                <CardContent>
                  <h2 className="text-lg font-bold text-neutral-800">{systems[2].title}</h2>
                  <CardDescription>{systems[2].description}</CardDescription>
                </CardContent>
                <CardSkeleton>
                  <SecSkeletonOne />
                </CardSkeleton>
              </div>
              <div>
                <CardContent>
                  <h2 className="text-lg font-bold text-neutral-800">{systems[3].title}</h2>
                  <CardDescription>{systems[3].description}</CardDescription>
                </CardContent>
                <CardSkeleton className="mask-radial-from-50% mask-t-from-50%">
                  <SecSkeletonTwo />
                </CardSkeleton>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-neutral-200">
              <div>
                <CardContent>
                  <h2 className="text-lg font-bold text-neutral-800">{systems[4].title}</h2>
                  <CardDescription>{systems[4].description}</CardDescription>
                </CardContent>
                <CardSkeleton>
                  <SecSkeletonOne />
                </CardSkeleton>
              </div>
              <div>
                <CardContent>
                  <h2 className="text-lg font-bold text-neutral-800">{systems[5].title}</h2>
                  <CardDescription>{systems[5].description}</CardDescription>
                </CardContent>
                <CardSkeleton className="mask-radial-from-50% mask-t-from-50%">
                  <SecSkeletonTwo />
                </CardSkeleton>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-10 md:mt-20">
              <div>
                <h3 className="font-bold text-lg text-neutral-600">No software to learn</h3>
                <p className="text-neutral-500 text-base mt-2">
                  We manage everything. You get a monthly report showing what was caught and what was recovered.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-lg text-neutral-600">Works with your tools</h3>
                <p className="text-neutral-500 text-base mt-2">
                  We layer on top of your existing booking software. No migrations, no retraining your staff.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-lg text-neutral-600">Results in 14 days</h3>
                <p className="text-neutral-500 text-base mt-2">
                  Most practices see measurable improvement in no-shows and missed call recovery within two weeks of going live.
                </p>
              </div>
            </div>
          </Container>
        </section>

        {/* ── HOW IT WORKS ── */}
        <section id="how-it-works" className="py-20 lg:py-32 bg-white">
          <Container>
            <div className="text-center mb-16">
              <Subheading className="mx-auto">How It Works</Subheading>
              <Heading className="mt-2">Three steps. Then it runs while you work.</Heading>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {steps.map((step) => (
                <div key={step.num}>
                  <p className="text-6xl font-bold font-display text-neutral-100">{step.num}</p>
                  <h3 className="text-xl font-bold text-neutral-800 mt-2 font-display">{step.title}</h3>
                  <p className="text-neutral-500 mt-3 font-inter">{step.description}</p>
                </div>
              ))}
            </div>
            <div className="mt-12 text-center">
              <Button asChild>
                <a href="/book">Book your free audit</a>
              </Button>
            </div>
          </Container>
        </section>

        {/* ── PRICING ── */}
        <Pricing />

        {/* ── FAQ ── */}
        <FAQs />

        {/* ── BOTTOM CTA ── */}
        <section className="py-20 md:py-32 bg-neutral-950 relative overflow-hidden">
          <Container>
            <div className="text-center">
              <Heading className="text-white">
                Ready to see what you're losing?
              </Heading>
              <Subheading className="text-neutral-400 py-6 mx-auto">
                Free 30-minute audit. We show you your numbers. No pitch. No slides.
              </Subheading>
              <Button className="shadow-brand" asChild>
                <a href="/book">Book Your Free Audit</a>
              </Button>
            </div>
          </Container>
        </section>

      </main>
      <Footer />
    </>
  );
}
