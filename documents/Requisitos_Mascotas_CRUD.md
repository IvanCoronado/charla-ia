# Requisitos Funcionales · Gestión de Mascotas

## 1. Propósito
Permitir a los usuarios crear, editar, visualizar y eliminar fichas de sus mascotas, como base de identidad para interacciones posteriores.

## 2. Alcance
Este módulo contempla las funcionalidades CRUD asociadas a mascotas personales, accesibles únicamente por el usuario autenticado.

## 3. Requisitos Funcionales
| ID | Función                       | Descripción del comportamiento |
|----|------------------------------|--------------------------------|
| F1 | Listar mascotas              | El usuario ve un listado/galería con todas sus mascotas ordenadas por fecha de creación. |
| F2 | Crear mascota                | El usuario puede añadir una nueva mascota indicando **nombre** (obligatorio), **edad** (obligatoria) y **foto** (opcional). |
| F3 | Editar mascota               | El usuario puede modificar los datos de una mascota existente. |
| F4 | Eliminar mascota             | El usuario puede borrar una mascota previa confirmación. |
| F5 | Mascota por defecto          | Si la mascota no tiene foto, se muestra un avatar genérico. |
| F6 | Validaciones                 | • Nombre: 1‑30 caracteres.  
• Edad: 0‑30 años.  
• Foto: formato imagen y tamaño razonable. |

## 4. Reglas de Negocio
- El usuario solo puede acceder y modificar sus propias mascotas.

## 5. Flujos de Usuario
1. Usuario entra en la sección de mascotas.  
2. Puede crear una nueva mascota mediante un formulario.  
3. Puede editar o eliminar mascotas existentes.  
4. Las mascotas se listan de forma visual con nombre, edad y foto.
