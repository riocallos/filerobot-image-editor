"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toggleModalFullscreen = void 0;

var _config = require("../config");

var toggleModalFullscreen = function toggleModalFullscreen(configElementId) {
  // It should be .getElementById but it is not as we user might have multiple blocks with same ID (which is not right)
  // but we do that for making sure right implement most of the time
  // so that we would have the last added block with that ID to be fullscreened as most probably it would be the plugin.
  var modalElems = document.querySelectorAll("#".concat(configElementId || _config.MODAL_ID));
  var modal = modalElems[modalElems.length - 1];

  if (!modal) {
    return;
  }

  document.fullscreenElement = document.fullscreenElement || document.mozFullscreenElement || document.msFullscreenElement || document.webkitFullscreenDocument;
  document.exitFullscreen = document.exitFullscreen || document.mozExitFullscreen || document.msExitFullscreen || document.webkitExitFullscreen;
  modal.requestFullscreen = modal.requestFullscreen || modal.mozRequestFullscreen || modal.msRequestFullscreen || modal.webkitRequestFullscreen;

  if (!document.fullscreenElement) {
    modal.requestFullscreen().catch(function (err) {
      alert("Error attempting to enable full-screen mode: ".concat(err.message, " (").concat(err.name, ")"));
    });
  } else if (document.exitFullscreen) {
    document.exitFullscreen();
  }
};

exports.toggleModalFullscreen = toggleModalFullscreen;