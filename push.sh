sudo rm -R media_root_dist
sudo cp -R media_root/ media_root_dist
sudo cp db.sqlite3 db.sqlite3_dist
sudo git add .
sudo git commit
sudo git push
