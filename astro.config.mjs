// astro.config.mjs

import { defineConfig } from "astro/config";
import relativeLinks from "astro-relative-links";
import { imageService } from "@unpic/astro/service";

import simpleStackForm from "simple-stack-form";

// https://astro.build/config
export default defineConfig({
  integrations: [relativeLinks(), simpleStackForm()],
  image: {
    service: imageService()
  }
});