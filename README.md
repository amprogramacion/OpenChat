# Chat App

Una aplicación de chat en tiempo real utilizando Node.js, Express y Socket.io con soporte para WebSocket Secure (WSS).

## Características

- Chat en tiempo real
- Lista de usuarios conectados
- Notificaciones de mensajes no leídos
- Soporte para WebSocket Secure (WSS)
- Configuración de CORS

## Requisitos

- Node.js (versión 12 o superior)
- npm (gestor de paquetes de Node.js)
- OpenSSL (para generar certificados SSL)

## Instalación

1. Clona este repositorio:
   ```sh
   git clone https://github.com/tu-usuario/chat-app.git
   cd chat-app
   ```

2. Instala las dependencias del proyecto:
   ```sh
   npm install
   ```

3. Genera los archivos de clave y certificado SSL:
   ```sh
   openssl genrsa -out key.pem 2048
   openssl req -new -x509 -key key.pem -out cert.pem -days 365
   ```
   **Nota:** Puedes utilizar los archivos `key.pem` y `cert.pem` proporcionados en este repositorio, pero es recomendable generar tus propios certificados.

4. Inicia el servidor:
   ```sh
   npm start
   ```

5. Abre tu navegador y navega a `https://localhost:3000`.

## Configuración

El archivo de configuración principal es `server.js`, donde puedes ajustar las configuraciones del servidor y los parámetros de conexión.

### Estructura del Proyecto

```plaintext
chat-app/
├── server.js
├── package.json
├── public/
│   ├── index.html
│   ├── style.css
│   └── client.js
└── README.md
```

## Ejemplos de Uso

### Iniciar el Servidor

1. Asegúrate de que tienes Node.js y npm instalados en tu sistema.
2. Clona el repositorio y navega al directorio del proyecto.
3. Instala las dependencias del proyecto ejecutando `npm install`.
4. Genera los certificados SSL si no lo has hecho ya.
5. Inicia el servidor con `npm start`.
6. Abre tu navegador y navega a `https://localhost:3000`.

### Enviar Mensajes

1. Abre la aplicación en tu navegador.
2. Introduce tu nombre de usuario cuando se te solicite.
3. Escribe un mensaje en el campo de entrada y presiona el botón "Enviar".
4. Tu mensaje debería aparecer en la lista de mensajes.

### Conectar Múltiples Usuarios

1. Abre varias pestañas o ventanas del navegador y navega a `https://localhost:3000`.
2. Introduce diferentes nombres de usuario en cada pestaña o ventana.
3. Envía mensajes desde cada pestaña o ventana y observa cómo se actualizan en tiempo real.

## Contribuciones

¡Las contribuciones son bienvenidas! Por favor, abre un issue o envía un pull request para contribuir a este proyecto.

## Licencia

Este proyecto está licenciado bajo la Licencia MIT.