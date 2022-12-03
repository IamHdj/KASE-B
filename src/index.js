import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { MetaMaskProvider } from "metamask-react";
import App from "./App";
import { MantineProvider } from "@mantine/core";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <MantineProvider
      theme={{
        colorScheme: "dark",
        fontFamily: "Greycliff CF, sans-serif",
        defaultGradient: {
          from: "teal",
          to: "blue",
          deg: 45,
        },
      }}
    >
      <MetaMaskProvider>
        <App />
      </MetaMaskProvider>
    </MantineProvider>
  </StrictMode>
);
