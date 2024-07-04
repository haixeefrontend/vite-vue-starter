const { existsSync } = require('fs');
const { resolve } = require('path');

const relPnpApiPath = './.pnp.cjs';

const absPnpApiPath = resolve(__dirname, relPnpApiPath);

if (existsSync(absPnpApiPath)) {
  if (!process.versions.pnp) {
    // Setup the environment to be able to require unocss with pnp
    require(absPnpApiPath).setup();
  }
}

module.exports = require('./uno.config.pnp.ts');
