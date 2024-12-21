import { getLocalSshKey }  from '@codeimpact/node-ssh-lib';
import { Builder, By, until, WebDriver, WebElement } from "selenium-webdriver";

async function findShadowElement(driver: WebDriver, selectors: string[]): Promise<WebElement> {
  return await driver.executeScript(
    function (selectors) {
      let element: Document | ShadowRoot | Element | null = document; // Start at the document root

      for (let i = 0; i < selectors.length; i++) {
        console.log(`Searching for: ${selectors[i]} in current element type: ${element?.constructor.name}`);

        // Ensure we are querying within a valid context
        if (!(element instanceof Document || element instanceof ShadowRoot || element instanceof Element)) {
          throw new Error(`Cannot query selector on invalid type: ${selectors[i]}`);
        }

        // Query the next element
        const nextElement = element.querySelector(selectors[i]);
        if (!nextElement) {
          throw new Error(`Element not found: ${selectors[i]}`);
        }
        console.log(`Found element: ${selectors[i]}`);

        // If not the last selector, enter shadowRoot
        if (i < selectors.length - 1) {
          if (!('shadowRoot' in nextElement) || !nextElement.shadowRoot) {
            throw new Error(`Shadow root not found for: ${selectors[i]}`);
          }
          console.log(`Entering shadowRoot of: ${selectors[i]}`);
          element = nextElement.shadowRoot; // Enter shadow root
        } else {
          element = nextElement; // Final element
        }
      }

      console.log(`Final target element found: ${selectors[selectors.length - 1]}`);
      return element;
    },
    selectors
  );
}

async function waitForShadowRoot(driver: WebDriver, selector: string, timeout: number = 10000) {
  return await driver.wait(
    async () => {
      const hasShadowRoot = await driver.executeScript(`
        const element = document.querySelector('${selector}');
        return element && element.shadowRoot;
      `);
      return hasShadowRoot;
    },
    timeout,
    `Shadow root not found for selector: ${selector}`
  );
}

async function setupHomeAssistant() {
  const domain = 'http://10.69.5.49:8123';
  const driver = await new Builder().forBrowser('chrome').build();

  try {
    console.log('Navigating to Home Assistant...');
    await driver.get(domain);

    // Step 1: Wait for redirection to onboarding.html
    await driver.wait(async () => {
      const url = await driver.getCurrentUrl();
      return url.includes('onboarding.html');
    }, 10000, "Did not redirect to 'onboarding.html'.");

    console.log('Redirected to onboarding.html.');

    // Step 2: Wait for ha-onboarding to have a shadow root
    await waitForShadowRoot(driver, 'ha-onboarding');
    console.log("Shadow root for 'ha-onboarding' is available.");

    // Step 3: Find the button inside Shadow DOM
    const button: WebElement = await findShadowElement(driver, [
      "ha-onboarding",        // Shadow DOM 1
      "onboarding-welcome",   // Shadow DOM 2
      "ha-button"             // Target button
    ]);

    await button.click();
    console.log("Button clicked successfully!");

  } catch (error) {
    console.error("Error:", error.message);
  } finally {
    await driver.quit();
  }
}


export async function provisionHomeAssistant() {
  try {
    const publicKey = getLocalSshKey("home_assistant_key");
    console.log("Public Key:", publicKey);
  } catch (error) {
    console.error(error.message);
  }
  await setupHomeAssistant();
  return 'provision-home-assistant';
}

