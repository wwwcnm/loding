import { createApp, ref, h } from "vue";
import Loading from "../components/loding.vue";

let loadingInstance: any = null;

function initInstance() {
    //生成挂载dom
    const container = document.createElement("div");
    container.id = "loading-box";
    document.body.appendChild(container);

    const app = createApp({
        setup() {
            const loadingRef = ref({
                show: true,
                text: "",
            });

            return {
                loadingRef,
            };
        },

        render() {
            return h(Loading, {
                show: this.loadingRef.show,
            });
        },
    });

    loadingInstance = app.mount("#loading-box");
}

function show() {
    if (!loadingInstance) {
        initInstance();
    }
    loadingInstance.loadingRef.show = true;
}

function hide() {
    if (loadingInstance) {
        loadingInstance.loadingRef.show = false;
    }
}

export default {
    show,
    hide,
};