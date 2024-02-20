import { setup } from "@storybook/vue3";
import { registerPlugins } from "../src/plugins";
import '@mdi/font/css/materialdesignicons.css';

setup((app) => {
  registerPlugins(app);
});