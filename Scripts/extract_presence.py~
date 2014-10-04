#!/usr/bin/python

# HDM14
# Parse une fichier xml (pdf extrait) pour y rechercher les dates de pv de seance ainsi que les noms des conseillers étant présents
# En sortie, on obtient leur liste en format csv
# TODO : Stocker les noms dans une variable afin de pouvoir les reconnaitre lorsque le format xml saute (ex. : 394.pdf)

import re, sys

f = open(sys.argv[1])
filename = sys.argv[2]
regexnumfile = re.compile(r'(.*)\.pdf')
regexp = re.compile(r'Etaient pr')
regexpstop = re.compile(r'Etaient|\\*  \\*  \\*')
regexpsep = re.compile(r'<text .*>([^a-zA-Z])+</text>')
#regexpsep2 = re.compile(r'<text .*>[^a-zA-Z\'\-]|&#34;</text>')
#regexpsep3 = re.compile(r'<text .*>\$|\!|&#34;|#</text>')
regcontent = re.compile(r'<text .*>(.*)</text>')
regdatepv2 = re.compile(r'.*b?>(.*)</b><')
regdatepv = re.compile(r'.*b?>PROCES-VERBAL DE LA SEANCE([^\.<]+)<')

# PROCES-VERBAL DE LA SEANCE
dateinnextline=False
dateprecline=""
presence=False

numfile = regexnumfile.match(filename).group(1)

for line in f:
	if dateinnextline == True:
		date2 = regdatepv2.match(line)
		if date2 is not None:
			resdatepv = date2.group(1).lstrip('du').strip()
			#sys.stdout.write('\n'+resdatepv+'\n')
		dateinnextline=False
	#Date du pv
	datepv = regdatepv.match(line)
	if datepv is not None:
		resdatepv = datepv.group(1).strip()
		
		if resdatepv == "":
			dateinnextline=True 
			
		if resdatepv == "DU":
			dateinnextline=True
	
		
	# Fin date
	
	if presence == True:
		if regexpstop.search(line) is not None:
			presence=False
			sys.stdout.write(';'+resdatepv+';'+numfile+'\n')

		if presence == True: 
			if regexpsep.search(line) is None:
				nom = regcontent.match(line)
				resnom = nom.group(1).strip()
				if resnom:
					sys.stdout.write(resnom)
			else:
				test = regcontent.match(line)
				restest = test.group(1).strip()
				if restest != "":
					sys.stdout.write(';'+resdatepv+';'+numfile+'\n')
	if regexp.search(line) is not None:		
		presence=True
	


		
	# Cond FIN : *  *  * || Etaient (|| <b>) 