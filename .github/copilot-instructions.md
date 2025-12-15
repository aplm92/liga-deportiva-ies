# Instrucciones para agentes de código (proyecto Liga Deportiva)
 # Instrucciones para agentes de código (proyecto Liga Deportiva)

 Breve: este repositorio contiene una SPA Angular (`liga-frontend/`) que consume una API ubicada en `backend/` (esperado bajo rutas `/api`). Las instrucciones abajo apuntan a que un agente sea productivo sin asumir conocimiento fuera del código.

 - **Estructura principal**: la UI está en `liga-frontend/` (Angular CLI v21). Código relevante en `liga-frontend/src/app`:
   - `core/services/ApiService` — cliente HTTP central; contiene `base = 'https://TU_BACKEND.onrender.com/api'` (ajustar en `api.service.ts`).
   - `core/services/AuthService` — gestiona `localStorage` con claves `token` y `role` (el backend devuelve `user.tipo`).
   - `core/models/` — modelos (varios archivos están vacíos; implementar acorde al backend).
   - `pages/` — componentes de UI agrupados por función (ej. `pages/home/home.ts`, `pages/equipos/equipos.ts`).

 - **Convenciones de nombres y componentes**:
   - Los componentes usan clases cortas como `Home`, `Equipos`, `Login` (ej. `home.ts` exporta `Home`) en lugar de `HomeComponent`. Mantén esa convención al actualizar `AppModule`.
   - Declaraciones y bootstrap están en `src/app/app.module.ts` y las rutas en `src/app/app.routes.ts`.

 - **Integración Frontend ↔ Backend**:
   - Usa siempre `ApiService.get<T>(path)` y `ApiService.post<T>(path, body)` para llamadas HTTP.
   - `ApiService.base` es la URL base; el frontend asume endpoints con prefijo `/api` (por ejemplo `/auth/login`). Si cambias la URL, edita `api.service.ts` o añade configuración por entorno.
   - `AuthService.login(...)` guarda `token` y `role` en `localStorage`; otros módulos usan `AuthService.getRole()`.

 - **Comandos de desarrollo y pruebas** (Angular CLI):
   - Desarrollo local: `ng serve` (http://localhost:4200)
   - Build producción: `ng build`
   - Tests unitarios: `ng test`

 - **Patrones observables**:
   - Los servicios devuelven `Observable<T>` desde `ApiService`. `AuthService` usa `pipe` + `tap` para efectos secundarios; prefieren RxJS sobre conversiones a promesas.

 - **Áreas con implementaciones vacías** (puntos de trabajo frecuentes):
   - `src/app/core/services/equipos.service.ts`, `partidos.service.ts`, `usuarios.service.ts` están vacíos: implementar usando `ApiService`.
   - `src/app/core/models/*.model.ts` están vacíos — modelarlos según la API del backend.

 - **Depuración y pruebas rápidas**:
   - Para depurar llamadas HTTP, inspecciona `ApiService` y usa el panel Network del navegador.
   - Comprueba `localStorage` para `token` y `role` durante flujos de autenticación.
   - Si añades rutas, registra en `app.routes.ts`; hay rutas especiales por rol (`index_usuario`, `index_administrador`, etc.) que actualmente apuntan a `Home`.

 - **Precauciones**:
   - No renombres los componentes declarados sin actualizar `AppModule` (la app importa clases por nombre: `App`, `Header`, `Footer`, ...).
   - No cambies las claves de `localStorage` (`token`, `role`) sin actualizar todas las referencias.

 - **Ejemplos concretos**:
   - Cambiar la base del API: editar `liga-frontend/src/app/core/services/api.service.ts`.
   - Login: `liga-frontend/src/app/core/services/auth.service.ts` guarda `res.token` y `res.user.tipo`.

 Si quieres, puedo añadir:
 - snippets de `ApiService`/`AuthService` más detallados;
 - plantillas de PR o reglas de commits;
 - mapeo de modelos basado en el `backend/`.
