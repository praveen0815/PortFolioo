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
          background: "#07080c",
          color: "#eceef3",
          padding: 72,
        }}
      >
        <div style={{ fontSize: 22, color: "#7dd3c7", letterSpacing: 4 }}>
          AI SOFTWARE ENGINEER
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div style={{ fontSize: 64, fontWeight: 600, lineHeight: 1.1 }}>
            Praveenkumar R
          </div>
          <div style={{ fontSize: 28, color: "#9299a8", maxWidth: 860 }}>
            Building LLM-powered applications, AI agents, conversational systems,
            and backend services.
          </div>
        </div>
        <div style={{ fontSize: 20, color: "#6d7483" }}>
          FastAPI · LLMs · LangChain · AI Agents · Python
        </div>
      </div>
    ),
    size,
  );
}
