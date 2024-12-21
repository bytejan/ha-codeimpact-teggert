import axios from 'axios';


export async function waitForDomain(domain: string, timeout: number = 30000): Promise<void> {
  console.log(`Waiting for ${domain} to be up and running...`);
  const startTime = Date.now();

  while (Date.now() - startTime < timeout) {
    try {
      const response = await axios.get(domain, { timeout: 2000 }); // 2s timeout for each attempt
      if (response.status === 200) {
        console.log(`Domain is up: ${domain}`);
        return;
      }
    } catch (error) {
      process.stdout.write('.'); // Print dots while waiting
    }
    await new Promise((resolve) => setTimeout(resolve, 2000)); // Wait 2 seconds before retrying
  }

  throw new Error(`Timeout: ${domain} did not become ready within ${timeout / 1000} seconds.`);
}


