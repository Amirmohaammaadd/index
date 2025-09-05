import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

export default defineConfig({
  base: "/",
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@ui-components": path.resolve(__dirname, "./src/ui-components"),
    },
  },
});

// export default defineConfig(({mode}) => {
// const env = loadEnv(mode, process.cwd())

//   return {
//     plugins: [react()],
//   };
// });
