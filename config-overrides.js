const { alias } = require("react-app-rewire-alias");

module.exports = function override(config) {
  alias({
    "@/api": "src/api",
    "@/assets": "src/assets",
    "@/components": "src/components",
    "@/config": "src/config",
    "@/hooks": "src/hooks",
    "@/layouts": "src/layouts",
    "@/pages": "src/pages",
    "@/providers": "src/providers",
    "@/services": "src/services",
    "@/store": "src/store",
    "@/utils": "src/utils",
  })(config);

  return config;
};
