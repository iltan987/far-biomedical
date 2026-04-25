import Image from "next/image";

import { FadeIn } from "@/components/motion";

export type WorkflowStepData = {
  _id: string;
  stepNumber: number;
  title: string;
  description: string;
  imageUrl?: string;
  titleAttr?: string;
  descriptionAttr?: string;
  imageAttr?: string;
};

export function WorkflowSteps({ steps }: { steps: WorkflowStepData[] }) {
  return (
    <div
      className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
      role="list"
    >
      {steps.map((step, index) => (
        <FadeIn key={step._id} delay={index * 0.1}>
          <article
            role="listitem"
            className="bg-card group relative h-full overflow-hidden rounded-xl border transition-shadow hover:shadow-md"
          >
            {step.imageUrl && (
              <div
                className="relative aspect-video overflow-hidden"
                data-sanity={step.imageAttr}
              >
                <Image
                  src={step.imageUrl}
                  alt={step.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            )}

            <div className="p-6">
              <div
                className="bg-primary text-primary-foreground mb-4 flex h-10 w-10 items-center justify-center rounded-full text-lg font-bold"
                aria-hidden="true"
              >
                {step.stepNumber}
              </div>

              <h3 className="mb-2 text-lg font-semibold" data-sanity={step.titleAttr}>
                <span className="sr-only">Step {step.stepNumber}: </span>
                {step.title}
              </h3>
              <p
                className="text-muted-foreground text-sm leading-relaxed"
                data-sanity={step.descriptionAttr}
              >
                {step.description}
              </p>
            </div>
          </article>
        </FadeIn>
      ))}
    </div>
  );
}
