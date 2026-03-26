# Code Review Rules

## TypeScript
- Use `const`/`let`, never `var`
- Prefer interfaces over types for object shapes
- No `any` types — use `unknown` or proper typing

## React
- Use functional components only
- Prefer named exports
- Use `useRef` for mutable values that don't trigger re-renders
- Clean up side effects in `useEffect` return

## Styling
- Tailwind utility classes only — no inline styles except dynamic values
- Mobile-first responsive design
- Minimum tap target 44px for interactive elements

## General
- No console.log in production code
- Keep components focused — one responsibility per file
