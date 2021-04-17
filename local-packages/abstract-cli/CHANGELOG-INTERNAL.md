# [12.3.0](https://github.com/goabstract/projects/compare/cli@12.2.0...cli@12.3.0) (2020-11-19)


### Bug Fixes

* **desktop-api:** fix could not error typo ([#5351](https://github.com/goabstract/projects/issues/5351)) ([54b44fc](https://github.com/goabstract/projects/commit/54b44fc84a8d9621b96709f30d9282e797ad9091))
* **gab:** adds support for master symbol overrides ([#5376](https://github.com/goabstract/projects/issues/5376)) ([2813a82](https://github.com/goabstract/projects/commit/2813a82e4aef7eb2cf541b3dc1880a7bb064286a))


### Features

* **cli:** Add specific error for when specified app is not installed. ([#5373](https://github.com/goabstract/projects/issues/5373)) ([c7a8722](https://github.com/goabstract/projects/commit/c7a872259c2a074b6ae5d2c977a8a960af38ecc2))
* **cli:** Return app_not_installed error for apps opened directly. ([#5395](https://github.com/goabstract/projects/issues/5395)) ([8400037](https://github.com/goabstract/projects/commit/8400037ad716e78235853a7ed142e781722d825a))
* **cli, branches:** ABS-3911 Add command to get current branch info ([#5484](https://github.com/goabstract/projects/issues/5484)) ([8913095](https://github.com/goabstract/projects/commit/8913095cd1670d68b5fb781c614ad60128d87e76))
* **xd:** Enable support for XD 35. ([#5488](https://github.com/goabstract/projects/issues/5488)) ([03a8e45](https://github.com/goabstract/projects/commit/03a8e4587fc24d3fcaf3d5df9f47bcb15943c1f1))



# [12.2.0](https://github.com/goabstract/projects/compare/cli@12.1.0...cli@12.2.0) (2020-10-14)


### Bug Fixes

* **cli:** command not found in version script ([#5304](https://github.com/goabstract/projects/issues/5304)) ([5738cfd](https://github.com/goabstract/projects/commit/5738cfd20a4ed453e1d2cc129c7863f682fee118))
* **sketch:** Fix missing mutex that got removed during code split ([#5345](https://github.com/goabstract/projects/issues/5345)) ([60c1eab](https://github.com/goabstract/projects/commit/60c1eabbf15b95b21cadf24ecf9051f8e52de870))
* **sketch:** Read/write Sketch 53's gradientAssets property. ([#5321](https://github.com/goabstract/projects/issues/5321)) ([4554e4d](https://github.com/goabstract/projects/commit/4554e4d7e7a389a0cade2ee65fa3ca2c114b81d8))
* **sketch,cloud:** fix missing user prefs on sketch files ([#5346](https://github.com/goabstract/projects/issues/5346)) ([31b02c4](https://github.com/goabstract/projects/commit/31b02c44b4f42719aa09997e7d93e223fbcf0ce8))
* **xd:** clear quick commit fields when committing ([#5328](https://github.com/goabstract/projects/issues/5328)) ([ac3e16f](https://github.com/goabstract/projects/commit/ac3e16f719bc593c0d628d3e6864a5ec57c390bb))


### Features

* **xd:** Enables support for XD 34 and its new auto height text type. ([#5326](https://github.com/goabstract/projects/issues/5326)) ([d2f273a](https://github.com/goabstract/projects/commit/d2f273a8934222cd40c2b9d6ef1776435aa99956))


### Performance Improvements

* **files,sketch:** process sketch pages + items concurrently ([#5295](https://github.com/goabstract/projects/issues/5295)) ([984b1ec](https://github.com/goabstract/projects/commit/984b1ec7c43e5aebc2fd12aa545f2a9fd7f7415e)), closes [#5340](https://github.com/goabstract/projects/issues/5340)



# [12.1.0](https://github.com/goabstract/projects/compare/cli@12.0.0...cli@12.1.0) (2020-10-01)


### Bug Fixes

* **assets:** inspect depends on always providing a default asset, even if it's redundant ([#5254](https://github.com/goabstract/projects/issues/5254)) ([7c1816b](https://github.com/goabstract/projects/commit/7c1816b6bf4fbb5794620c03e358f9e690bf8ff3))
* **files,open:** don't skip network read ops for open tracked ([#5253](https://github.com/goabstract/projects/issues/5253)) ([225bb4e](https://github.com/goabstract/projects/commit/225bb4e03fda4283cf10734ba9533890b3155249))
* **gitworker, desktop-api:** fix XD file open with API export ([#5258](https://github.com/goabstract/projects/issues/5258)) ([34a69e7](https://github.com/goabstract/projects/commit/34a69e74276084fe9c64a73a63bf6bf134491b5e))


### Features

* **cli:** Add commit title and desc to notify-desktop to allow committing. ([#5178](https://github.com/goabstract/projects/issues/5178)) ([fda9dc5](https://github.com/goabstract/projects/commit/fda9dc597dd5df3853046c3c6fa7a5356070881f))
* **xd:** Build quick commit UI directly in XD plugin panel. ([#5261](https://github.com/goabstract/projects/issues/5261)) ([3e51aa8](https://github.com/goabstract/projects/commit/3e51aa81aff872c5ae3cb7386b509094837b5f2e))



# [12.0.0](https://github.com/goabstract/projects/compare/cli@11.3.0...cli@12.0.0) (2020-09-17)


### Bug Fixes

* **cli:** Fix bug where assistants are read twice causing invalid data error. ([#5118](https://github.com/goabstract/projects/issues/5118)) ([a32e875](https://github.com/goabstract/projects/commit/a32e875535769e7eff2bd4563075acf62871741e))
* **cli:** prevent open file if branch is deleted, archived or merged ([#5163](https://github.com/goabstract/projects/issues/5163)) ([b860277](https://github.com/goabstract/projects/commit/b86027762680dbaba2025f826d755c65a63815db))
* **cli:** Re-read draft if create fails because draft already exists. ([#5165](https://github.com/goabstract/projects/issues/5165)) ([5f7591c](https://github.com/goabstract/projects/commit/5f7591cfbc2511166bef0741389c706830c535f3))
* **cli,files:** Read colorAssets instead of colors in files package. ([#5168](https://github.com/goabstract/projects/issues/5168)) ([8549cef](https://github.com/goabstract/projects/commit/8549cef303a2f6bb20bbf4a1d007f740ebc13294))
* **desktop-api:** check for branch exists before checking status on open file ([#5187](https://github.com/goabstract/projects/issues/5187)) ([5503da0](https://github.com/goabstract/projects/commit/5503da0d22477d92c41fa6bbab5cef747f6c1742))


### Code Refactoring

* **gab:** remove remaining references to gab files and changesets ([#5105](https://github.com/goabstract/projects/issues/5105)) ([5094109](https://github.com/goabstract/projects/commit/50941092b2705fb0d1bc2857b044d9b02d7f244a))


### Features

* **cli:** add field in not_found error ([#5136](https://github.com/goabstract/projects/issues/5136)) ([15b0432](https://github.com/goabstract/projects/commit/15b0432a51243c9330af113a4beeca4156cf818d))
* **cli:** Add support for Sketch assistants ignore settings. ([#5122](https://github.com/goabstract/projects/issues/5122)) ([a377cd4](https://github.com/goabstract/projects/commit/a377cd4ac05c9c200e05dcf98dd4ed671d3c7882))
* **cli:** Added files package support for Sketch 69's color variables. ([#5237](https://github.com/goabstract/projects/issues/5237)) ([0a984ff](https://github.com/goabstract/projects/commit/0a984ffcecda4769b5cb1f5be227c15d42a997c9))
* **cli:** Added gab support for Sketch 69's color variables. ([#5218](https://github.com/goabstract/projects/issues/5218)) ([de9d3f5](https://github.com/goabstract/projects/commit/de9d3f5594ea2c57926d71793c73762945c8023f))
* **cli,abstractd:** add --commit-only flag for opening a file with shallow clone ([#5172](https://github.com/goabstract/projects/issues/5172)) ([67073d2](https://github.com/goabstract/projects/commit/67073d2dfc2235476c9d223050391c6974cbfc37))
* **desktop-api,files,open:** fallback to api export for opening untracked when data not sync'd ([#5203](https://github.com/goabstract/projects/issues/5203)) ([b2fa909](https://github.com/goabstract/projects/commit/b2fa90984f112e64a61031a972fac408cfdf3815)), closes [#5199](https://github.com/goabstract/projects/issues/5199)


### Performance Improvements

* **assets:** move assets code, move off old file apis, and make it faster ([#5161](https://github.com/goabstract/projects/issues/5161)) ([8fbe765](https://github.com/goabstract/projects/commit/8fbe765603d051e9dd65cb56bdda106d4acbeb51))


### BREAKING CHANGES

* **cli,abstractd:** add --commit-only flag for opening a file with shallow clone (#5172)



# [11.3.0](https://github.com/goabstract/projects/compare/cli@11.1.0...cli@11.3.0) (2020-08-12)


### Bug Fixes

* **abstractd,has-changes:** Prevent returning errors on masterless projects ([#5042](https://github.com/goabstract/projects/issues/5042)) ([6528ec4](https://github.com/goabstract/projects/commit/6528ec47037aa3976ea65331e3e155aa03d9edc9))
* **cli:** Initialize serverClient with native.AppManager. ([#5019](https://github.com/goabstract/projects/issues/5019)) ([5c2c836](https://github.com/goabstract/projects/commit/5c2c836e43f5dd2cb824615aad29fbde3549e811))
* **cli:** libgit2 dylib build for high sierra ([#5082](https://github.com/goabstract/projects/issues/5082)) ([3ff8264](https://github.com/goabstract/projects/commit/3ff82643dee4c2a6f2ae63cc34c5c57d81f44276))
* **cli:** Return empty array for pull on masterless projects. ([#5069](https://github.com/goabstract/projects/issues/5069)) ([d156d36](https://github.com/goabstract/projects/commit/d156d36326f4864a704a69c030bacd5407a54b29))
* **cli:** Use plugin for v1 preview file creation. ([#5078](https://github.com/goabstract/projects/issues/5078)) ([e2ebce5](https://github.com/goabstract/projects/commit/e2ebce522b7de2714592b7c770a7824d76c61a63))
* **cli:** Use Sketch plugin to upgrade v1 files. ([#5051](https://github.com/goabstract/projects/issues/5051)) ([db4b209](https://github.com/goabstract/projects/commit/db4b20984b44e2de84bc9390b468134bd7ef200e))
* **cli,abstractd:** deepens shallow commits when commit is not found ([#5018](https://github.com/goabstract/projects/issues/5018)) ([d04b0aa](https://github.com/goabstract/projects/commit/d04b0aae7d26e17f35c10a234f711bf10cc66d44))
* **cli,abstractd:** descriptor deepen support ([#4999](https://github.com/goabstract/projects/issues/4999)) ([93f5243](https://github.com/goabstract/projects/commit/93f524384bb90dc8e745f395e3693e68e52ca449))
* **desktop-api:** Use Sketch plugin to open/create v1 .abstract files. ([#5028](https://github.com/goabstract/projects/issues/5028)) ([840cfb1](https://github.com/goabstract/projects/commit/840cfb181ab766052c93f9c1bfe9441427e7af7b))
* **resolver:** prevent actions on masterless projects ([#4948](https://github.com/goabstract/projects/issues/4948)) ([a255963](https://github.com/goabstract/projects/commit/a255963a2614ccfddf911206a8af9c2c51e6f918))
* **xd-plugin:** Require ./build/manifest.json. ([#4983](https://github.com/goabstract/projects/issues/4983)) ([63cb946](https://github.com/goabstract/projects/commit/63cb946492e88f6e801e35d0ea357929c18e647b))
* **xd-plugin:** Return false instead of resolve if manifest doesn't exist. ([#4981](https://github.com/goabstract/projects/issues/4981)) ([de8106c](https://github.com/goabstract/projects/commit/de8106c49f4d67f81cdf1c5f5ef4ee136714bb18))
* **xd-plugin,install:** PLATFORM-1842 fix path issue when the desktop installs the XD plugin ([#4977](https://github.com/goabstract/projects/issues/4977)) ([4423648](https://github.com/goabstract/projects/commit/4423648b98efe62cb3c18384cdef6f3d468b55a7))


### Code Refactoring

* **assets:** Move export code to new changesets ([#5092](https://github.com/goabstract/projects/issues/5092)) ([413d54a](https://github.com/goabstract/projects/commit/413d54a7a51652389f46bef5f5150cf869697cc8))
* **cli:** Use cobra's OutOrStdOut() so tests can read cmd output. ([#5075](https://github.com/goabstract/projects/issues/5075)) ([b535dc3](https://github.com/goabstract/projects/commit/b535dc390e6d31b6b47250c3a161d2d37ebb0ae1))
* **desktop-api, assets:** move upload + progresses to their own files ([#4987](https://github.com/goabstract/projects/issues/4987)) ([3ae4aa7](https://github.com/goabstract/projects/commit/3ae4aa7635ee53865707733b49ed4f878301bc2e))
* **gab:** remove branch.LogLayerHistory ([#5096](https://github.com/goabstract/projects/issues/5096)) ([bd166ba](https://github.com/goabstract/projects/commit/bd166bab4b6ea86d1ff1e465658519ef0680f894))
* **gab,gabapi:** ABS-2550 Move project.HasChanges into gabapi ([#5053](https://github.com/goabstract/projects/issues/5053)) ([f342896](https://github.com/goabstract/projects/commit/f3428961915e77d18a917129dd205ee8d1c52777))
* **gab,gabapi:** ABS-2551 Move branch guards into gabapi ([#5054](https://github.com/goabstract/projects/issues/5054)) ([e769ac9](https://github.com/goabstract/projects/commit/e769ac95a9829357f690853a6bee2952fd90f018))
* **gab,gabapi:** ABS-2553 Move StagePaths to gabapi ([#5066](https://github.com/goabstract/projects/issues/5066)) ([6c1ac59](https://github.com/goabstract/projects/commit/6c1ac5956da7f5a096489b3d621621433dc03ed5))
* **gab,gitapi,desktop-api:** move layers endpoints over to fileapi ([#5083](https://github.com/goabstract/projects/issues/5083)) ([58972b2](https://github.com/goabstract/projects/commit/58972b2e457e58ecbb7c42f857bd8b6b46e28bb9))
* **gab,layers:** ABS-2585 Move rest of desktop-api.layers to fileapi ([#5087](https://github.com/goabstract/projects/issues/5087)) ([a2b2033](https://github.com/goabstract/projects/commit/a2b20336da165eec96ca0cd463dcd1f460442c11))


### Features

* **abstractd:** add rich error support for field errors ([#4878](https://github.com/goabstract/projects/issues/4878)) ([599baa8](https://github.com/goabstract/projects/commit/599baa84eb6e27790d4d3743d214b748db1d0e91))
* **cli:** Run repo garbage collection as part of projects cleanup. ([#5002](https://github.com/goabstract/projects/issues/5002)) ([a001597](https://github.com/goabstract/projects/commit/a001597bb80409802e98b7a502fde9747187a5dd))
* **cli,store:** Add loose object prune to garbage collection. ([#4985](https://github.com/goabstract/projects/issues/4985)) ([1c17435](https://github.com/goabstract/projects/commit/1c174350154599ea61e4e256ce08a16e5983f8ed))
* **xd:** Support for XD v32. ([#5063](https://github.com/goabstract/projects/issues/5063)) ([a93f68b](https://github.com/goabstract/projects/commit/a93f68bedd6d30c5617fa1890517eaeec6f19f46))



# 11.2.0 (2020-07-13)


### Bug Fixes

* **abstract-cli, abstractd:** fix error while creating child branch of branch with shallow head ([#4913](https://github.com/goabstract/projects/issues/4913)) ([b1278a8](https://github.com/goabstract/projects/commit/b1278a8adb295a1d993882ce993e2c5c1e264bca))
* **assets:** prevent nil pointer with pageRef when exporting ([#4936](https://github.com/goabstract/projects/issues/4936)) ([02b70a7](https://github.com/goabstract/projects/commit/02b70a774f00ca4bab83a173d23f436ad43f5916))
* **cli:** correctly parse yarn version output in version scripts ([#4907](https://github.com/goabstract/projects/issues/4907)) ([0f5d231](https://github.com/goabstract/projects/commit/0f5d231092eeed084dd2363d96d41609cafe2305))
* **cli:** prevent network side-effects on fetch ([#4917](https://github.com/goabstract/projects/issues/4917)) ([2571557](https://github.com/goabstract/projects/commit/2571557f0922f1f51abc07849ad66741b322e865))
* **desktop-api,project:** delete unknown remotes on fetch ([#4899](https://github.com/goabstract/projects/issues/4899)) ([8bfae2d](https://github.com/goabstract/projects/commit/8bfae2d609631898e282f2039425df560132f8a0))
* **desktop-api,projects:** Respect TTL on branch cleanup ([#4874](https://github.com/goabstract/projects/issues/4874)) ([3613c66](https://github.com/goabstract/projects/commit/3613c6617e6981708953289439c782dfeb661038))
* **files:** adds nil check for recovery ([#4788](https://github.com/goabstract/projects/issues/4788)) ([3c8a80a](https://github.com/goabstract/projects/commit/3c8a80aba60c1fa9ad60e4b9139f3dedba0b3731))
* **gab:** Use branch draft abstraction on fast-forward merge. ([#4934](https://github.com/goabstract/projects/issues/4934)) ([15f8b3c](https://github.com/goabstract/projects/commit/15f8b3c3ac59b85ea9505f4099cfcef644736240))
* **gabapi:** deepen when the branch head sha is a shallow commit ([#4949](https://github.com/goabstract/projects/issues/4949)) ([0fead7f](https://github.com/goabstract/projects/commit/0fead7f8986a27fc7b7ac375ed5b8e41ac00fe41))
* **logger:** prevent nil pointer with info.Size() ([#4935](https://github.com/goabstract/projects/issues/4935)) ([d975806](https://github.com/goabstract/projects/commit/d975806bfe828cb4b313fc532b7c12efb84e5025))
* **plugin:** fix race on SetCLIPath() ([#4933](https://github.com/goabstract/projects/issues/4933)) ([ea90d4d](https://github.com/goabstract/projects/commit/ea90d4d30142fd9db5ec60692b3242e8801cb0ab))
* **sentry:** Fix sentry messages not being fully anonymized ([#4882](https://github.com/goabstract/projects/issues/4882)) ([301f502](https://github.com/goabstract/projects/commit/301f502d3df0ccdccb119642d064cee1474553bc))
* **xd,linked-libraries:** PLATFORM-1714 allow 'latest/head' for files api ([#4888](https://github.com/goabstract/projects/issues/4888)) ([464260c](https://github.com/goabstract/projects/commit/464260c81e09087ee783efd81064e11d117ca9bf))


### Code Refactoring

* **desktop-api:** add more logs ([#4912](https://github.com/goabstract/projects/issues/4912)) ([23a9346](https://github.com/goabstract/projects/commit/23a9346fe48d13e14df289c41f7834a4cb285d94))
* **files:** PLATFORM-1716 Remove builder object from file api ([#4876](https://github.com/goabstract/projects/issues/4876)) ([b39ca2b](https://github.com/goabstract/projects/commit/b39ca2bd521d0dc4f051a5d1f97c103acea38d52))
* **xd-plugin:** cleanup and refactor xd-plugin ([#4889](https://github.com/goabstract/projects/issues/4889)) ([27e8456](https://github.com/goabstract/projects/commit/27e8456a780397509316f238ea34b26db2012281))


### Features

* **cli:** Re-enable Sketch plugin if Sketch is in safe mode. ([#4840](https://github.com/goabstract/projects/issues/4840)) ([d8dd435](https://github.com/goabstract/projects/commit/d8dd43538db6fc2e5e1eacd06e08ef1f24bd6b3c))
* **cli,sketch:** Support embedded fonts with Sketch 67. ([#4856](https://github.com/goabstract/projects/issues/4856)) ([9835c32](https://github.com/goabstract/projects/commit/9835c3275d25eea7ccf6fecfcb260cb50733a953))
* **sketch,assistants:** PLATFORM-1675 support sketch assistants ([#4955](https://github.com/goabstract/projects/issues/4955)) ([4a04eba](https://github.com/goabstract/projects/commit/4a04eba7c52deba95223ebf95819dce60ddb0831))
* **xd:** FILES-641 show save errors in XD ([#4944](https://github.com/goabstract/projects/issues/4944)) ([e8c6223](https://github.com/goabstract/projects/commit/e8c6223e521200751cb9c697376857c71ca40810))



# [11.2.0](https://github.com/goabstract/projects/compare/cli@11.1.0...cli@11.2.0) (2020-07-13)


### Bug Fixes

* **abstract-cli, abstractd:** fix error while creating child branch of branch with shallow head ([#4913](https://github.com/goabstract/projects/issues/4913)) ([b1278a8](https://github.com/goabstract/projects/commit/b1278a8adb295a1d993882ce993e2c5c1e264bca))
* **assets:** prevent nil pointer with pageRef when exporting ([#4936](https://github.com/goabstract/projects/issues/4936)) ([02b70a7](https://github.com/goabstract/projects/commit/02b70a774f00ca4bab83a173d23f436ad43f5916))
* **cli:** correctly parse yarn version output in version scripts ([#4907](https://github.com/goabstract/projects/issues/4907)) ([0f5d231](https://github.com/goabstract/projects/commit/0f5d231092eeed084dd2363d96d41609cafe2305))
* **cli:** prevent network side-effects on fetch ([#4917](https://github.com/goabstract/projects/issues/4917)) ([2571557](https://github.com/goabstract/projects/commit/2571557f0922f1f51abc07849ad66741b322e865))
* **desktop-api,project:** delete unknown remotes on fetch ([#4899](https://github.com/goabstract/projects/issues/4899)) ([8bfae2d](https://github.com/goabstract/projects/commit/8bfae2d609631898e282f2039425df560132f8a0))
* **desktop-api,projects:** Respect TTL on branch cleanup ([#4874](https://github.com/goabstract/projects/issues/4874)) ([3613c66](https://github.com/goabstract/projects/commit/3613c6617e6981708953289439c782dfeb661038))
* **files:** adds nil check for recovery ([#4788](https://github.com/goabstract/projects/issues/4788)) ([3c8a80a](https://github.com/goabstract/projects/commit/3c8a80aba60c1fa9ad60e4b9139f3dedba0b3731))
* **gab:** Use branch draft abstraction on fast-forward merge. ([#4934](https://github.com/goabstract/projects/issues/4934)) ([15f8b3c](https://github.com/goabstract/projects/commit/15f8b3c3ac59b85ea9505f4099cfcef644736240))
* **gabapi:** deepen when the branch head sha is a shallow commit ([#4949](https://github.com/goabstract/projects/issues/4949)) ([0fead7f](https://github.com/goabstract/projects/commit/0fead7f8986a27fc7b7ac375ed5b8e41ac00fe41))
* **logger:** prevent nil pointer with info.Size() ([#4935](https://github.com/goabstract/projects/issues/4935)) ([d975806](https://github.com/goabstract/projects/commit/d975806bfe828cb4b313fc532b7c12efb84e5025))
* **plugin:** fix race on SetCLIPath() ([#4933](https://github.com/goabstract/projects/issues/4933)) ([ea90d4d](https://github.com/goabstract/projects/commit/ea90d4d30142fd9db5ec60692b3242e8801cb0ab))
* **sentry:** Fix sentry messages not being fully anonymized ([#4882](https://github.com/goabstract/projects/issues/4882)) ([301f502](https://github.com/goabstract/projects/commit/301f502d3df0ccdccb119642d064cee1474553bc))
* **xd,linked-libraries:** PLATFORM-1714 allow 'latest/head' for files api ([#4888](https://github.com/goabstract/projects/issues/4888)) ([464260c](https://github.com/goabstract/projects/commit/464260c81e09087ee783efd81064e11d117ca9bf))


### Code Refactoring

* **desktop-api:** add more logs ([#4912](https://github.com/goabstract/projects/issues/4912)) ([23a9346](https://github.com/goabstract/projects/commit/23a9346fe48d13e14df289c41f7834a4cb285d94))
* **files:** PLATFORM-1716 Remove builder object from file api ([#4876](https://github.com/goabstract/projects/issues/4876)) ([b39ca2b](https://github.com/goabstract/projects/commit/b39ca2bd521d0dc4f051a5d1f97c103acea38d52))
* **xd-plugin:** cleanup and refactor xd-plugin ([#4889](https://github.com/goabstract/projects/issues/4889)) ([27e8456](https://github.com/goabstract/projects/commit/27e8456a780397509316f238ea34b26db2012281))


### Features

* **cli:** Re-enable Sketch plugin if Sketch is in safe mode. ([#4840](https://github.com/goabstract/projects/issues/4840)) ([d8dd435](https://github.com/goabstract/projects/commit/d8dd43538db6fc2e5e1eacd06e08ef1f24bd6b3c))
* **cli,sketch:** Support embedded fonts with Sketch 67. ([#4856](https://github.com/goabstract/projects/issues/4856)) ([9835c32](https://github.com/goabstract/projects/commit/9835c3275d25eea7ccf6fecfcb260cb50733a953))
* **sketch,assistants:** PLATFORM-1675 support sketch assistants ([#4955](https://github.com/goabstract/projects/issues/4955)) ([4a04eba](https://github.com/goabstract/projects/commit/4a04eba7c52deba95223ebf95819dce60ddb0831))
* **xd:** FILES-641 show save errors in XD ([#4944](https://github.com/goabstract/projects/issues/4944)) ([e8c6223](https://github.com/goabstract/projects/commit/e8c6223e521200751cb9c697376857c71ca40810))



# [11.1.0](https://github.com/goabstract/projects/compare/cli@11.0.0...cli@11.1.0) (2020-06-18)


### Features

* **desktop-api:** cleanup all repositories ([#4847](https://github.com/goabstract/projects/issues/4847)) ([b5e4269](https://github.com/goabstract/projects/commit/b5e426920301384d8a365275f3158ed829b98895))



# [11.0.0](https://github.com/goabstract/projects/compare/cli@10.0.0...cli@11.0.0) (2020-06-17)


### Bug Fixes

* **abstract-cli, abstractd:** use meta for branch id/name ([#4832](https://github.com/goabstract/projects/issues/4832)) ([7579d74](https://github.com/goabstract/projects/commit/7579d74289b1cb919a5a95001608566b4ede12ff))
* **abstractd:** Fix abstractd getting killed with each request ([#4819](https://github.com/goabstract/projects/issues/4819)) ([a775dc4](https://github.com/goabstract/projects/commit/a775dc428f444116a372f66c9ed2999f21c8ec3c))
* **abstractd:** LOVE-414 🙈  fix cpu usage in abstractd ([#4732](https://github.com/goabstract/projects/issues/4732)) ([06781df](https://github.com/goabstract/projects/commit/06781df80aebc9ca6ae9bbe98c4b0247b9ab19a5)), closes [#4735](https://github.com/goabstract/projects/issues/4735)
* **ci,go:** fix linter ignoring some errors ([#4766](https://github.com/goabstract/projects/issues/4766)) ([04386e4](https://github.com/goabstract/projects/commit/04386e4da6eb38990da76dd90b775d12bfa9580c))
* **cli:** fix version script not adding package-lock.json ([#4737](https://github.com/goabstract/projects/issues/4737)) ([866be8b](https://github.com/goabstract/projects/commit/866be8b8000867af0eed25c753a1dab8fb181163))
* **cli:** Pass args when creating a command. ([#4828](https://github.com/goabstract/projects/issues/4828)) ([6bfc8a7](https://github.com/goabstract/projects/commit/6bfc8a7fc37c38eb9c2b93e2d584b1373278fe42))
* **cli:** Refresh NSRunningApplication pointer on quit_app_and_wait. ([#4848](https://github.com/goabstract/projects/issues/4848)) ([7a78dbb](https://github.com/goabstract/projects/commit/7a78dbbe44335b30d8e59eb16dfb6dbcd5d594df))
* **cli,sketch:** Remove invalid characters when saving sketch files. ([#4796](https://github.com/goabstract/projects/issues/4796)) ([e0c715f](https://github.com/goabstract/projects/commit/e0c715f80ba6afe396e564e6e0dcedc322d05625))
* **desktop-api:** On save, notify plugins (XD) of changes. ([#4722](https://github.com/goabstract/projects/issues/4722)) ([047a3db](https://github.com/goabstract/projects/commit/047a3db055a403892a2e87f6f44b791ef4bb04e7))
* **desktop-api:** Write to branch draft tree before committing on Create. ([#4763](https://github.com/goabstract/projects/issues/4763)) ([b9088ea](https://github.com/goabstract/projects/commit/b9088ea155e10dd527311949ed3af1985d07e4b3))
* **files,xd:** Assume translation of 0 if no transform data. ([#4728](https://github.com/goabstract/projects/issues/4728)) ([e7fbec5](https://github.com/goabstract/projects/commit/e7fbec585fc6a211d895c48e7f5f3c36ee4f0287))
* **xd:** Add watermark artboard to artboards page when building preview file. ([#4786](https://github.com/goabstract/projects/issues/4786)) ([0b47b93](https://github.com/goabstract/projects/commit/0b47b939a2a4d7fbee244cc26f08bb2b70affbb1))
* **xd-plugin:** Wait for dialog showModal promise before showing another. ([#4749](https://github.com/goabstract/projects/issues/4749)) ([16e3f01](https://github.com/goabstract/projects/commit/16e3f01f60b1541e5755b7c7f642bc1a52d94e42))
* **xd,cli:** Only defer to outdated editing file if it is open. ([#4800](https://github.com/goabstract/projects/issues/4800)) ([06104a4](https://github.com/goabstract/projects/commit/06104a4d78eb9192ac0bb09dd04686effeed5f61))


### Code Refactoring

* **abstractd:** use plural everywhere ([#4804](https://github.com/goabstract/projects/issues/4804)) ([659f1fc](https://github.com/goabstract/projects/commit/659f1fc2da6732663a43f5a82d31d39083ec8a06))
* **gab,storeapi:** Move git config access to storeapi ([#4726](https://github.com/goabstract/projects/issues/4726)) ([ebcb4da](https://github.com/goabstract/projects/commit/ebcb4dac7364de77e780af9a4646eda4bab6cd3b))


### Features

* **abstractd:** adds support for file remove ([#4731](https://github.com/goabstract/projects/issues/4731)) ([d51009f](https://github.com/goabstract/projects/commit/d51009f227dae4138d3b92f983d10f62bda367b9))
* **cli:** Report a few common errors to the desktop app ([#4822](https://github.com/goabstract/projects/issues/4822)) ([cced7d5](https://github.com/goabstract/projects/commit/cced7d53d5011c72f5da2693adb0df84efd1905b))
* **desktop-api:** add command to cleanup projects ([#4694](https://github.com/goabstract/projects/issues/4694)) ([c45fbd9](https://github.com/goabstract/projects/commit/c45fbd9da63214e38e12f6595a5e221e62f79e8b))
* **desktop-api,projects:** remove unused branches ([#4776](https://github.com/goabstract/projects/issues/4776)) ([3a6efa6](https://github.com/goabstract/projects/commit/3a6efa639781cad70a47b0d7ae2305dc16a8814c))
* **sketch-plugin,cli:** PLATFORM-1578 pass cli path to sketch plugin ([#4771](https://github.com/goabstract/projects/issues/4771)) ([49dcdd3](https://github.com/goabstract/projects/commit/49dcdd339776a2a44d54a8ff4dffd6c24de0230b))


### Performance Improvements

* **gabapi,fetch:** merge operations that walk references ([#4762](https://github.com/goabstract/projects/issues/4762)) ([41591b8](https://github.com/goabstract/projects/commit/41591b8a0d243a35cf760fd8d4528a63f5d31e97))



# [10.0.0](https://github.com/goabstract/projects/compare/cli@9.2.0...cli@10.0.0) (2020-05-20)


### Bug Fixes

* **abstract-cli,abstractd,desktop-api:** update add and remove libraries commands to not err for no-ops ([#4589](https://github.com/goabstract/projects/issues/4589)) ([86bffc9](https://github.com/goabstract/projects/commit/86bffc9a5ed4cbd988c524d2fa56214beb5120ee))
* **abstractd,rwatcher:** fix CPU not getting reported ([#4702](https://github.com/goabstract/projects/issues/4702)) ([331ac38](https://github.com/goabstract/projects/commit/331ac38e0395ebd8fd565967c1e4f185d08f60f0))
* **ci,xd-plugin:** Persist xd-plugin folder structure in CI jobs. ([#4663](https://github.com/goabstract/projects/issues/4663)) ([0028b02](https://github.com/goabstract/projects/commit/0028b0266d2486a6b71c9e23629099658dfae966))
* **cli:** auto-fix lock index file ([#4652](https://github.com/goabstract/projects/issues/4652)) ([85466c8](https://github.com/goabstract/projects/commit/85466c87a813c8ffb3d3a26688ade2016270279c))
* **cli:** create ref on push ([#4609](https://github.com/goabstract/projects/issues/4609)) ([bf3d670](https://github.com/goabstract/projects/commit/bf3d6702dbde27803920badc813f9047e3798234))
* **cli:** Don't skip network read ops for init and clear branch drafts. ([#4690](https://github.com/goabstract/projects/issues/4690)) ([17045d1](https://github.com/goabstract/projects/commit/17045d1135ea5c8f3c59b5c6b483b109dafea232))
* **cli:** gracefully stop the CLI on signals (kinda) ([#4535](https://github.com/goabstract/projects/issues/4535)) ([4358722](https://github.com/goabstract/projects/commit/435872286590abbb1b75d2c1836b3f7f120d884c))
* **cli, abstractd:** fix percentage for assets export ([#4617](https://github.com/goabstract/projects/issues/4617)) ([62e464d](https://github.com/goabstract/projects/commit/62e464d2460d285371541b95739c95fe8365ff5b))
* **cli,version:** fix pre-release updating changelog ([#4560](https://github.com/goabstract/projects/issues/4560)) ([0b929c4](https://github.com/goabstract/projects/commit/0b929c4f58737e9a16437369bc85f65a2bedfd51))
* **desktop-api:** does not add total items if sha from files open is requesting the working copy ([#4665](https://github.com/goabstract/projects/issues/4665)) ([1bb761d](https://github.com/goabstract/projects/commit/1bb761dbc5a2cac055aa4e8c52d93d5a58950210))
* **files,xd:** Serialize preview artboard template. ([#4695](https://github.com/goabstract/projects/issues/4695)) ([2d52c81](https://github.com/goabstract/projects/commit/2d52c8154d96567fe90d5edb09364fb5630b537b))
* **gab:** create remotes when creating branches ([#4579](https://github.com/goabstract/projects/issues/4579)) ([d32a4e4](https://github.com/goabstract/projects/commit/d32a4e4a2e3cc39031ed17a86e3d40143bbd141d))
* **gabapi:** create missing remotes on the fly ([#4601](https://github.com/goabstract/projects/issues/4601)) ([8e02f45](https://github.com/goabstract/projects/commit/8e02f45ca1b8e2f7914a7dce11fc97304b3e27e1))
* **gabapi:** partial sync file not always properly created ([#4578](https://github.com/goabstract/projects/issues/4578)) ([f2cf97c](https://github.com/goabstract/projects/commit/f2cf97c2b54382237a24ad50016f7e327fbf8570))
* **gabapi:** support for branch not found while pushing ([#4714](https://github.com/goabstract/projects/issues/4714)) ([ef18a12](https://github.com/goabstract/projects/commit/ef18a1277498069806e0b83d0cc4ee7eb061472f))
* **store,tree-builder:** Don't overwrite cached tree entries with git data. ([#4638](https://github.com/goabstract/projects/issues/4638)) ([d220e00](https://github.com/goabstract/projects/commit/d220e00346597a041dae01d158be5b3478b6bb48))
* **xd:** Support for XD v29 (file manifest v2.10). ([#4705](https://github.com/goabstract/projects/issues/4705)) ([4899f78](https://github.com/goabstract/projects/commit/4899f78d6d977ffdfeba384598fb3d21f274f213))
* **xd:** Use file tree SHA as SHA for client ID for XD preview files. ([#4620](https://github.com/goabstract/projects/issues/4620)) ([9fbaffc](https://github.com/goabstract/projects/commit/9fbaffc16f9769ab967162826aaaa626ee32a068))
* **xd-plugin:** Don't fetch libraries for preview files (prevent panic) ([#4594](https://github.com/goabstract/projects/issues/4594)) ([19a955b](https://github.com/goabstract/projects/commit/19a955bf697e4599de1b7b115b7336e667db52f1))
* **xd-plugin:** fix commit button not enabling when changing file ([#4642](https://github.com/goabstract/projects/issues/4642)) ([ba7f4bd](https://github.com/goabstract/projects/commit/ba7f4bd4350076b22b4100c9a83487fb6b2e5c5e))


### Code Refactoring

* **cli:** improve error reporting ([#4590](https://github.com/goabstract/projects/issues/4590)) ([c7803e8](https://github.com/goabstract/projects/commit/c7803e876c5fff7bf7641bb67b6870d797e68e5f))
* **cli:** log stacktrace on error in DEV ([#4554](https://github.com/goabstract/projects/issues/4554)) ([960f28a](https://github.com/goabstract/projects/commit/960f28a1a098c6ec18747f3e750df25bef5d7013))
* **cli:** Remove cancelation guards on a few commands ([#4614](https://github.com/goabstract/projects/issues/4614)) ([9a01ecc](https://github.com/goabstract/projects/commit/9a01eccb5a9e6763bac1b80a282c5e99705ae328))
* **cli:** require SHA for export-changed command ([b5b3754](https://github.com/goabstract/projects/commit/b5b37542b9f099ce7d25dc0ce29920e5fa7c1631))
* **cli,abstractd:** Force Clone and Fetch with go-git ([#4655](https://github.com/goabstract/projects/issues/4655)) ([90391ea](https://github.com/goabstract/projects/commit/90391ea509a023d0457af0bf3fb00312b95284aa))
* **cli,branches:** Remove guards around meta ops ([#4627](https://github.com/goabstract/projects/issues/4627)) ([ab9ee4b](https://github.com/goabstract/projects/commit/ab9ee4b31830157f05271d73ef851596d53800e4))
* **cli,commits:** remove create command ([#4622](https://github.com/goabstract/projects/issues/4622)) ([be4bb5d](https://github.com/goabstract/projects/commit/be4bb5de9340794c6783353b631b7325d863a9d8))
* **desktop:** Wrap errors ([#4672](https://github.com/goabstract/projects/issues/4672)) ([488a01b](https://github.com/goabstract/projects/commit/488a01b37849a31cfac9b7b985fd0af4bf711c7f))
* **desktop,gab:** replace package errors by pkg/errors ([#4700](https://github.com/goabstract/projects/issues/4700)) ([6348458](https://github.com/goabstract/projects/commit/63484588739d8d965a8dbfa0dd3d4f94d06a7b41))
* **go:** add a couple of linters ([#4641](https://github.com/goabstract/projects/issues/4641)) ([b29f254](https://github.com/goabstract/projects/commit/b29f254847514b05f62ffb2c78e63f6fd94ac5c6))
* **go:** Remove dead code ([#4634](https://github.com/goabstract/projects/issues/4634)) ([c963d83](https://github.com/goabstract/projects/commit/c963d83f907caa97e73b73bef1d64704a9d06484))


### Features

* **abstract-cli, abstractd:** fetch commit sha for open untracked ([#4491](https://github.com/goabstract/projects/issues/4491)) ([43a981a](https://github.com/goabstract/projects/commit/43a981a885645c39d7eb225be47c2269a721f9ea))
* **cli:** add support for FileIDs globbing ([#4587](https://github.com/goabstract/projects/issues/4587)) ([85e0720](https://github.com/goabstract/projects/commit/85e072026250d32488073830331de399a68eebe3))
* **cli:** Enable discard changes to actually discard changes in git. ([#4543](https://github.com/goabstract/projects/issues/4543)) ([3892b66](https://github.com/goabstract/projects/commit/3892b660a2ab1198ac9b1e614013842229b7b041))
* **cli:** Send notify file save message to desktop on save. ([#4573](https://github.com/goabstract/projects/issues/4573)) ([bfe5fda](https://github.com/goabstract/projects/commit/bfe5fdaeb12496a5815ec13df5142711bbbaf9b2))
* **cli, desktop-api:** prevent restoring a commit before update ([#4666](https://github.com/goabstract/projects/issues/4666)) ([d158125](https://github.com/goabstract/projects/commit/d158125fb40a909c48c2c8ba2d346c333bfd51e1))
* **cli,files,commit:** add ability to commit files to a destination branch ([#4546](https://github.com/goabstract/projects/issues/4546)) ([7593224](https://github.com/goabstract/projects/commit/759322448d7afb14503c8b9a45c05275b8e56895))
* **gab:** Re-implement BranchState as branch draft concept. ([#4506](https://github.com/goabstract/projects/issues/4506)) ([eef974f](https://github.com/goabstract/projects/commit/eef974f25923beb806c73798b57830d21c271609))
* **gab, storeapi:** add go-git implementation for push ([#4703](https://github.com/goabstract/projects/issues/4703)) ([7166a98](https://github.com/goabstract/projects/commit/7166a9844c9540a8531aeb9a04007395ec175f86))
* **store:** adds cancel support to repack ([#4574](https://github.com/goabstract/projects/issues/4574)) ([8e4d080](https://github.com/goabstract/projects/commit/8e4d0801007577ba67f8bf830266e38dffb2c153))


### Reverts

* **desktop,gab:** replace package errors by pkg/errors ([#4713](https://github.com/goabstract/projects/issues/4713)) ([6d11cdc](https://github.com/goabstract/projects/commit/6d11cdc3a0d2549ee7a3bc3c87a23685c4aa8ed9))


### BREAKING CHANGES

* **cli,abstractd:** Force Clone and Fetch with go-git (#4655)
* **cli:** require SHA for export-changed command
* **cli,commits:** remove create command (#4622)



# [9.2.0](https://github.com/goabstract/projects/compare/cli@9.1.0...cli@9.2.0) (2020-04-21)


### Features

* **abstractd:** add total cpu monitoring to watcher ([#4540](https://github.com/goabstract/projects/issues/4540)) ([26adb53141edd661935081fbbe87e0dab8730f4d](https://github.com/goabstract/projects/commit/26adb53141edd661935081fbbe87e0dab8730f4d))



# [9.1.0](https://github.com/goabstract/projects/compare/cli@9.0.0...cli@9.1.0) (2020-04-17)


### Bug Fixes

* **cli:** fix response format when forwarding to abstractd ([#4507](https://github.com/goabstract/projects/issues/4507)) ([77dea7661581e80198dae357e4049f6e11e8bc37](https://github.com/goabstract/projects/commit/77dea7661581e80198dae357e4049f6e11e8bc37))
* **cli,version:** fix pre-release versions ([#4513](https://github.com/goabstract/projects/issues/4513)) ([54f3bcbda0f013a942cbc27e4eb244b12ff2b05d](https://github.com/goabstract/projects/commit/54f3bcbda0f013a942cbc27e4eb244b12ff2b05d))
* **cli,version:** merge master if in release-cli ([#4505](https://github.com/goabstract/projects/issues/4505)) ([0ae7a67c1284865b6cb953bd196769a96d321e03](https://github.com/goabstract/projects/commit/0ae7a67c1284865b6cb953bd196769a96d321e03))


### Code Refactoring

* **resolver:** log network ops ([#4508](https://github.com/goabstract/projects/issues/4508)) ([061b877d5338b74dd28f695c56bc4259fd774dd4](https://github.com/goabstract/projects/commit/061b877d5338b74dd28f695c56bc4259fd774dd4))


### Features

* **cli,branches:** Add sha flag to branch create to branch from sha. ([#4524](https://github.com/goabstract/projects/issues/4524)) ([9920b4cdfe8d5f02f0b7cfecb670ce92d1ebf44c](https://github.com/goabstract/projects/commit/9920b4cdfe8d5f02f0b7cfecb670ce92d1ebf44c))
* **cli,version:** add support for pre-release ([#4494](https://github.com/goabstract/projects/issues/4494)) ([9776bba5e83f92ee665e1fb68d0c75baf70dc86b](https://github.com/goabstract/projects/commit/9776bba5e83f92ee665e1fb68d0c75baf70dc86b))



# [9.0.0](https://github.com/goabstract/projects/compare/cli@8.0.1...cli@9.0.0) (2020-04-15)


### Bug Fixes

* **cli:** actually anonymize error messages ([#4495](https://github.com/goabstract/projects/issues/4495)) ([c9a48d5ecd049c6aff879fd5d34580c1b1c8dd36](https://github.com/goabstract/projects/commit/c9a48d5ecd049c6aff879fd5d34580c1b1c8dd36))
* **cli:** anonymize data sent to Sentry ([#4475](https://github.com/goabstract/projects/issues/4475)) ([d85662eaaf317a5562773a8eb0f70daef8fc48e9](https://github.com/goabstract/projects/commit/d85662eaaf317a5562773a8eb0f70daef8fc48e9))
* **cli,version:** fix wrong version being guessed ([#4479](https://github.com/goabstract/projects/issues/4479)) ([b7484548fe55edcb0c0fbf9f57cef05ea367bf05](https://github.com/goabstract/projects/commit/b7484548fe55edcb0c0fbf9f57cef05ea367bf05))


### Features

* **cli:** Updated import and replace commands. ([#4411](https://github.com/goabstract/projects/issues/4411)) ([9ff5436262c267b5ba52adb0c1c48b82a1c50265](https://github.com/goabstract/projects/commit/9ff5436262c267b5ba52adb0c1c48b82a1c50265))


### BREAKING CHANGES

* **cli:** Import can import multiple files at once and commit the changes.

New replace command replaces a file and commits the changes.

PLATFORM-1284



## [8.0.1](https://github.com/goabstract/projects/compare/cli@8.0.0...cli@8.0.1) (2020-04-14)



# [8.0.0](https://github.com/goabstract/projects/compare/cli@7.0.0...cli@8.0.0) (2020-04-13)


### Bug Fixes

* **abstractd,start:** prevent deleting the wrong state file ([#4444](https://github.com/goabstract/projects/issues/4444)) ([4c701c4295c462b7dc652f31480d56ac4adea1d4](https://github.com/goabstract/projects/commit/4c701c4295c462b7dc652f31480d56ac4adea1d4))
* **desktop-api,branches:** fix invalid error returned on update ([#4459](https://github.com/goabstract/projects/issues/4459)) ([74cbbef577f2b9ccb2717a693669690982ae6616](https://github.com/goabstract/projects/commit/74cbbef577f2b9ccb2717a693669690982ae6616))
* **desktop-api,files:** fix nil service in FileRefHelper ([#4447](https://github.com/goabstract/projects/issues/4447)) ([a79cb06a644327e2b9693c773fbaba943bfb2f3b](https://github.com/goabstract/projects/commit/a79cb06a644327e2b9693c773fbaba943bfb2f3b))
* **gab,branch:** out of bound error in LatestCommitChanged ([#4445](https://github.com/goabstract/projects/issues/4445)) ([99f4ee78d626b7384d83ff1483ea61a683abd69e](https://github.com/goabstract/projects/commit/99f4ee78d626b7384d83ff1483ea61a683abd69e))


### Code Refactoring

* **files:** PLATFORM-1341 Use new fileapi in all file implementations and simplify acces ([#4416](https://github.com/goabstract/projects/issues/4416)) ([2b0c35e648c133a2e5a6d4c8a10928dcf988037a](https://github.com/goabstract/projects/commit/2b0c35e648c133a2e5a6d4c8a10928dcf988037a))


### Features

* **cli:** return dirtyTreeError instead of validationError ([#4457](https://github.com/goabstract/projects/issues/4457)) ([7337dd5179710c21c30957552ef399600f571226](https://github.com/goabstract/projects/commit/7337dd5179710c21c30957552ef399600f571226))



# [7.0.0](https://github.com/goabstract/projects/compare/cli@6.0.0...cli@7.0.0) (2020-04-07)


### Bug Fixes

* **abstractd:** set parent id for branch ([#4421](https://github.com/goabstract/projects/issues/4421)) ([4013733f64424997aef4d0e162f7366836977e79](https://github.com/goabstract/projects/commit/4013733f64424997aef4d0e162f7366836977e79))
* **files,commit:** PLATFORM-1352 allow commit files to commit whole working tree ([#4432](https://github.com/goabstract/projects/issues/4432)) ([ff1d5cf41234d5f42f46f41a51a950bf65ba8d8d](https://github.com/goabstract/projects/commit/ff1d5cf41234d5f42f46f41a51a950bf65ba8d8d))
* **files,upgrade:** PLATFORM-1350 include app name and version in upgrade message ([#4429](https://github.com/goabstract/projects/issues/4429)) ([7ad491613f3a9dc5ad9234ba066c52efc036e0cd](https://github.com/goabstract/projects/commit/7ad491613f3a9dc5ad9234ba066c52efc036e0cd))
* **gabapi:** fixes resource calculation ([#4422](https://github.com/goabstract/projects/issues/4422)) ([3022019c1f3563f40ad17a184e7a1942c95a1e27](https://github.com/goabstract/projects/commit/3022019c1f3563f40ad17a184e7a1942c95a1e27))


### Code Refactoring

* **cli,version:** add guard and change merge strategy ([#4431](https://github.com/goabstract/projects/issues/4431)) ([012ad038f564582d0a198095c27689bb3f3afac1](https://github.com/goabstract/projects/commit/012ad038f564582d0a198095c27689bb3f3afac1))


### Features

* **store:** changes repack-commit to partial-repack ([#4433](https://github.com/goabstract/projects/issues/4433)) ([087424d0ea83fe2a3757084d1f7add5e3c4b82fc](https://github.com/goabstract/projects/commit/087424d0ea83fe2a3757084d1f7add5e3c4b82fc))



# [6.0.0](https://github.com/goabstract/projects/compare/cli@5.0.2...cli@6.0.0) (2020-04-02)


### Bug Fixes

* **abstract-cli:** nil pointer dereference on branch update ([#4417](https://github.com/goabstract/projects/issues/4417)) ([9f83265424352faecc353fbdb3a2aa59e0df0cf3](https://github.com/goabstract/projects/commit/9f83265424352faecc353fbdb3a2aa59e0df0cf3))



## [5.0.1](https://github.com/goabstract/projects/compare/cli@5.0.0...cli@5.0.1) (2020-03-31)

* **chore:** upgrade to goabstract/go-git v5.0.3 ([#4404](https://github.com/goabstract/projects/issues/4404)) ([7d2eca40d70d5cb3741a5e62181829de118a08ce](https://github.com/goabstract/projects/commit/7d2eca40d70d5cb3741a5e62181829de118a08ce))



# [5.0.0](https://github.com/goabstract/projects/compare/cli@4.8.2...cli@5.0.0) (2020-03-31)


### Bug Fixes

* **abstractd:** close abstractd if it's not active ([#4369](https://github.com/goabstract/projects/issues/4369)) ([cb459c19a22955caa2a855ff3bf500d85da1c655](https://github.com/goabstract/projects/commit/cb459c19a22955caa2a855ff3bf500d85da1c655))
* **abstractd:** Fix concurrent abstractd processes killing each others ([444977b46b0d33818cb228ff061e31b906d67cda](https://github.com/goabstract/projects/commit/444977b46b0d33818cb228ff061e31b906d67cda))
* **abstractd:** fix killing a process already finished ([#4366](https://github.com/goabstract/projects/issues/4366)) ([4721aedd6cc881829ae4ddb768e5ce67848de8ef](https://github.com/goabstract/projects/commit/4721aedd6cc881829ae4ddb768e5ce67848de8ef))
* **cli,client:** Don't cache nil clients on error. ([#4393](https://github.com/goabstract/projects/issues/4393)) ([4e3708a6e4345a096f08ebf69b230b6558fad146](https://github.com/goabstract/projects/commit/4e3708a6e4345a096f08ebf69b230b6558fad146))
* **gitapi,abstract-cli:** bump changeset cache keys ([#4378](https://github.com/goabstract/projects/issues/4378)) ([ae94326f3a45376dc3a97eeb8d2d659ac91f0398](https://github.com/goabstract/projects/commit/ae94326f3a45376dc3a97eeb8d2d659ac91f0398))
* **sketchtool:** Account for 2x Previews When Moving Sketchtool Generated Previews To Cache ([#4390](https://github.com/goabstract/projects/issues/4390)) ([3464d384de8a0135866c2301b4d35254fc591e54](https://github.com/goabstract/projects/commit/3464d384de8a0135866c2301b4d35254fc591e54))


### Code Refactoring

* **cli:** remove all legacy commands ([#4370](https://github.com/goabstract/projects/issues/4370)) ([8e76ce316b4c632f6213b821cc5b4b85b5df6457](https://github.com/goabstract/projects/commit/8e76ce316b4c632f6213b821cc5b4b85b5df6457))


### Features

* **abstract-cli,files:** files.Commit ([#4382](https://github.com/goabstract/projects/issues/4382)) ([eeed72c3b543950ebcb4704f400d6b36013b5bfb](https://github.com/goabstract/projects/commit/eeed72c3b543950ebcb4704f400d6b36013b5bfb))
* **abstractd:** add commits service ([#4344](https://github.com/goabstract/projects/issues/4344)) ([496cf3e4193a928c455a50e3d77a2751858ce90b](https://github.com/goabstract/projects/commit/496cf3e4193a928c455a50e3d77a2751858ce90b))
* **cli:** Finalize upgrade commits and return commit object. ([#4178](https://github.com/goabstract/projects/issues/4178)) ([244fbf4c718f0915763f77100aeb469165c822dc](https://github.com/goabstract/projects/commit/244fbf4c718f0915763f77100aeb469165c822dc))


### BREAKING CHANGES

* **cli:** Finalize upgrade commits and return commit object. (#4178)
* **cli:** remove all legacy commands (#4370)



## [4.8.2](https://github.com/goabstract/projects/compare/cli@4.8.0...cli@4.8.2) (2020-03-30)


### Bug Fixes

* **abstractd:** close abstractd if it's not active ([#4377](https://github.com/goabstract/projects/issues/4377)) ([33ff65671dda89d4d93d9cebe26341ac161ca958](https://github.com/goabstract/projects/commit/33ff65671dda89d4d93d9cebe26341ac161ca958))
* **abstractd:** Fix concurrent processes killing each others ([#4379](https://github.com/goabstract/projects/issues/4379)) ([0ad1c1eb15fa5f47c51772d39963e9e1ab627a3f](https://github.com/goabstract/projects/commit/0ad1c1eb15fa5f47c51772d39963e9e1ab627a3f))
* **abstractd:** fix killing a process already finished ([#4366](https://github.com/goabstract/projects/issues/4366)) ([66c27419017c18e8abf5a268f1e6fb1609371495](https://github.com/goabstract/projects/commit/66c27419017c18e8abf5a268f1e6fb1609371495))
* **cli,client:** Don't cache nil clients on error. ([#4395](https://github.com/goabstract/projects/issues/4395)) ([308752cd8567486f360e8be2d84410c1a7edbd14](https://github.com/goabstract/projects/commit/308752cd8567486f360e8be2d84410c1a7edbd14))
* **gitapi,abstract-cli:** bump changeset cache keys ([#4384](https://github.com/goabstract/projects/issues/4384)) ([8bc7f7d09628e654f9e227ddfb44da6309f5581b](https://github.com/goabstract/projects/commit/8bc7f7d09628e654f9e227ddfb44da6309f5581b))



## [4.8.1](https://github.com/goabstract/projects/compare/cli@4.8.0...cli@4.8.1) (2020-03-27)


### Bug Fixes

* **abstractd:** close abstractd if it's not active ([#4377](https://github.com/goabstract/projects/issues/4377)) ([33ff65671dda89d4d93d9cebe26341ac161ca958](https://github.com/goabstract/projects/commit/33ff65671dda89d4d93d9cebe26341ac161ca958))
* **abstractd:** Fix concurrent processes killing each others ([#4379](https://github.com/goabstract/projects/issues/4379)) ([0ad1c1eb15fa5f47c51772d39963e9e1ab627a3f](https://github.com/goabstract/projects/commit/0ad1c1eb15fa5f47c51772d39963e9e1ab627a3f))
* **abstractd:** fix killing a process already finished ([#4366](https://github.com/goabstract/projects/issues/4366)) ([66c27419017c18e8abf5a268f1e6fb1609371495](https://github.com/goabstract/projects/commit/66c27419017c18e8abf5a268f1e6fb1609371495))
* **gitapi,abstract-cli:** bump changeset cache keys ([#4384](https://github.com/goabstract/projects/issues/4384)) ([8bc7f7d09628e654f9e227ddfb44da6309f5581b](https://github.com/goabstract/projects/commit/8bc7f7d09628e654f9e227ddfb44da6309f5581b))



# [4.8.0](https://github.com/goabstract/projects/compare/cli@4.7.0...cli@4.8.0) (2020-03-25)


### Bug Fixes

* **cli,version:** Fix merge strategy ([#4359](https://github.com/goabstract/projects/issues/4359)) ([28d6c07201981370dfb383b4fb073dda805ffb5b](https://github.com/goabstract/projects/commit/28d6c07201981370dfb383b4fb073dda805ffb5b))


### Code Refactoring

* **cli,version:** bump to release branch ([#4343](https://github.com/goabstract/projects/issues/4343)) ([81a320803e6165e5b3ff6062a91d499f22e99529](https://github.com/goabstract/projects/commit/81a320803e6165e5b3ff6062a91d499f22e99529))


### Features

* **cli:** Allow cancelling jobs through SIGINT ([#4353](https://github.com/goabstract/projects/issues/4353)) ([58e674fe9135104536df73c18dbc8131cc837422](https://github.com/goabstract/projects/commit/58e674fe9135104536df73c18dbc8131cc837422))



# [4.7.0](https://github.com/goabstract/projects/compare/cli@4.6.0...cli@4.7.0) (2020-03-23)


### Bug Fixes

* **cli,errors:** cleanup CLI errors ([#4320](https://github.com/goabstract/projects/issues/4320)) ([b0347ecaa81a13d563d0c1fce4e7e2c13bf64d7f](https://github.com/goabstract/projects/commit/b0347ecaa81a13d563d0c1fce4e7e2c13bf64d7f))
* **desktop-api,files:** checkout branch on import ([#4326](https://github.com/goabstract/projects/issues/4326)) ([85d350f9eaf71bf83e414c65b140932aba03de7d](https://github.com/goabstract/projects/commit/85d350f9eaf71bf83e414c65b140932aba03de7d))
* **gabapi,changeset:** handle commits with invalid meta ([#4338](https://github.com/goabstract/projects/issues/4338)) ([cf0978e062d11e924105ca3bb659f779e51e680d](https://github.com/goabstract/projects/commit/cf0978e062d11e924105ca3bb659f779e51e680d))
* **plugin-client,sketch:** fix npe for list open files when sketch isn ([#4163](https://github.com/goabstract/projects/issues/4163)) ([e40e57472dadc1eeea522964f1cd7bffa0308d91](https://github.com/goabstract/projects/commit/e40e57472dadc1eeea522964f1cd7bffa0308d91))
* **store:** address where we were grabbing the largest newest file instead of oldest smallest file ([#4337](https://github.com/goabstract/projects/issues/4337)) ([bfbaa4d0c04e685b908d1a45ab96881e7383dd91](https://github.com/goabstract/projects/commit/bfbaa4d0c04e685b908d1a45ab96881e7383dd91))
* **store:** changes repack-commit to use oldest file ([#4336](https://github.com/goabstract/projects/issues/4336)) ([69f2a5625efa0f75cffded8a7ca665335685ed59](https://github.com/goabstract/projects/commit/69f2a5625efa0f75cffded8a7ca665335685ed59))
* **xd:** Handle audio resources (mp3, wav, etc) in XD. ([#4233](https://github.com/goabstract/projects/issues/4233)) ([55a23b1deac8dfca26c1e5ce319e9ae443f505ef](https://github.com/goabstract/projects/commit/55a23b1deac8dfca26c1e5ce319e9ae443f505ef))


### Code Refactoring

* **xd:** Handle next XD file version bump. ([#4316](https://github.com/goabstract/projects/issues/4316)) ([58cb6e12766cf3204cf49871ae6795b773cd8c9b](https://github.com/goabstract/projects/commit/58cb6e12766cf3204cf49871ae6795b773cd8c9b))


### Features

* **abstractd:** use a lockfile to prevent multiple daemons from starting ([#4282](https://github.com/goabstract/projects/issues/4282)) ([b5961f950c84ca63f9c2f594cbc3971b6e606e82](https://github.com/goabstract/projects/commit/b5961f950c84ca63f9c2f594cbc3971b6e606e82))
* **cli:** New add-libraries command. ([#4025](https://github.com/goabstract/projects/issues/4025)) ([3955747227b3346018ab7b7f71611946ab1b9ef3](https://github.com/goabstract/projects/commit/3955747227b3346018ab7b7f71611946ab1b9ef3))
* **cli:** New remove-libraries command. ([#4036](https://github.com/goabstract/projects/issues/4036)) ([9e854a7f2125772a4102dd24732747a6fc207795](https://github.com/goabstract/projects/commit/9e854a7f2125772a4102dd24732747a6fc207795))
* **desktop-api,files:** allow discarding all files ([#4329](https://github.com/goabstract/projects/issues/4329)) ([63be69ec43800757a1e8874ab52cd891188ea6db](https://github.com/goabstract/projects/commit/63be69ec43800757a1e8874ab52cd891188ea6db))



# [4.6.0](https://github.com/goabstract/projects/compare/cli@4.5.0...cli@4.6.0) (2020-03-12)


### Bug Fixes

* **cli,log:** fix displaying empty strings and quotes ([#4298](https://github.com/goabstract/projects/issues/4298)) ([b81a1e7d1e5ecfaf50a57e7f27a6036bd7878d77](https://github.com/goabstract/projects/commit/b81a1e7d1e5ecfaf50a57e7f27a6036bd7878d77))
* **desktop-api,resilver:** improve totalItems pre-clone ([#4277](https://github.com/goabstract/projects/issues/4277)) ([d503cc52abfaec8f083cc52f206e533dfc1943be](https://github.com/goabstract/projects/commit/d503cc52abfaec8f083cc52f206e533dfc1943be))
* **xd:** Handle clip paths with child interactions ([#4286](https://github.com/goabstract/projects/issues/4286)) ([0ea70c56d6ae21bef13fb8c6d70bdef596be922e](https://github.com/goabstract/projects/commit/0ea70c56d6ae21bef13fb8c6d70bdef596be922e))


### Code Refactoring

* **desktop-api,assets:** Wrap api in an interface ([#4272](https://github.com/goabstract/projects/issues/4272)) ([324c2ba75ad04e845d4ade758c76024519d3facb](https://github.com/goabstract/projects/commit/324c2ba75ad04e845d4ade758c76024519d3facb))
* **desktop-api,branches:** Wrap api in an interface ([#4263](https://github.com/goabstract/projects/issues/4263)) ([cf7676e79b702897179f25f56feec7040068d149](https://github.com/goabstract/projects/commit/cf7676e79b702897179f25f56feec7040068d149))
* **desktop-api,collections:** Wrap api in an interface ([#4274](https://github.com/goabstract/projects/issues/4274)) ([ed6d1495c5748f4d210b25c396118f93080ac29b](https://github.com/goabstract/projects/commit/ed6d1495c5748f4d210b25c396118f93080ac29b))
* **desktop-api,commits:** Wrap api in an interface to allo… ([#4264](https://github.com/goabstract/projects/issues/4264)) ([2a08421ad2aced355c908c48a9743665c0b000a4](https://github.com/goabstract/projects/commit/2a08421ad2aced355c908c48a9743665c0b000a4))
* **desktop-api,layers:** Wrap api in an interface to allow mocking ([#4269](https://github.com/goabstract/projects/issues/4269)) ([3c3de6122b588f928885a5824cd83c2fc77139c8](https://github.com/goabstract/projects/commit/3c3de6122b588f928885a5824cd83c2fc77139c8))
* **desktopapi,files:** wrap package in a service ([#4291](https://github.com/goabstract/projects/issues/4291)) ([a97bd89f1855362aa58da1bdb6ede13d6f5ad0d3](https://github.com/goabstract/projects/commit/a97bd89f1855362aa58da1bdb6ede13d6f5ad0d3))
* **gabapi,changeset:** gabapi changeset ([#4296](https://github.com/goabstract/projects/issues/4296)) ([605922106d1a98b564267edd4dc5cfe1de812ace](https://github.com/goabstract/projects/commit/605922106d1a98b564267edd4dc5cfe1de812ace)), closes [#4262](https://github.com/goabstract/projects/issues/4262)


### Features

* **abstractd:** add assets service ([#4278](https://github.com/goabstract/projects/issues/4278)) ([7b6d57364d4ff565c110b287253d87a45ab88ea9](https://github.com/goabstract/projects/commit/7b6d57364d4ff565c110b287253d87a45ab88ea9))
* **resolver:** report projects ([#4287](https://github.com/goabstract/projects/issues/4287)) ([fa196a514dc31a29a88ba1eec710320dcf0a4def](https://github.com/goabstract/projects/commit/fa196a514dc31a29a88ba1eec710320dcf0a4def))
* **store:** add gc support to go-git store ([#4258](https://github.com/goabstract/projects/issues/4258)) ([4be96a4cdac18ddd4860797274262005b73fb13e](https://github.com/goabstract/projects/commit/4be96a4cdac18ddd4860797274262005b73fb13e))



# [4.5.0](https://github.com/goabstract/projects/compare/cli@4.3.0...cli@4.5.0) (2020-03-05)


### Bug Fixes

* **abstractd:** pass down FetchEntity ([#4246](https://github.com/goabstract/projects/issues/4246)) ([296bc9a740b9637fbc4942182ffc8a1312df54f5](https://github.com/goabstract/projects/commit/296bc9a740b9637fbc4942182ffc8a1312df54f5))
* **cli,version:** fix ALL the URLs ([#4243](https://github.com/goabstract/projects/issues/4243)) ([43d1ca911e1f8f514579a69cbb36976112fcb323](https://github.com/goabstract/projects/commit/43d1ca911e1f8f514579a69cbb36976112fcb323))
* **cli,version:** fix URL pointing to SDK ([#4239](https://github.com/goabstract/projects/issues/4239)) ([d2b15de0cbeb60dd3b7370d1dfa225d0f695d386](https://github.com/goabstract/projects/commit/d2b15de0cbeb60dd3b7370d1dfa225d0f695d386))


### Code Refactoring

* **gabapi,changeset:** PLATFORM-1172 move changesets to gabapi ([#4196](https://github.com/goabstract/projects/issues/4196)) ([86128a85a17868446a297b6b9c7af1ac549e36f8](https://github.com/goabstract/projects/commit/86128a85a17868446a297b6b9c7af1ac549e36f8)), closes [#3925](https://github.com/goabstract/projects/issues/3925) [#3931](https://github.com/goabstract/projects/issues/3931) [#3932](https://github.com/goabstract/projects/issues/3932) [#3856](https://github.com/goabstract/projects/issues/3856) [#3940](https://github.com/goabstract/projects/issues/3940) [#3909](https://github.com/goabstract/projects/issues/3909) [#4182](https://github.com/goabstract/projects/issues/4182)


### Features

* **abstract-cli:** changes repack-commit to only have commit ([#4234](https://github.com/goabstract/projects/issues/4234)) ([a8b9ac84106954f9498eaeb25172435c68d5758e](https://github.com/goabstract/projects/commit/a8b9ac84106954f9498eaeb25172435c68d5758e))
* **desktop-api,branches:** allow working on meta directly ([#4249](https://github.com/goabstract/projects/issues/4249)) ([f71b59df7b64084302e45bbfa27043e43bbb6b59](https://github.com/goabstract/projects/commit/f71b59df7b64084302e45bbfa27043e43bbb6b59))



# [4.4.0](https://github.com/goabstract/projects/compare/cli@4.3.0...cli@4.4.0) (2020-03-03)


### Bug Fixes

* **cli,version:** fix URL pointing to SDK ([#4239](https://github.com/goabstract/projects/issues/4239)) ([d2b15de0cbeb60dd3b7370d1dfa225d0f695d386](https://github.com/goabstract/projects/commit/d2b15de0cbeb60dd3b7370d1dfa225d0f695d386))


### Features

* **abstract-cli:** changes repack-commit to only have commit ([#4234](https://github.com/goabstract/projects/issues/4234)) ([a8b9ac84106954f9498eaeb25172435c68d5758e](https://github.com/goabstract/projects/commit/a8b9ac84106954f9498eaeb25172435c68d5758e))



# [4.3.0](https://github.com/goabstract/projects/compare/cli@4.2.0...cli@4.3.0) (2020-03-03)


### Bug Fixes

* **cli,abstractd:** add missing entity type ([#4211](https://github.com/goabstract/projects/issues/4211)) ([4020f29f4d7cfad6b7a9258b55a49ab8a088d1f7](https://github.com/goabstract/projects/commit/4020f29f4d7cfad6b7a9258b55a49ab8a088d1f7))
* **desktop-api,branches:** Fix merge not having the correct data ([#4205](https://github.com/goabstract/projects/issues/4205)) ([e73e03c7207faec6710d2521d32348bf3201e056](https://github.com/goabstract/projects/commit/e73e03c7207faec6710d2521d32348bf3201e056))
* **gab:** return ErrObjectMissing if a sha is missing ([#4183](https://github.com/goabstract/projects/issues/4183)) ([1ec298bb08c680ebf9c50623c7df8249d2cfcddf](https://github.com/goabstract/projects/commit/1ec298bb08c680ebf9c50623c7df8249d2cfcddf))
* **gabapi:** fix fetch failing with git2go ([#4237](https://github.com/goabstract/projects/issues/4237)) ([7ca8a99c450a7ee9d28e1858a81618eef3fac56d](https://github.com/goabstract/projects/commit/7ca8a99c450a7ee9d28e1858a81618eef3fac56d))
* **gabapi,fetch:** do not fetch branches with no remote ([#4219](https://github.com/goabstract/projects/issues/4219)) ([3f9c4bbc3b5ee59ae7971e3ce4dab63cb016aed1](https://github.com/goabstract/projects/commit/3f9c4bbc3b5ee59ae7971e3ce4dab63cb016aed1))
* **store:** skip empty remote repo gogit error ([#4236](https://github.com/goabstract/projects/issues/4236)) ([b6c21e91d59218457dcba84deb8edf574b3a7131](https://github.com/goabstract/projects/commit/b6c21e91d59218457dcba84deb8edf574b3a7131))


### Code Refactoring

* **gabapi:** allow mocking gabapi ([#4226](https://github.com/goabstract/projects/issues/4226)) ([5ff78d0503fcd5f79e699d5f291b5a4f08b80272](https://github.com/goabstract/projects/commit/5ff78d0503fcd5f79e699d5f291b5a4f08b80272))


### Features

* **desktop:** implements light and faster repack ([#4209](https://github.com/goabstract/projects/issues/4209)) ([e70b385e2c9eb737ba5971b81b1143b2bb06d824](https://github.com/goabstract/projects/commit/e70b385e2c9eb737ba5971b81b1143b2bb06d824))
* **desktop-api,resolver:** allow skipping network ops ([#4215](https://github.com/goabstract/projects/issues/4215)) ([ea912d49172a698e382130e91c1efcbcca9490d1](https://github.com/goabstract/projects/commit/ea912d49172a698e382130e91c1efcbcca9490d1))



# [4.2.0](https://github.com/goabstract/projects/compare/cli@4.1.0...cli@4.2.0) (2020-02-26)


### Features

* **desktop-api:** fetch all parents of a branch ([#4170](https://github.com/goabstract/projects/issues/4170)) ([1f01f9ed0b14b54e57965c25ee97d77195d813c1](https://github.com/goabstract/projects/commit/1f01f9ed0b14b54e57965c25ee97d77195d813c1))
* **gabapi,fetch:** allow fetch to only get local branches ([#4190](https://github.com/goabstract/projects/issues/4190)) ([75b90b51c2bd3578d224960097e3f4d65c4bad2d](https://github.com/goabstract/projects/commit/75b90b51c2bd3578d224960097e3f4d65c4bad2d))
* **tracing:** set error tags correctly for datadog ([#4151](https://github.com/goabstract/projects/issues/4151)) ([1b84017b6f9771df5c30807caeb4f953cb2294bb](https://github.com/goabstract/projects/commit/1b84017b6f9771df5c30807caeb4f953cb2294bb))



# [4.1.0](https://github.com/goabstract/projects/compare/cli@4.0.0...cli@4.1.0) (2020-02-24)


### Bug Fixes

* **cli:** Write to intermediate tmp file when saving. ([#4123](https://github.com/goabstract/projects/issues/4123)) ([733150e276ff2eb638d7a5dd391bb66f7ab37dfa](https://github.com/goabstract/projects/commit/733150e276ff2eb638d7a5dd391bb66f7ab37dfa))


### Features

* **cli:** report progress everywhere ([#4157](https://github.com/goabstract/projects/issues/4157)) ([ef571e2d3bf929b8d9c82bae6ad250630fc22276](https://github.com/goabstract/projects/commit/ef571e2d3bf929b8d9c82bae6ad250630fc22276))



# [4.0.0](https://github.com/goabstract/projects/compare/cli@3.5.1...cli@4.0.0) (2020-02-22)


### Bug Fixes

* **abstractd:** fix grpc handshake issues with 1.27.1 ([#4056](https://github.com/goabstract/projects/issues/4056)) ([fb5e0a96f0d05681f2c7a0267f4d270890578f27](https://github.com/goabstract/projects/commit/fb5e0a96f0d05681f2c7a0267f4d270890578f27))
* **abstractd:** revert PR [#3998](https://github.com/goabstract/projects/issues/3998) ([#4021](https://github.com/goabstract/projects/issues/4021)) ([98795128e6122c6dfd670c047626e0e36122550d](https://github.com/goabstract/projects/commit/98795128e6122c6dfd670c047626e0e36122550d))
* **abstractd, xd-plugin:** skip logs for Ping Message ([#3753](https://github.com/goabstract/projects/issues/3753)) ([f2853cc674353d2430f7de824b0fe61986952f03](https://github.com/goabstract/projects/commit/f2853cc674353d2430f7de824b0fe61986952f03))
* **cli:** Deleted branches displaying in branch archive ([#4013](https://github.com/goabstract/projects/issues/4013)) ([a00f2afedd3547a3c8c36b639b147309e4b888b7](https://github.com/goabstract/projects/commit/a00f2afedd3547a3c8c36b639b147309e4b888b7))
* **cli:** Ensure editing file is recreated on file tree sha mismatch. ([#4016](https://github.com/goabstract/projects/issues/4016)) ([648c10dd8a0b67714656cd86437bb000c58d99e3](https://github.com/goabstract/projects/commit/648c10dd8a0b67714656cd86437bb000c58d99e3)), closes [#3448](https://github.com/goabstract/projects/issues/3448)
* **cli:** hide deprecated commands ([#4046](https://github.com/goabstract/projects/issues/4046)) ([1a5749e3f0219cbab55509a3a8209e21097ccf78](https://github.com/goabstract/projects/commit/1a5749e3f0219cbab55509a3a8209e21097ccf78))
* **cli:** improve entity reporting message ([#4150](https://github.com/goabstract/projects/issues/4150)) ([d7881c7f56942ba9c0929b4475a5aec06639cc83](https://github.com/goabstract/projects/commit/d7881c7f56942ba9c0929b4475a5aec06639cc83))
* **cli:** stop using presset to bump version ([#4152](https://github.com/goabstract/projects/issues/4152)) ([8f7c63098f371d3529c2055f56897b1ab6613139](https://github.com/goabstract/projects/commit/8f7c63098f371d3529c2055f56897b1ab6613139))
* **cli,abstractd:** make sure clone fetches all of master ([#4142](https://github.com/goabstract/projects/issues/4142)) ([e2ab8dc71decabaa49654eca74b4cbcbfccc1dbe](https://github.com/goabstract/projects/commit/e2ab8dc71decabaa49654eca74b4cbcbfccc1dbe))
* **go-git,gabapi:** fix clone not creating final project ([#4068](https://github.com/goabstract/projects/issues/4068)) ([419d04df33e9072233d1c4174d1e9c38d8796e3f](https://github.com/goabstract/projects/commit/419d04df33e9072233d1c4174d1e9c38d8796e3f))
* **xd:** Support XD v27 file version 2.8. ([#4039](https://github.com/goabstract/projects/issues/4039)) ([5cbefd195ce53c65525e6d9c63feda024fc31ab0](https://github.com/goabstract/projects/commit/5cbefd195ce53c65525e6d9c63feda024fc31ab0))


### Code Refactoring

* **abstract-cli, abstractd:** remove projects list cmd ([#4109](https://github.com/goabstract/projects/issues/4109)) ([37f9fefc2318789dfaf42f9342b79a5b8dc43077](https://github.com/goabstract/projects/commit/37f9fefc2318789dfaf42f9342b79a5b8dc43077))
* **desktop-api,commits:** stop sending the parent branch in List ([#4108](https://github.com/goabstract/projects/issues/4108)) ([5d02e32c324008151a372b3378e9b3be7c8599e7](https://github.com/goabstract/projects/commit/5d02e32c324008151a372b3378e9b3be7c8599e7))


### Features

* **abstract-cli:** allow a single commit to merge into an existing packfile ([#4050](https://github.com/goabstract/projects/issues/4050)) ([734fe69b8359c984c5371db2209e1700f6ea0035](https://github.com/goabstract/projects/commit/734fe69b8359c984c5371db2209e1700f6ea0035))
* **abstract,gab:** adds go-git support to repack ([#3922](https://github.com/goabstract/projects/issues/3922)) ([fd72f33776aadf75e071a2b518bd856a303c9c12](https://github.com/goabstract/projects/commit/fd72f33776aadf75e071a2b518bd856a303c9c12))
* **cli:** partial clone with go-git ([#3994](https://github.com/goabstract/projects/issues/3994)) ([da86656919dceb461b2ff248bcfbd9f8a8dbdd2b](https://github.com/goabstract/projects/commit/da86656919dceb461b2ff248bcfbd9f8a8dbdd2b))
* **cli:** return fetched entity to the Desktop app ([#4118](https://github.com/goabstract/projects/issues/4118)) ([a023b506b4336bf88a90392ad04bce8bf960bb9f](https://github.com/goabstract/projects/commit/a023b506b4336bf88a90392ad04bce8bf960bb9f))
* **cli, abstractd:** support SHAs in fetch cli cmd ([#4012](https://github.com/goabstract/projects/issues/4012)) ([c4a44b14de497232eb01e32acc7a9cb04cdb8be6](https://github.com/goabstract/projects/commit/c4a44b14de497232eb01e32acc7a9cb04cdb8be6)), closes [#3925](https://github.com/goabstract/projects/issues/3925) [#3931](https://github.com/goabstract/projects/issues/3931) [#3932](https://github.com/goabstract/projects/issues/3932) [#3856](https://github.com/goabstract/projects/issues/3856) [#3940](https://github.com/goabstract/projects/issues/3940) [#3909](https://github.com/goabstract/projects/issues/3909) [#3979](https://github.com/goabstract/projects/issues/3979) [#3987](https://github.com/goabstract/projects/issues/3987)
* **desktop-api:** clone projects on the fly ([#4058](https://github.com/goabstract/projects/issues/4058)) ([efaaac7ca0b6089431f32889692edf36bf4fb573](https://github.com/goabstract/projects/commit/efaaac7ca0b6089431f32889692edf36bf4fb573))
* **desktop-api:** force cloning/fetching with go-git ([#4149](https://github.com/goabstract/projects/issues/4149)) ([fa45cf41c460d08b4a5a8df28ac2febcccd067b7](https://github.com/goabstract/projects/commit/fa45cf41c460d08b4a5a8df28ac2febcccd067b7))
* **desktop-api,abstract-cli,abstractd:** implements projects as a service for testing ([#3771](https://github.com/goabstract/projects/issues/3771)) ([82b52938456cb1e7bc6593813f11b4171a310bef](https://github.com/goabstract/projects/commit/82b52938456cb1e7bc6593813f11b4171a310bef))
* **desktop-api,branch:** fetch parent when creating a branch ([#4057](https://github.com/goabstract/projects/issues/4057)) ([ad277ec3037927267b8816828a61302cc1b4144c](https://github.com/goabstract/projects/commit/ad277ec3037927267b8816828a61302cc1b4144c))
* **gab:** add storeapi to gab with basic go-git impl ([89811d7761043185167a479cddb4aad204ce41fa](https://github.com/goabstract/projects/commit/89811d7761043185167a479cddb4aad204ce41fa))
* **gabapi:** mark repo as being partial ([#4143](https://github.com/goabstract/projects/issues/4143)) ([a40d5aaef4282239a3af2a26128fc9007fc8d7e3](https://github.com/goabstract/projects/commit/a40d5aaef4282239a3af2a26128fc9007fc8d7e3))
* **gitworker, gab:** Add gitworker job to set up project repo on the server ([#3942](https://github.com/goabstract/projects/issues/3942)) ([c0ddb5501ffe976baba8a0168cffcc6fcb514fb4](https://github.com/goabstract/projects/commit/c0ddb5501ffe976baba8a0168cffcc6fcb514fb4))


### BREAKING CHANGES

* **desktop-api,commits:** stop sending the parent branch in List (#4108)
* **abstract-cli, abstractd:** remove projects list cmd (#4109)



## [3.5.1](https://github.com/goabstract/projects/compare/cli@3.5.0...cli@3.5.1) (2020-01-28)


### Bug Fixes

* **cli,version:** fix changelog path ([de1f15fb740b65957d551b7a4a5cc265d8a6768b](https://github.com/goabstract/projects/commit/de1f15fb740b65957d551b7a4a5cc265d8a6768b))



# [3.5.0](https://github.com/goabstract/projects/compare/cli@3.4.0...cli@3.5.0) (2020-01-27)


### Bug Fixes

* **cli:** Filter user token if using format --user-token <token>. ([#3926](https://github.com/goabstract/projects/issues/3926)) ([316eae54de82719dbbdc8cf9657597c00788a8fe](https://github.com/goabstract/projects/commit/316eae54de82719dbbdc8cf9657597c00788a8fe))
* **xd:** Build inspect text properties and get bounds for positioned text. ([#3917](https://github.com/goabstract/projects/issues/3917)) ([edb64899873ba41fe6829f81c25503e8545ff038](https://github.com/goabstract/projects/commit/edb64899873ba41fe6829f81c25503e8545ff038))


### Features

* **abstract-cli:** add layer filtering options ([#3929](https://github.com/goabstract/projects/issues/3929)) ([2acc7cefdabca7d9f4b44dd0f3eb8ab919d3b8d3](https://github.com/goabstract/projects/commit/2acc7cefdabca7d9f4b44dd0f3eb8ab919d3b8d3))
* **cli, abstractd:** fetch Metadata when cloning with go-git  ([#3939](https://github.com/goabstract/projects/issues/3939)) ([382a97604ba4c7650915fd0bc4ce50443a56d7db](https://github.com/goabstract/projects/commit/382a97604ba4c7650915fd0bc4ce50443a56d7db))



# [3.4.0](https://github.com/goabstract/projects/compare/cli@3.3.2...cli@3.4.0) (2020-01-22)


### Bug Fixes

* **cli,abstractd:** fix version being stuck to DEV + unpatched binaries ([1cec791af8c6e61c331813c874f4bc4c48aabf31](https://github.com/goabstract/projects/commit/1cec791af8c6e61c331813c874f4bc4c48aabf31))
* **xd:** Bump max file version to 2.7 for XD 26. ([#3896](https://github.com/goabstract/projects/issues/3896)) ([953c3c53b1cf8c7f3511b8cf80ed345474c709d6](https://github.com/goabstract/projects/commit/953c3c53b1cf8c7f3511b8cf80ed345474c709d6))


### Features

* **store:** add way of reading/writing tree entries directly in store ([#3839](https://github.com/goabstract/projects/issues/3839)) ([e680d2294b10b8a005bbc377e50de8d2b134c360](https://github.com/goabstract/projects/commit/e680d2294b10b8a005bbc377e50de8d2b134c360))



## [3.3.2](https://github.com/goabstract/projects/compare/cli@3.3.1...cli@3.3.2) (2020-01-16)


### Bug Fixes

* **cli:** Support v3 file info properties appVersion and appFileVersion. ([#3818](https://github.com/goabstract/projects/issues/3818)) ([4bdd2b51f8fe7e6bf0266d6f608f1e654379ba1d](https://github.com/goabstract/projects/commit/4bdd2b51f8fe7e6bf0266d6f608f1e654379ba1d))
* **cli,sketch:** Write document-level user preferences to document.json. ([#3825](https://github.com/goabstract/projects/issues/3825)) ([9b203afe1c4e6bafd017f15dbe284c3d95e9cf51](https://github.com/goabstract/projects/commit/9b203afe1c4e6bafd017f15dbe284c3d95e9cf51))
* **inspect,sketch:** Fixes override properties bug ([#3871](https://github.com/goabstract/projects/issues/3871)) ([e249ae4dcba9af6e6fb95574751029231c51fce9](https://github.com/goabstract/projects/commit/e249ae4dcba9af6e6fb95574751029231c51fce9))


### Features

* **gab:** migrate project fetch to gogit ([#3738](https://github.com/goabstract/projects/issues/3738)) ([082fcc565ce2cb1daa870797d48c328b76991ba5](https://github.com/goabstract/projects/commit/082fcc565ce2cb1daa870797d48c328b76991ba5))



## [3.3.1](https://github.com/goabstract/projects/compare/cli@3.3.0...cli@3.3.1) (2020-01-07)


### Bug Fixes

* **cli:** Remove temp directory created during clones. ([#3797](https://github.com/goabstract/projects/issues/3797)) ([faf6b5955f2335922c10f270fdad602cb325a644](https://github.com/goabstract/projects/commit/faf6b5955f2335922c10f270fdad602cb325a644))
* **gab,commits:** verify that start sha can be found in new branch commit list ([#3821](https://github.com/goabstract/projects/issues/3821)) ([d60d7a3c858d553c733f3d4c734dfb7015043bf7](https://github.com/goabstract/projects/commit/d60d7a3c858d553c733f3d4c734dfb7015043bf7))
* **xd,cli:** Handle e number notation in SVG values. ([#3737](https://github.com/goabstract/projects/issues/3737)) ([6adf273a3685308bc79993b9471479c6170a5bff](https://github.com/goabstract/projects/commit/6adf273a3685308bc79993b9471479c6170a5bff))


### Features

* **cli:** Empty the store's tmp directory on garbage-collect. ([#3806](https://github.com/goabstract/projects/issues/3806)) ([9eb343812a70d02c0a3980e2af47f8f764058aa8](https://github.com/goabstract/projects/commit/9eb343812a70d02c0a3980e2af47f8f764058aa8))
* **cli:** SwapLibraries -> desktop-api & it now finalizes the commit ([#3831](https://github.com/goabstract/projects/issues/3831)) ([10b19c958de20bcd9e00594242f8045b88b52378](https://github.com/goabstract/projects/commit/10b19c958de20bcd9e00594242f8045b88b52378))



# [3.3.0](https://github.com/goabstract/projects/compare/cli@3.1.3...cli@3.3.0) (2019-12-17)


### Bug Fixes

* **xd:** Bump supported XD file version to 2.6 (released with XD 25). ([#3757](https://github.com/goabstract/projects/issues/3757)) ([d38b3e6](https://github.com/goabstract/projects/commit/d38b3e6))
* **cli:** Gracefully handle Metadata calls with nil receiver. ([#3718](https://github.com/goabstract/projects/issues/3718)) ([4cc9278](https://github.com/goabstract/projects/commit/4cc9278))


### Features

* **abstractd,abstract-cli:** adds fetch,pull,push,repack, has-changes abstractd support ([#3694](https://github.com/goabstract/projects/issues/3694)) ([a943a13](https://github.com/goabstract/projects/commit/a943a13))
* **file,fileapi:** add new file api with v2 + v3 implementations ([#3556](https://github.com/goabstract/projects/issues/3556)) ([75c6afb](https://github.com/goabstract/projects/commit/75c6afb))
* **gab,abstract-cli:** expose size and size difference for changeset ([#3611](https://github.com/goabstract/projects/issues/3611)) ([6140810](https://github.com/goabstract/projects/commit/6140810))
* **object-history:** implement object history ([#3567](https://github.com/goabstract/projects/issues/3567)) ([b8c2516](https://github.com/goabstract/projects/commit/b8c2516))



# [3.2.0](https://github.com/goabstract/projects/compare/cli@3.1.3...cli@3.2.0) (2019-12-10)


### Features

* **abstractd,abstract-cli:** adds abstractd option to projects clone ([#3664](https://github.com/goabstract/projects/issues/3664)) ([cbded83](https://github.com/goabstract/projects/commit/cbded83))
* **cli,xd:** support for component states' interactions ([#3688](https://github.com/goabstract/projects/issues/3688)) ([7a696a0](https://github.com/goabstract/projects/commit/7a696a0))
* XD Path SVG parsing ([#3606](https://github.com/goabstract/projects/issues/3606)) ([2af083c](https://github.com/goabstract/projects/commit/2af083c))
* Add LayerData.properties.layout.axis and LayerData.proper… ([#3630](https://github.com/goabstract/projects/issues/3630)) ([de2a122](https://github.com/goabstract/projects/commit/de2a122))



## [3.1.3](https://github.com/goabstract/projects/compare/cli@3.1.2...cli@3.1.3) (2019-11-27)


### Bug Fixes

* **cli:** Use Close API when opening a file on a different branch. ([#3647](https://github.com/goabstract/projects/issues/3647)) ([a5c21e4](https://github.com/goabstract/projects/commit/a5c21e4))
* enterprise-trial does not override seat cap ([0f9a855](https://github.com/goabstract/projects/commit/0f9a855))
* **api:** throttling org/user/invitation endpoints ([#3641](https://github.com/goabstract/projects/issues/3641)) ([b746600](https://github.com/goabstract/projects/commit/b746600))
* move blocklist to env var ([#3640](https://github.com/goabstract/projects/issues/3640)) ([cfeda68](https://github.com/goabstract/projects/commit/cfeda68))
* update wording ([b13facd](https://github.com/goabstract/projects/commit/b13facd))
* **api:** Trial organizations must respect max seat capacity ([1f6a008](https://github.com/goabstract/projects/commit/1f6a008))



## [3.1.2](https://github.com/goabstract/projects/compare/cli@3.1.1...cli@3.1.2) (2019-11-25)


### Bug Fixes

* **api:** blocking IP address ([#3628](https://github.com/goabstract/projects/issues/3628)) ([11567ff](https://github.com/goabstract/projects/commit/11567ff))
* **cli,projects:** fix wrong permissions ([#3632](https://github.com/goabstract/projects/issues/3632)) ([c482c16](https://github.com/goabstract/projects/commit/c482c16))
* **xd-plugin:** Truncate long library names instead of wrapping. ([#3591](https://github.com/goabstract/projects/issues/3591)) ([b69408f](https://github.com/goabstract/projects/commit/b69408f))



## [3.1.1](https://github.com/goabstract/projects/compare/cli@3.1.0...cli@3.1.1) (2019-11-22)


### Bug Fixes

* **cli, log:** increase size of log files to 5MB ([#3608](https://github.com/goabstract/projects/issues/3608)) ([d29d71b](https://github.com/goabstract/projects/commit/d29d71b))
* **files,rename:** use json struct instead of gab struct for serialization ([#3622](https://github.com/goabstract/projects/issues/3622)) ([e28c247](https://github.com/goabstract/projects/commit/e28c247))
* **files,xd:** fix behavior of modifiedExternally flag ([#3505](https://github.com/goabstract/projects/issues/3505)) ([9c7c353](https://github.com/goabstract/projects/commit/9c7c353))
* **Security:** Invite w/email only accept by user w/ email ([#3610](https://github.com/goabstract/projects/issues/3610)) ([aa2c581](https://github.com/goabstract/projects/commit/aa2c581))
* **Security:** only include invitation URL when anonymous invitation ([#3603](https://github.com/goabstract/projects/issues/3603)) ([de68105](https://github.com/goabstract/projects/commit/de68105))


### Features

* **admin:** display info on expired subscriptions ([656d657](https://github.com/goabstract/projects/commit/656d657))
* ecs-run-shell + docker wrapper + multi-container tasks work correctly ([#3604](https://github.com/goabstract/projects/issues/3604)) ([753a499](https://github.com/goabstract/projects/commit/753a499))


# [3.1.0](https://github.com/goabstract/projects/compare/cli@3.0.0...cli@3.1.0) (2019-11-21)


### Bug Fixes

* always provide a non-null value for ChangesetChange.Meta ([#3585](https://github.com/goabstract/projects/issues/3585)) ([5c6b5d1](https://github.com/goabstract/projects/commit/5c6b5d1))
* properly parse previous link overrides. ([#3581](https://github.com/goabstract/projects/issues/3581)) ([71203d2](https://github.com/goabstract/projects/commit/71203d2))


### Features

* **notifications:** Notify users when mentioned in branch descriptions ([0bd87ff](https://github.com/goabstract/projects/commit/0bd87ff)), closes [#3580](https://github.com/goabstract/projects/issues/3580)
* add tgit gitnode vol ([#3574](https://github.com/goabstract/projects/issues/3574)) ([4eca3d2](https://github.com/goabstract/projects/commit/4eca3d2))
* create /mnt/cache/tgit in nvme-setup ([#3578](https://github.com/goabstract/projects/issues/3578)) ([a7121db](https://github.com/goabstract/projects/commit/a7121db))
* **tracing:** add a flag to filter which spans are logged ([#3582](https://github.com/goabstract/projects/issues/3582)) ([5cd602f](https://github.com/goabstract/projects/commit/5cd602f))



# [3.0.0](https://github.com/goabstract/projects/compare/cli@2.30.0...cli@3.0.0) (2019-11-18)


### Bug Fixes

* **SSO JIT:** cannot complete JIT process ([#3572](https://github.com/goabstract/projects/issues/3572)) ([1e2360c](https://github.com/goabstract/projects/commit/1e2360c1d25cb2f71b87b3caad54c968fadc7f51))


### Features

* **abstract-cli:** remove project in favor of projects ([#3564](https://github.com/goabstract/projects/issues/3564)) ([d87f361](https://github.com/goabstract/projects/commit/d87f3610786e42f4fa4059aca7b96fcaf677b464))
* **sketchtool:** --scale support ([#3566](https://github.com/goabstract/projects/issues/3566)) ([5116f4b](https://github.com/goabstract/projects/commit/5116f4b74d1d13786ac4e37f3e02e3cbe02c82c0))


### Performance Improvements

* **api:** split collection thumbnail update into separate jobs ([#3532](https://github.com/goabstract/projects/issues/3532)) ([8aec226](https://github.com/goabstract/projects/commit/8aec226e0b8c386cc12e9b6ca9a72138bd122baa))



# [2.30.0](https://github.com/goabstract/projects/compare/cli@2.29.0...cli@2.30.0) (2019-11-15)


### Bug Fixes

* **plugin:** prevent nil pointer dereference if notifier doesn't exist ([#3502](https://github.com/goabstract/projects/issues/3502)) ([f64c9a0](https://github.com/goabstract/projects/commit/f64c9a07a7c6393832a772a56b0e6c57eb57a540))
* add end quotes ([c5de612](https://github.com/goabstract/projects/commit/c5de6127e060dfaef7697e9abb38c5a0e4e8ef1b))
* add GITWORKER_DLQ_URL and allow api to manage gitworker queue messages ([#3540](https://github.com/goabstract/projects/issues/3540)) ([f9951c0](https://github.com/goabstract/projects/commit/f9951c011afdc77aaf709bdafe626b933486a940))
* sentry error complaining about nil invoice collection ([#3521](https://github.com/goabstract/projects/issues/3521)) ([af0035c](https://github.com/goabstract/projects/commit/af0035c3dbd09fa8ddb41758b9b051013f6e3230))
* update statuspage dns ([#3545](https://github.com/goabstract/projects/issues/3545)) ([83e54e8](https://github.com/goabstract/projects/commit/83e54e8e2aba0281b69bc65fa354c199f1637557))


### Features

* **previews:** Add `Scale` to SyncPreviewParams ([#3528](https://github.com/goabstract/projects/issues/3528)) ([a7d489a](https://github.com/goabstract/projects/commit/a7d489ab625319d8c03eac695a7c006171e49c51))
* **store:** add repo walk ([#3551](https://github.com/goabstract/projects/issues/3551)) ([be091fc](https://github.com/goabstract/projects/commit/be091fcf037cb889e98f02f5626c19fef4f33a5a))
* **store,diffs:** diff implementation for repo abstraction ([#3546](https://github.com/goabstract/projects/issues/3546)) ([7897b65](https://github.com/goabstract/projects/commit/7897b659682d25af32d36cf30c6f0adae15c3c64))
* **store,git2go:** repository abstraction ([#3538](https://github.com/goabstract/projects/issues/3538)) ([15affe2](https://github.com/goabstract/projects/commit/15affe2e6324dbfbb016b850b2aaadf168030de7))
* allow batch collection layer requests from SDK clients ([#3527](https://github.com/goabstract/projects/issues/3527)) ([d71d5af](https://github.com/goabstract/projects/commit/d71d5afd8568b61f523a35df3d7cb9fdd783ddc0))
* tgit migration support ([#3523](https://github.com/goabstract/projects/issues/3523)) ([bc041cd](https://github.com/goabstract/projects/commit/bc041cd0e5e9ad4d91a375ac6746f21e0de20e7f))


### Performance Improvements

* **gitapi:** Increase varnish cache TTL ([#3525](https://github.com/goabstract/projects/issues/3525)) ([65b75a3](https://github.com/goabstract/projects/commit/65b75a3786b5409362d33018ffa99d7355de5253))


### Reverts

* Revert "Fix Rubocop?" ([5112290](https://github.com/goabstract/projects/commit/5112290cd2b3332051b2d2cf7aeaff8755b84eeb))



# [2.29.0](https://github.com/goabstract/projects/compare/cli@2.28.1...cli@2.29.0) (2019-11-13)


### Bug Fixes

* **abstractd,start:** fix logs path + add sentry ([#3515](https://github.com/goabstract/projects/issues/3515)) ([aa4d3c2](https://github.com/goabstract/projects/commit/aa4d3c2))
* **cli:** Close files and checkout branch when opening a file on a different branch. ([#3475](https://github.com/goabstract/projects/issues/3475)) ([4c3b754](https://github.com/goabstract/projects/commit/4c3b754))



## [2.28.1](https://github.com/goabstract/projects/compare/cli@2.28.0...cli@2.28.1) (2019-11-13)


### Bug Fixes

* **api:** back out rake task for db:migrate:status ([e0c48b5](https://github.com/goabstract/projects/commit/e0c48b5))


### Features

* allow webhooks requests from SDK clients ([#3508](https://github.com/goabstract/projects/issues/3508)) ([6b4b068](https://github.com/goabstract/projects/commit/6b4b068))
* **api:** add migration and scripts ([af2bb9b](https://github.com/goabstract/projects/commit/af2bb9b))
* **api:** add migration for join exisiting org flag ([3427325](https://github.com/goabstract/projects/commit/3427325))
* **api:** add migrations and scripts ([cc2568b](https://github.com/goabstract/projects/commit/cc2568b))
* **api:** add seperate flags for join existing flow and access request by domain flow ([5120431](https://github.com/goabstract/projects/commit/5120431))


### Performance Improvements

* **gitapi, api:** Make sure head param is present ([#3510](https://github.com/goabstract/projects/issues/3510)) ([a798ab6](https://github.com/goabstract/projects/commit/a798ab6))
* **gitapi, api:** Varnish commits listing ([#3464](https://github.com/goabstract/projects/issues/3464)) ([4222baf](https://github.com/goabstract/projects/commit/4222baf))



# [2.28.0](https://github.com/goabstract/projects/compare/cli@2.27.0...cli@2.28.0) (2019-11-12)



# [2.27.0](https://github.com/goabstract/projects/compare/cli@2.26.0...cli@2.27.0) (2019-11-08)


### Bug Fixes

* **admin:** organization updates ([#3440](https://github.com/goabstract/projects/issues/3440)) ([859d391](https://github.com/goabstract/projects/commit/859d391))
* **plog:** add missing ... ([#3492](https://github.com/goabstract/projects/issues/3492)) ([d8ecf35](https://github.com/goabstract/projects/commit/d8ecf35))
* fix ordering of XD inspect layer data ([0b296a3](https://github.com/goabstract/projects/commit/0b296a3))


### Features

* **Admin:** Display Uncapped Growth instead of Empty ([#3447](https://github.com/goabstract/projects/issues/3447)) ([700a8da](https://github.com/goabstract/projects/commit/700a8da))
* **cli,xd:** read & write modifiedExternally manifest property ([#3473](https://github.com/goabstract/projects/issues/3473)) ([8f8526f](https://github.com/goabstract/projects/commit/8f8526f))
* **desktop-api, files:** add command to remove abstract files ([#3378](https://github.com/goabstract/projects/issues/3378)) ([9f6d3f4](https://github.com/goabstract/projects/commit/9f6d3f4))
* **gitbackup:** project whitelist ([#3332](https://github.com/goabstract/projects/issues/3332)) ([e5ea0ee](https://github.com/goabstract/projects/commit/e5ea0ee)), closes [#3477](https://github.com/goabstract/projects/issues/3477) [#3483](https://github.com/goabstract/projects/issues/3483)



# [2.26.0](https://github.com/goabstract/projects/compare/cli@2.25.0...cli@2.26.0) (2019-11-08)


### Bug Fixes

* **abstractd, abstract-cli:** better support for gRPC errors ([#3472](https://github.com/goabstract/projects/issues/3472)) ([f1f4c7f](https://github.com/goabstract/projects/commit/f1f4c7f))
* **xd-plugin:** always use latest sha for "Show in Abstract" ([#3412](https://github.com/goabstract/projects/issues/3412)) ([b6354d8](https://github.com/goabstract/projects/commit/b6354d8))


### Features

* **abstract-cli, abstractd, xd-plugin:** on branch name changed, update xd panel ([#3386](https://github.com/goabstract/projects/issues/3386)) ([33d65fb](https://github.com/goabstract/projects/commit/33d65fb))



# [2.25.0](https://github.com/goabstract/projects/compare/cli@2.24.0...cli@2.25.0) (2019-11-07)


### Bug Fixes

* lint on master ([#3485](https://github.com/goabstract/projects/issues/3485)) ([5598939](https://github.com/goabstract/projects/commit/5598939))
* **CommentPublisher:** sending comment notifications ([#3468](https://github.com/goabstract/projects/issues/3468)) ([81c89d0](https://github.com/goabstract/projects/commit/81c89d0))



# [2.24.0](https://github.com/goabstract/projects/compare/cli@2.23.0...cli@2.24.0) (2019-11-07)


### Bug Fixes

* **varnish:** Don't cache 404 responses ([#3470](https://github.com/goabstract/projects/issues/3470)) ([c601db5](https://github.com/goabstract/projects/commit/c601db5))
* add socket event for collection thumbnail updated ([8189a09](https://github.com/goabstract/projects/commit/8189a09))
* add socket event for collection thumbnail updated > > > Co-authored-by: Taylor Lapeyre <taylorlapeyre@gmail.com> ([3e7943d](https://github.com/goabstract/projects/commit/3e7943d))
* lint ([e9e8253](https://github.com/goabstract/projects/commit/e9e8253))


### Features

* **cli:** update file close api for XD to alert users of files to close ([#3469](https://github.com/goabstract/projects/issues/3469)) ([476fff8](https://github.com/goabstract/projects/commit/476fff8))
* **Uncapped Growth:** Allows uncapped growth of enterprise orgs ([#3425](https://github.com/goabstract/projects/issues/3425)) ([35b50ab](https://github.com/goabstract/projects/commit/35b50ab))


### Performance Improvements

* **gitapi, api:** Varnish commit changesets ([#3438](https://github.com/goabstract/projects/issues/3438)) ([e05ea7f](https://github.com/goabstract/projects/commit/e05ea7f))
* **gitapi, api:** Varnish file layer responses ([#3444](https://github.com/goabstract/projects/issues/3444)) ([905803e](https://github.com/goabstract/projects/commit/905803e))



# [2.23.0](https://github.com/goabstract/projects/compare/cli@2.22.0...cli@2.23.0) (2019-11-05)


### Bug Fixes

* **cli,xd-plugin:** Discard changes errors, check for open files if XD ([#3381](https://github.com/goabstract/projects/issues/3381)) ([443e9ca](https://github.com/goabstract/projects/commit/443e9ca))
* **gab:** Default branch status should be WIP ([#3443](https://github.com/goabstract/projects/issues/3443)) ([0ccecd1](https://github.com/goabstract/projects/commit/0ccecd1))
* **webhooksworker:** correctly bind delivery requests to validated IP addresses ([#3404](https://github.com/goabstract/projects/issues/3404)) ([e938321](https://github.com/goabstract/projects/commit/e938321))


### Features

* Add two new possible branch statuses ([#3445](https://github.com/goabstract/projects/issues/3445)) ([8f7f9a7](https://github.com/goabstract/projects/commit/8f7f9a7))
* **cli:** Send message to plugin when reading an unsupported XD file. ([#3421](https://github.com/goabstract/projects/issues/3421)) ([98163eb](https://github.com/goabstract/projects/commit/98163eb))
* **cli,projects:** add progress timeout on clone ([#3395](https://github.com/goabstract/projects/issues/3395)) ([1abb466](https://github.com/goabstract/projects/commit/1abb466))
* **uncapped growth:** update min seats from recurly webhooks quantity ([#3430](https://github.com/goabstract/projects/issues/3430)) ([2f6facf](https://github.com/goabstract/projects/commit/2f6facf))


### Performance Improvements

* **cli:** update libssl to 1.1 LTS ([#3239](https://github.com/goabstract/projects/issues/3239)) ([d63a6fe](https://github.com/goabstract/projects/commit/d63a6fe))



# [2.22.0](https://github.com/goabstract/projects/compare/cli@2.21.1...cli@2.22.0) (2019-11-04)


### Bug Fixes

* **api:** branch policy resolves restrictions based on given ids ([924d8f3](https://github.com/goabstract/projects/commit/924d8f3))
* **api:** branch status endpoint uses policy descriptor ([1ec503f](https://github.com/goabstract/projects/commit/1ec503f))
* **api:** branch status uses parentId query param ([b693f74](https://github.com/goabstract/projects/commit/b693f74))
* **api:** BranchPolicy accepts branch record or descriptor ([248acc7](https://github.com/goabstract/projects/commit/248acc7))
* **api:** require parent id when branch missing ([64bc90f](https://github.com/goabstract/projects/commit/64bc90f))
* **api:** update branch policy usage ([2f650ab](https://github.com/goabstract/projects/commit/2f650ab))
* **billing seats:** Adding/Removing seats now has a fallback if invoice preview fails ([#3420](https://github.com/goabstract/projects/issues/3420)) ([d8309c2](https://github.com/goabstract/projects/commit/d8309c2))
* **gab:** out of bounds error for attributedString text properties ([#3387](https://github.com/goabstract/projects/issues/3387)) ([398aa2f](https://github.com/goabstract/projects/commit/398aa2f))
* **SSO:** removing email exceptions no longer results in "enabling" SSO for multiple orgs ([#3380](https://github.com/goabstract/projects/issues/3380)) ([fe26ebf](https://github.com/goabstract/projects/commit/fe26ebf))
* **Wix.com script:** 🙈 ([#3414](https://github.com/goabstract/projects/issues/3414)) ([673decc](https://github.com/goabstract/projects/commit/673decc))
* **xd:** Updated XD plugin client ID to new file ref format. ([#3406](https://github.com/goabstract/projects/issues/3406)) ([55737d1](https://github.com/goabstract/projects/commit/55737d1))
* Next Payment amount sometimes displaying large negative numbers ([#3399](https://github.com/goabstract/projects/issues/3399)) ([7a669a0](https://github.com/goabstract/projects/commit/7a669a0))
* **webhookworker:** disable delivering direct to ip addrs ([#3400](https://github.com/goabstract/projects/issues/3400)) ([7d8c385](https://github.com/goabstract/projects/commit/7d8c385))


### Features

* add action to retrieve assets for a file ([#3398](https://github.com/goabstract/projects/issues/3398)) ([d503ff0](https://github.com/goabstract/projects/commit/d503ff0))
* **api:** add Branch.guid ([38326f1](https://github.com/goabstract/projects/commit/38326f1))
* **api:** branch status endpoint handle missing branches ([a620e38](https://github.com/goabstract/projects/commit/a620e38))


### Performance Improvements

* **previews:** Don't error on existing uploaded preview ([#3407](https://github.com/goabstract/projects/issues/3407)) ([ca55ab2](https://github.com/goabstract/projects/commit/ca55ab2))



## [2.21.1](https://github.com/goabstract/projects/compare/cli@2.21.0...cli@2.21.1) (2019-10-30)


### Features

* **webhooks,webhooksworker:** blacklist ip addr ranges ([#3356](https://github.com/goabstract/projects/issues/3356)) ([a69d20f](https://github.com/goabstract/projects/commit/a69d20f))



# [2.21.0](https://github.com/goabstract/projects/compare/cli@2.20.0...cli@2.21.0) (2019-10-30)


### Bug Fixes

* **assets:** don't read xd files as sketch files (or at all) when checking for changed assets ([#3361](https://github.com/goabstract/projects/issues/3361)) ([c19a503](https://github.com/goabstract/projects/commit/c19a503))
* **xd,inspect:** Gave groups in a repeat grid the name "Repeat Group". ([#3293](https://github.com/goabstract/projects/issues/3293)) ([07f7853](https://github.com/goabstract/projects/commit/07f7853))
* Link to Sentry user errors report changed ([#3353](https://github.com/goabstract/projects/issues/3353)) ([7b78685](https://github.com/goabstract/projects/commit/7b78685))


### Features

* parse overrides for prototype data ([#3384](https://github.com/goabstract/projects/issues/3384)) ([a092a64](https://github.com/goabstract/projects/commit/a092a64))
* **Admin:** Add Project Sections ([#3364](https://github.com/goabstract/projects/issues/3364)) ([3817f78](https://github.com/goabstract/projects/commit/3817f78))
* add uncapped growth feature flag ([#3347](https://github.com/goabstract/projects/issues/3347)) ([641a573](https://github.com/goabstract/projects/commit/641a573))
* **api:** expire tokens when password is changed or reset ([#3313](https://github.com/goabstract/projects/issues/3313)) ([d2e6290](https://github.com/goabstract/projects/commit/d2e6290))
* enable CORS ([#3272](https://github.com/goabstract/projects/issues/3272)) ([93ad6aa](https://github.com/goabstract/projects/commit/93ad6aa))
* **api:** add section names to access request email + use presenter ([#3092](https://github.com/goabstract/projects/issues/3092)) ([b1b8db6](https://github.com/goabstract/projects/commit/b1b8db6))
* **api:** Return error to client on project name conflict ([#3121](https://github.com/goabstract/projects/issues/3121)) ([ab1e0a9](https://github.com/goabstract/projects/commit/ab1e0a9))
* **api,webhooks,webhooksworker:** implement support for manual retry of deliveries ([#3207](https://github.com/goabstract/projects/issues/3207)) ([d5dea2d](https://github.com/goabstract/projects/commit/d5dea2d))
* **desktop-api,cli,abstractd:** Version bound guards ([#3273](https://github.com/goabstract/projects/issues/3273)) ([412cd6f](https://github.com/goabstract/projects/commit/412cd6f))


### Performance Improvements

* **api, gitapi:** Varnish branch changesets ([#3355](https://github.com/goabstract/projects/issues/3355)) ([5c3be9e](https://github.com/goabstract/projects/commit/5c3be9e))



# [2.20.0](https://github.com/goabstract/projects/compare/cli@2.19.0...cli@2.20.0) (2019-10-16)


### Features

* **abstractd,tracing:** add trace endpoint to abstractd ([#3284](https://github.com/goabstract/projects/issues/3284)) ([4ba1c43](https://github.com/goabstract/projects/commit/4ba1c43)), closes [#3257](https://github.com/goabstract/projects/issues/3257)
* **api:** [Core-717] Update project memberships #index to accept a search query ([#3027](https://github.com/goabstract/projects/issues/3027)) ([1a4b011](https://github.com/goabstract/projects/commit/1a4b011))
* **docker, infra:** Publish Docker images to Docker Hub and ECR ([#3335](https://github.com/goabstract/projects/issues/3335)) ([b5eb30f](https://github.com/goabstract/projects/commit/b5eb30f))



# [2.19.0](https://github.com/goabstract/projects/compare/cli@2.18.1...cli@2.19.0) (2019-10-16)


### Features

* **abstractd, xd-plugin:** use of skipResponse message option ([#3308](https://github.com/goabstract/projects/issues/3308)) ([725c65e](https://github.com/goabstract/projects/commit/725c65e))



## [2.18.1](https://github.com/goabstract/projects/compare/cli@2.18.0...cli@2.18.1) (2019-10-15)


### Bug Fixes

* **sso, admin:** extend admin sso timeout ([#3325](https://github.com/goabstract/projects/issues/3325)) ([ffa0865](https://github.com/goabstract/projects/commit/ffa0865))


### Features

* **api:** add branch policy to branch status envelope ([aad6943](https://github.com/goabstract/projects/commit/aad6943))
* **api, lita:** api db migration status script ([#3319](https://github.com/goabstract/projects/issues/3319)) ([58c174e](https://github.com/goabstract/projects/commit/58c174e))



# [2.18.0](https://github.com/goabstract/projects/compare/cli@2.17.0...cli@2.18.0) (2019-10-14)


### Bug Fixes

* OrgDestroyedJob - delete_all on Assets ([#3314](https://github.com/goabstract/projects/issues/3314)) ([c1bb2c3](https://github.com/goabstract/projects/commit/c1bb2c3))
* **desktop-api,files:** fix guard scope when renaming a branch ([#3299](https://github.com/goabstract/projects/issues/3299)) ([4ba4185](https://github.com/goabstract/projects/commit/4ba4185)), closes [/github.com/goabstract/ui/blob/c888fff41db61ad1a54dee396f13f969b920573e/desktop/app/commands/branches.js#L344](https://github.com//github.com/goabstract/ui/blob/c888fff41db61ad1a54dee396f13f969b920573e/desktop/app/commands/branches.js/issues/L344)
* **desktop-api,go-git:** Remove the 5 minute timeout on go-git ([#3297](https://github.com/goabstract/projects/issues/3297)) ([39cf61e](https://github.com/goabstract/projects/commit/39cf61e))
* Document inspect exports ([bde2951](https://github.com/goabstract/projects/commit/bde2951))
* private project admins included org level owners ([#3295](https://github.com/goabstract/projects/issues/3295)) ([f3c2661](https://github.com/goabstract/projects/commit/f3c2661)), closes [#2](https://github.com/goabstract/projects/issues/2)
* symbolId -> symbolID ([8740091](https://github.com/goabstract/projects/commit/8740091))
* **docker-compose:** set webhook service names ([20fcd2c](https://github.com/goabstract/projects/commit/20fcd2c))
* **infra:** nvme disk race condition ([7bd3497](https://github.com/goabstract/projects/commit/7bd3497))


### Features

* **lita:** handler to migrate api db ([#3294](https://github.com/goabstract/projects/issues/3294)) ([869a695](https://github.com/goabstract/projects/commit/869a695))
* **xd,inspect:** Added XD border data to inspect panel. ([#3291](https://github.com/goabstract/projects/issues/3291)) ([261234d](https://github.com/goabstract/projects/commit/261234d))
* **xd,inspect:** Added XD shape fill data to inspect panel. ([#3264](https://github.com/goabstract/projects/issues/3264)) ([c0a011b](https://github.com/goabstract/projects/commit/c0a011b))
* **xd,inspect:** Pulled rotation and isLocked from XD for inspect. ([#3309](https://github.com/goabstract/projects/issues/3309)) ([dd18be1](https://github.com/goabstract/projects/commit/dd18be1))



# [2.17.0](https://github.com/goabstract/projects/compare/cli@2.16.0...cli@2.17.0) (2019-10-10)


### Bug Fixes

* **desktop-api,files:** prevent file renames if branch has uncommitted changes ([#3276](https://github.com/goabstract/projects/issues/3276)) ([e3dcfee](https://github.com/goabstract/projects/commit/e3dcfee))


### Features

* **abstract-cli,abstractd,tracing:** enable jaeger tracing in debug ([#3283](https://github.com/goabstract/projects/issues/3283)) ([71c7e94](https://github.com/goabstract/projects/commit/71c7e94))
* **xd-plugin:** add support for all panel links ([#3280](https://github.com/goabstract/projects/issues/3280)) ([615675a](https://github.com/goabstract/projects/commit/615675a))



# [2.16.0](https://github.com/goabstract/projects/compare/cli@2.15.0...cli@2.16.0) (2019-10-09)


### Bug Fixes

* backend restriction for SCIM & JIT users managing profile information ([#3258](https://github.com/goabstract/projects/issues/3258)) ([134feab](https://github.com/goabstract/projects/commit/134feab))


### Features

* **abstractd:** add a resource watcher ([#1948](https://github.com/goabstract/projects/issues/1948)) ([3a7f6fa](https://github.com/goabstract/projects/commit/3a7f6fa))
* **api:** add branch restriction info to admin ([531c29b](https://github.com/goabstract/projects/commit/531c29b))
* **cli:** Added files create command to create a new Abstract file. ([#3252](https://github.com/goabstract/projects/issues/3252)) ([462a19b](https://github.com/goabstract/projects/commit/462a19b))



# [2.15.0](https://github.com/goabstract/projects/compare/cli@2.14.0...cli@2.15.0) (2019-10-07)


### Bug Fixes

* change error message for when JIT is not enabled ([#3236](https://github.com/goabstract/projects/issues/3236)) ([656c8c7](https://github.com/goabstract/projects/commit/656c8c7))
* username collisions errors ([#3243](https://github.com/goabstract/projects/issues/3243)) ([24004de](https://github.com/goabstract/projects/commit/24004de))
* **gitbackup:** Correctly set isDir ([69bfea4](https://github.com/goabstract/projects/commit/69bfea4))


### Features

* **desktop-api,branches:** add command to create diverged branch ([#3227](https://github.com/goabstract/projects/issues/3227)) ([6dc26d4](https://github.com/goabstract/projects/commit/6dc26d4))
* **infra:** Codify all AWS users, groups, policies, and roles ([#3259](https://github.com/goabstract/projects/issues/3259)) ([84c2513](https://github.com/goabstract/projects/commit/84c2513))
* **infra:** warehouse-ad-hoc task definition ([#3198](https://github.com/goabstract/projects/issues/3198)) ([059ceb6](https://github.com/goabstract/projects/commit/059ceb6))
* **lita-deploy:** deployable warehouse-ad-hoc ([#3235](https://github.com/goabstract/projects/issues/3235)) ([6ce56b8](https://github.com/goabstract/projects/commit/6ce56b8))
* **warehouse-dump:** warehouse-ad-hoc script ([#3246](https://github.com/goabstract/projects/issues/3246)) ([23d558a](https://github.com/goabstract/projects/commit/23d558a))
* **xd-plugin:** show a message if panel is open on a non abstract file ([#3229](https://github.com/goabstract/projects/issues/3229)) ([515b94b](https://github.com/goabstract/projects/commit/515b94b))
* Add git CDN flag ([#3221](https://github.com/goabstract/projects/issues/3221)) ([c46d54f](https://github.com/goabstract/projects/commit/c46d54f))
* remove emails from webhook delivery payloads ([#3242](https://github.com/goabstract/projects/issues/3242)) ([5e3ffd1](https://github.com/goabstract/projects/commit/5e3ffd1))



# [2.14.0](https://github.com/goabstract/projects/compare/cli@2.13.0...cli@2.14.0) (2019-10-02)


### Bug Fixes

* **gab:** stop checking out when finalizing a commit ([#3206](https://github.com/goabstract/projects/issues/3206)) ([bb91d9f](https://github.com/goabstract/projects/commit/bb91d9f))


### Features

* parse grid, guide, and layout data from sketch files ([#3190](https://github.com/goabstract/projects/issues/3190)) ([06025d4](https://github.com/goabstract/projects/commit/06025d4))



# [2.13.0](https://github.com/goabstract/projects/compare/cli@2.12.0...cli@2.13.0) (2019-10-01)


### Bug Fixes

* **inspect,xd:** Better group bounds parsing for inspect with XD. ([#3202](https://github.com/goabstract/projects/issues/3202)) ([a7da99b](https://github.com/goabstract/projects/commit/a7da99b))
* membership changes affect branch policy and reviews ([012e47c](https://github.com/goabstract/projects/commit/012e47c))



# [2.12.0](https://github.com/goabstract/projects/compare/cli@2.11.0...cli@2.12.0) (2019-10-01)


### Bug Fixes

* **api:** nullify current_share_link if project is deleted ([#3150](https://github.com/goabstract/projects/issues/3150)) ([11ce512](https://github.com/goabstract/projects/commit/11ce512))
* **assets:** add guard around only exporting assets for supported file types ([#3194](https://github.com/goabstract/projects/issues/3194)) ([adda035](https://github.com/goabstract/projects/commit/adda035))
* **gab:** use calculated `branch.StartedAtSHA` instead of `branch.OriginalStartedAtSHA` for commit logs ([#3154](https://github.com/goabstract/projects/issues/3154)) ([b1174bf](https://github.com/goabstract/projects/commit/b1174bf))
* **plugin:** add context to openShareLinkRequest ([#3203](https://github.com/goabstract/projects/issues/3203)) ([2c29915](https://github.com/goabstract/projects/commit/2c29915))
* **tracing:** Depend on jaeger service. ([31cda3f](https://github.com/goabstract/projects/commit/31cda3f))
* **xd:** Added fallback shape type parsing for shapes with custom names. ([#3199](https://github.com/goabstract/projects/issues/3199)) ([4d4895a](https://github.com/goabstract/projects/commit/4d4895a))
* **xd:** resource files written by their name instead of id to match XD convention, ensure artboard paths match id ([#3185](https://github.com/goabstract/projects/issues/3185)) ([9534042](https://github.com/goabstract/projects/commit/9534042))
* updates to organization memberships send project membership updates too ([2ed0200](https://github.com/goabstract/projects/commit/2ed0200))


### Features

* **abstract-cli,files:** add scale as optional param to generate previews ([#3222](https://github.com/goabstract/projects/issues/3222)) ([59abcd2](https://github.com/goabstract/projects/commit/59abcd2))
* flag JIT provisioned users on post saml request ([#3188](https://github.com/goabstract/projects/issues/3188)) ([8d1b39a](https://github.com/goabstract/projects/commit/8d1b39a))
* **xd:** Supported name and type properties for inspect. ([#3130](https://github.com/goabstract/projects/issues/3130)) ([fb88207](https://github.com/goabstract/projects/commit/fb88207))
* **xd-plugin:** Add preview generation file message ([#3182](https://github.com/goabstract/projects/issues/3182)) ([ff26bd3](https://github.com/goabstract/projects/commit/ff26bd3))
* **xd-plugin:** show in abstract find root node and display in on desktop ([#3192](https://github.com/goabstract/projects/issues/3192)) ([74c4a44](https://github.com/goabstract/projects/commit/74c4a44))
* **xd-plugin, abstractd:** Add "More options…" for commit ([#3139](https://github.com/goabstract/projects/issues/3139)) ([ca18302](https://github.com/goabstract/projects/commit/ca18302))


### Performance Improvements

* **api:** prewarm collections on push ([#3127](https://github.com/goabstract/projects/issues/3127)) ([3695184](https://github.com/goabstract/projects/commit/3695184))



# [2.11.0](https://github.com/goabstract/projects/compare/cli@2.10.0...cli@2.11.0) (2019-09-25)


### Bug Fixes

* **ci:** Upgrade to 1.0.2t ([#3152](https://github.com/goabstract/projects/issues/3152)) ([c6a8dc3](https://github.com/goabstract/projects/commit/c6a8dc3))
* **gitproxy:** remove 10-15 ([#3167](https://github.com/goabstract/projects/issues/3167)) ([2c82c1a](https://github.com/goabstract/projects/commit/2c82c1a))
* **infra:** handle paginated responses ([#3156](https://github.com/goabstract/projects/issues/3156)) ([a8a855b](https://github.com/goabstract/projects/commit/a8a855b))
* **infra, ansible:** pin awscli version ([#3169](https://github.com/goabstract/projects/issues/3169)) ([dec0790](https://github.com/goabstract/projects/commit/dec0790))
* **webhooks:** Update sorting for TestGettingAllDeliveries() ([#3161](https://github.com/goabstract/projects/issues/3161)) ([5632dc4](https://github.com/goabstract/projects/commit/5632dc4))
* commits#changeset validates userId ([e2ad3fb](https://github.com/goabstract/projects/commit/e2ad3fb))
* sort webhook deliveries by descending creation date ([#3158](https://github.com/goabstract/projects/issues/3158)) ([a4922e2](https://github.com/goabstract/projects/commit/a4922e2))


### Features

* **abstract-cli, abstractd, xd-plugin:** handle project notify-commit cmd ([#3123](https://github.com/goabstract/projects/issues/3123)) ([5f6a43c](https://github.com/goabstract/projects/commit/5f6a43c))
* **api:** Add CollectionReorderer command to deal with correct collection repositioning ([#3120](https://github.com/goabstract/projects/issues/3120)) ([1a39a0f](https://github.com/goabstract/projects/commit/1a39a0f))
* **cli:** Added current page ID and selected layer ID to quick commit. ([#3108](https://github.com/goabstract/projects/issues/3108)) ([6fcef40](https://github.com/goabstract/projects/commit/6fcef40))
* **infra:** allow data team to run ad-hoc warehouse-dump tasks ([#3159](https://github.com/goabstract/projects/issues/3159)) ([21f4dfc](https://github.com/goabstract/projects/commit/21f4dfc))
* **inspect:** Added bounds data to inspect for XD files. ([#3084](https://github.com/goabstract/projects/issues/3084)) ([f9bd55b](https://github.com/goabstract/projects/commit/f9bd55b))


### Performance Improvements

* **gitapi:** Avoid nil page panic ([528eb67](https://github.com/goabstract/projects/commit/528eb67))



# [2.10.0](https://github.com/goabstract/projects/compare/cli@2.9.0...cli@2.10.0) (2019-09-23)


### Bug Fixes

* **deployer:** rescue StandardError while polling deploy status ([#3144](https://github.com/goabstract/projects/issues/3144)) ([3ab2400](https://github.com/goabstract/projects/commit/3ab2400))
* **infra, ors:** dont remove permissions from default queue ([#3136](https://github.com/goabstract/projects/issues/3136)) ([06df29b](https://github.com/goabstract/projects/commit/06df29b))
* puma threads goes :boom: if min threads > max threads ([#3124](https://github.com/goabstract/projects/issues/3124)) ([dd9673f](https://github.com/goabstract/projects/commit/dd9673f))
* Users no longer receive 404 error on log in on old clients ([#3135](https://github.com/goabstract/projects/issues/3135)) ([86094c1](https://github.com/goabstract/projects/commit/86094c1))


### Features

* Allow AccountCreator to create accounts with matching emailDomain ([#3113](https://github.com/goabstract/projects/issues/3113)) ([0b67cfa](https://github.com/goabstract/projects/commit/0b67cfa))
* SP-initiated LOGIN, redirect to IdP for authentication (JIT) ([#3109](https://github.com/goabstract/projects/issues/3109)) ([1b94227](https://github.com/goabstract/projects/commit/1b94227))
* **ansinfra:** add ors sqs queue, api-queue-ors service ([#3126](https://github.com/goabstract/projects/issues/3126)) ([f7290fd](https://github.com/goabstract/projects/commit/f7290fd))
* allow migrating projects only during org merge ([a09e23b](https://github.com/goabstract/projects/commit/a09e23b))


### Performance Improvements

* **api, gitapi:** Allow 408s to get back through Rails ([de3689f](https://github.com/goabstract/projects/commit/de3689f))



# [2.9.0](https://github.com/goabstract/projects/compare/cli@2.8.0...cli@2.9.0) (2019-09-18)


### Bug Fixes

* add API_URL to dev environment for auth ([6097df7](https://github.com/goabstract/projects/commit/6097df7))
* API_URL should reference api over localhost ([4e92a62](https://github.com/goabstract/projects/commit/4e92a62))
* **gitapi:** Handle errors with appropriate codes ([4ea0b9d](https://github.com/goabstract/projects/commit/4ea0b9d))


### Features

* **api:** add comment events and notify webhooks ([#2962](https://github.com/goabstract/projects/issues/2962)) ([7638706](https://github.com/goabstract/projects/commit/7638706))
* **collections:** modified branchFilter for new collections header ([#3112](https://github.com/goabstract/projects/issues/3112)) ([3257111](https://github.com/goabstract/projects/commit/3257111))
* **webhooks:** impl support for toggling active status of subscriptions ([#3078](https://github.com/goabstract/projects/issues/3078)) ([0d904de](https://github.com/goabstract/projects/commit/0d904de))


### Performance Improvements

* **gab, gitapi:** Improve history perf for files ([7896d16](https://github.com/goabstract/projects/commit/7896d16))



# [2.8.0](https://github.com/goabstract/projects/compare/cli@2.7.2...cli@2.8.0) (2019-09-17)


### Bug Fixes

* **infra:** unused secgroup ([#3097](https://github.com/goabstract/projects/issues/3097)) ([81a0a5f](https://github.com/goabstract/projects/commit/81a0a5f))
* broken specs ([#3093](https://github.com/goabstract/projects/issues/3093)) ([7d9d2ce](https://github.com/goabstract/projects/commit/7d9d2ce))
* **gitapi:** disable using open repositories to stabilize ([#3094](https://github.com/goabstract/projects/issues/3094)) ([fbc10eb](https://github.com/goabstract/projects/commit/fbc10eb))
* CollectionPage spec ([a30f3c5](https://github.com/goabstract/projects/commit/a30f3c5)), closes [#254](https://github.com/goabstract/projects/issues/254)
* **gitapi,inspect:** return an error in inspect if file type is not sketch ([#3073](https://github.com/goabstract/projects/issues/3073)) ([6604c9e](https://github.com/goabstract/projects/commit/6604c9e))


### Features

* Add "move" endpoint to collections_controller ([#3068](https://github.com/goabstract/projects/issues/3068)) ([4e3a5fa](https://github.com/goabstract/projects/commit/4e3a5fa))
* allow email domain to be set if JIT provisioning is enabled ([#3095](https://github.com/goabstract/projects/issues/3095)) ([aec5b6c](https://github.com/goabstract/projects/commit/aec5b6c))
* **xd:** show in abstract & manifest min version bump ([#3096](https://github.com/goabstract/projects/issues/3096)) ([f2eabc9](https://github.com/goabstract/projects/commit/f2eabc9))
* send gdpr email on member remove or leave ([#3089](https://github.com/goabstract/projects/issues/3089)) ([a3cf98e](https://github.com/goabstract/projects/commit/a3cf98e))
* **infra:** Deploy Datadog monitor to staging ([#3087](https://github.com/goabstract/projects/issues/3087)) ([28ca006](https://github.com/goabstract/projects/commit/28ca006))
* **infra:** Grant Tyler Marshall SSH access ([#3040](https://github.com/goabstract/projects/issues/3040)) ([98cb24f](https://github.com/goabstract/projects/commit/98cb24f))
* **xd:** Beginning work for XD inspect layer data. ([#3023](https://github.com/goabstract/projects/issues/3023)) ([9e28040](https://github.com/goabstract/projects/commit/9e28040))


### Performance Improvements

* **gitapi:** commits and collections use open repos ([77ce9bc](https://github.com/goabstract/projects/commit/77ce9bc))



## [2.7.2](https://github.com/goabstract/projects/compare/cli@2.7.1...cli@2.7.2) (2019-09-13)


### Bug Fixes

* **ci:** force libssh version ([#3070](https://github.com/goabstract/projects/issues/3070)) ([8f99faa](https://github.com/goabstract/projects/commit/8f99faa))
* filter layer links that link to nonexistent layers. ([#3034](https://github.com/goabstract/projects/issues/3034)) ([9b8df53](https://github.com/goabstract/projects/commit/9b8df53))
* Sentry Error undefined method .head for Nil ([ff26487](https://github.com/goabstract/projects/commit/ff26487))


### Features

* **infra:** Add Atlantis application to Fargate ([#3060](https://github.com/goabstract/projects/issues/3060)) ([bc97905](https://github.com/goabstract/projects/commit/bc97905))
* Allow collections' order to be changed and sent down in the api ([#3059](https://github.com/goabstract/projects/issues/3059)) ([4b5021c](https://github.com/goabstract/projects/commit/4b5021c))
* **db:** add order column to collections table, and send it down in API ([#3055](https://github.com/goabstract/projects/issues/3055)) ([c777b32](https://github.com/goabstract/projects/commit/c777b32))


### Performance Improvements

* Remove project.userIds from all payloads ([#3066](https://github.com/goabstract/projects/issues/3066)) ([21c4de9](https://github.com/goabstract/projects/commit/21c4de9))



## [2.7.1](https://github.com/goabstract/projects/compare/cli@2.7.0...cli@2.7.1) (2019-09-12)


### Bug Fixes

* **gitapi:** remove call to free while purging open repos ([96cc1cc](https://github.com/goabstract/projects/commit/96cc1cc))


### Features

* **collections:** add branchStatus param to Project Collections request ([#3036](https://github.com/goabstract/projects/issues/3036)) ([ec0bc62](https://github.com/goabstract/projects/commit/ec0bc62))
* **flipper:** Adds new package & interface for checking if feature ([#3005](https://github.com/goabstract/projects/issues/3005)) ([b1b5ecd](https://github.com/goabstract/projects/commit/b1b5ecd))
* **infra:** configure nessusagent for tenable ([#3030](https://github.com/goabstract/projects/issues/3030)) ([a588310](https://github.com/goabstract/projects/commit/a588310))
* **stats:** update stats lib to take custom agent host and port ([#3033](https://github.com/goabstract/projects/issues/3033)) ([a8b1c68](https://github.com/goabstract/projects/commit/a8b1c68))
* **webhooksworker:** disable following redirects for webhooks deliveries ([#3009](https://github.com/goabstract/projects/issues/3009)) ([1ea87ec](https://github.com/goabstract/projects/commit/1ea87ec))
* **xd:** sort assets by list view position or default to ID ([#3022](https://github.com/goabstract/projects/issues/3022)) ([257d0c9](https://github.com/goabstract/projects/commit/257d0c9))


### Performance Improvements

* **gitapi:** change open repo purge period to 20 minutes ([c579573](https://github.com/goabstract/projects/commit/c579573))
* **gitapi:** undo change to cache open repos ([cabdf7b](https://github.com/goabstract/projects/commit/cabdf7b))



# [2.7.0](https://github.com/goabstract/projects/compare/cli@2.6.1...cli@2.7.0) (2019-09-10)


### Bug Fixes

* membership.user_id over membership.user.id ([6154a53](https://github.com/goabstract/projects/commit/6154a53))
* policy fetch is required when a branch is created ([58e711b](https://github.com/goabstract/projects/commit/58e711b))
* use project_id from route to prevent unauthorized writes to a project's assets ([#3017](https://github.com/goabstract/projects/issues/3017)) ([06f094c](https://github.com/goabstract/projects/commit/06f094c))
* **abstractd:** fix a race in the update config method ([#2969](https://github.com/goabstract/projects/issues/2969)) ([138e38b](https://github.com/goabstract/projects/commit/138e38b))
* **api:** notify sockets after access requests grant creates project membership ([#2982](https://github.com/goabstract/projects/issues/2982)) ([a8a6cac](https://github.com/goabstract/projects/commit/a8a6cac))
* **api:** require policy fetch on branch create/update ([743f636](https://github.com/goabstract/projects/commit/743f636))
* **gab:** revert fix merge state almost always returning CLEAN ([e9f5615](https://github.com/goabstract/projects/commit/e9f5615))
* **gab,clone:** fix a race in the clone progress ([#2968](https://github.com/goabstract/projects/issues/2968)) ([ac848c2](https://github.com/goabstract/projects/commit/ac848c2))
* **gitbackup:** config default max age to 336h ([ac5b193](https://github.com/goabstract/projects/commit/ac5b193))
* **gitbackup:** correct directories, only mark dirs, ignore path err ([2feb627](https://github.com/goabstract/projects/commit/2feb627))
* **gitbackup:** gitkeep the ./tmp/gitclone-prune/staging dir ([fcae883](https://github.com/goabstract/projects/commit/fcae883))
* **gitbackup:** prune uses fixed point in time ([b147439](https://github.com/goabstract/projects/commit/b147439))
* **open:** If existing metadata is nil, gracefully handle and continue. ([#2984](https://github.com/goabstract/projects/issues/2984)) ([f39aab7](https://github.com/goabstract/projects/commit/f39aab7))
* **plog:** change set to track keys ([57dfe20](https://github.com/goabstract/projects/commit/57dfe20))
* **webhooksworker:** cleanup delivery response handing ([#3002](https://github.com/goabstract/projects/issues/3002)) ([4159606](https://github.com/goabstract/projects/commit/4159606))
* **xd-plugin:** connectToAbstractWithRetries is now async ([e27f07f](https://github.com/goabstract/projects/commit/e27f07f))
* **xd-plugin:** dialogs design ([#3004](https://github.com/goabstract/projects/issues/3004)) ([f79f730](https://github.com/goabstract/projects/commit/f79f730))
* test timing ([55a640b](https://github.com/goabstract/projects/commit/55a640b))
* test uses timestamp to calculate max age ([2d640de](https://github.com/goabstract/projects/commit/2d640de))
* tests, better error message for unmarshal panic ([80b0934](https://github.com/goabstract/projects/commit/80b0934))


### Features

* MembershipUpdatedJob sends MEMBER_UPDATED ([422b24a](https://github.com/goabstract/projects/commit/422b24a))
* **admin:** display new signup data on admin models ([#2986](https://github.com/goabstract/projects/issues/2986)) ([0314ac6](https://github.com/goabstract/projects/commit/0314ac6))
* **api:** adds migration for new sales data columns ([#2936](https://github.com/goabstract/projects/issues/2936)) ([45a8097](https://github.com/goabstract/projects/commit/45a8097))
* **api:** Merge Restrictions update REVIEW_REQUESTED activity ([#2961](https://github.com/goabstract/projects/issues/2961)) ([01a781a](https://github.com/goabstract/projects/commit/01a781a))
* **api:** save and sync new salesforce signup data ([#2979](https://github.com/goabstract/projects/issues/2979)) ([a26b35c](https://github.com/goabstract/projects/commit/a26b35c))
* **desktop-api,branch:** add merge command ([#2965](https://github.com/goabstract/projects/issues/2965)) ([ed76f4f](https://github.com/goabstract/projects/commit/ed76f4f))
* **gab:** include file type for local libraries ([#2948](https://github.com/goabstract/projects/issues/2948)) ([8e919d7](https://github.com/goabstract/projects/commit/8e919d7))
* **gitbackup:** backup job removes the mark for the project ([dd5d7b1](https://github.com/goabstract/projects/commit/dd5d7b1))
* **gitbackup:** call prune job ([7f17113](https://github.com/goabstract/projects/commit/7f17113))
* **gitbackup:** cron job to send gitbackup prune job ([e14c238](https://github.com/goabstract/projects/commit/e14c238))
* **gitbackup:** enable pruning config ([959ab64](https://github.com/goabstract/projects/commit/959ab64))
* **gitbackup:** prune command ([6dd9b36](https://github.com/goabstract/projects/commit/6dd9b36))
* **gitbackup:** prune configurations ([5a4f22d](https://github.com/goabstract/projects/commit/5a4f22d))
* **gitbackup:** prune honors repolocker ([40b6b26](https://github.com/goabstract/projects/commit/40b6b26))
* **gitbackup:** prune job ([a37335b](https://github.com/goabstract/projects/commit/a37335b))
* **gitbackup:** pruning dry run ([3faab4e](https://github.com/goabstract/projects/commit/3faab4e))
* **infra:** update Go to 1.13 ([#2988](https://github.com/goabstract/projects/issues/2988)) ([35f7eea](https://github.com/goabstract/projects/commit/35f7eea))
* **sensu:** filter and handler improvements ([#2994](https://github.com/goabstract/projects/issues/2994)) ([839e306](https://github.com/goabstract/projects/commit/839e306))
* **tracing:** update tracing lib to take custom agent host and port ([9a71813](https://github.com/goabstract/projects/commit/9a71813))
* **webhooks:** add statsd metric to track webhooks delivery success and failure ([9d3862e](https://github.com/goabstract/projects/commit/9d3862e))
* **webhooksworker:** add delivery retry with exponential backoff ([#2980](https://github.com/goabstract/projects/issues/2980)) ([a2cebe2](https://github.com/goabstract/projects/commit/a2cebe2))
* **xd:** Local file refs ([#2993](https://github.com/goabstract/projects/issues/2993)) ([553905d](https://github.com/goabstract/projects/commit/553905d))
* Add search parameter to proejcts#index endpoint ([#2991](https://github.com/goabstract/projects/issues/2991)) ([224aa9f](https://github.com/goabstract/projects/commit/224aa9f))
* **xd-plugin:** Initial phase 1 implementation of plugin design ([#2810](https://github.com/goabstract/projects/issues/2810)) ([bda44a0](https://github.com/goabstract/projects/commit/bda44a0))
* **xd,plugin:** List libraries & open file handlers ([#2905](https://github.com/goabstract/projects/issues/2905)) ([a45bdc4](https://github.com/goabstract/projects/commit/a45bdc4)), closes [#2948](https://github.com/goabstract/projects/issues/2948)


### Performance Improvements

* **api:** Preload Collection associations. ([35ac9f5](https://github.com/goabstract/projects/commit/35ac9f5))
* **gab:** Cache git commit trees ([#2966](https://github.com/goabstract/projects/issues/2966)) ([391b1ba](https://github.com/goabstract/projects/commit/391b1ba))
* **gab:** Detect historical file changes without diffing ([#2909](https://github.com/goabstract/projects/issues/2909)) ([ea82b5e](https://github.com/goabstract/projects/commit/ea82b5e))
* **gab:** Go back to using diffs for now ([17ba5f2](https://github.com/goabstract/projects/commit/17ba5f2))
* **gitapi:** background purge every midnight ([471a550](https://github.com/goabstract/projects/commit/471a550))
* **gitapi:** cache open repositories ([b6bd89a](https://github.com/goabstract/projects/commit/b6bd89a))
* **gitapi:** collections use cache before opening project ([c8f182a](https://github.com/goabstract/projects/commit/c8f182a))
* **gitapi:** commits endpoint -> cached open repos ([c5899e3](https://github.com/goabstract/projects/commit/c5899e3))
* **gitapi:** purge hourly; free repos before purging ([3e08a02](https://github.com/goabstract/projects/commit/3e08a02))



## [2.6.1](https://github.com/goabstract/projects/compare/cli@2.6.0...cli@2.6.1) (2019-08-29)


### Bug Fixes

* **API:** deleted reviewers could not be re-requested ([#2947](https://github.com/goabstract/projects/issues/2947)) ([35f5e1f](https://github.com/goabstract/projects/commit/35f5e1f))
* **gab:** fix merge state almost always returning CLEAN ([#2957](https://github.com/goabstract/projects/issues/2957)) ([e03f251](https://github.com/goabstract/projects/commit/e03f251))
* **infra:** copy/paste error in rule name ([e70f332](https://github.com/goabstract/projects/commit/e70f332))


### Features

* add BranchReview.merge ([ad209a8](https://github.com/goabstract/projects/commit/ad209a8))



# [2.6.0](https://github.com/goabstract/projects/compare/cli@2.5.0...cli@2.6.0) (2019-08-29)


### Bug Fixes

* **api:** camelCase policy fetch key ([1eb81bb](https://github.com/goabstract/projects/commit/1eb81bb))
* **api:** correct policy fetch key in branch_update event ([af273c5](https://github.com/goabstract/projects/commit/af273c5))
* **api:** remove git-cdn from DESKTOP_GIT_URL ([5a633df](https://github.com/goabstract/projects/commit/5a633df))
* **cli,version:** auto-fetch tags ([#2915](https://github.com/goabstract/projects/issues/2915)) ([195b039](https://github.com/goabstract/projects/commit/195b039))
* **gab:** Span context doesn't propagate correctly LogLayerHistory ([#2923](https://github.com/goabstract/projects/issues/2923)) ([175b453](https://github.com/goabstract/projects/commit/175b453))
* **infra, lita:** lita needs linux-headers to build ([#2945](https://github.com/goabstract/projects/issues/2945)) ([4faced4](https://github.com/goabstract/projects/commit/4faced4))
* **xd:** Symbol resource refs properly updated by reading them last ([#2928](https://github.com/goabstract/projects/issues/2928)) ([1f28156](https://github.com/goabstract/projects/commit/1f28156))


### Features

* **abstractd:** Added abstractd interceptor to publish state file. ([#2895](https://github.com/goabstract/projects/issues/2895)) ([3ed7e91](https://github.com/goabstract/projects/commit/3ed7e91))
* **api:** add access request accept endpoint ([#2841](https://github.com/goabstract/projects/issues/2841)) ([f865e9e](https://github.com/goabstract/projects/commit/f865e9e))
* **api:** allow token param to resend verification email ([#2809](https://github.com/goabstract/projects/issues/2809)) ([ee6da5a](https://github.com/goabstract/projects/commit/ee6da5a))
* **api:** send updated event to child branches when restrictions change ([1fd0657](https://github.com/goabstract/projects/commit/1fd0657))
* **infra:** shard 101 ([#2887](https://github.com/goabstract/projects/issues/2887)) ([91819f8](https://github.com/goabstract/projects/commit/91819f8))
* **Mailers:** merge restrictions email notifications ([#2911](https://github.com/goabstract/projects/issues/2911)) ([d76f6d3](https://github.com/goabstract/projects/commit/d76f6d3))


### Performance Improvements

* **api:** Preload Collection associations. ([08ead21](https://github.com/goabstract/projects/commit/08ead21))



# [2.5.0](https://github.com/goabstract/projects/compare/cli@2.4.1...cli@2.5.0) (2019-08-23)


### Bug Fixes

* **Admin:** regression for enabling/disabling features ([#2904](https://github.com/goabstract/projects/issues/2904)) ([491f456](https://github.com/goabstract/projects/commit/491f456))
* **api:** camelCase branch restrictions event data ([58cb5c2](https://github.com/goabstract/projects/commit/58cb5c2))
* **gab:** Span context doesn't propagate correctly ([#2910](https://github.com/goabstract/projects/issues/2910)) ([6d72bf4](https://github.com/goabstract/projects/commit/6d72bf4))


### Features

* **desktop-api,files:** add command to rename a file ([#2733](https://github.com/goabstract/projects/issues/2733)) ([d9f3a71](https://github.com/goabstract/projects/commit/d9f3a71))



## [2.4.1](https://github.com/goabstract/projects/compare/cli@2.4.0...cli@2.4.1) (2019-08-21)


### Bug Fixes

* prevent tcp connection reuse during asset operations ([#2896](https://github.com/goabstract/projects/issues/2896)) ([c624e3d](https://github.com/goabstract/projects/commit/c624e3d))
* **api:** skip branch lookup on restrictions endpoint ([cf7f052](https://github.com/goabstract/projects/commit/cf7f052))


### Features

* **webhooks:** Add creator_id to database ([934ca30](https://github.com/goabstract/projects/commit/934ca30))
* **webhooks:** Add creator_id to database ([51e310b](https://github.com/goabstract/projects/commit/51e310b))
* **webhooks:** Save creator and encode it for UI ([deac7e5](https://github.com/goabstract/projects/commit/deac7e5))
* **webhooks:** Store creating user's id with subs ([adfa853](https://github.com/goabstract/projects/commit/adfa853))


### Performance Improvements

* **gitapi:** Experimenting with timeout to help caching ([#2894](https://github.com/goabstract/projects/issues/2894)) ([a3280f7](https://github.com/goabstract/projects/commit/a3280f7))



# [2.4.0](https://github.com/goabstract/projects/compare/cli@2.3.0...cli@2.4.0) (2019-08-20)


### Bug Fixes

* **Annotate:** ignore sub dir models ([50b593c](https://github.com/goabstract/projects/commit/50b593c))
* **cli,logger:** use a non-buffered logger to prevent missing logs ([#2879](https://github.com/goabstract/projects/issues/2879)) ([573c4c8](https://github.com/goabstract/projects/commit/573c4c8))
* change default is_username_organization ([89e5b7e](https://github.com/goabstract/projects/commit/89e5b7e))
* check for nil branch in BranchReview ([e9a5404](https://github.com/goabstract/projects/commit/e9a5404))
* make specs more better ([9ad2d08](https://github.com/goabstract/projects/commit/9ad2d08))
* some spec cleanup ([af8c3e6](https://github.com/goabstract/projects/commit/af8c3e6))
* typo on invitation acceptor error ([#2870](https://github.com/goabstract/projects/issues/2870)) ([933fec9](https://github.com/goabstract/projects/commit/933fec9))
* **api:** recurly subscription creator loop ([#2858](https://github.com/goabstract/projects/issues/2858)) ([262148d](https://github.com/goabstract/projects/commit/262148d))


### Features

* **api:** add project+branch ids to branch restrictions json ([d7f76de](https://github.com/goabstract/projects/commit/d7f76de))
* BranchReview.status considers merge restrictions ([96a041a](https://github.com/goabstract/projects/commit/96a041a))
* provide prototype data in layer data response ([#2471](https://github.com/goabstract/projects/issues/2471)) ([2cce4c8](https://github.com/goabstract/projects/commit/2cce4c8))



# [2.3.0](https://github.com/goabstract/projects/compare/cli@2.2.0...cli@2.3.0) (2019-08-19)


### Bug Fixes

* filter out deleted branches ([17d654d](https://github.com/goabstract/projects/commit/17d654d))
* **api:** call branch restriction upserter with new params ([d4b13cb](https://github.com/goabstract/projects/commit/d4b13cb))
* **api:** proxy webhooks http status codes ([#2811](https://github.com/goabstract/projects/issues/2811)) ([69a4877](https://github.com/goabstract/projects/commit/69a4877))
* **api:** rollback project create if branch restrictions save fails ([38493e2](https://github.com/goabstract/projects/commit/38493e2))
* BranchPolicy.merge? depends on org.merge_restrictions_enabled? ([f38524b](https://github.com/goabstract/projects/commit/f38524b))
* error gracefully when branch is invalid ([78c50c4](https://github.com/goabstract/projects/commit/78c50c4))
* spec wording ([83220be](https://github.com/goabstract/projects/commit/83220be))
* Update stable/api/app/commands/review_request_creator.rb ([f14ceab](https://github.com/goabstract/projects/commit/f14ceab))
* use a named parameter for policy_fetch_required ([0ff438c](https://github.com/goabstract/projects/commit/0ff438c))
* **api,gitapi:** gracefully handle image too large ([#2831](https://github.com/goabstract/projects/issues/2831)) ([c4fe0b7](https://github.com/goabstract/projects/commit/c4fe0b7))
* use reviewer_role instead of querying for it twice ([4121c93](https://github.com/goabstract/projects/commit/4121c93))


### Features

* **abstractd,plugin:** handle incoming requests ([#2722](https://github.com/goabstract/projects/issues/2722)) ([ce61fb3](https://github.com/goabstract/projects/commit/ce61fb3))
* **api:** ProjectCreator creates master branch restrictions ([eb94b72](https://github.com/goabstract/projects/commit/eb94b72))
* **api:** projects#create endpoint accepts branch restrictions ([41f7df5](https://github.com/goabstract/projects/commit/41f7df5))
* **api:** Recurly SCA ruby API changes (revert of revert) ([#2855](https://github.com/goabstract/projects/issues/2855)) ([bfa7192](https://github.com/goabstract/projects/commit/bfa7192))
* **gab,file,store:** move gab and file over to using abstraction for store/tree access ([#2748](https://github.com/goabstract/projects/issues/2748)) ([665f771](https://github.com/goabstract/projects/commit/665f771)), closes [#2849](https://github.com/goabstract/projects/issues/2849)
* **Salesforce:** Sync raw utmSource to Salesforce ([#2838](https://github.com/goabstract/projects/issues/2838)) ([c740e94](https://github.com/goabstract/projects/commit/c740e94))
* branch_updated fires when approved reviews are created ([d650e27](https://github.com/goabstract/projects/commit/d650e27))
* reviews and merge restriction settings affect branch policies ([058ca28](https://github.com/goabstract/projects/commit/058ca28))
* send branch_updated when reviews are updated or dismissed ([8031158](https://github.com/goabstract/projects/commit/8031158))


### Performance Improvements

* **infra, ansible:** restart docker less often - IN-185 ([#2832](https://github.com/goabstract/projects/issues/2832)) ([04aa1c6](https://github.com/goabstract/projects/commit/04aa1c6))



# [2.2.0](https://github.com/goabstract/projects/compare/cli@2.1.0...cli@2.2.0) (2019-08-15)


### Bug Fixes

* **abstractd:** Do not build abstractd on release, as the CI will do it and it will conflict with linked dependencies that binary has ([#2833](https://github.com/goabstract/projects/issues/2833)) ([153b308](https://github.com/goabstract/projects/commit/153b308))
* **infra, ansible:** poll for running apps on gitshard before signaling success ([#2823](https://github.com/goabstract/projects/issues/2823)) ([65dde6c](https://github.com/goabstract/projects/commit/65dde6c))
* **webhooks:** Fixes test callbacks cleanup ([7da0be4](https://github.com/goabstract/projects/commit/7da0be4))
* **xd, abstract:** Use resource id instead of name when writing abstract file ([#2821](https://github.com/goabstract/projects/issues/2821)) ([97e72ca](https://github.com/goabstract/projects/commit/97e72ca))


### Features

* **Admin:** safelist single enable/disable of feature on org ([#2802](https://github.com/goabstract/projects/issues/2802)) ([8d3e24d](https://github.com/goabstract/projects/commit/8d3e24d))
* **api:** allow super admins to edit email addresses ([#2800](https://github.com/goabstract/projects/issues/2800)) ([212d76d](https://github.com/goabstract/projects/commit/212d76d))
* **api:** Recurly SCA ruby API changes ([#2769](https://github.com/goabstract/projects/issues/2769)) ([940300e](https://github.com/goabstract/projects/commit/940300e))
* **api, webhooks:** implement webhook ping ([#2774](https://github.com/goabstract/projects/issues/2774)) ([7736dca](https://github.com/goabstract/projects/commit/7736dca))
* **gitbackup:** Fetch cloneURL from gitproxy. ([aa402cf](https://github.com/goabstract/projects/commit/aa402cf))
* **plugin,sketch,open:** use open file path message instead of file scheme ([#2799](https://github.com/goabstract/projects/issues/2799)) ([92dc1be](https://github.com/goabstract/projects/commit/92dc1be))
* **webbhooks:** Enable webhooks notifications ([0aa1908](https://github.com/goabstract/projects/commit/0aa1908))
* **webhooks:** Add readable deliveries endpoint ([9329185](https://github.com/goabstract/projects/commit/9329185))
* **webhooks:** Include basic headers ([5116bfc](https://github.com/goabstract/projects/commit/5116bfc))



# [2.1.0](https://github.com/goabstract/projects/compare/cli@2.0.3...cli@2.1.0) (2019-08-12)

* feat(webhooks)!: Require SSL for endpoints ([8f0aecf](https://github.com/goabstract/projects/commit/8f0aecf))


### Bug Fixes

* **cli:** Update package.json repository ([e3a9775](https://github.com/goabstract/projects/commit/e3a9775))
* **api:** allow merge when branch restriction disabled ([9aded52](https://github.com/goabstract/projects/commit/9aded52))
* **api:** BranchPolicy#restricted? always returns a boolean ([d751f20](https://github.com/goabstract/projects/commit/d751f20))
* **api:** camelCase branch restrictions json ([29ea305](https://github.com/goabstract/projects/commit/29ea305))
* **api:** owner viewer can update branch restrictions unit test ([fc2e04a](https://github.com/goabstract/projects/commit/fc2e04a))
* **api:** revert rename of Branch#branch_restriction ([6419cb2](https://github.com/goabstract/projects/commit/6419cb2))
* **api:** undefined method `total_seats' on NilClass ([986a6ee](https://github.com/goabstract/projects/commit/986a6ee))
* **api:** use globally unique key for branch policy ([9fd0842](https://github.com/goabstract/projects/commit/9fd0842))
* **api:** user must be project member to merge ([22011c8](https://github.com/goabstract/projects/commit/22011c8))
* **discard:** Do not save files when discarding changes. ([#2739](https://github.com/goabstract/projects/issues/2739)) ([9f37bb8](https://github.com/goabstract/projects/commit/9f37bb8))
* **file:** allow and log/report invalid Abstract file data ([#2720](https://github.com/goabstract/projects/issues/2720)) ([a853be3](https://github.com/goabstract/projects/commit/a853be3))
* **gitbackup:** Fix config env vars. ([d5959d1](https://github.com/goabstract/projects/commit/d5959d1))
* **gitexec:** Move logCommandStart() ([fd79e92](https://github.com/goabstract/projects/commit/fd79e92))
* **gitexec:** Remove gitcmd package. ([2b7e4ce](https://github.com/goabstract/projects/commit/2b7e4ce))
* **gitnode:** temporarily remove header logger ([f1a9e06](https://github.com/goabstract/projects/commit/f1a9e06))
* update spacing to better resemble json ([c4b7fc2](https://github.com/goabstract/projects/commit/c4b7fc2))
* **inspect:** Add test for legacy layers. ([9bd8ec2](https://github.com/goabstract/projects/commit/9bd8ec2))
* **inspect:** Normalize horizontal text alignment. ([bc499f4](https://github.com/goabstract/projects/commit/bc499f4))
* **inspect:** Normalize values for shared text styles ([110f3c0](https://github.com/goabstract/projects/commit/110f3c0))
* **previews:** Fixes bug where generating previews hung if editing file was missing. ([#2770](https://github.com/goabstract/projects/issues/2770)) ([f56dbbb](https://github.com/goabstract/projects/commit/f56dbbb))
* add users to private projects ([69bf7ec](https://github.com/goabstract/projects/commit/69bf7ec))
* build branch settings in the controller ([3dd0c1c](https://github.com/goabstract/projects/commit/3dd0c1c))
* formatting ([73f48e8](https://github.com/goabstract/projects/commit/73f48e8))
* Re-add missing import from bad merge ([0c685da](https://github.com/goabstract/projects/commit/0c685da))
* remove unnecessary assertions ([91b22f5](https://github.com/goabstract/projects/commit/91b22f5))


### Features

* **api:** add api v17 for Branches#show to return envelope ([127720a](https://github.com/goabstract/projects/commit/127720a))
* **api:** add branch policy to govern merge access ([5d57faa](https://github.com/goabstract/projects/commit/5d57faa))
* **api:** add unique identifier for branches ([48fc2e4](https://github.com/goabstract/projects/commit/48fc2e4))
* **api:** include branch policies in branches#index ([dabcb39](https://github.com/goabstract/projects/commit/dabcb39))
* **api:** track admin user activity on features + add feature descriptions ([#2696](https://github.com/goabstract/projects/issues/2696)) ([036e073](https://github.com/goabstract/projects/commit/036e073))
* **file:** lazily read v3 abstract file data ([#1866](https://github.com/goabstract/projects/issues/1866)) ([ef12c4a](https://github.com/goabstract/projects/commit/ef12c4a))
* **files,validation:** add cli command to validate project files schema and data ([#2318](https://github.com/goabstract/projects/issues/2318)) ([721fddd](https://github.com/goabstract/projects/commit/721fddd))
* **gab, gitapi:** Cancelable files listing ([#2766](https://github.com/goabstract/projects/issues/2766)) ([6fa5d01](https://github.com/goabstract/projects/commit/6fa5d01))
* **gitexec:** Add additional logging around Run() ([8dc1e1c](https://github.com/goabstract/projects/commit/8dc1e1c))
* **gitexec:** Save stderr output to a buffer by default. ([523846c](https://github.com/goabstract/projects/commit/523846c))
* **go:** add support for building debug images for go services ([1199861](https://github.com/goabstract/projects/commit/1199861))
* **infra:** new private dns zone: abstract.<env>-internal ([#2690](https://github.com/goabstract/projects/issues/2690)) ([0cf97bc](https://github.com/goabstract/projects/commit/0cf97bc))
* **infra:** webhooks bits ([#2556](https://github.com/goabstract/projects/issues/2556)) ([d597ff7](https://github.com/goabstract/projects/commit/d597ff7))
* **infra, webhooksworker:** allow rds access ([#2764](https://github.com/goabstract/projects/issues/2764)) ([c4654aa](https://github.com/goabstract/projects/commit/c4654aa))
* **webhooks:** add subscription id ([1032150](https://github.com/goabstract/projects/commit/1032150))
* **webhooks:** Builds initial payloads ([a935839](https://github.com/goabstract/projects/commit/a935839))
* **webhooks:** Require organizationIDs ([350c6a7](https://github.com/goabstract/projects/commit/350c6a7))
* **webhooks:** Wrap payloads w/common attributes ([e6f8e95](https://github.com/goabstract/projects/commit/e6f8e95))
* **webhooks, infra:** prod webhooks config bits ([#2710](https://github.com/goabstract/projects/issues/2710)) ([757e274](https://github.com/goabstract/projects/commit/757e274))
* branch settings endpoint ([0abd902](https://github.com/goabstract/projects/commit/0abd902))
* BRANCH_SETTINGS_UPDATED socket event ([f9330a5](https://github.com/goabstract/projects/commit/f9330a5))
* BRANCH_SETTINGS_UPDATED socket event ([6f556bf](https://github.com/goabstract/projects/commit/6f556bf))
* GET branch::settings endpoint ([13878e5](https://github.com/goabstract/projects/commit/13878e5))
* membership updates trigger branch policy updates ([2d652ea](https://github.com/goabstract/projects/commit/2d652ea))
* upsert branch settings ([cc2987f](https://github.com/goabstract/projects/commit/cc2987f))


### BREAKING CHANGES

* Creating/updating endpoints will now require SSL
(https).

We can also disable this validation by setting WEBHOOK_REQUIRE_SSL=false
which is very useful locally. Otherwise we would need to map a local
endpoint with public SSL like https://ngrok.com/



## [2.0.3](https://github.com/goabstract/projects/compare/cli@2.0.2...cli@2.0.3) (2019-07-24)


### Bug Fixes

* limit the size of assets to 250 million pixels and prevent sketchtool errors form stopping syncing ([#2614](https://github.com/goabstract/projects/issues/2614)) ([dd9d4b2](https://github.com/goabstract/projects/commit/dd9d4b2))

## [2.0.2](https://github.com/goabstract/projects/compare/cli@2.0.0...cli@2.0.2) (2019-07-24)


### Bug Fixes

* **api:** fix membership reactivation on invitation acceptance ([#2646](https://github.com/goabstract/projects/issues/2646)) ([ae2901a](https://github.com/goabstract/projects/commit/ae2901a))
* **api:** prevent user from leaving an org if they are the only admin ([#2658](https://github.com/goabstract/projects/issues/2658)) ([2f1ec3c](https://github.com/goabstract/projects/commit/2f1ec3c))
* **gab:** fix race when cloning with go-git ([#2667](https://github.com/goabstract/projects/issues/2667)) ([58884fc](https://github.com/goabstract/projects/commit/58884fc))
* **xd:** Force artboard ref to match artboard id, sha gradients/clipapths, deal with document library indexes ([#2584](https://github.com/goabstract/projects/issues/2584)) ([85a8af0](https://github.com/goabstract/projects/commit/85a8af0))
* .include -> .includes for great wins ([9283d64](https://github.com/goabstract/projects/commit/9283d64))
* backfill script to be more performant ([1403249](https://github.com/goabstract/projects/commit/1403249))
* backfill script user lookup ([089f844](https://github.com/goabstract/projects/commit/089f844))
* get organization and then sync it with salesforce for seat counts ([1a45671](https://github.com/goabstract/projects/commit/1a45671))
* git_push_job to ignore remote refs ([ada0a91](https://github.com/goabstract/projects/commit/ada0a91))
* make change backwards compatible ([54a80b2](https://github.com/goabstract/projects/commit/54a80b2))
* marketingDetails params is object not JSON ([dfca75a](https://github.com/goabstract/projects/commit/dfca75a)), closes [#2520](https://github.com/goabstract/projects/issues/2520)
* membership syncer throwing errors ([1379ce4](https://github.com/goabstract/projects/commit/1379ce4))
* membership syncer..again ([a4ca480](https://github.com/goabstract/projects/commit/a4ca480))
* MembershipSyncerSpec ([2c64831](https://github.com/goabstract/projects/commit/2c64831)), closes [#2575](https://github.com/goabstract/projects/issues/2575)
* performance improvements for n+1 queries and `find` on csv ([79e1648](https://github.com/goabstract/projects/commit/79e1648))
* revert to libgit 0.27 ([8bb6e74](https://github.com/goabstract/projects/commit/8bb6e74))
* **admin:** Branch filter default of 'contains' does not work with UUIDs ([#2568](https://github.com/goabstract/projects/issues/2568)) ([ef1fb7e](https://github.com/goabstract/projects/commit/ef1fb7e))
* **api:** guard latest sha lookup, add fallback ([31d6fb2](https://github.com/goabstract/projects/commit/31d6fb2))
* **api:** MemberRemoved: can't find membership with id ([913b34c](https://github.com/goabstract/projects/commit/913b34c))
* **api:** memberships should include deleted orgs ([68ba899](https://github.com/goabstract/projects/commit/68ba899))
* **api:** unscope memberships for filtering, lookup in admin  ([#2608](https://github.com/goabstract/projects/issues/2608)) ([1d7903d](https://github.com/goabstract/projects/commit/1d7903d))
* **aws:** Add the ability to resolve the AWS S3 region. ([d7fd424](https://github.com/goabstract/projects/commit/d7fd424))
* **backfill script:** include soft-deleted users in backfill ([ed9be3f](https://github.com/goabstract/projects/commit/ed9be3f))
* **cli:** Remove bad refspecs from Push and remove Fetch. ([#2623](https://github.com/goabstract/projects/issues/2623)) ([b7f8f0c](https://github.com/goabstract/projects/commit/b7f8f0c))
* **cli:** Sanitize branch names when creating editing files. ([#2605](https://github.com/goabstract/projects/issues/2605)) ([7f3fd8f](https://github.com/goabstract/projects/commit/7f3fd8f))
* **cli,projects:** log push errors and send them to sentry ([#2542](https://github.com/goabstract/projects/issues/2542)) ([46e44e4](https://github.com/goabstract/projects/commit/46e44e4))
* **desktop-api:** fix invalid guard on branch name ([#2510](https://github.com/goabstract/projects/issues/2510)) ([a411f65](https://github.com/goabstract/projects/commit/a411f65))
* **desktop-api,files:** validate user provided project and branch ids ([33df461](https://github.com/goabstract/projects/commit/33df461))
* **gitackup:** Start using aws/session again. ([6789f25](https://github.com/goabstract/projects/commit/6789f25))
* **gitbackup:** Indentation for Value key. ([df8b35c](https://github.com/goabstract/projects/commit/df8b35c))
* **json:** bump version, from now on exclude userIds from orgs ([f12abb1](https://github.com/goabstract/projects/commit/f12abb1))
* **webhooks, api:** A couple minor fixes ([b678ce3](https://github.com/goabstract/projects/commit/b678ce3))
* ab_Org_Deleted -> ab_Org_Deleted__c ([7bc6d6b](https://github.com/goabstract/projects/commit/7bc6d6b))
* also include default marketing deets when seeding users ([fb4c393](https://github.com/goabstract/projects/commit/fb4c393))
* authenticate commits show action using share links ([#2561](https://github.com/goabstract/projects/issues/2561)) ([d2a866f](https://github.com/goabstract/projects/commit/d2a866f))
* change params expectations from string to JSON ([faec5fc](https://github.com/goabstract/projects/commit/faec5fc))
* membership soft-delete on invitation acceptor ([894123f](https://github.com/goabstract/projects/commit/894123f))
* Never return deleted branches from API ([#2620](https://github.com/goabstract/projects/issues/2620)) ([4c7db4e](https://github.com/goabstract/projects/commit/4c7db4e))
* personal_account_only -> personalAccountOnly stragglers ([4f1607d](https://github.com/goabstract/projects/commit/4f1607d))
* salesforce INVALID_CROSS_REFERENCE_KEY error ([cdef880](https://github.com/goabstract/projects/commit/cdef880))
* sync organization details including seat counts on membership sync ([e852d57](https://github.com/goabstract/projects/commit/e852d57))
* **gitnode:** correct refs prefix; refs/remotes/ ([7c93f53](https://github.com/goabstract/projects/commit/7c93f53))
* **gitnode:** ignore remotes for notify push commands ([96589b2](https://github.com/goabstract/projects/commit/96589b2))
* Salesforce mark user as not personal account when accepting invite ([27e6ada](https://github.com/goabstract/projects/commit/27e6ada))
* salesforce user syncer ([7a446bf](https://github.com/goabstract/projects/commit/7a446bf))
* use SHIM for salesforce syncing on old accounts ([7807b50](https://github.com/goabstract/projects/commit/7807b50))
* **api:** disallow SCIM user memberships from being destroyed ([#2574](https://github.com/goabstract/projects/issues/2574)) ([6ddb6d5](https://github.com/goabstract/projects/commit/6ddb6d5))
* **gitbackup:** S3_BACKUP_REGION -> S3_BUCKET_REGION ([d290092](https://github.com/goabstract/projects/commit/d290092))
* **push:** Added refs/abstract/branch-id and refs/meta-remote/branch-id to push refspecs. ([#2533](https://github.com/goabstract/projects/issues/2533)) ([297ca56](https://github.com/goabstract/projects/commit/297ca56))
* **Salesforce MembershipSyncer:** fixes duplicate sync ([d88bb0e](https://github.com/goabstract/projects/commit/d88bb0e))
* **Salesforce sync:** update upsert! command ([d986b1c](https://github.com/goabstract/projects/commit/d986b1c))
* **salesforce upsert:** treat upsert as create, not update ([6d055ee](https://github.com/goabstract/projects/commit/6d055ee))
* **Salesforce user syncer:** remove LeadSource attr ([a0f92bc](https://github.com/goabstract/projects/commit/a0f92bc))
* **SF UserSyncer:** properly syncs LeadSource ([3027327](https://github.com/goabstract/projects/commit/3027327))
* Salesforce::Syncer staging also needs client.host ([8ae8768](https://github.com/goabstract/projects/commit/8ae8768))
* Salesforce::UserSyncer when marketing details are not set ([721d911](https://github.com/goabstract/projects/commit/721d911))
* updates to params based on what we're receiving from FE ([c957d6a](https://github.com/goabstract/projects/commit/c957d6a))
* user first joined org should include deleted ([1a8f26b](https://github.com/goabstract/projects/commit/1a8f26b))
* **xd:** Fix bug where importing multiple files shows unresponsive dialogs. ([#2554](https://github.com/goabstract/projects/issues/2554)) ([32cbf7a](https://github.com/goabstract/projects/commit/32cbf7a))


### chore

* **webhooks:** Change casing for organizationID ([7c3c988](https://github.com/goabstract/projects/commit/7c3c988))


### Features

* **api:** load and save object names in comment publisher ([6380bc9](https://github.com/goabstract/projects/commit/6380bc9))
* Features Admin ([#2648](https://github.com/goabstract/projects/issues/2648)) ([078501c](https://github.com/goabstract/projects/commit/078501c))
* **admin:** Add billing plan and status to organization admin ([#2565](https://github.com/goabstract/projects/issues/2565)) ([7cf519f](https://github.com/goabstract/projects/commit/7cf519f))
* **api:** add saml_idp.email domain to active admin ([#2635](https://github.com/goabstract/projects/issues/2635)) ([4c30c21](https://github.com/goabstract/projects/commit/4c30c21))
* **api:** prevent email/account creation if email domain is registered ([#2636](https://github.com/goabstract/projects/issues/2636)) ([c4de16f](https://github.com/goabstract/projects/commit/c4de16f))
* Add active & deleted scopes to memberships on active admin ([6308d6c](https://github.com/goabstract/projects/commit/6308d6c))
* allow admin to edit Salesforce ID ([f1645fb](https://github.com/goabstract/projects/commit/f1645fb))
* increase API rate limits for SDK requests ([#2597](https://github.com/goabstract/projects/issues/2597)) ([233bd45](https://github.com/goabstract/projects/commit/233bd45))
* **api:** Add session policy to configuration endpoint ([#2599](https://github.com/goabstract/projects/issues/2599)) ([f2b3b6a](https://github.com/goabstract/projects/commit/f2b3b6a))
* manually kick off salesforce sync from /admin ([07f8329](https://github.com/goabstract/projects/commit/07f8329))
* show marketing_details in /admin for user ([6eb025e](https://github.com/goabstract/projects/commit/6eb025e))
* **api:** add filtering for orgs by plan, recurly state in active_admin ([#2607](https://github.com/goabstract/projects/issues/2607)) ([3654ac5](https://github.com/goabstract/projects/commit/3654ac5))
* **api:** Adds search and pagination to branches endpoint ([#2559](https://github.com/goabstract/projects/issues/2559)) ([d2645b6](https://github.com/goabstract/projects/commit/d2645b6))
* **api:** allow soft-deleted projects to be viewed + reactivated from admin ([#2594](https://github.com/goabstract/projects/issues/2594)) ([b22f762](https://github.com/goabstract/projects/commit/b22f762))
* **gitbackup:** Add flag to enable/disable backups. ([de1b6f9](https://github.com/goabstract/projects/commit/de1b6f9))
* **webhooks, api:** Allow API to notify webhooks ([d428d75](https://github.com/goabstract/projects/commit/d428d75))
* **webhooks, api:** Allow disabling notifications ([0fe3b35](https://github.com/goabstract/projects/commit/0fe3b35))
* **webhooks, api:** notify first v1 events ([a596b01](https://github.com/goabstract/projects/commit/a596b01))
* **webhooks, api:** PR branch feedback ([8a2acdf](https://github.com/goabstract/projects/commit/8a2acdf))
* **webhooks, api:** use structured webhooks faker ([05ef0a9](https://github.com/goabstract/projects/commit/05ef0a9))
* flip logic on marketing consent Salesforce syncer ([857210f](https://github.com/goabstract/projects/commit/857210f))
* new API version to support sending down no layers for collections#index ([#2281](https://github.com/goabstract/projects/issues/2281)) ([7e93627](https://github.com/goabstract/projects/commit/7e93627))
* Salesforce sync personal_account_only flag ([c768b31](https://github.com/goabstract/projects/commit/c768b31))
* Save marketing params on Account Creation ([698ced4](https://github.com/goabstract/projects/commit/698ced4))
* Send project membership data on successful user addition to project ([#2530](https://github.com/goabstract/projects/issues/2530)) ([3aabf8b](https://github.com/goabstract/projects/commit/3aabf8b))
* sync clearbit team counts for product and product design to sfdc ([261c844](https://github.com/goabstract/projects/commit/261c844))
* sync membership on delete, rather than destroying ([d34378d](https://github.com/goabstract/projects/commit/d34378d))
* Sync new user.marketing_details fields to Salesforce ([4d0a39d](https://github.com/goabstract/projects/commit/4d0a39d))
* Update project memberships ([#2534](https://github.com/goabstract/projects/issues/2534)) ([e6d326b](https://github.com/goabstract/projects/commit/e6d326b))
* update SF Account when org is deleted ([7cf7836](https://github.com/goabstract/projects/commit/7cf7836))
* update webhook API routes ([#2543](https://github.com/goabstract/projects/issues/2543)) ([bd3b278](https://github.com/goabstract/projects/commit/bd3b278))
* when user is marked as deleted, sync sanitized to SF ([644e1bd](https://github.com/goabstract/projects/commit/644e1bd))
* **xd:** quit XD on first time plugin installs ([#2555](https://github.com/goabstract/projects/issues/2555)) ([99f439c](https://github.com/goabstract/projects/commit/99f439c))


### BREAKING CHANGES

* **webhooks:** The webhooks API now expects and returns
"organizationId" rather than "organizationID"



# [2.0.0](https://github.com/goabstract/projects/compare/cli@2.0.0...cli@2.0.0) (2019-06-28)


### Bug Fixes

* abstract-cli returns same collections structure as api ([#2522](https://github.com/goabstract/projects/issues/2522)) ([1f24263](https://github.com/goabstract/projects/commit/1f24263))
* **cli:** fix compile errors after conflicting refactoring ([#2519](https://github.com/goabstract/projects/issues/2519)) ([3bf4517](https://github.com/goabstract/projects/commit/3bf4517))
* set default for new marketing_details column ([1f887d8](https://github.com/goabstract/projects/commit/1f887d8))
* **abstractd:** Tie abstractd versioning to that of the CLI. ([#2481](https://github.com/goabstract/projects/issues/2481)) ([ba3377d](https://github.com/goabstract/projects/commit/ba3377d))
* **abstractd:** Update deps to support Node 12 environment ([#2462](https://github.com/goabstract/projects/issues/2462)) ([b0fab40](https://github.com/goabstract/projects/commit/b0fab40))
* **api:** [COLLAB-682] Publish review activity without comment notifications ([#2423](https://github.com/goabstract/projects/issues/2423)) ([c58692e](https://github.com/goabstract/projects/commit/c58692e))
* **api:** API also needs this binary compiled ([c3173fb](https://github.com/goabstract/projects/commit/c3173fb))
* **api:** changelog button string interpolation ([d639fea](https://github.com/goabstract/projects/commit/d639fea))
* **api:** count CollectionsPage total prior to offset/limit ([13a7f79](https://github.com/goabstract/projects/commit/13a7f79))
* **api:** handling SCIM user deletion on org deletion ([bebc2c1](https://github.com/goabstract/projects/commit/bebc2c1)), closes [#2447](https://github.com/goabstract/projects/issues/2447) [#2447](https://github.com/goabstract/projects/issues/2447)
* **api:** move git errors into Propeller::Git ([ed4eeb3](https://github.com/goabstract/projects/commit/ed4eeb3))
* **api:** skip notification for non-member parent commenters ([d9c5c61](https://github.com/goabstract/projects/commit/d9c5c61))
* **api:** skip subscription for non-member commenters ([25f6b92](https://github.com/goabstract/projects/commit/25f6b92))
* **api:** use data.count for correct CollectionsPage total ([d67e4f7](https://github.com/goabstract/projects/commit/d67e4f7))
* **ci:** fetch submodules for cli-binaries-build ([#2494](https://github.com/goabstract/projects/issues/2494)) ([93d5daa](https://github.com/goabstract/projects/commit/93d5daa))
* **ci:** fix submodule not using the --init flag ([#2489](https://github.com/goabstract/projects/issues/2489)) ([a50ca86](https://github.com/goabstract/projects/commit/a50ca86))
* **ci:** update openssl to 1.0.2l ([#2410](https://github.com/goabstract/projects/issues/2410)) ([df83e8c](https://github.com/goabstract/projects/commit/df83e8c))
* **ci:** Update OpenSSL to 1.0.2s ([#2415](https://github.com/goabstract/projects/issues/2415)) ([e9e6325](https://github.com/goabstract/projects/commit/e9e6325))
* **gab:** Ignore filemode changes for working tree diffs ([#2461](https://github.com/goabstract/projects/issues/2461)) ([bb53354](https://github.com/goabstract/projects/commit/bb53354)), closes [#2474](https://github.com/goabstract/projects/issues/2474)
* **gab/inspect:** text is fixed when behavior is non-zero ([3d02c63](https://github.com/goabstract/projects/commit/3d02c63))
* **gitapi:** Drop collectionLayersIDs from cache key. ([f0aabf3](https://github.com/goabstract/projects/commit/f0aabf3))
* **gitapi:** Use UpdatedAt for collection cache key. ([4a332c5](https://github.com/goabstract/projects/commit/4a332c5))
* **gitbackup:** Remove unused Message type. ([f1fa41e](https://github.com/goabstract/projects/commit/f1fa41e))
* **gitbackup:** Revert S3_BUCKET_REGION config changes. ([149f482](https://github.com/goabstract/projects/commit/149f482))
* **gitbackup:** Update Docker config. ([db6ba9e](https://github.com/goabstract/projects/commit/db6ba9e))
* **gitbackup:** Use plog LogAppStart and LogAppStop. ([286987b](https://github.com/goabstract/projects/commit/286987b))
* **gitbackup:** Use session.NewS3() for configuration. ([8fe2418](https://github.com/goabstract/projects/commit/8fe2418))
* **sensu:** fuck me, i am an idiot ([#2496](https://github.com/goabstract/projects/issues/2496)) ([c288733](https://github.com/goabstract/projects/commit/c288733))
* **webhooks:** allow webhooks to talk to SQS ([d4fcb22](https://github.com/goabstract/projects/commit/d4fcb22))
* move saml_idp.destroy into if saml_idp block ([1eec164](https://github.com/goabstract/projects/commit/1eec164))
* Remove omitempty from ObjectMeta.Meta property. ([#2492](https://github.com/goabstract/projects/issues/2492)) ([9621c4b](https://github.com/goabstract/projects/commit/9621c4b))
* **xd:** prevents modified file warning from xd when reopening an alr… ([#2421](https://github.com/goabstract/projects/issues/2421)) ([720cfb8](https://github.com/goabstract/projects/commit/720cfb8))
* project creator membership in seeds file + improve access request tests ([b04c26e](https://github.com/goabstract/projects/commit/b04c26e))


### Features

* **abstract-cli,file:** bump cli to 1.11.0 with file perf improvements behind sketch-go-open-file flag ([1b1cef5](https://github.com/goabstract/projects/commit/1b1cef5))
* **cli:** add the 'branches merge-state' command ([#2499](https://github.com/goabstract/projects/issues/2499)) ([22d9acb](https://github.com/goabstract/projects/commit/22d9acb))
* **sensu:** datadog handler ([#2517](https://github.com/goabstract/projects/issues/2517)) ([4c60f9c](https://github.com/goabstract/projects/commit/4c60f9c))
* fallback to preview file for tracked files if editing file doesn't exist ([5b7cc61](https://github.com/goabstract/projects/commit/5b7cc61))
* fix fallback preview file creation logic ([78f7eb5](https://github.com/goabstract/projects/commit/78f7eb5))
* fix nit ([b9c5c37](https://github.com/goabstract/projects/commit/b9c5c37))
* use temp file for object ids path ([dbba4f6](https://github.com/goabstract/projects/commit/dbba4f6))
* use temp files for ugprade files ([b7945c6](https://github.com/goabstract/projects/commit/b7945c6))
* write object ids to tmp path to send gen previews message ([81a4fd0](https://github.com/goabstract/projects/commit/81a4fd0))
* **abstract-cli,file:** bump cli to 1.9.2 - adds dependency rel to v3 manifest ([5469047](https://github.com/goabstract/projects/commit/5469047))
* **api:** soft-delete memberships ([081ab9b](https://github.com/goabstract/projects/commit/081ab9b))
* **file:** add 'rel' property to dependencies ([646c83e](https://github.com/goabstract/projects/commit/646c83e))
* **file:** enforce specific object rel's ([f8a6613](https://github.com/goabstract/projects/commit/f8a6613))
* **lita:** add 'monitoring' lita command to spit out links to dd, sensu ([#2497](https://github.com/goabstract/projects/issues/2497)) ([ca736d3](https://github.com/goabstract/projects/commit/ca736d3))
* **sensu:** 'production' filter for pagerduty handler ([#2503](https://github.com/goabstract/projects/issues/2503)) ([a49dac7](https://github.com/goabstract/projects/commit/a49dac7))
* **sensu:** add support for kms encryption in the s3 replication check ([#2485](https://github.com/goabstract/projects/issues/2485)) ([8dbb693](https://github.com/goabstract/projects/commit/8dbb693))
* **share_links#create:** 201 when created, 200 when existing ([eb53401](https://github.com/goabstract/projects/commit/eb53401))
* **ShareLinkCreator:** return result, include created/existing status ([d2b846b](https://github.com/goabstract/projects/commit/d2b846b))
* **webhooks:** New endpoint to deliver events ([5953b0a](https://github.com/goabstract/projects/commit/5953b0a))
* **xd:** Add xd directory so it can published so the install script can read the manifest ([#2505](https://github.com/goabstract/projects/issues/2505)) ([caa0ba5](https://github.com/goabstract/projects/commit/caa0ba5))
* **xd:** generate and publish npm builds for xd-plugin ([#2439](https://github.com/goabstract/projects/issues/2439)) ([94c2c34](https://github.com/goabstract/projects/commit/94c2c34))
* **xd:** XD plugin install/update implementation ([#2487](https://github.com/goabstract/projects/issues/2487)) ([fa57291](https://github.com/goabstract/projects/commit/fa57291))
* Add ability to update assets feature column ([fe756eb](https://github.com/goabstract/projects/commit/fe756eb))



# 0.38.0 (2018-11-09)


### Bug Fixes

* verify digest without reading file into memory ([a4eb4b0](https://github.com/goabstract/projects/commit/a4eb4b0))
* **account-destroyer:** set validation error messages ([c75e9f6](https://github.com/goabstract/projects/commit/c75e9f6))
* **branch-pages:** add file id to cache key ([2037482](https://github.com/goabstract/projects/commit/2037482))
* **cache:** add missing cache lookup to layer detail endpoint ([9bf36da](https://github.com/goabstract/projects/commit/9bf36da))
* **cache:** shorten keys and fix failing tests ([6bc9e9c](https://github.com/goabstract/projects/commit/6bc9e9c))
* **cmd:** handle json marshal errors ([dbbc2c1](https://github.com/goabstract/projects/commit/dbbc2c1))
* **cmd:** remove username config flag ([7897d76](https://github.com/goabstract/projects/commit/7897d76))
* **collections:** members can view, admins can edit master collections ([f4ccb0a](https://github.com/goabstract/projects/commit/f4ccb0a))
* **node:** correct success response type ([a9dabb7](https://github.com/goabstract/projects/commit/a9dabb7))
* **npm:** throw error if bin path cannot be accessed ([c5452fe](https://github.com/goabstract/projects/commit/c5452fe))
* **project-archive:** add org owners to archive policies. ([ec19ae9](https://github.com/goabstract/projects/commit/ec19ae9))
* **project-stars:** delete endpoint should return any errors ([dd28ef1](https://github.com/goabstract/projects/commit/dd28ef1))
* **project-stars:** endpoints should always return 204 ([dd4bcad](https://github.com/goabstract/projects/commit/dd4bcad))
* **user:** username is no longer needed ([6c04684](https://github.com/goabstract/projects/commit/6c04684))
* **web:** make sure all git objects are freed ([678842c](https://github.com/goabstract/projects/commit/678842c))


### Features

* **cache:** add command to clear the cache for a project ([65326ba](https://github.com/goabstract/projects/commit/65326ba))
* **cache:** cache changset & layer detail endpoints ([cfee486](https://github.com/goabstract/projects/commit/cfee486))
* **cache:** cache project role verification response ([cb8a5b2](https://github.com/goabstract/projects/commit/cb8a5b2))
* **cache:** cache subscriptione role verification response ([58185d0](https://github.com/goabstract/projects/commit/58185d0))
* **cache:** cache token verfication response ([91822b8](https://github.com/goabstract/projects/commit/91822b8))
* **cache:** setup cache and add to commit endpoint ([e7c94e8](https://github.com/goabstract/projects/commit/e7c94e8))
* **clear-project:** remove sketch's file cache ([5b6d8c2](https://github.com/goabstract/projects/commit/5b6d8c2))
* **clear-project:** remove sketch3.beta caches ([f0b01e7](https://github.com/goabstract/projects/commit/f0b01e7))
* **cmd:** add root config flag for the store path ([2c1414a](https://github.com/goabstract/projects/commit/2c1414a))
* **cmd:** add user config flags ([de9cd46](https://github.com/goabstract/projects/commit/de9cd46))
* **cmd:** commands return result, middleware prints ([fb439f4](https://github.com/goabstract/projects/commit/fb439f4))
* **cmd:** wrap Cobra's ExactArgs to return json ([4ac20f6](https://github.com/goabstract/projects/commit/4ac20f6))
* **npm:** export path to the cli binary ([95c3d1f](https://github.com/goabstract/projects/commit/95c3d1f))
* **project-archive:** notify projects members. ([f3eb0bc](https://github.com/goabstract/projects/commit/f3eb0bc))
* **project-stars:** add /starred endpoint ([c3c2cac](https://github.com/goabstract/projects/commit/c3c2cac))
* **project-stars:** add endpoints & commands to star/unstar ([8558ac0](https://github.com/goabstract/projects/commit/8558ac0))
* **project-stars:** add ProjectStar model ([f2555c7](https://github.com/goabstract/projects/commit/f2555c7))
* **project-stars:** move create+destroy endpoints to /starred ([2f6c4ae](https://github.com/goabstract/projects/commit/2f6c4ae))
* **store:** add NewStoreWithUser convenience method ([261ad15](https://github.com/goabstract/projects/commit/261ad15))
* **tokens:** add endpoint to revoke tokens ([e72162c](https://github.com/goabstract/projects/commit/e72162c))
* **user:** require id and dynamically generate email ([50270a8](https://github.com/goabstract/projects/commit/50270a8))
* **web:** cache branch changeset, files and pages responses ([7122b7b](https://github.com/goabstract/projects/commit/7122b7b))
* **web:** cache branch commits response ([92ccd4f](https://github.com/goabstract/projects/commit/92ccd4f))
* **web:** cache branch layers response ([b231da7](https://github.com/goabstract/projects/commit/b231da7))
