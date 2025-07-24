import js from '@eslint/js';
import globals from 'globals';

export default [
    js.configs.recommended,
    {
        languageOptions: {
            globals: {
                ...globals.browser,
                chrome: 'readonly' // ✅ allows use of `chrome` global
            },
            ecmaVersion: 'latest',
            sourceType: 'module'
        },
        rules: {
            // your custom rules
        }
    }
];
