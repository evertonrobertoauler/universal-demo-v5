npm install
npm run build
npx pm2 start dist/server.js --name=server
npx pm2 log server
