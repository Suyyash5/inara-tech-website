import { screenGraphPlugin } from "@animaapp/vite-plugin-screen-graph";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig(({ mode }) => ({
    plugins: [react(), mode === "development" && screenGraphPlugin()],
    publicDir: "./public",
    base: "./",
    build: {
        target: "esnext",
        cssCodeSplit: true,
        minify: "esbuild",
        rollupOptions: {
            output: {
                manualChunks: {
                    vendor: ["react", "react-dom"],
                    icons: ["lucide-react"],
                },
            },
        },
    },
}));
