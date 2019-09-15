let prettierRules = require("./.prettierrc.js");
module.exports = {
        extends: ["prettier"],
        plugins: ["prettier"],
        rules: {
                "prettier/prettier": ["error", prettierRules]
        }
};
