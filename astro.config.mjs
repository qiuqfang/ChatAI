import { defineConfig } from "astro/config";
import unocss from "unocss/astro";
import { presetUno } from "unocss";
import presetAttributify from "@unocss/preset-attributify";
import presetTypography from "@unocss/preset-typography";
import presetIcons from "@unocss/preset-icons";
import solidJs from "@astrojs/solid-js";

import vercel from "@astrojs/vercel/edge";

// https://astro.build/config
export default defineConfig({
  integrations: [
    unocss({
      presets: [
        presetAttributify(),
        presetUno(),
        presetTypography(),
        presetIcons({
          extraProperties: {
            display: "inline-block",
            "vertical-align": "middle",
          },
        }),
      ],
    }),
    solidJs(),
  ],
  output: "server",
  adapter: vercel(),
});
