
### Dependências

```toml
    [dependencies]
    wasm-bindgen = "0.2"
```


```json
    - 🎨 composições:

    "dependencies": {
        "autoprefixer": "^10.4.20",
        "postcss": "^8.4.47",
        "react": "^18.3.1",
        "react-dom": "^18.3.1",
        "sass": "^1.79.5",
        "tailwindcss": "^3.4.13"
    },
    "devDependencies": {
        "@eslint/js": "^9.11.1",
        "@types/react": "^18.3.10",
        "@types/react-dom": "^18.3.0",
        "@vitejs/plugin-react": "^4.3.2",
        "eslint": "^9.11.1",
        "eslint-plugin-react-hooks": "^5.1.0-rc.0",
        "eslint-plugin-react-refresh": "^0.4.12",
        "globals": "^15.9.0",
        "typescript": "^5.5.3",
        "typescript-eslint": "^8.7.0",
        "vite": "^5.4.8"
    }
```


### 📦 Build

**Para realizar build do webassembly:**

```ps1
    wasm-pack build --target web
```


### Docs for WebAssembly:

- [Rust Wasm ](https://developer.mozilla.org/en-US/docs/WebAssembly/Rust_to_Wasm)

- [Rust 🦀 and WebAssembly 🕸
](https://rustwasm.github.io/docs/book/)


### 💚🩺 Mapa dos códigos vitais:

```
                        ./
                         |
package.json <-- src <-- |
                         | --> wasm --> Cargo.toml
```

