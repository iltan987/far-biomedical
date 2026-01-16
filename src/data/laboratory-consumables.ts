import eppendorfsPcrTubes from "@/images/consumables/eppendorfs-pcr-tubes.jpeg"
import falconTubes from "@/images/consumables/falcon-tubes.jpeg"
import microscopeSlides from "@/images/consumables/microscope-slides.jpeg"
import pasteurPipettes from "@/images/consumables/pasteur-pipettes.jpeg"
import tubeRacks from "@/images/consumables/tube-racks.jpeg"
import type { LaboratoryConsumable } from "@/types";

export const laboratoryConsumables: LaboratoryConsumable[] = [
  {
    id: "eppendorfs-pcr-tubes",
    name: "Eppendorfs & PCR Tubes",
    description:
      "High-quality microcentrifuge tubes and PCR tubes for sample storage and molecular biology applications.",
    image: eppendorfsPcrTubes,
  },
  {
    id: "cryo-tubes",
    name: "Cryo Tubes",
    description:
      "Cryogenic storage tubes designed for long-term sample preservation at ultra-low temperatures.",
  },
  {
    id: "tube-racks",
    name: "Tube Racks",
    description:
      "Durable tube racks for organized storage and easy access to various tube sizes.",
    image: tubeRacks,
  },
  {
    id: "falcon-tubes",
    name: "Falcon Tubes",
    description:
      "Conical centrifuge tubes available in various sizes for cell culture and sample processing.",
    image: falconTubes,
  },
  {
    id: "pasteur-pipettes",
    name: "Pasteur Pipettes",
    description:
      "Disposable glass or plastic pipettes for transferring small volumes of liquids.",
    image: pasteurPipettes,
  },
  {
    id: "micropipette-tips",
    name: "Micropipette Tips",
    description:
      "Precision pipette tips in various volumes, available in filtered and non-filtered options.",
  },
  {
    id: "microscope-slides",
    name: "Microscope Slides & Coverslips",
    description:
      "High-clarity glass slides and coverslips for microscopic examination and imaging.",
    image: microscopeSlides,
  },
  {
    id: "storage-containers",
    name: "Sample Storage Containers",
    description:
      "Various containers for secure sample storage, transport, and organization.",
  },
  {
    id: "dropper-bottles",
    name: "LDPE / HDPE Dropper Bottles",
    description:
      "Plastic dropper bottles for dispensing reagents and solutions with precision.",
  },
];

export const consumablesOrderEmail = "farbiomedical@gmail.com";
