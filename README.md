# the school of machines website

## useful scripts and snippets used during migration

```
wget -x https://schoolofma.org/modules/system/assets/js/framework.extras.js
```

-x recreates directory structure

Downloading images from links:

```
cat index.html | sed -n -e 's/<img src="\(\S*\)"/\1/p' | awk '{ print "http://schoolofma.org/"$1 }' >extra.list
wget -x -i extra.list

```

```
wget --mirror --convert-links --adjust-extension --page-requisites --no-parent http://schoolofma.org/programs
```
