import * as path from "path";
import type { PlaywrightTestConfig } from "@playwright/test";

const config: PlaywrightTestConfig = {
  projects: [
    {
      name: "cron",
      use: {
        trace: "retain-on-failure",
        screenshot: "only-on-failure",
        video: "retain-on-failure",
        launchOptions: {
          slowMo: 50,
          logger: {
            isEnabled: (name, _severity) => name === "browser",
            log: (name, _severity, message, _args) =>
              console.log(`${name} ${message}`),
          },
        },
        actionTimeout: 10 * 1000,
        navigationTimeout: 30 * 1000,

        headless: true,
      },
      expect: {
        timeout: 10 * 1000,
      },
      timeout: 90000,
      outputDir: path.join(__dirname, "/playwright-report"),
    },
  ],
  use: {
    headless: false,
    viewport: { width: 1280, height: 720 },
    ignoreHTTPSErrors: true,
    video: "on-first-retry",
    baseURL: "http://localhost:3000",
  },
  testDir: "./src",
};

export default config;
