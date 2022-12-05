import path from "path";

export default {
  root: path.resolve(__dirname, "src"),
  resolve: {
    alias: {
      "~bootstrap": path.resolve(__dirname, "node_modules/bootstrap"),
      "~bootstrap-icons": path.resolve(__dirname, "node_modules/bootstrap-icons"),
    },
  },
  server: {
    port: 5173,
    hot: true,
  },
}
