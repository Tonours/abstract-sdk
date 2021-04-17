"use strict";

require("core-js/modules/es.symbol");

require("core-js/modules/es.array.filter");

require("core-js/modules/es.object.get-own-property-descriptor");

require("core-js/modules/es.object.get-own-property-descriptors");

require("core-js/modules/es.object.keys");

require("core-js/modules/web.dom-collections.for-each");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Activities = _interopRequireDefault(require("./endpoints/Activities"));

var _Assets = _interopRequireDefault(require("./endpoints/Assets"));

var _Branches = _interopRequireDefault(require("./endpoints/Branches"));

var _Changesets = _interopRequireDefault(require("./endpoints/Changesets"));

var _CollectionLayers = _interopRequireDefault(require("./endpoints/CollectionLayers"));

var _Collections = _interopRequireDefault(require("./endpoints/Collections"));

var _Comments = _interopRequireDefault(require("./endpoints/Comments"));

var _Commits = _interopRequireDefault(require("./endpoints/Commits"));

var _Data = _interopRequireDefault(require("./endpoints/Data"));

var _Descriptors = _interopRequireDefault(require("./endpoints/Descriptors"));

var _Files = _interopRequireDefault(require("./endpoints/Files"));

var _Layers = _interopRequireDefault(require("./endpoints/Layers"));

var _Memberships = _interopRequireDefault(require("./endpoints/Memberships"));

var _Notifications = _interopRequireDefault(require("./endpoints/Notifications"));

var _Organizations = _interopRequireDefault(require("./endpoints/Organizations"));

var _Pages = _interopRequireDefault(require("./endpoints/Pages"));

var _Previews = _interopRequireDefault(require("./endpoints/Previews"));

var _Projects = _interopRequireDefault(require("./endpoints/Projects"));

var _ReviewRequests = _interopRequireDefault(require("./endpoints/ReviewRequests"));

var _Sections = _interopRequireDefault(require("./endpoints/Sections"));

var _Shares = _interopRequireDefault(require("./endpoints/Shares"));

var _Stars = _interopRequireDefault(require("./endpoints/Stars"));

var _Users = _interopRequireDefault(require("./endpoints/Users"));

var _Webhooks = _interopRequireDefault(require("./endpoints/Webhooks"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Client =
/*#__PURE__*/
function () {
  function Client() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, Client);

    _defineProperty(this, "activities", void 0);

    _defineProperty(this, "assets", void 0);

    _defineProperty(this, "branches", void 0);

    _defineProperty(this, "changesets", void 0);

    _defineProperty(this, "collectionLayers", void 0);

    _defineProperty(this, "collections", void 0);

    _defineProperty(this, "comments", void 0);

    _defineProperty(this, "commits", void 0);

    _defineProperty(this, "data", void 0);

    _defineProperty(this, "descriptors", void 0);

    _defineProperty(this, "files", void 0);

    _defineProperty(this, "layers", void 0);

    _defineProperty(this, "memberships", void 0);

    _defineProperty(this, "notifications", void 0);

    _defineProperty(this, "organizations", void 0);

    _defineProperty(this, "pages", void 0);

    _defineProperty(this, "previews", void 0);

    _defineProperty(this, "projects", void 0);

    _defineProperty(this, "reviewRequests", void 0);

    _defineProperty(this, "sections", void 0);

    _defineProperty(this, "shares", void 0);

    _defineProperty(this, "stars", void 0);

    _defineProperty(this, "users", void 0);

    _defineProperty(this, "webhooks", void 0);

    _defineProperty(this, "_analyticsCallback", void 0);

    options = _objectSpread({
      accessToken: process.env.ABSTRACT_TOKEN,
      apiUrl: "https://api.goabstract.com",
      objectUrl: "https://objects.goabstract.com",
      previewUrl: "https://previews.goabstract.com",
      transportMode: ["api"],
      webUrl: "https://app.goabstract.com"
    }, options);
    this._analyticsCallback = options.analyticsCallback;
    this.activities = new _Activities.default(this, options);
    this.assets = new _Assets.default(this, options);
    this.branches = new _Branches.default(this, options);
    this.changesets = new _Changesets.default(this, options);
    this.collectionLayers = new _CollectionLayers.default(this, options);
    this.collections = new _Collections.default(this, options);
    this.comments = new _Comments.default(this, options);
    this.commits = new _Commits.default(this, options);
    this.data = new _Data.default(this, options);
    this.descriptors = new _Descriptors.default(this, options);
    this.files = new _Files.default(this, options);
    this.layers = new _Layers.default(this, options);
    this.memberships = new _Memberships.default(this, options);
    this.notifications = new _Notifications.default(this, options);
    this.organizations = new _Organizations.default(this, options);
    this.pages = new _Pages.default(this, options);
    this.previews = new _Previews.default(this, options);
    this.projects = new _Projects.default(this, options);
    this.reviewRequests = new _ReviewRequests.default(this, options);
    this.sections = new _Sections.default(this, options);
    this.shares = new _Shares.default(this, options);
    this.stars = new _Stars.default(this, options);
    this.users = new _Users.default(this, options);
    this.webhooks = new _Webhooks.default(this, options);
  }

  _createClass(Client, [{
    key: "unwrap",
    value: function unwrap(value) {
      return value._response;
    }
  }]);

  return Client;
}();

exports.default = Client;