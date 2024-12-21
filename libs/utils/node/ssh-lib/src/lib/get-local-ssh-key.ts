import * as fs from 'fs';
import { execSync } from "child_process";

export function getLocalSshKey(keyName: string, createIfNotExists: boolean = true): string {
  const sshKeyPath = `${process.env.HOME}/.ssh/${keyName}`;
  const publicKeyPath = `${sshKeyPath}.pub`;

  // Step 1: Check if the public key already exists
  if (fs.existsSync(publicKeyPath)) {
    console.log(`SSH key already exists: ${publicKeyPath}`);
    return fs.readFileSync(publicKeyPath, "utf-8").trim(); // Return existing public key
  }

  // Step 2: Create the SSH key if it does not exist
  if (createIfNotExists) {
    try {
      console.log(`Generating SSH key: ${sshKeyPath}`);
      execSync(`ssh-keygen -t rsa -b 4096 -f ${sshKeyPath} -N "" -C "${keyName}"`, { stdio: "inherit" });

      console.log(`SSH key created successfully: ${publicKeyPath}`);
      return fs.readFileSync(publicKeyPath, "utf-8").trim(); // Return newly created public key
    } catch (error) {
      console.error("Failed to create SSH key:", error.message);
      throw new Error("SSH key generation failed.");
    }
  } else {
    throw new Error(`SSH key ${keyName} does not exist, and 'createIfNotExists' is set to false.`);
  }
}
