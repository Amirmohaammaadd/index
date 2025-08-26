import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from '@tailwindcss/vite'


export default defineConfig({
  base : "/",
  plugins: [react() ,  tailwindcss()],
});

// export default defineConfig(({mode}) => {
// const env = loadEnv(mode, process.cwd())

//   return {
//     plugins: [react()],
//   };
// });
