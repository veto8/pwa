import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import "@picocss/pico/css/pico.css";
import Log2textarea from "log2textarea/log2textarea.js";
import "./css/app.css";
import "./js/app.js";
const log = new Log2textarea("logger");
const app = createApp(App);
app.use(router);
app.mount("#app");

let install_prompt = null;
let $install_pwa = document.querySelector("#install_pwa");
let $refresh_pwa = document.querySelector("#refresh_pwa");

// Register Service Worker
const register_sw = async () => {
  if ("serviceWorker" in navigator) {
    try {
      const registration = await navigator.serviceWorker.register(
        "/service_worker.js",
        {
          scope: "/",
        },
      );
      if (registration.installing) {
        log.info("...service worker installing");
      } else if (registration.waiting) {
        log.info("...service worker installed");
      } else if (registration.active) {
        log.info("...service worker active");

        const $refresh_pwa = document.querySelector("#refresh_pwa");
        $refresh_pwa.addEventListener("click", () => {
          log.info("update service worker registered");
          registration.unregister().then((boolean) => {
            window.location.reload(true);
          });
        });

        return registration;
      }
    } catch (error) {
      console.error(`Registration failed with ${error}`);
    }
  }
};

let worker = new Worker(new URL("./db_worker.js", import.meta.url), {
  type: "module",
});

const $iniciarBaseDeDatos = document.querySelector("#btnIniciarBaseDeDatos");
const $insertar = document.querySelector("#btnInsertar");
const $obtener = document.querySelector("#btnObtener");
const $nombre = document.querySelector("#nombre");
const $fechaNacimiento = document.querySelector("#fechaNacimiento");
const $contenedorPersonas = document.querySelector("#contenedorPersonas");

$insertar.addEventListener("click", () => {
  worker.postMessage([
    "insertar_persona",
    { nombre: $nombre.value, fechaNacimiento: $fechaNacimiento.value },
  ]);
});

$obtener.addEventListener("click", () => {
  worker.postMessage(["obtener_personas"]);
});

$iniciarBaseDeDatos.onclick = () => {
  worker.postMessage(["iniciar"]);
};

worker.onmessage = (evento) => {
  const accion = evento.data[0];
  const argumentos = evento.data[1];
  switch (accion) {
    case "iniciado":
      [$nombre, $fechaNacimiento, $insertar, $obtener].forEach(
        (elemento) => (elemento.disabled = false),
      );
      break;
    case "persona_insertada":
      //console.log({ argumentos });
      log.info("...persona insertada");
      break;

    case "log_message":
      //console.log({ argumentos });
      log.info(argumentos);
      break;

    case "personas_obtenidas":
      const personas = argumentos;
      $contenedorPersonas.innerHTML = "";
      for (const persona of personas) {
        $contenedorPersonas.innerHTML += `<strong>${persona.nombre}</strong> ${persona.fechaNacimiento}<br>`;
      }
      break;
  }
};

window.addEventListener("beforeinstallprompt", (event) => {
  console.log("...Desktop PWA can be installed!");
  event.preventDefault();

  install_prompt = event;
  //$install_button.classList.remove("is-hidden");
  $install_pwa.addEventListener("click", () => {
    console.log("...install app btn click");
    install_prompt.prompt();

    install_prompt.userChoice.then((choice_result) => {
      if (choice_result.outcome === "accepted") {
        console.log("User accepted the A2HS install app prompt");
      } else {
        console.log("User dismissed the A2HS install app prompt");
      }
      install_prompt = null;
      $install_pwa.classList.add("is-hidden");
    });
  });
});
