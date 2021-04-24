# abstract-cli

`abstract-cli` provides a set of commands for working with local and remote Abstract data.

The primary purpose of `abstract-cli` is to serve as local backend
for the [desktop app](https://github.com/goabstract/desktop).
The desktop app [ships](https://github.com/goabstract/desktop/blob/master/package.json#L41)
with an `abstract-cli` binary and [spawns](https://github.com/goabstract/desktop/blob/master/app/lib/cli/index.js)
it as necessary to run commands.

Most commands provide access to git data in the local Abstract repos
and are simple wrappers around functionality supplied by the [gab](../gab)
library.

Currently the only supported output format is json.

## Response format

All commands returns a cliResponse with the following format using `newSuccessResponse()` or `newErrorResponse()`:

```json
{
  "success": true,
  "data": {} // can be any type, that's the actual response from the command
  // Not yet implemented, printErr() needs to be updated, and side effects
  // needs to be checked in batbelt which treats "error" as a special case.
  // "error": {
  //   "message": "error message if success is false",
  //   "code": 1,
  // },
}
```

Errors are returned as top level

```json
{
  "message": "error message"
}
```

Legacy commands returns only the data part as root level using `newLegacyResponse()`

```json
{
  // can be any type, that's the actual response from the command
}
```

## Node API

The compiled `abstract-cli` binary is distributed (privately) via
npm. This allows simple, versioned integration into the desktop project.

A small [shim](./index.js) is included to provide easy access to the binary.

Example usage:

```js
import abstractCLI from '@elasticprojects/abstract-cli';

Promise.resolve(
  spawn(abstractCLI, 'project init 123', {
    capture: ['stdout', 'stderr']
  })
)
  .then(output => JSON.parse(output.stdout))
  .catch(output => console.error(output.stderrr));
```

## Development

### Prerequisites

- pkg-config, `brew install pkg-config`
- libgit2, [see installation instructions](https://github.com/goabstract/projects#libgit2)
- the ruby gem os, install with "gem install os"

### Tests

#### Automated

```sh
$ yarn test
```

#### Manual

Example: Get a list of commits based on a projectID, branchID and optionally a starting SHA and limit:

```sh
$ yarn run build
$ ./bin/abstract-cli commits <projectID> <branchID> --start-sha=<commitSHA> --limit=1
```

### Building

```sh
$ yarn run build
```

Once a binary has been built, it can be useful to link it into the
desktop project for testing. To do so, first run:

```sh
$ yarn link
```

Then in the desktop project, run:

```sh
$ yarn link "@elasticprojects/abstract-cli"

```

## Publishing New Versions

To publish a new version or a patch build, please follow this [guide](https://goabstract.atlassian.net/wiki/spaces/ENG/pages/96928344/Releasing+a+new+CLI+version).

## Updating the Desktop App proto file

### Install the deps

```
brew install protobuf
go get -u github.com/golang/protobuf/protoc-gen-go
```

### Generate the files

You will need to install `protoc-gen-go` with [GIT_TAG="v1.1.0"](https://github.com/golang/protobuf#installation). Then:

```
cd $GOPATH/src/github.com/goabstract/ui/desktop # your path to this directory might be different
protoc -I protos desktop.proto --go_out=plugins=grpc:$GOPATH/src/github.com/goabstract/projects/stable/desktop/electron/
```
