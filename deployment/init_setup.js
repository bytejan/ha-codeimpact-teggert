const { exec } = require('child_process');
const fs = require('fs');

console.log("Starting initial setup...");

function getSshKeyOrCreate() {
  // Step 1: Verify SSH key does not already exist
  const sshKeyPath = `${process.env.HOME}/.ssh/home_assistant_key`;
  if (!fs.existsSync(`${sshKeyPath}.pub`)) {
    console.log("No SSH key found. Ansible will generate one.");
  } else {
    console.log("SSH key already exists.");
  }
}


// Step 2: Trigger Ansible Playbook
console.log("Running Ansible Playbook...");
exec("ansible-playbook -i ansible/inventory ansible/playbook.yml --extra-vars '@install_config.json'",
  (err, stdout, stderr) => {
    if (err) {
      console.error(`Error: ${stderr}`);
      return;
    }
    console.log("Provisioning complete!");
    console.log(stdout);
});


// if (!fs.existsSync(`${sshKeyPath}.pub`)) {
//   console.log("No SSH key found. Ansible will generate one.");
// } else {
//   console.log("SSH key already exists.");
// }
//
// // Step 2: Trigger Ansible Playbook
// console.log("Running Ansible Playbook...");
// exec("ansible-playbook -i ansible/inventory ansible/playbook.yml --extra-vars '@install_config.json'",
//   (err, stdout, stderr) => {
//     if (err) {
//       console.error(`Error: ${stderr}`);
//       return;
//     }
//     console.log("Provisioning complete!");
//     console.log(stdout);
// });