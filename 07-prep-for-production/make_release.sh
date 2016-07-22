if [ -d dist ]; then
  echo "Removing dist files..."
  rm -rf dist
fi

if [ -d release ]; then
  echo "Removing release directory..."
  rm -rf release
fi

echo "Running webpack..."
NODE_ENV=production webpack -p

echo "Recreating release directory..."
mkdir release

echo "Copy release files..."
cp -r dist/* release

echo "Copy css files..."
mkdir release/css
cp -r css release

echo "Copy product data..."
cp products.json release/products.json

echo "Release Done."