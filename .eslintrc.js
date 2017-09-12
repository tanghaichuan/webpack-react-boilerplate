module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "es6": true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "ecmaFeatures": {
            "experimentalObjectRestSpread": true,
            "jsx": true
        },
        "sourceType": "module"
    },
    "plugins": ["react"],
    "rules": {
        "indent": [
            "error", "tab"
        ],
        "linebreak-style": [
            "error", "windows"
        ],
        "quotes": [
            "error", "double"
        ],
        "semi": [
            "off", "always"
        ],
        "no-unused-vars": ["off"],
        "no-undef": ["off"],
        "indent": ["off"],
        "quotes": "off",
        "linebreak-style": "off",
        "no-console": "off"
    }
};