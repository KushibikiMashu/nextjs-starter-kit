module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:import/typescript',
    'plugin:@next/next/recommended',
    // 競合を避けるため、prettierは一番最後に書く
    'plugin:prettier/recommended',
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
    ecmaVersion: 2021,
    sourceType: 'module',
    project: './tsconfig.json',
  },
  settings: {
    react: {
      version: 'detect',
    },
    'import/resolver': {
      node: {
        extensions: ['.js', '.ts', '.tsx'],
      },
    },
  },
  plugins: ['jsx-a11y', 'import'],
  rules: {
    // prettier の設定
    'prettier/prettier': [
      'error',
      {
        trailingComma: 'es5',
        tabWidth: 2,
        semi: false,
        singleQuote: true,
        printWidth: 120,
      },
    ],
    // React Hooks のための設定
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    // prop types を使っていないので off
    'react/prop-types': 'off',
    // Next.js では React を import しなくてもよいので off にする
    'react/react-in-jsx-scope': 'off',
    // 関数の引数や返り値に必ず型をつけるルールを off にする
    // アプリケーションをより堅牢にしたい場合は、このルールを on にしてください
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    // next/linkのchildのaタグの空hrefを許容する
    'jsx-a11y/anchor-is-valid': 'off',
    // 未使用の変数がある場合エラーにする（デフォルトは warning）
    '@typescript-eslint/no-unused-vars': 'error',
    // named-exportを許可
    'import/prefer-default-export': 'off',
    // 絶対パスでのモジュールの読み込みをokにする
    'import/no-unresolved': 'off',
    // 「import Link from 'next/link'」で引っかかるため無効化
    'no-submodule-imports': 'off',
    // importの順番を整理する
    'import/order': [
      'error',
      {
        pathGroups: [
          {
            pattern: '~/**',
            group: 'external',
            position: 'after',
          },
        ],
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
          caseInsensitive: false,
        },
      },
    ],
    // if文内のcontinueをokにする
    'no-continue': 'off',
    // for (const a of A) を許可
    'no-restricted-syntax': 'off',
    // onClick={e => handleClick(e)} で引っかかるため無効化
    'jsx-no-lambda': 'off',
    // <Component {...props}>を許可する
    'react/jsx-props-no-spreading': 'off',
    // 順序の入れ替えがない場合はok
    'react/no-array-index-key': 'off',
    // component の props の destructuring を非必須にする
    'react/destructuring-assignment': 'off',
    // console.errorを許容する
    'no-console': ['error', {allow: ['warn', 'error']}],
  }
}
