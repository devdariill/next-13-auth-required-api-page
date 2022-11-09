import { handleAuth } from "@auth0/nextjs-auth0";
export default handleAuth();
// se crean las siguientes rutas automaticamente
// /login
// /logout
// /callback // endpoint de recoger datos de auth0
// /me // next llama esta cookie para saber si el usuario esta logueado o no
