import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { FaLinkedin } from "react-icons/fa";

import { FadeIn } from "@/components/motion";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
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
      className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8 xl:grid-cols-4"
      role="list"
    >
      {teamMembers.map((member, index) => (
        <FadeIn key={member.id} delay={index * 0.1}>
          <article role="listitem">
            <Card className="border-border/70 bg-card/90 h-full gap-0 border transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
              <CardContent className="p-6 text-center">
                {/* Avatar */}
                <div className="bg-muted ring-primary/10 mx-auto mb-4 flex h-32 w-32 items-center justify-center overflow-hidden rounded-full ring-4">
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
              </CardContent>

              {/* LinkedIn */}
              {member.linkedinUrl && (
                <CardFooter className="border-border/60 bg-muted/20 justify-center border-t px-6 py-3">
                  <a
                    href={member.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground group inline-flex items-center gap-1 text-sm font-medium transition-colors focus-visible:rounded-sm focus-visible:ring-2 focus-visible:ring-[#0A66C2]/35 focus-visible:outline-none"
                    aria-label={`Open ${member.name} LinkedIn profile`}
                  >
                    <span className="mr-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#0A66C2]/12 text-[#0A66C2] transition-colors group-hover:bg-[#0A66C2] group-hover:text-white">
                      <FaLinkedin className="h-3.5 w-3.5" aria-hidden="true" />
                    </span>
                    Connect
                    <ArrowUpRight
                      className="h-3.5 w-3.5 opacity-70 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      aria-hidden="true"
                    />
                  </a>
                </CardFooter>
              )}
            </Card>
          </article>
        </FadeIn>
      ))}
    </div>
  );
}
