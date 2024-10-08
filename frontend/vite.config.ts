import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";
import sass from "sass";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            "@": resolve(__dirname, "./src"),
        },
    },
    css: {
        preprocessorOptions: {
            scss: {
                implementation: sass,
            },
        },
    },
});
