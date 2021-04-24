const fs = require("fs");
const path = require("path");

const BINARY_NAME = (process.platform === "win32") ? "abstract-cli.exe" : "abstract-cli";

function resolveBinDir() {
  return path
    .resolve(__dirname, "bin")
    .replace(/[\\\/]app.asar[\\\/]/, `${path.sep}app.asar.unpacked${path.sep}`);
}

function resolveCLIBinary() {
  const binDir = resolveBinDir();
  if (process.platform === "darwin" || process.platform === "linux" || process.platform === "win32") {
    const binPath = path.join(binDir, BINARY_NAME);
    return binPath;

    // Fix issue with fs.accessSync
    // try {
    //   fs.accessSync(binPath, fs.constants.R_OK | fs.constants.X_OK);
    //   return binPath;
    // } catch (error) {
    //   throw new Error(
    //     `${BINARY_NAME} could not be accessed at the expected path: ${binPath}`
    //   );
    // }
  }
  throw new Error(
    `${BINARY_NAME} not supported on platform: ${process.platform}`
  );
}

module.exports = resolveCLIBinary();
