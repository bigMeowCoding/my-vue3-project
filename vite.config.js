import { defineConfig } from "vite";
import uni from "@dcloudio/vite-plugin-uni";

export default defineConfig({
  alias: {
    "@": "/src",
  },
  plugins: [uni()],
});
