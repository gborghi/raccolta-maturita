

**Quesito:** [[Quesiti/ques_2009_sessione_ordinaria_2009_prova_146_2|2009 Sessione Ordinaria PNI — Prova — Quesito 2]] · **Prova:** [[Prove/2009_sessione_ordinaria_2009_prova_146|2009 Sessione Ordinaria PNI — Prova]]

Sono dati gli insiemi $A=\{1,2,3,4\}$ e $B=\{a,b,c\}$, con $|A|=4$ e $|B|=3$. Si vuole stabilire se, tra le funzioni $f:A\to B$, ne esistano di suriettive, di iniettive e di biiettive.

Ricordiamo che una funzione $f:A\to B$ associa a ciascun elemento di $A$ uno e un solo elemento di $B$. Poiché ogni elemento di $A$ può avere $3$ immagini possibili e le scelte sono indipendenti, il numero totale di funzioni da $A$ in $B$ è
$$3^4=81.$$

## a) Funzioni iniettive

Una funzione è iniettiva quando elementi distinti del dominio hanno immagini distinte. Ciò richiede che il codominio abbia almeno tanti elementi quanti il dominio, cioè $|A|\le|B|$.

Qui $|A|=4>3=|B|$: per il principio dei cassetti, dovendo collocare $4$ elementi in $3$ possibili immagini, almeno due elementi di $A$ hanno la stessa immagine. Dunque **non esiste alcuna funzione iniettiva** da $A$ in $B$.

## b) Funzioni biiettive

Una funzione biiettiva è al tempo stesso iniettiva e suriettiva, e ciò è possibile solo se $|A|=|B|$. Poiché $|A|=4\neq 3=|B|$, **non esiste alcuna funzione biiettiva** da $A$ in $B$. (In particolare, non essendovi funzioni iniettive, non ve ne possono essere di biiettive.)

## c) Funzioni suriettive

Una funzione è suriettiva quando ogni elemento del codominio è immagine di almeno un elemento del dominio, cioè quando l'immagine di $f$ coincide con $B$. Poiché $|A|=4\ge 3=|B|$, tali funzioni possono esistere; verifichiamo che effettivamente ne esistono e contiamole.

Un esempio esplicito è
$$f(1)=a,\quad f(2)=b,\quad f(3)=c,\quad f(4)=a,$$
che assume tutti e tre i valori $a,b,c$: dunque **le funzioni suriettive esistono**.

Per contarle usiamo il principio di inclusione-esclusione: sottraiamo dalle $3^4$ funzioni totali quelle che "mancano" di almeno un valore del codominio. Detto $A_i$ l'insieme delle funzioni che non assumono l'$i$-esimo valore di $B$,
$$\#\text{suriettive}=\sum_{j=0}^{3}(-1)^{j}\binom{3}{j}(3-j)^4=3^4-\binom{3}{1}2^4+\binom{3}{2}1^4-\binom{3}{3}0^4.$$
Svolgendo i calcoli:
$$81-3\cdot 16+3\cdot 1-0=81-48+3=36.$$

Vi sono quindi **$36$ funzioni suriettive** da $A$ in $B$.

**Conclusione.** Tra le funzioni di $A$ in $B$ non ve ne sono di iniettive né di biiettive (perché $|A|>|B|$), mentre ne esistono di suriettive, in numero di $36$.

*Fonte:* [📄 PDF p.146](https://drive.google.com/file/d/1Ioge1QbGS_AhQasT2TXif3wczyZL_UAP/view)

#maturita/soluzione #area/analisi #cluster/calcolo_integrale_e_aree
