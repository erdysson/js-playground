set -e

PROJECT="$1"
PACKAGE_NAME="$2"

cd "${PROJECT}"

# if second argument is provided, generate lib as non buildable and non-publishable
if [ "$2" == "test" ]; then
  nx g @nx/nest:library --name="${PACKAGE_NAME}" --directory="libs/${PACKAGE_NAME}" --linter=eslint --unitTestRunner=none --setParserOptionsProject --useProjectJson --target=esnext --strict
  exit 0
fi

nx g @nx/nest:library --name="${PACKAGE_NAME}" --directory="packages/${PACKAGE_NAME}" --linter=eslint --unitTestRunner=jest --buildable --publishable --setParserOptionsProject --useProjectJson --target=esnext --strict
