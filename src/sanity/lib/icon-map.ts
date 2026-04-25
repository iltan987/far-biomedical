import type { LucideIcon } from "lucide-react";
import {
  Activity,
  Beaker,
  Code,
  FlaskConical,
  Magnet,
  Microscope,
  Shield,
  Truck,
} from "lucide-react";

export const productIconMap: Record<string, LucideIcon> = {
  magnet: Magnet,
  beaker: Beaker,
  activity: Activity,
  code: Code,
};

export const serviceIconMap: Record<string, LucideIcon> = {
  "flask-conical": FlaskConical,
  microscope: Microscope,
  shield: Shield,
  truck: Truck,
};
