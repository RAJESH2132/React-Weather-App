import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dotenv from "dotenv";

// Load environment variables from .env
dotenv.config();

// Define Vite configuration
export default defineConfig({
  plugins: [react()],
});
