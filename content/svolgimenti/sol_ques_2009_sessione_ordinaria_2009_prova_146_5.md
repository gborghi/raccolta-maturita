

**Quesito:** [[Quesiti/ques_2009_sessione_ordinaria_2009_prova_146_5|2009 Sessione Ordinaria PNI — Prova — Quesito 5]] · **Prova:** [[Prove/2009_sessione_ordinaria_2009_prova_146|2009 Sessione Ordinaria PNI — Prova]]

Si vuole stabilire a quali fra le espressioni
$$\frac{0}{1};\qquad \frac{1}{0};\qquad \frac{0}{0};\qquad 0^0$$
sia possibile attribuire un valore numerico. Ricordiamo che il quoziente $\frac{a}{b}$ è, per definizione, quel numero $q$ (unico, se esiste) tale che $b\cdot q=a$.

**Espressione $\dfrac{0}{1}$.** Cerchiamo il numero $q$ tale che $1\cdot q=0$: esso esiste ed è unico, cioè $q=0$. Dunque
$$\frac{0}{1}=0,$$
e a questa espressione si attribuisce senza ambiguità il valore numerico $0$.

**Espressione $\dfrac{1}{0}$.** Cerchiamo il numero $q$ tale che $0\cdot q=1$. Poiché $0\cdot q=0$ per ogni $q$, non esiste alcun numero che soddisfi la condizione: l'uguaglianza $0\cdot q=1$ è impossibile. La divisione per zero non è definita, quindi a $\frac{1}{0}$ non si può attribuire alcun valore numerico.

**Espressione $\dfrac{0}{0}$.** Cerchiamo il numero $q$ tale che $0\cdot q=0$. Ora la condizione è verificata da ogni numero reale $q$: il quoziente non è univocamente determinato. Si tratta perciò di una forma indeterminata, alla quale non è possibile attribuire un valore numerico. Che si tratti di una forma indeterminata lo conferma il calcolo dei limiti: il rapporto $\frac{f(x)}{g(x)}$ con $f(x)\to 0$ e $g(x)\to 0$ può tendere a valori diversi. Ad esempio
$$\lim_{x\to 0}\frac{x}{x}=1,\qquad \lim_{x\to 0}\frac{2x}{x}=2,\qquad \lim_{x\to 0}\frac{x^2}{x}=0,$$
e il limite dipende dalle particolari funzioni scelte.

**Espressione $0^0$.** Anche in questo caso si tratta di una forma indeterminata. Se si considera il limite $\lim x^{y}$ con la base $x\to 0^+$ e l'esponente $y\to 0$, il risultato dipende dal modo in cui base ed esponente tendono a zero. Ad esempio
$$\lim_{x\to 0^+} x^{\,x}=1,\qquad \lim_{x\to 0^+}\left(x\right)^{\frac{\ln 2}{\ln x}}=2,$$
mentre lungo altri cammini si possono ottenere valori diversi. Pertanto a $0^0$, inteso come forma limite, non si può attribuire un valore numerico univoco. (Nel solo ambito aritmetico si adotta talvolta, per convenzione, $0^0=1$ perché comodo in molte formule, ma resta appunto una convenzione e non un valore determinato dall'operazione.)

**Conclusione.** Fra le quattro espressioni, l'unica a cui si può attribuire un valore numerico è
$$\frac{0}{1}=0.$$
Le altre tre sono prive di significato o indeterminate: $\frac{1}{0}$ non è definita (divisione per zero), mentre $\frac{0}{0}$ e $0^0$ sono forme indeterminate.

*Fonte:* [📄 PDF p.146](https://drive.google.com/file/d/1Ioge1QbGS_AhQasT2TXif3wczyZL_UAP/view)

#maturita/soluzione #area/analisi #cluster/calcolo_integrale_e_aree
