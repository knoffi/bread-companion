import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";

const config = defineConfig({
  theme: {
    tokens: {
      colors: {
        brand: {
          "500": { value: "tomato" },
        },
      },
    },
  },
});

const theme = createSystem(defaultConfig, config);

export default theme;
