import React from "react";
import { Container } from "@/components/agenforce/container";
import { cn } from "@/lib/utils";
import { SkeletonOne } from "./skeletons/first";
import { SkeletonTwo } from "./skeletons/second";
import { SkeletonThree } from "./skeletons/third";
import { SkeletonFour } from "./skeletons/four";

export const FeaturesTertiary = () => {
  return (
    <section className="pt-10 md:pt-20 lg:py-32 relative overflow-hidden">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 border-y border-neutral-200 divide-neutral-200">
          <div className="md:border-r border-b border-neutral-200">
            <CardContent>
              <h2 className="text-lg font-bold text-neutral-800">
                Audit Trail
              </h2>
              <CardDescription>
                Tracks every agent action with full input-output visibility and
                timestamps.
              </CardDescription>
            </CardContent>
            <CardSkeleton>
              <SkeletonOne />
            </CardSkeleton>
          </div>
          <div className="border-b border-neutral-200">
            <CardContent>
              <h2 className="text-lg font-bold text-neutral-800">
                Role-Based Access
              </h2>
              <CardDescription>
                Controls who can launch, review, or manage agents based on
                roles.
              </CardDescription>
            </CardContent>
            <CardSkeleton className="mask-radial-from-20%">
              <SkeletonTwo />
            </CardSkeleton>
          </div>
          <div className="md:border-r border-neutral-200">
            <CardContent>
              <h2 className="text-lg font-bold text-neutral-800">
                Approval Queue
              </h2>
              <CardDescription>
                Sends agent-generated content to human reviewers before it's
                published.
              </CardDescription>
            </CardContent>
            <CardSkeleton className="mask-radial-from-20% mask-r-from-50%">
              <SkeletonThree />
            </CardSkeleton>
          </div>
          <div>
            <CardContent>
              <h2 className="text-lg font-bold text-neutral-800">
                Guardrail Engine
              </h2>
              <CardDescription>
                Applies brand, tone, and policy checks before output goes live.
              </CardDescription>
            </CardContent>
            <CardSkeleton>
              <SkeletonFour />
            </CardSkeleton>
          </div>
        </div>
      </Container>
    </section>
  );
};

export const CardContent = ({ children }: { children: React.ReactNode }) => {
  return <div className="p-4 md:p-8">{children}</div>;
};

export const CardDescription = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <p className="text-neutral-600 mt-2 max-w-md text-balance">{children}</p>
  );
};

export const CardSkeleton = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "relative h-80 sm:h-60 flex flex-col md:h-80 overflow-hidden perspective-distant",
        className
      )}
    >
      {children}
    </div>
  );
};
