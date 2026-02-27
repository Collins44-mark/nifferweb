const fs = require('fs');
const path = require('path');

const root = path.join(__dirname, '..');
const publicDir = path.join(root, 'public');

function copyRecursive(src, dest) {
  const stat = fs.statSync(src);
  if (stat.isDirectory()) {
    fs.mkdirSync(dest, { recursive: true });
    fs.readdirSync(src).forEach(f => copyRecursive(path.join(src, f), path.join(dest, f)));
  } else {
    fs.mkdirSync(path.dirname(dest), { recursive: true });
    fs.copyFileSync(src, dest);
  }
}

fs.mkdirSync(publicDir, { recursive: true });
['index.html', 'shop.html', 'product.html', 'about.html', 'contact.html', 'cart.html', 'checkout.html', 'css', 'js', 'images'].forEach(item => {
  const src = path.join(root, item);
  if (fs.existsSync(src)) {
    copyRecursive(src, path.join(publicDir, item));
  }
});
