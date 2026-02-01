import Image from "next/image";

import { FadeIn } from "@/components/motion";
import { workflowSteps } from "@/data/services-data";

export function WorkflowSteps() {
  return (
    <div
      className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
      role="list"
    >
      {workflowSteps.map((step, index) => (
        <FadeIn key={step.number} delay={index * 0.1}>
          <article
            role="listitem"
            className="bg-card group relative h-full overflow-hidden rounded-xl border transition-shadow hover:shadow-md"
          >
            {/* Step Image - only for steps with images */}
            {step.image && (
              <div className="aspect-video overflow-hidden">
                <Image
                  src={step.image}
                  alt={step.title}
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  placeholder="blur"
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            )}

            <div className="p-6">
              {/* Step Number */}
              <div
                className="bg-primary text-primary-foreground mb-4 flex h-10 w-10 items-center justify-center rounded-full text-lg font-bold"
                aria-hidden="true"
              >
                {step.number}
              </div>

              {/* Content */}
              <h3 className="mb-2 text-lg font-semibold">
                <span className="sr-only">Step {step.number}: </span>
                {step.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
          </article>
        </FadeIn>
      ))}
    </div>
  );
}
