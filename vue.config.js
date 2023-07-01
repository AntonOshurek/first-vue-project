const { defineConfig } = require('@vue/cli-service');
module.exports = defineConfig({
	transpileDependencies: true,
});
module.exports = {
	css: {
		loaderOptions: {
			sass: {
				prependData: `@import "@/styles/variables.scss";`, // Путь к вашему файлу с переменными
			},
		},
	},
};
