# Code Review Rules

## TypeScript
- Use `const`/`let`, never `var`
- Prefer interfaces over types for object shapes
- No `any` types — use `unknown` or proper typing

## React
- Use functional components only
- Page/section components use `export default function` — named exports for hooks, utilities and shared UI components
- Use `useRef` for mutable values that don't trigger re-renders
- Clean up side effects in `useEffect` return
- No embedded `<style>` tags for reusable rules — use `src/index.css` or Tailwind config instead

## Styling
- Tailwind utility classes preferred — inline `style={{}}` allowed for hex colors, rgba values, gradients, and values not expressible as Tailwind arbitrary classes
- Mobile-first responsive design
- Minimum tap target 44px for interactive elements

## General
- No console.log in production code
- Keep components focused — one responsibility per file
