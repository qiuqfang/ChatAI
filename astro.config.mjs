import { defineConfig } from "astro/config";
import UnoCSS from "unocss/astro";
import {
  presetUno,
  presetAttributify,
  presetTypography,
  presetIcons,
} from "unocss";
import solidJs from "@astrojs/solid-js";

import vercel from "@astrojs/vercel/edge";

// https://astro.build/config
export default defineConfig({
  integrations: [
    UnoCSS({
      presets: [
        // FIXME: 加了 presetUno 在node版本为18以下无法通过 pnpm dev 打开
        presetUno(),
        presetAttributify(),
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
