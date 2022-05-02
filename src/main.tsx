import React from "react";
import { createRoot } from "react-dom/client";

import Layout from "./components/Layout";

const container = document.getElementById("root");

if (container) {
  createRoot(container).render(<Layout />);
}
