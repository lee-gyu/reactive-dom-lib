import { component } from "@lee-gyu/reactive-dom-lib-core";

const button = component({
    tag: "button",
    state: {
        text: "asdasd",
    },
});

const root = document.getElementById("app");
