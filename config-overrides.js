const { alias, aliasJest } = require("react-app-rewire-alias");

const aliasMap = {
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
};

module.exports = function override(config) {
  alias(aliasMap)(config);
  return config;
};
module.exports.jest = aliasJest(aliasMap);
