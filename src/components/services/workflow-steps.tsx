import { StaggerContainer, StaggerItem } from "@/components/motion";
import { workflowSteps } from "@/data/services-data";

export function WorkflowSteps() {
  return (
    <StaggerContainer
      className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
      role="list"
    >
      {workflowSteps.map((step) => (
        <StaggerItem key={step.number}>
          <article
            role="listitem"
            className="bg-card relative h-full rounded-xl border p-6 transition-shadow hover:shadow-md"
          >
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
          </article>
        </StaggerItem>
      ))}
    </StaggerContainer>
  );
}
