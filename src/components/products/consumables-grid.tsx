import { Mail } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  consumablesOrderEmail,
  laboratoryConsumables,
} from "@/data/laboratory-consumables";

export function ConsumablesGrid() {
  return (
    <div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {laboratoryConsumables.map((consumable) => (
          <Card
            key={consumable.id}
            className="transition-shadow hover:shadow-md"
          >
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
        ))}
      </div>

      {/* Order CTA */}
      <div className="bg-muted/30 mt-12 rounded-xl border p-6 text-center">
        <h3 className="mb-2 text-xl font-semibold">Ready to Order?</h3>
        <p className="text-muted-foreground mb-4">
          Submit your order by contacting us directly via email.
        </p>
        <Button asChild>
          <a href={`mailto:${consumablesOrderEmail}`}>
            <Mail className="mr-2 h-4 w-4" />
            {consumablesOrderEmail}
          </a>
        </Button>
      </div>
    </div>
  );
}
