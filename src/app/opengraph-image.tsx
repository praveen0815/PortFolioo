import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#ff5a12",
          color: "#ffffff",
          padding: 72,
        }}
      >
        <div style={{ fontSize: 22, color: "#111111", letterSpacing: 4 }}>
          AI SOFTWARE ENGINEER
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div style={{ fontSize: 64, fontWeight: 600, lineHeight: 1.1 }}>
            Praveenkumar R
          </div>
          <div style={{ fontSize: 28, color: "rgba(255,255,255,0.82)", maxWidth: 860 }}>
            Building LLM-powered applications, AI agents, conversational systems,
            and backend services.
          </div>
        </div>
        <div style={{ fontSize: 20, color: "rgba(255,255,255,0.78)" }}>
          FastAPI · LLMs · LangChain · AI Agents · Python
        </div>
      </div>
    ),
    size,
  );
}
