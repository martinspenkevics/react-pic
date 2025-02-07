import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  base: "/react-pic/", // Replace with your repository name (e.g., '/my-repo/')
  plugins: [react()],
});
