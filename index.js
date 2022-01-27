#!/usr/bin/env node
"use strict";

const bootstrap = require("commitizen/dist/cli/git-cz").bootstrap;

bootstrap({
  cliPath: __dirname,
  config: {
    path: "cz-conventional-changelog",
  },
});
