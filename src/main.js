import {
	createSSRApp
} from "vue";
import App from "./App.vue";
// 注释
export function createApp() {
	const app = createSSRApp(App);
	return {
		app,
	};
}
