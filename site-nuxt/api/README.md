# SERVER MIDDLEWARE

Don't confuse it with routes middleware which are called before each route by Vue in Client Side or SSR. Middleware listed in the serverMiddleware property runs server-side before vue-server-renderer and can be used for server specific tasks like handling API requests or serving assets.

With NuxtJS as your framework, you gain server and client support automatically. There are many instances where you may have environment variables that you want to only render on the server side and not expose to the client this could be an internal API, key, or etc. NuxtJS allows this through the use of server middleware.

Image the following scenario, we have an internal API to users of the NuxtJS application will consume, but we do not want to expose the API to the users directly. In this scenario, we can create a server middleware that will handle requests and proxy pass them to a server defined by the environment variable.
