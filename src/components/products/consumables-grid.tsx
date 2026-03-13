import { Mail } from "lucide-react";
import Image from "next/image";

import { ImagePlaceholder } from "@/components/image-placeholder";
import { FadeIn } from "@/components/motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  consumablesOrderEmail,
  laboratoryConsumables,
} from "@/data/laboratory-consumables";

export function ConsumablesGrid() {
  return (
    <div>
      <div
        className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        role="list"
      >
        {laboratoryConsumables.map((consumable, index) => (
          <FadeIn key={consumable.id} delay={index * 0.1}>
            <article role="listitem">
              <Card className="group h-full overflow-hidden transition-shadow hover:shadow-md">
                {/* Consumable Image */}
                <div className="relative aspect-4/3 overflow-hidden">
                  {consumable.image ? (
                    <Image
                      src={consumable.image}
                      alt={consumable.name}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  ) : (
                    <ImagePlaceholder
                      aspectRatio="4/3"
                      className="rounded-none transition-transform duration-300 group-hover:scale-105"
                    />
                  )}
                </div>
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg">{consumable.name}</CardTitle>
                </CardHeader>
                {consumable.description && (
                  <CardContent>
                    <p className="text-muted-foreground text-sm">
                      {consumable.description}
                    </p>
                  </CardContent>
                )}
              </Card>
            </article>
          </FadeIn>
        ))}
      </div>

      {/* Order CTA */}
      <FadeIn direction="none" className="mt-12">
        <div className="bg-muted/30 rounded-xl border p-6 text-center">
          <h3 className="mb-2 text-xl font-semibold">Ready to Order?</h3>
          <p className="text-muted-foreground mb-4">
            Submit your order by contacting us directly via email.
          </p>
          <Button render={<a href={`mailto:${consumablesOrderEmail}`} />} nativeButton={false}>
              <Mail className="mr-2 h-4 w-4" aria-hidden="true" />
              {consumablesOrderEmail}
          </Button>
        </div>
      </FadeIn>
    </div>
  );
}
