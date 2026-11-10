# Changelog

Todos los cambios relevantes de este proyecto se documentan en este archivo.

El formato sigue [Keep a Changelog](https://keepachangelog.com/es-ES/1.1.0/) y las versiones siguen [Semantic Versioning](https://semver.org/lang/es/).

## [Unreleased]

## [0.2.0] — 2026-11-09

Actualización a Node.js 26 (LTS), dependencias exactas y migración del stack de IA y de estilos.

### Changed

- **Node.js 26.13.0** (LTS) en `.nvmrc` y CI; **pnpm 12.18.0** como `packageManager`.
- **Next.js 16.4.5** y **React 19.3.1** (antes Next.js 14.2.3 y React 18).
- **AI SDK 7**: `useChat` de `@ai-sdk/react` con `DefaultChatTransport`. La ruta `/api/chat` usa `streamText` con `@ai-sdk/openai` y devuelve `toUIMessageStreamResponse()`. Sustituye a `ai` 3 y `openai-edge`.
- **Tailwind CSS 4.3.5** con `@tailwindcss/postcss`; se elimina `tailwind.config.ts`.
- **ESLint 10.14.0** con configuración flat (`eslint-config-next`) y scripts `check`, `lint`, `eslint` y `eslint:fix`. Se sustituye `next lint`.
- **Formato**: `.prettierrc` estándar, `prettier` y `prettier:check`. CI con `check`, `eslint`, `prettier:check` y `build`.
- Se elimina el paquete `standard`, que no se usaba.
- Dependencias exactas: sin `^` ni `~`.

### Fixed

- La ruta `/api/chat` devolvía la respuesta de error sin `return`, así que el error 500 nunca llegaba al cliente.
- `@emnapi/core` y `@emnapi/runtime` fijados a `1.11.3` mediante `overrides` en `pnpm-workspace.yaml`.
