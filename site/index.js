const js = import("./node_modules/@tsuboyataiki/hello-wasm/hello_wasm.js");

js.then(js => {
  js.greet("WebAssembly");
});
