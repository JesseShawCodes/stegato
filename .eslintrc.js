module.exports = {
    "extends": "airbnb",
    "plugins": [
        "react",
        "jsx-a11y",
        "import"
    ],
    "env": {
        "browser": true,
        "node": true
    },
    "rules": {
        "react/jsx-filename-extension": 0,
        "class-methods-use-this": 0,
        "react/destructuring-assignment": 0,
        "react/prop-types": 0,
        "no-return-assign": 0
    },
    "globals": {
        "it": true,
        "describe": true
    }
}