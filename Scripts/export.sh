#!/bin/sh

DIR_PATH=$(pwd)
DIR_PDF=${DIR_PATH}/pdf
DIR_TXT=${DIR_PATH}/txt
FILE_PARSED=${DIR_PATH}/parsed/presence2.csv
echo "" > $FILE_PARSED

cd /$DIR_PDF

for i in $(ls);do
    echo "Export de $i"
	pdftohtml -xml -nodrm -q $i $DIR_TXT/$i.xml
	python /extract_presence.py $DIR_TXT/$i.xml $i >> $FILE_PARSED
done