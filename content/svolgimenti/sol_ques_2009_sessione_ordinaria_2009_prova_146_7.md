

**Quesito:** [[Quesiti/ques_2009_sessione_ordinaria_2009_prova_146_7|2009 Sessione Ordinaria PNI — Prova — Quesito 7]] · **Prova:** [[Prove/2009_sessione_ordinaria_2009_prova_146|2009 Sessione Ordinaria PNI — Prova]]

Si deve dimostrare l'identità (regola di Stifel, o formula del triangolo di Pascal)

$$\binom{n}{k}+\binom{n}{k+1}=\binom{n+1}{k+1},$$

con $n$ e $k$ naturali e $n>k$.

## Dimostrazione algebrica

Ricordando la definizione del coefficiente binomiale $\binom{n}{k}=\dfrac{n!}{k!\,(n-k)!}$, scriviamo i due addendi:

$$\binom{n}{k}=\frac{n!}{k!\,(n-k)!},\qquad \binom{n}{k+1}=\frac{n!}{(k+1)!\,(n-k-1)!}.$$

Portiamo entrambe le frazioni al denominatore comune $(k+1)!\,(n-k)!$. Usando $(k+1)!=(k+1)\cdot k!$ e $(n-k)!=(n-k)\cdot(n-k-1)!$ si ottiene

$$\binom{n}{k}=\frac{n!\,(k+1)}{(k+1)!\,(n-k)!},\qquad \binom{n}{k+1}=\frac{n!\,(n-k)}{(k+1)!\,(n-k)!}.$$

Sommando:

$$\binom{n}{k}+\binom{n}{k+1}=\frac{n!\,\big[(k+1)+(n-k)\big]}{(k+1)!\,(n-k)!}=\frac{n!\,(n+1)}{(k+1)!\,(n-k)!}=\frac{(n+1)!}{(k+1)!\,(n-k)!}.$$

D'altra parte, applicando la definizione al secondo membro,

$$\binom{n+1}{k+1}=\frac{(n+1)!}{(k+1)!\,\big[(n+1)-(k+1)\big]!}=\frac{(n+1)!}{(k+1)!\,(n-k)!},$$

che coincide con l'espressione trovata. L'identità è quindi dimostrata. La condizione $n>k$ garantisce che tutti i coefficienti coinvolti siano ben definiti (argomenti dei fattoriali non negativi).

## Interpretazione combinatoria

L'identità ammette una lettura immediata in termini di sottoinsiemi. Il primo membro $\binom{n+1}{k+1}$ conta i sottoinsiemi di $k+1$ elementi scelti da un insieme di $n+1$ elementi. Fissiamo uno degli $n+1$ elementi, chiamandolo $a$; ogni sottoinsieme di $k+1$ elementi rientra in una e una sola delle due categorie:

- quelli che **non contengono** $a$: i loro $k+1$ elementi vanno scelti tra i restanti $n$, e sono $\binom{n}{k+1}$;
- quelli che **contengono** $a$: restano da scegliere $k$ elementi tra i restanti $n$, e sono $\binom{n}{k}$.

Poiché le due categorie sono disgiunte e ricoprono tutti i casi, per il principio della somma

$$\binom{n+1}{k+1}=\binom{n}{k}+\binom{n}{k+1},$$

che è esattamente l'identità richiesta. Questa è la relazione ricorsiva che genera il triangolo di Tartaglia: ogni elemento è la somma dei due che gli stanno sopra.

*Fonte:* [📄 PDF p.146](https://drive.google.com/file/d/1Ioge1QbGS_AhQasT2TXif3wczyZL_UAP/view)

#maturita/soluzione #area/analisi #cluster/calcolo_integrale_e_aree
