import { readFile } from "node:fs/promises";
import { join } from "node:path";

import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export const alt = "FAR Better Bio - Blood Cell Separation Technology";

export default async function Image() {
  const logoData = await readFile(join(process.cwd(), "public/logo.png"));
  const logoSrc = `data:image/png;base64,${logoData.toString("base64")}`;

  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#ffffff",
        gap: "24px",
      }}
    >
      {}
      <img src={logoSrc} alt="FAR Better Bio Logo" height={200} />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "8px",
        }}
      >
        <span
          style={{
            fontSize: 48,
            fontWeight: 700,
            color: "#1a1a1a",
          }}
        >
          FAR Better Bio
        </span>
        <span
          style={{
            fontSize: 24,
            color: "#666666",
          }}
        >
          Blood Cell Separation Technology
        </span>
      </div>
    </div>,
    {
      ...size,
    }
  );
}
