#!/usr/bin/env node
'use strict'
const boxen = require("boxen");
const chalk = require("chalk");
const inquirer = require("inquirer");
const clear = require("clear");
const open = require("open");
const fs = require('fs');
const request = require('request');
const path = require('path');
const ora = require('ora');
const cliSpinners = require('cli-spinners');

clear();

const prompt = inquirer.createPromptModule();
const MY_EMAIL = "nd.madlife@gmail.com"

const questions = [
  {
    type: "list",
    name: "action",
    message: "What you want to do?",
    choices: [
      {
        name: `Send me an ${chalk.green.bold("email")}?`,
        value: () => {
          open(`mailto:${MY_EMAIL}`);
          console.log("\nDone, see you soon at inbox.\n");
        }
      },
      /*
     {
        name: `Download my ${chalk.magentaBright.bold("Resume")}?`,
        value: () => {
          const loader = ora({
            text: ' Downloading Resume',
            spinner: cliSpinners.material,
          }).start();
          let pipe = request('https://drive.google.com/file/d/1nodn67odNUEOAqtzqCa72TkPwYdkhVJA/view?usp=sharing').pipe(fs.createWriteStream('./NghiaTran0502-resume.pdf'));
          pipe.on("finish", function() {
            let downloadPath = path.join(process.cwd(), 'NghiaTran0502-resume.html')
            console.log(`\nResume Downloaded at ${downloadPath} \n`);
            open(downloadPath)
            loader.stop();
          });
        }
      },
      */
      {
        name: "Just quit.",
        value: () => {
          console.log("See you.\n");
        }
      }
    ]
  }
];

const data = {
  name: chalk.bold.green("             NghiaTran"),
  work: `${chalk.white("Developer at")} ${chalk
    .hex("#2b82b2")
    .bold("STL Solution")}`,
  twitter: chalk.gray("https://twitter.com/") + chalk.cyan("NghiaTran0502"),
  github: chalk.gray("https://github.com/") + chalk.green("NghiaTran0502"),
  linkedin: chalk.gray("https://linkedin.com/in/") + chalk.blue("NghiaTran0502"),
  npx: chalk.red("npx") + " " + chalk.white("NghiaTran0502"),

  labelWork: chalk.white.bold("       Work:"),
  labelTwitter: chalk.white.bold("    Twitter:"),
  labelGitHub: chalk.white.bold("     GitHub:"),
  labelLinkedIn: chalk.white.bold("   LinkedIn:"),
  labelCard: chalk.white.bold("       Card:")
};

const me = boxen(
  [
    `${data.name}`,
    ``,
    `${data.labelWork}  ${data.work}`,
    ``,
    `${data.labelTwitter}  ${data.twitter}`,
    `${data.labelGitHub}  ${data.github}`,
    `${data.labelLinkedIn}  ${data.linkedin}`,
    ``,
    `${data.labelCard}  ${data.npx}`,
    ``
  ].join("\n"),
  {
    margin: 1,
    float: 'center',
    padding: 1,
    borderStyle: "single",
    borderColor: "green"
  }
);

console.log(me);
const tip = [
  `Tip: Try ${chalk.cyanBright.bold(
    "cmd/ctrl + click"
  )
  } on the links above`,
  '',
].join("\n");
console.log(tip);

prompt(questions).then(answer => answer.action());
