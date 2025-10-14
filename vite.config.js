import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react-swc";
import vitePluginSvgr from "vite-plugin-svgr";
import basicSsl from "@vitejs/plugin-basic-ssl";

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "VITE_");
  const API_TARGET = env.VITE_API_ENDPOINT;

  console.log(API_TARGET);

  return {
    plugins: [react(), vitePluginSvgr(), basicSsl()],
    server: {
      https: true,
      host: true,
      proxy: {
        "/api": {
          target: API_TARGET,
          changeOrigin: true,
        },
      },
    },
  };
});
