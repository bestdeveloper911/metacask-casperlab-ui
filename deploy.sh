cd /var/www/metacask_ui
git reset --hard HEAD
git checkout master
git pull
npm install
rm -rf build
npm run build
rm -rf prod
cp -rf build prod
sudo service nginx restart
ls
