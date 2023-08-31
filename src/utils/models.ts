import {notify} from "notiwind";
import {Model} from "../interfaces/model.ts";

function installNotification() {
    notify({
        group: "install",
        title: "Installing...",
        text: "Check jobs tab to see progress",
    }, 4000) // 4s
}

async function basicInstall(model:Model) {
    console.log(model);
    const response = await fetch(`${import.meta.env.VITE_API_BASE}/models/apply`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({id: `${model.gallery.name}@${model.filename}`})
    });
    const data = await response.json();
    console.log(data);

    installNotification();
}

async function install(model:Model) {
    const response = await fetch(`${import.meta.env.VITE_API_BASE}/models/apply`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({id: `${model.gallery.name}@${model.filename}`})
    });
    const data = await response.json();
    console.log(data);

    installNotification();
}

export {basicInstall, install}
