set -e

PROJECT="$1"
APP_NAME="$2"

cd "${PROJECT}"

nx g @nx/nest:application --name="${APP_NAME}" --directory="apps/${APP_NAME}" --linter=eslint --unitTestRunner=none --e2eTestRunner=none --setParserOptionsProject --useProjectJson --strict
