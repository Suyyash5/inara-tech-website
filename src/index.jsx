import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { DesktopScreen } from "./screens/DesktopScreen";

createRoot(document.getElementById("app")).render(
    <StrictMode>
        <DesktopScreen />
    </StrictMode>,
);
