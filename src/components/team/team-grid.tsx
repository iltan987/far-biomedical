import Image from "next/image";

import { Card, CardContent } from "@/components/ui/card";
import { teamMembers } from "@/data/team-members";

function getInitials(name: string): string {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase();
}

export function TeamGrid() {
  return (
    <div
      className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8"
      role="list"
    >
      {teamMembers.map((member) => (
        <article key={member.id} role="listitem">
          <Card className="h-full overflow-hidden transition-shadow hover:shadow-lg">
            <CardContent className="p-6 text-center">
              {/* Avatar */}
              <div className="bg-muted mx-auto mb-4 flex h-32 w-32 items-center justify-center overflow-hidden rounded-full">
                {member.imageUrl ? (
                  <Image
                    src={member.imageUrl}
                    alt={member.name}
                    width={128}
                    height={128}
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <div className="bg-primary/10 text-primary flex h-full w-full items-center justify-center">
                    <span className="text-3xl font-bold">
                      {getInitials(member.name)}
                    </span>
                  </div>
                )}
              </div>

              {/* Info */}
              <h3 className="text-xl font-semibold">{member.name}</h3>
              <p className="text-muted-foreground mt-1 text-sm">
                {member.title}
              </p>

              {/* LinkedIn */}
              {member.linkedinUrl && (
                <a
                  href={member.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary mt-3 inline-flex items-center text-sm hover:underline"
                >
                  View LinkedIn Profile
                </a>
              )}
            </CardContent>
          </Card>
        </article>
      ))}
    </div>
  );
}
