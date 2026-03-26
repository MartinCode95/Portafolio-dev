# Portafolio — Martín García

Portfolio de desarrollador frontend con stack moderno e integración nativa de IA. Construido con metodología SDD (Spec-Driven Development) — especificación antes que código, revisión automática antes de cada commit.

<!-- TODO: add Vercel URL after deploy -->

---

## Stack

| Tecnología       | Versión  |
| ---------------- | -------- |
| React            | 19       |
| TypeScript       | 5        |
| Vite             | 8        |
| Tailwind CSS     | v4       |
| Claude Code      | —        |
| GGA              | —        |
| MCP Servers      | —        |
| Vercel           | —        |

---

## Metodología SDD

Este proyecto fue construido siguiendo un flujo **Spec-Driven Development**:

1. **SPEC FIRST** — Antes de escribir código, se define qué debe hacer el sistema y por qué (Given/When/Then).
2. **AGENTS.md** — Reglas explícitas para los agentes IA. Ningún agente actúa sin contexto.
3. **BUILD con IA** — Claude Code ejecuta tareas acotadas. El desarrollador dirige, el agente implementa.
4. **REVIEW (GGA)** — Revisión automática post-commit: cumplimiento de spec, convenciones y calidad.
5. **DEPLOY trazable** — Cada cambio tiene historia. SDD garantiza que lo que se despliega es lo que se especificó.

---

## Estructura de carpetas

```
src/
├── components/
│   ├── layout/       # Layout, Header, Footer
│   ├── sections/     # Hero, About, Skills, Methodology, Projects, Education, Contact
│   └── ui/           # Componentes reutilizables
├── data/             # projects.ts, personal.ts, education.ts, skills.ts
└── types/            # Interfaces TypeScript
```

---

## Comandos de desarrollo

```bash
npm install      # Instalar dependencias
npm run dev      # Servidor de desarrollo (http://localhost:5173)
npm run build    # Build de producción
```

---

## Agentes y reglas

Las reglas para los agentes IA están definidas en [`AGENTS.md`](./AGENTS.md).
