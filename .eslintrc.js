module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: [
    'plugin:react/recommended',
    'standard',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    // 競合を避けるため、prettierは一番最後に書く
    'plugin:prettier/recommended',
    'prettier/react',
    'prettier/@typescript-eslint',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
    project: './tsconfig.json',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  plugins: ['@typescript-eslint', 'react', 'react-hooks', 'prettier'],
  rules: {
    // prettierを実行する
    'import-name': 'off',
    align: 'off',
    // 「import Link from 'next/link'」で引っかかるため無効化
    'no-submodule-imports': 'off',
    // css['foo--bar']で引っかかるため無効化
    'no-string-literal': 'off',
    // onClick={e => handleClick(e)}で引っかかるため無効化
    'jsx-no-lambda': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react/jsx-filename-extension': [
      'error',
      {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    ],
    // import構文でエラーが出るため
    'import/extensions': [
      'off',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    'import/no-unresolved': 'off',
    'react/prop-types': ['off'],
    // windowやlocationを使えなくなるためoff
    'no-restricted-globals': 'off',
    // [1, 2].map((item, index) => <li key={index}>{item}</li>)
    // のように、indexをkeyとして使えなくなるためoff
    'react/no-array-index-key': 'off',
    // 毎回Reactをインポートしなくてもよくするためにoff
    'react/react-in-jsx-scope': 'off',
    'react/jsx-one-expression-per-line': 'off',
    // next/linkのchildのaタグの空hrefを許容する
    'jsx-a11y/anchor-is-valid': 'off',
    // コメントの前後にスペースがないことを許容
    'spaced-comment': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    // 使っていない変数はエラーにする
    '@typescript-eslint/no-unused-vars': 'error',
    // referrerをつけれるようにする
    'react/jsx-no-target-blank': 'off',
    // 関数の型定義を必ず書かなくてもよくする
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    // stylesをComponentとContainerの間に置くため
    'no-use-before-define': 'off',
    // TypeScriptのconstructorのfieldは空でOK
    'no-useless-constructor': 'off',
    // 依存モジュールを並び替える
    'sort-imports': ['error', { ignoreDeclarationSort: true }],
    'import/order': [
      'error',
      {
        alphabetize: {
          order: 'asc',
          caseInsensitive: false,
        },
      },
    ],
  },
}
