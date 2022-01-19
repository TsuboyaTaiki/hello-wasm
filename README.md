# hello-wasm

```bash
$ git clone git@github.com:TsuboyaTaiki/hello-wasm.git
$ cd hello-wasm/

$ cargo install wasm-pack

$ npm adduser

$ wasm-pack build --scope mynpmusername  # Build package

$ cd pkg
$ npm publish --access=public

$ cd ../site

$ npm install
$ npm run serve

> serve
> webpack-dev-server

ℹ ｢wds｣: Project is running at http://localhost:8080/
ℹ ｢wds｣: webpack output is served from /
ℹ ｢wds｣: Content not from webpack is served from /Users/xxxxxxxxx/hello-wasm/site
ℹ ｢wdm｣: Hash: 6cbd40d847fdb1c8120b
Version: webpack 4.46.0
Time: 610ms
Built at: YYYY/MM/DD HH:MM:SS
```

Go to http://localhost:8080/
