# CSS Architecture Analysis: CSS Modules vs Tailwind CSS vs styled-components

A hands-on comparative study of three major CSS styling strategies in modern frontend development.
The same design system – containing **Button, Card, Modal, Input, and Badge** – is implemented three separate times using **CSS Modules**, **Tailwind CSS**, and **styled-components**.

Each implementation includes:

* All five components with variants, sizes, and states
* Functional light/dark theme switching
* A stress-test component rendering 1000 buttons
* Production-ready Docker builds served via Nginx

The goal is to gather quantitative data (bundle size, runtime performance, dead code elimination, style isolation) and provide a reasoned recommendation for different project contexts.

---

## Folder Structure

```text id="r4n7px"
css-architecture-analysis/
├── benchmark.json
├── docker-compose.yml
├── README.md
├── .env.example
├── .gitignore
├── css-modules-impl/
│   ├── Dockerfile
│   ├── package.json
│   ├── vite.config.js
│   ├── index.html
│   └── src/
│       ├── main.jsx
│       ├── App.jsx
│       ├── App.module.css
│       ├── global.css
│       └── components/
│           ├── Button/
│           ├── Card/
│           ├── Modal/
│           ├── Input/
│           ├── Badge/
│           ├── ThemeToggle/
│           └── StressTest/
├── tailwind-impl/
│   ├── Dockerfile
│   ├── package.json
│   ├── vite.config.js
│   ├── tailwind.config.js
│   ├── postcss.config.js
│   ├── index.html
│   └── src/
│       ├── main.jsx
│       ├── App.jsx
│       ├── index.css
│       └── components/
├── styled-components-impl/
│   ├── Dockerfile
│   ├── package.json
│   ├── vite.config.js
│   ├── index.html
│   └── src/
│       ├── main.jsx
│       ├── App.jsx
│       ├── theme.js
│       ├── globalStyle.js
│       └── components/
```

---

## Quick Start with Docker (Recommended)

### 1. Clone the repository

```bash id="9r2qmu"
git clone <your-repo-url>
cd css-architecture-analysis
```

### 2. Start all three applications

```bash id="5mk2fd"
docker-compose up --build -d
```

Wait for the containers to become healthy (usually within 2–3 minutes).

Then open your browser:

* CSS Modules – `http://localhost:3001`
* Tailwind CSS – `http://localhost:3002`
* styled-components – `http://localhost:3003`

### 3. Stop the services

```bash id="uvj4aw"
docker-compose down
```

---

## Running Locally (Without Docker)

Each implementation can be run independently for development or testing.

```bash id="2f9kcx"
# CSS Modules
cd css-modules-impl
npm install
npm run dev

# Tailwind CSS
cd ../tailwind-impl
npm install
npm run dev

# styled-components
cd ../styled-components-impl
npm install
npm run dev
```

You can change the port in `vite.config.js` if needed.

---

## Components Overview

All three implementations render the same set of components with identical `data-testid` attributes for automated verification.

| Component  | Variants / States                                              | `data-testid` examples            |
| ---------- | -------------------------------------------------------------- | --------------------------------- |
| **Button** | `primary`, `secondary`, `danger`, `sm`, `md`, `lg`, `disabled` | `button-primary`, `button-danger` |
| **Card**   | default, `hoverable`                                           | `card-default`                    |
| **Modal**  | Overlay, close button, focus trap                              | `modal-overlay`, `modal-close`    |
| **Input**  | `error` state, `helperText`, `prefixIcon`                      | `input-default`                   |
| **Badge**  | `success`, `warning`, `error`, `info`, `sm`, `md`              | `badge-success`                   |

All apps include:

* A **theme toggle** (`data-testid="theme-toggle"`)
* A **Stress Test** section with 1000 buttons

> **Note**: The Username input demonstrates error clearing – start typing to see the red border disappear.

---

## Benchmarking & Data Collection

The file `benchmark.json` at the root stores the final metrics.

### 1. Bundle Size

* Build the app: `npm run build`
* Measure CSS and JS bundle sizes
* Record values in `benchmark.json`

### 2. Dead CSS

* Use Chrome DevTools Coverage tab
* Record unused CSS percentage

### 3. Runtime Stress Test

* Open React DevTools Profiler
* Trigger “Re-render Stress Test”
* Average multiple recordings

### 4. Theme Switching Maintainability

* Count files needed to add a new design token
* Record the number in `benchmark.json`

### 5. Style Isolation

Inject:

```js id="gn4d8v"
const s = document.createElement('style');
s.textContent = 'button { color: red !important; }';
document.head.appendChild(s);
```

If button text is not red, style isolation is successful.

### 6. Injected CSS (styled-components only)

```js id="1e4qtd"
console.log([...document.querySelectorAll('style')].reduce((sum, el) => sum + el.textContent.length, 0))
```

This outputs total injected CSS size in bytes.

---

## Analysis and Recommendation

### Bundle Size

* **CSS Modules** → compact static CSS bundle
* **Tailwind CSS** → tiny purged CSS output
* **styled-components** → larger JS bundle due to runtime injection

### Dead Code Elimination

* Tailwind and styled-components achieve near-zero unused CSS
* CSS Modules may contain unused selectors depending on imports

### Runtime Performance

* CSS Modules and Tailwind perform similarly
* styled-components introduces additional runtime overhead

### Maintainability

* Tailwind enables fast prototyping
* CSS Modules offer structured scoped styling
* styled-components excels for dynamic prop-based styling

### Style Isolation

All three implementations successfully isolate styles from global pollution.

### Recommendation

* **Tailwind CSS** → best for rapid development and startups
* **CSS Modules** → ideal for scalable enterprise design systems
* **styled-components** → excellent for highly dynamic component-driven UIs

The best choice depends on project scale, team familiarity, and performance constraints.

---

## Environment Variables

No critical environment variables are required.

Optional variables are documented in `.env.example`.

---

## Testing & Verification

Recommended automated checks:

* Verify all `data-testid` elements exist
* Theme toggle updates styles correctly
* Modal opens and closes properly
* Global CSS pollution test passes

Testing can be done with:

* Cypress
* Playwright
* Puppeteer

---

