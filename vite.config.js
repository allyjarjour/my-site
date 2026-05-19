import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

const VERCEL_API = "https://my-site-allyjarjours-projects.vercel.app";

export default defineConfig({
	plugins: [react()],
	server: {
		proxy: {
			"/api/now-playing": {
				target: VERCEL_API,
				changeOrigin: true,
				secure: true,
			},
		},
	},
	esbuild: {
		loader: "jsx",
		include: /src\/.*\.jsx?$/,
		exclude: [],
	},
	optimizeDeps: {
		esbuildOptions: {
			loader: {
				".js": "jsx",
			},
		},
	},
	test: {
		environment: "jsdom",
		globals: true,
		setupFiles: "./src/setupTests.js",
	},
});
