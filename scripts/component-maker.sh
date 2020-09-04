#!/bin/bash

if [ $# -ne 1 ]; then
  echo "指定された引数は$#個です。" 1>&2
  echo "実行するには1個の引数が必要です。" 1>&2
  echo "例: /(ディレクトリ名)/Layout(コンポーネント名)" 1>&2
  exit 1
fi

COMPONENT=$1
TARGET="src/components/$COMPONENT"

if [ -e "$TARGET" ]; then
  echo "ディレクトリ'$TARGET'は既に存在します。" 1>&2
  exit
fi

mkdir "$TARGET"
touch "$TARGET/index.tsx"
echo "export { default } from './$COMPONENT'" > "$TARGET/index.tsx"

cp scripts/templates/component-template.txt "$TARGET/$COMPONENT.tsx"

sed -i -e "s/DISPLAY_NAME/\'$COMPONENT\'/" "$TARGET/$COMPONENT.tsx"
