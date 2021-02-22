module.exports = {
  overrides: [
    {
      files: ['*.tsx'],
      extends: [
        'standard-with-typescript',
        'plugin:react/recommended',
        'plugin:react-hooks/recommended',
        'prettier'
      ],
      parserOptions: {
        project: './tsconfig.json'
      },
      rules: {
        'react/react-in-jsx-scope': 'off'
      },
      settings: {
        react: {
          version: 'latest'
        }
      }
    }
  ]
}
