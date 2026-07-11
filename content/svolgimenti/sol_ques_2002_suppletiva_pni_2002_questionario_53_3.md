

**Quesito:** [[Quesiti/ques_2002_suppletiva_pni_2002_questionario_53_3|2002 Suppletiva PNI — Questionario — Quesito 3]] · **Prova:** [[Prove/2002_suppletiva_pni_2002_questionario_53|2002 Suppletiva PNI — Questionario]]

Calcolare la derivata rispetto a $x$ della funzione
$$F(x)=\int_b^x f(t)\,dt,$$
ove $f(x)$ è una funzione continua.

## Soluzione

Poiché $f$ è continua sull'intervallo di integrazione, la funzione integrale
$$F(x)=\int_b^x f(t)\,dt$$
è ben definita e, per il **teorema fondamentale del calcolo integrale** (teorema di Torricelli–Barrow), è derivabile con derivata pari al valore dell'integranda nell'estremo superiore variabile:
$$F'(x)=\frac{d}{dx}\int_b^x f(t)\,dt = f(x).$$

Il risultato non dipende dall'estremo inferiore $b$: cambiare $b$ modifica $F$ soltanto di una costante additiva (l'integrale $\int_{b'}^{b} f(t)\,dt$), che non influisce sulla derivata.

Vale la pena osservare che lo stesso teorema si applica anche quando la variabile compare nell'estremo inferiore, usando la proprietà di scambio degli estremi:
$$\int_b^x f(t)\,dt = -\int_x^b f(t)\,dt,$$
da cui, ad esempio,
$$\frac{d}{dx}\int_x^b f(t)\,dt = -f(x).$$

**Conclusione:**
$$\frac{d}{dx}\int_b^x f(t)\,dt = f(x).$$

*Fonte:* [📄 PDF p.53](https://drive.google.com/file/d/1RhB51YA7EeccsqpgGZQqycxf7UysR0HO/view)

#maturita/soluzione #area/analisi #cluster/studio_di_funzione
