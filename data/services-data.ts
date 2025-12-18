import type { FAQItem, WorkflowStep } from "@/types";

export const workflowSteps: WorkflowStep[] = [
  {
    number: 1,
    title: "Sample Preparation",
    description:
      "Eligible blood samples are collected, stabilized, and processed under controlled conditions to maintain sample integrity and ensure optimal downstream performance.",
  },
  {
    number: 2,
    title: "PBMC Processing",
    description:
      "Peripheral blood mononuclear cells (PBMCs) are separated using density-gradient centrifugation techniques such as Ficoll, allowing us to obtain a clean and viable mononuclear cell fraction.",
  },
  {
    number: 3,
    title: "Target Cell Isolation",
    description:
      "Specific cell populations are isolated using advanced methods tailored to project requirements. In this process, we use our proprietary device to ensure high efficiency, precision, and reproducibility.",
  },
  {
    number: 4,
    title: "Purification & Preparation",
    description:
      "Isolated cells are washed and purified using appropriate buffer systems to remove unwanted components and prepare the cells for analysis or downstream applications.",
  },
  {
    number: 5,
    title: "Quality Control & Microscopic Imaging",
    description:
      "All samples undergo viability assessment, purity evaluation, and high-resolution microscopic imaging to ensure the highest standards of quality.",
  },
  {
    number: 6,
    title: "Delivery, Reporting & Storage",
    description:
      "Depending on client requirements, final samples are analyzed, documented, stored under controlled conditions, or prepared for secure delivery.",
  },
];

export const serviceFAQs: FAQItem[] = [
  {
    question: "What services do you provide for cell isolation?",
    answer:
      "We offer comprehensive cell isolation services, including PBMC separation, target cell isolation using our proprietary device, purification, quality control, and microscopic imaging. Our workflow ensures high efficiency, precision, and reproducibility.",
  },
  {
    question: "Can your services be used internationally?",
    answer:
      "Yes. While we provide our full laboratory services throughout Türkiye, we also offer remote technical support for international clients to guide them through procedures and protocols.",
  },
  {
    question: "How can I contact your team for inquiries or support?",
    answer:
      "You can contact us directly via our website contact form or email. For international clients, we also provide online technical support to ensure smooth communication and guidance.",
  },
];
