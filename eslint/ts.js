module.exports = {
  overrides: [
    {
      files: ['*.ts'],
      extends: ['standard-with-typescript', 'prettier'],
      parserOptions: {
        project: './tsconfig.json'
      }
    }
  ]
}
