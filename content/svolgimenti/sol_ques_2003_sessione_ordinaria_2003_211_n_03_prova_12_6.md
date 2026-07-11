

**Quesito:** [[Quesiti/ques_2003_sessione_ordinaria_2003_211_n_03_prova_12_6|2003 Ordinaria — Prova (Ordinamento) — Quesito 6]] · **Prova:** [[Prove/2003_sessione_ordinaria_2003_211_n_03_prova_12|2003 Ordinaria — Prova (Ordinamento)]]

Si deve giustificare che la derivata della funzione

$$f(x)=\int_{0}^{x^{2}} e^{-t^{2}}\,dt$$

è la funzione $f'(x)=2x\,e^{-x^{4}}$.

## Impostazione

La funzione integranda $g(t)=e^{-t^{2}}$ è continua su tutto $\mathbb{R}$, quindi ammette primitive. Indichiamo con $G$ una primitiva di $g$, cioè una funzione tale che

$$G'(u)=e^{-u^{2}} \qquad \text{per ogni } u\in\mathbb{R}.$$

Per il teorema fondamentale del calcolo integrale (parte relativa alla funzione integrale), l'integrale definito si può esprimere tramite $G$ come

$$\int_{0}^{x^{2}} e^{-t^{2}}\,dt = G(x^{2})-G(0).$$

Di conseguenza

$$f(x)=G(x^{2})-G(0),$$

dove $G(0)$ è una costante, che non influisce sulla derivata.

## Derivazione

La funzione $f$ è la composizione della primitiva $G$ con la funzione interna $u(x)=x^{2}$. Applichiamo la regola di derivazione delle funzioni composte:

$$f'(x)=\frac{d}{dx}\,G(x^{2}) = G'(x^{2})\cdot \frac{d}{dx}\,(x^{2}).$$

Ora:

- $G'(x^{2})=e^{-(x^{2})^{2}}=e^{-x^{4}}$, sostituendo $u=x^{2}$ nell'espressione $G'(u)=e^{-u^{2}}$;
- $\dfrac{d}{dx}\,(x^{2})=2x$.

Moltiplicando i due fattori si ottiene

$$f'(x)=e^{-x^{4}}\cdot 2x = 2x\,e^{-x^{4}},$$

come si voleva dimostrare.

## Osservazione

Il punto essenziale è che non occorre (e non è possibile in forma elementare) calcolare esplicitamente la primitiva di $e^{-t^{2}}$: il teorema fondamentale del calcolo garantisce l'esistenza di $G$ e fornisce $G'(u)=e^{-u^{2}}$, mentre la presenza dell'estremo superiore variabile $x^{2}$ richiede semplicemente l'uso della regola della catena. In generale, per una funzione del tipo $f(x)=\int_{a}^{h(x)} g(t)\,dt$ con $g$ continua e $h$ derivabile, vale

$$f'(x)=g\big(h(x)\big)\cdot h'(x),$$

e nel nostro caso $g(t)=e^{-t^{2}}$, $h(x)=x^{2}$, da cui di nuovo $f'(x)=e^{-x^{4}}\cdot 2x=2x\,e^{-x^{4}}$.

*Fonte:* [📄 PDF p.12](https://drive.google.com/file/d/1n_07H2pKPIZ0p5d9GN7HvXoIlCFb8amD/view)

#maturita/soluzione #area/analisi #cluster/studio_di_funzione
