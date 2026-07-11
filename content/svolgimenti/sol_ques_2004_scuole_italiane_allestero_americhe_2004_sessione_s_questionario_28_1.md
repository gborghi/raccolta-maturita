

**Quesito:** [[Quesiti/ques_2004_scuole_italiane_allestero_americhe_2004_sessione_s_questionario_28_1|2004 Estero Americhe Suppletiva — Questionario — Quesito 1]] · **Prova:** [[Prove/2004_scuole_italiane_allestero_americhe_2004_sessione_s_questionario_28|2004 Estero Americhe Suppletiva — Questionario]]

Della funzione $f(x)$ si sa che
$$f''(x)=2^x,\qquad f'(0)=0,\qquad f(0)=\left(\frac{1}{\log 2}\right)^2,$$
dove con $\log$ si intende il logaritmo naturale $\ln$. Si vuole determinare $f(x)$.

Poiché è nota la derivata seconda, si ricava $f$ integrando due volte e fissando ogni volta la costante di integrazione con la condizione assegnata.

**Prima integrazione.** Ricordando che $\int 2^x\,dx=\dfrac{2^x}{\ln 2}+\text{cost.}$, da $f''(x)=2^x$ si ottiene
$$f'(x)=\int 2^x\,dx=\frac{2^x}{\ln 2}+c.$$
Imponendo $f'(0)=0$:
$$\frac{2^0}{\ln 2}+c=\frac{1}{\ln 2}+c=0 \;\Rightarrow\; c=-\frac{1}{\ln 2}.$$
Dunque
$$f'(x)=\frac{2^x}{\ln 2}-\frac{1}{\ln 2}.$$

**Seconda integrazione.** Integrando ancora, e ricordando che $\dfrac{1}{\ln 2}$ è una costante,
$$f(x)=\int\left(\frac{2^x}{\ln 2}-\frac{1}{\ln 2}\right)dx=\frac{2^x}{(\ln 2)^2}-\frac{x}{\ln 2}+k.$$
Imponendo la condizione $f(0)=\left(\dfrac{1}{\log 2}\right)^2=\dfrac{1}{(\ln 2)^2}$:
$$f(0)=\frac{2^0}{(\ln 2)^2}-0+k=\frac{1}{(\ln 2)^2}+k=\frac{1}{(\ln 2)^2}\;\Rightarrow\; k=0.$$

**Conclusione.** La funzione cercata è
$$f(x)=\frac{2^x}{(\ln 2)^2}-\frac{x}{\ln 2}.$$

*Fonte:* [📄 PDF p.28](https://drive.google.com/file/d/1eLt08L2v4ueTtfs2qAPJA0i6aYiFXjrg/view)


#maturita/soluzione #area/analisi #cluster/studio_di_funzione
