import { importShared } from './__federation_fn_import-D_SMhnIJ.js';
import App, { j as jsxRuntimeExports } from './__federation_expose_App-D9mJDWXu.js';
import { r as reactDomExports } from './__federation_shared_react-dom-6cCw-6Kw.js';

var client = {};

var m = reactDomExports;
{
  client.createRoot = m.createRoot;
  client.hydrateRoot = m.hydrateRoot;
}

const React = await importShared('react');
client.createRoot(document.getElementById("root")).render(
  /* @__PURE__ */ jsxRuntimeExports.jsx(React.StrictMode, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(App, {}) })
);
