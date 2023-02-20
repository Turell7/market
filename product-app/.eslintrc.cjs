module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended"
    ],
    "overrides": [
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    rules: {
        semi: ['error', 'never'],
        'react/jsx-uses-react': 'off',
        'react/react-in-jsx-scope': 'off',
        'react/jsx-props-no-spreading': 0,
        'react/prop-types': 0,
        'no-console': 0,
        'import/no-cycle': 0,
        'import/prefer-default-export': 0,
        'react/jsx-filename-extension': 0,
        'linebreak-style': 0
    },
}
