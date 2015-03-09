exec &> update.latest

cat update.latest >> update.log

echo -n "UPDATE:"
date

rm -rf $( ls | grep -v bower_components | grep -v update.log | grep -v update.latest )
wget --no-check-certificate https://github.com/justinrporter/snhc-web/archive/master.zip
unzip master
rm -r master
mv snhc-web-master/app/* .
mv snhc-web-master/update.sh .
rm -rf snhc-web-master