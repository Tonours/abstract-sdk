"use strict";

require("core-js/modules/es.string.split");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isSketchPlugin = isSketchPlugin;
exports.isAbstractPluginInstalled = isAbstractPluginInstalled;
exports.isAbstractDocument = isAbstractDocument;
exports.project = project;
exports.branch = branch;
exports.file = file;

/* global process */
function isSketchPlugin() {
  // New versions of skpm set process type to "sketch". For older
  // versions we can infer from the presence of ObjectiveC classes
  // $FlowFixMe property type is missing in process
  return process.type === "sketch" || NSString !== undefined;
}

function isAbstractPluginInstalled() {
  // The Abstract plugin makes available the PROSketchBootstrap
  // class, regardless of whether the current document is managed
  return isSketchPlugin() && PROSketchBootstrap !== undefined;
}

function isAbstractDocument(context) {
  return isSketchPlugin() && !!documentKey(context);
}

function project(context) {
  var key = documentKey(context);
  return {
    projectId: projectId(key)
  };
}

function branch(context) {
  var key = documentKey(context);
  return {
    projectId: projectId(key),
    branchId: branchId(key)
  };
}

function file(context) {
  var key = documentKey(context);
  return {
    projectId: projectId(key),
    branchId: branchId(key),
    fileId: fileId(key),
    sha: "latest"
  };
}

function projectId(key) {
  return key.split("/")[0];
}

function branchId(key) {
  return key.split("/")[1];
}

function fileId(key) {
  return key.split("/")[3];
}

function documentKey(context) {
  return PROSketchBootstrap.documentKey(context.document);
}