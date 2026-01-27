var _0x4e21 = ["Red Devils", "logo.jpg", "title", "includes", "querySelector", ".footer", "textContent", ".brand img", "src", ".brand", "body", "innerHTML", "<div style=\"display:flex;flex-direction:column;align-items:center;justify-content:center;height:100vh;width:100vw;background:#0f172a;color:#f8fafc;font-family:sans-serif;text-align:center;position:fixed;top:0;left:0;z-index:99999;\"><h1 style=\"color:#ef4444;font-size:3rem;margin-bottom:1rem;\">⚠️ SECURITY LOCKOUT</h1><h2 style=\"margin-bottom:2rem;\">TAMPERING DETECTED</h2><p style=\"font-size:1.2rem;max-width:600px;\">System integrity compromised. Branding elements have been modified.</p><p style=\"color:#94a3b8;margin-top:2rem;\">Powered by Red Devils Security</p></div>", "contextmenu", "preventDefault", "addEventListener", "selectstart", "dragstart", "keydown", "F12", "key", "I", "J", "U", "load"];
(function () {
  var _0x9f2b = _0x4e21[0];
  var _0x7a3c = _0x4e21[1];
  function _0x3b1d() {
    let _0x2c4e = false;
    if (!document[_0x4e21[2]][_0x4e21[3]](_0x9f2b)) {
      _0x2c4e = true;
    }
    const _0x1d9f = document[_0x4e21[4]](_0x4e21[5]);
    if (!_0x1d9f || !_0x1d9f[_0x4e21[6]][_0x4e21[3]](_0x9f2b)) {
      _0x2c4e = true;
    }
    const _0x5a82 = document[_0x4e21[4]](_0x4e21[7]);
    const _0x8b3e = document[_0x4e21[4]](_0x4e21[9]);
    if (!_0x5a82 || !_0x5a82[_0x4e21[8]][_0x4e21[3]](_0x7a3c) || _0x8b3e && !_0x8b3e[_0x4e21[6]][_0x4e21[3]](_0x9f2b)) {
      _0x2c4e = true;
    }
    if (_0x2c4e) {
      document[_0x4e21[10]][_0x4e21[11]] = _0x4e21[12];
    }
  }
  document[_0x4e21[16]](_0x4e21[13], _0xe => _0xe[_0x4e21[14]]());
  document[_0x4e21[16]](_0x4e21[17], _0xe => _0xe[_0x4e21[14]]());
  document[_0x4e21[16]](_0x4e21[18], _0xe => _0xe[_0x4e21[14]]());
  document[_0x4e21[16]](_0x4e21[19], function (_0xe) {
    if (_0xe[_0x4e21[21]] === _0x4e21[20] || _0xe.ctrlKey && _0xe.shiftKey && _0xe[_0x4e21[21]] === _0x4e21[22] || _0xe.ctrlKey && _0xe.shiftKey && _0xe[_0x4e21[21]] === _0x4e21[23] || _0xe.ctrlKey && _0xe[_0x4e21[21]] === _0x4e21[24]) {
      _0xe[_0x4e21[14]]();
      return false;
    }
  });
  window[_0x4e21[16]](_0x4e21[25], _0x3b1d);
  setInterval(_0x3b1d, 2000);
})();