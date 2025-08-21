/**
 * YouTube Speed Keys Extension
 * ----------------------------
 * This script allows you to adjust YouTube playback speed
 * using keyboard shortcuts:
 *   , (comma) → decrease playback speed
 *   . (dot)   → increase playback speed
 *
 * - Speeds change in 0.25x increments.
 * - Minimum = 0.25x, Maximum = 4.0x.
 * - A small toast notification shows the current speed.
 * - Shortcut keys are ignored while typing in inputs/textareas.
 *
 * Works on Chrome, Edge, and Firefox (Manifest V3).
 */

const STEP = 0.25;    // Speed increment
const MIN = 0.25;     // Minimum playback speed
const MAX = 4.0;      // Maximum playback speed

/**
 * Get the <video> element from YouTube
 */
function getVideo() {
  return document.querySelector("video");
}

/**
 * Show a small on-screen toast with the current speed
 */
let toastEl = null;
function showToast(text) {
  if (!toastEl) {
    toastEl = document.createElement("div");
    Object.assign(toastEl.style, {
      position: "fixed",
      right: "16px",
      bottom: "16px",
      padding: "10px 14px",
      background: "rgba(0,0,0,0.85)",
      color: "white",
      fontSize: "14px",
      borderRadius: "8px",
      zIndex: 999999,
      transition: "opacity 0.3s ease"
    });
    document.body.appendChild(toastEl);
  }
  toastEl.textContent = text;
  toastEl.style.opacity = "1";
  clearTimeout(showToast._t);
  showToast._t = setTimeout(() => (toastEl.style.opacity = "0"), 900);
}

/**
 * Handle keyboard shortcuts
 */
function onKeydown(e) {


    // make surre the user is not typing 
  const tag = (e.target && e.target.tagName) || "";
  const isTyping =
    /INPUT|TEXTAREA|SELECT/.test(tag) ||
    (e.target && e.target.isContentEditable);

    // check if typing or maybe using other shortcuts
  if (isTyping || e.altKey || e.ctrlKey || e.metaKey) return;

  // make sure the video is loaded for saftey
  const v = getVideo();
  if (!v) return;

  if (e.key === ",") {
    e.preventDefault();
    v.playbackRate = Math.max(MIN, v.playbackRate - STEP);
    showToast(`Speed: ${v.playbackRate.toFixed(2)}x`);
  } else if (e.key === ".") {
    e.preventDefault();
    v.playbackRate = Math.min(MAX, v.playbackRate + STEP);
    showToast(`Speed: ${v.playbackRate.toFixed(2)}x`);
  }
}

/**
 * Attach event listeners (works with YouTube's SPA navigation)
 */
function attach() {
  window.removeEventListener("keydown", onKeydown);
  window.addEventListener("keydown", onKeydown, true);
}

window.addEventListener("yt-navigate-finish", attach);
window.addEventListener("yt-page-data-updated", attach);
document.addEventListener("DOMContentLoaded", attach);
attach();
