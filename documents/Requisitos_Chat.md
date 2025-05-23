# Requisitos Funcionales · Chat en Vivo

## 1. Propósito
Permitir la comunicación textual entre los usuarios presentes en una sala, asociando cada mensaje a la mascota seleccionada por el emisor.

## 2. Alcance
Este módulo define el comportamiento del chat integrado a la sala interactiva.

## 3. Requisitos Funcionales
| ID | Función              | Descripción del comportamiento |
|----|----------------------|--------------------------------|
| C1 | Chat lateral         | Panel donde todos los usuarios pueden enviar mensajes. |
| C2 | Mensajes con identidad | Cada mensaje muestra el nombre y avatar de la mascota seleccionada por el usuario. |
| C3 | Historial persistente | Los mensajes se guardan para poder visualizarse tras un refresco. |

## 4. Reglas de Negocio
- El nombre y avatar en el chat deben coincidir con la mascota elegida.
- Los mensajes deben incluir fecha/hora para orden y persistencia.

## 5. Flujos de Usuario
1. Usuario escribe un mensaje desde el panel lateral.  
2. Se muestra el mensaje al resto en tiempo real, con avatar y nombre de su mascota.  
3. Si refresca, los mensajes anteriores se mantienen visibles.
