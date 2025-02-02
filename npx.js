#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const execSync = require('child_process').execSync;
const inquirer = require('inquirer');

// Prompt for project details
const askProjectDetails = async () => {
  const answers = await inquirer.prompt([
    {
      type: 'input',
      name: 'projectName', 
      message: 'Enter your project name:',
      default: 'my-project',
    },
    {
      type: 'input',
      name: 'projectVersion',
      message: 'Enter your project version:',
      default: '1.0.0',
    },
  ]);
  return answers;
};

// Prompt for selecting Forge packages
const askPackageSelection = async () => {
  const answers = await inquirer.prompt([
    {
      type: 'checkbox',
      name: 'packages',
      message: 'Select the Forge packages you want to install:',
      choices: [
        { name: 'ForgeDB', value: 'forgedb' },
        { name: 'ForgeCanvas', value: 'forgecanvas' },
        { name: 'ForgeAPI', value: 'forgeapi' },
        { name: 'ForgeMusic', value: 'forgemusic' },
      ],
    },
  ]);
  return answers;
};

// Ask whether to install dev or normal version for selected packages
const askPackageVersion = async (selectedPackages) => {
  const versionAnswers = {};

  for (const pkg of selectedPackages) {
    const answer = await inquirer.prompt([
      {
        type: 'list',
        name: `${pkg}Version`, 
        message: `Do you want the normal or dev version of ${pkg}?`,
        choices: ['normal', 'dev'],
      },
    ]);
    versionAnswers[pkg] = answer[`${pkg}Version`];
  }

  return versionAnswers;
};

// Ask if the user wants to use a src directory
const askForSrcDirectory = async () => {
  const answer = await inquirer.prompt([
    {
      type: 'confirm',
      name: 'useSrc',
      message: 'Do you want to use a src directory for your project?',
      default: false,
    },
  ]);
  return answer;
};

// Generate the package.json file
const generatePackageJson = (answers, packageVersions) => {
  const { projectName, projectVersion } = answers;
  const { packages } = packageVersions;

  const packageJson = {
    name: projectName,
    version: projectVersion,
    description: 'A project setup by npx',
    main: 'index.js',
    scripts: {
      test: 'echo "Error: no test specified" && exit 1',
    },
    dependencies: {},
    devDependencies: {},
  };

  // Add the selected packages to either dependencies or devDependencies
  packages.forEach(pkg => {
    const versionType = packageVersions[pkg] === 'dev' ? 'devDependencies' : 'dependencies';
    packageJson[versionType][pkg] = '*';
  });

  return packageJson;
};

// Install the selected packages
const installPackages = (packages) => {
  if (packages.length > 0) {
    const installCommand = `npm install ${packages.join(' ')}`;
    console.log(`Installing packages: ${installCommand}`);
    execSync(installCommand, { stdio: 'inherit' });
  } else {
    console.log('No packages selected for installation.');
  }
};

// Create necessary files (e.g., index.js or in src/index.js if src is used)
const createFiles = (useSrc) => {
  if (useSrc) {
    // Create src directory and index.js inside it
    const srcDirPath = path.join(process.cwd(), 'src');
    fs.mkdirSync(srcDirPath, { recursive: true });
    const indexFilePath = path.join(srcDirPath, 'index.js');
    const indexContent = `console.log("Hello, World!");`;

    fs.writeFileSync(indexFilePath, indexContent);
    console.log('src/index.js created');
  } else {
    // Create index.js directly in the root directory
    const indexFilePath = path.join(process.cwd(), 'index.js');
    const indexContent = `console.log("Hello, World!");`;

    fs.writeFileSync(indexFilePath, indexContent);
    console.log('index.js created');
  }
};

// Main function to set up the project
const setupProject = async () => {
  const answers = await askProjectDetails();
  
  // Ask for package selection
  const selectedPackages = await askPackageSelection();

  // Ask for package version (dev or normal)
  const packageVersions = await askPackageVersion(selectedPackages.packages);

  // Ask if the user wants to use a src directory
  const { useSrc } = await askForSrcDirectory();

  // Create package.json
  const packageJson = generatePackageJson(answers, packageVersions);
  const packageJsonPath = path.join(process.cwd(), 'package.json');
  fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));
  console.log('package.json created');

  // Install selected packages
  installPackages(selectedPackages.packages);

  // Create other files (like index.js or src/index.js)
  createFiles(useSrc);

  console.log('Setup complete!');
};

// Run the setup
setupProject().catch((error) => {
  console.error('Error during setup:', error);
});
