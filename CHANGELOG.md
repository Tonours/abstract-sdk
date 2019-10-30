# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

### [4.0.3](https://github.com/goabstract/abstract-sdk/compare/v4.0.2...v4.0.3) (2019-10-30)


### Bug Fixes

* don't require abstract-cli in the browser ([#169](https://github.com/goabstract/abstract-sdk/issues/169)) ([d65f78b](https://github.com/goabstract/abstract-sdk/commit/d65f78b))



### [4.0.2](https://github.com/goabstract/abstract-sdk/compare/v4.0.1...v4.0.2) (2019-10-29)


### Bug Fixes

* add missing projectId property to CollectionLayer type ([#168](https://github.com/goabstract/abstract-sdk/issues/168)) ([5f9e77a](https://github.com/goabstract/abstract-sdk/commit/5f9e77a))



### [4.0.1](https://github.com/goabstract/abstract-sdk/compare/v4.0.0...v4.0.1) (2019-10-22)



## [4.0.0](https://github.com/goabstract/abstract-sdk/compare/v3.1.1...v4.0.0) (2019-10-22)


### Bug Fixes

* embed documentation typo &chromless -> ?chromeless ([#161](https://github.com/goabstract/abstract-sdk/issues/161)) ([d7a9b4a](https://github.com/goabstract/abstract-sdk/commit/d7a9b4a))


### Features

* add CollectionLayers endpoint ([be2c6aa](https://github.com/goabstract/abstract-sdk/commit/be2c6aa))
* add support for branch changesets ([9d79909](https://github.com/goabstract/abstract-sdk/commit/9d79909))


### BREAKING CHANGES

* `changesets.info` was ranamed to `changesets.commit`



### [3.1.1](https://github.com/goabstract/abstract-sdk/compare/v3.1.0...v3.1.1) (2019-09-23)


### Bug Fixes

* reliably use local CLI path via require ([845540e](https://github.com/goabstract/abstract-sdk/commit/845540e))



## [3.1.0](https://github.com/goabstract/abstract-sdk/compare/v3.0.0...v3.1.0) (2019-09-17)


### Bug Fixes

* remove pageId from LayerDescriptor examples ([#159](https://github.com/goabstract/abstract-sdk/issues/159)) ([63fac47](https://github.com/goabstract/abstract-sdk/commit/63fac47))


### Features

* add sections support to the API transport ([6f910f6](https://github.com/goabstract/abstract-sdk/commit/6f910f6))



## [3.0.0](https://github.com/goabstract/abstract-sdk/compare/v2.0.0...v3.0.0) (2019-09-09)


### Features

* externalize asset URL configuration ([9b53624](https://github.com/goabstract/abstract-sdk/commit/9b53624))


### BREAKING CHANGES

* `previewsUrl` was changed to `previewUrl`



## [2.0.0](https://github.com/goabstract/abstract-sdk/compare/v1.9.0...v2.0.0) (2019-08-19)


### Features

* add abstract-cli as a dependency ([65911c4](https://github.com/goabstract/abstract-sdk/commit/65911c4))


### BREAKING CHANGES

* cliPath is no longer configurable



## [1.9.0](https://github.com/goabstract/abstract-sdk/compare/v1.8.0...v1.9.0) (2019-08-08)


### Bug Fixes

* disable caching of non-static entities ([#151](https://github.com/goabstract/abstract-sdk/issues/151)) ([98ad004](https://github.com/goabstract/abstract-sdk/commit/98ad004))
* ignore test files when generating typings ([#150](https://github.com/goabstract/abstract-sdk/issues/150)) ([27af92c](https://github.com/goabstract/abstract-sdk/commit/27af92c))


### Features

* embed code generator ([467fcb3](https://github.com/goabstract/abstract-sdk/commit/467fcb3))



## [1.8.0](https://github.com/goabstract/abstract-sdk/compare/v1.7.1...v1.8.0) (2019-07-24)


### Bug Fixes

* await the CLI request in files.raw ([#147](https://github.com/goabstract/abstract-sdk/issues/147)) ([2e9808b](https://github.com/goabstract/abstract-sdk/commit/2e9808b))
* update example in rate limit documentation ([6302f72](https://github.com/goabstract/abstract-sdk/commit/6302f72))
* update example in rate limit documentation ([720d18c](https://github.com/goabstract/abstract-sdk/commit/720d18c))
* update pageId usage in documentation ([e1e3658](https://github.com/goabstract/abstract-sdk/commit/e1e3658))


### Features

* add hand-rolled TypeScript definitions ([#148](https://github.com/goabstract/abstract-sdk/issues/148)) ([e945a55](https://github.com/goabstract/abstract-sdk/commit/e945a55))
* update embed documentation to include collections ([37b4d22](https://github.com/goabstract/abstract-sdk/commit/37b4d22))
* update rate limit documentation ([b331000](https://github.com/goabstract/abstract-sdk/commit/b331000))
* use Abstract.sketch instead of Abstract.Sketch in documentation ([a002cf4](https://github.com/goabstract/abstract-sdk/commit/a002cf4))



### [1.7.1](https://github.com/goabstract/abstract-sdk/compare/v1.7.0...v1.7.1) (2019-06-28)


### Bug Fixes

* exclude Node modules from browser builds ([97711f5](https://github.com/goabstract/abstract-sdk/commit/97711f5))



## [1.7.0](https://github.com/goabstract/abstract-sdk/compare/v1.7.0-beta.1...v1.7.0) (2019-06-27)


### Bug Fixes

* do not ship test files ([5a4c767](https://github.com/goabstract/abstract-sdk/commit/5a4c767))


### Features

* update changelog ([26e4868](https://github.com/goabstract/abstract-sdk/commit/26e4868))
* update contributing guide with standard-version info ([abd8595](https://github.com/goabstract/abstract-sdk/commit/abd8595))
* use standard-version and conventional-commits ([#141](https://github.com/goabstract/abstract-sdk/issues/141)) ([9d9a6a0](https://github.com/goabstract/abstract-sdk/commit/9d9a6a0))
