# Requisitos Funcionales · Sala Interactiva

## 1. Propósito
Ofrecer una sala virtual compartida donde los usuarios interactúan visualmente con las fichas de sus mascotas y pueden ver los punteros de otros participantes.

## 2. Alcance
Este módulo define el espacio de interacción donde se renderizan las mascotas como fichas movibles y se visualizan punteros en tiempo real.

## 3. Requisitos Funcionales
| ID | Función                     | Descripción del comportamiento |
|----|----------------------------|--------------------------------|
| S1 | Acceso a sala              | El usuario accede a una sala compartida y elige una de sus mascotas como identidad. |
| S2 | Visualización de fichas    | Se muestran las fichas de todas las mascotas presentes en la sala. |
| S3 | Movimiento de fichas       | Cualquier usuario puede mover cualquier ficha libremente y en tiempo real. |
| S4 | Persistencia de posición   | Las posiciones se conservan tras recargas o reconexiones. |
| S5 | Puntero visible            | Se muestra un puntero con el avatar y nombre del usuario al moverse sobre el canvas. |
| S6 | Manejo de desconexión      | Al cerrar pestaña o desconectarse, el usuario deja de aparecer como activo. |

## 4. Reglas de Negocio
- Cada usuario representa una única mascota en cada sala.
- Las posiciones de las fichas deben sincronizarse en tiempo real.

## 5. Flujos de Usuario
1. Usuario accede a la sala desde una URL.  
2. Selecciona una mascota para representarlo.  
3. Interactúa moviendo fichas y viendo punteros en tiempo real.  
4. Abandona la sala o pierde conexión → se elimina su presencia activa.
