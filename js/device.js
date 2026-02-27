/**
 * Device detection & responsive utilities
 * Auto-detects device type and adds classes to <html> for targeted styling
 */
(function() {
  function getDeviceType() {
    const ua = navigator.userAgent;
    const width = window.innerWidth;
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(ua)) {
      if (width < 480) return 'mobile';
      if (width < 768) return 'mobile-lg';
      if (width < 1024) return 'tablet';
    }
    if (width < 640) return 'mobile';
    if (width < 768) return 'mobile-lg';
    if (width < 1024) return 'tablet';
    if (width < 1280) return 'desktop';
    return 'desktop-lg';
  }

  function getTouchSupport() {
    return 'ontouchstart' in window || navigator.maxTouchPoints > 0;
  }

  function init() {
    const html = document.documentElement;
    const type = getDeviceType();
    const touch = getTouchSupport();
    html.classList.add('device-' + type);
    if (touch) html.classList.add('touch-device');
    else html.classList.add('pointer-device');
    html.setAttribute('data-device', type);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  window.addEventListener('resize', function() {
    const html = document.documentElement;
    const oldType = html.getAttribute('data-device');
    const newType = getDeviceType();
    if (oldType !== newType) {
      html.classList.remove('device-' + oldType);
      html.classList.add('device-' + newType);
      html.setAttribute('data-device', newType);
    }
  });
})();
