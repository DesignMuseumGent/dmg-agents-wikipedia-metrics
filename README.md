# dmg-agents-wikipedia-metrics
Tool for analyzing and tracing the presence or absence of _artists, designers, organisations, ..._ on Wikipedia based on Wikidata identifiers.  

## example
### input
```
referentienummer,identifier
DMG-A-00001,Q14101030
DMG-A-00004,Q97976472
DMG-A-00005,Q15875351
DMG-A-00006,Q97774077
DMG-A-00007,Q623846
DMG-A-00008,Q97773849
DMG-A-00009,Q78060023
DMG-A-00010,Q16574756
DMG-A-00011,Q21282241
```

### output
```
url,referentienummer,identifier
https://nl.wikipedia.org/wiki/Pieter_De_Bruyne,DMG-A-00001,Q14101030
https://nl.wikipedia.org/wiki/Frank_Steyaert,DMG-A-00005,Q15875351
https://nl.wikipedia.org/wiki/Ria_Bosman,DMG-A-00006,Q97774077
https://nl.wikipedia.org/wiki/Arabia_(merk),DMG-A-00007,Q623846
https://nl.wikipedia.org/wiki/Yvette_Lauwaert,DMG-A-00019,Q52603550
https://nl.wikipedia.org/wiki/Marcel_Wolfers,DMG-A-00021,Q18398076
https://nl.wikipedia.org/wiki/Ren%C3%A9_Lalique,DMG-A-00023,Q451400
https://nl.wikipedia.org/wiki/Carmen_Dionyse,DMG-A-00028,Q22235955
https://nl.wikipedia.org/wiki/Ahrend,DMG-A-00030,Q2343811
```

## how to use 
### prerequisites

to use this tool, you need a list (csv) with two columns: 
- column 1: the internal identifier used to identify the person. (if none are available you can replace these with any placeholder.)
- column 2: wikidata identifiers (fe. Q15875351) as an input. 

### A. install tool
1. git clone the repository:
    ```
    git clone https://github.com/dmg-agents-wikipedia-metrics/
    ```

2. cd into the root folder of the project
3. install dependencies (make sure Node is installed on the device)
    ```
    npm install --save
    ```

### B. run tool
1. replace the placeholder values in the csv with a list of wikidata identifiers to run the analyses on.
2. to start the tool, use the following command in the command line interface (CLI). 
   ```
   node index.js
   ```
3. check output.csv for results. 








