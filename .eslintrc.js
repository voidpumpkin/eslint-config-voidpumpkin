let prettierRules = require("./prettier.config.js");
module.exports = {
        extends: ["prettier"],
        plugins: ["prettier"],
        rules: {
                "prettier/prettier": ["error", prettierRules]
        }
};
