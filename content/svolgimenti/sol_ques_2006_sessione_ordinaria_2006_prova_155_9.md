

**Quesito:** [[Quesiti/ques_2006_sessione_ordinaria_2006_prova_155_9|2006 Sessione Ordinaria PNI — Prova (p.155) — Quesito 9]] · **Prova:** [[Prove/2006_sessione_ordinaria_2006_prova_155|2006 Sessione Ordinaria PNI — Prova (p.155)]]

Della funzione $f(x)$ si sa che è derivabile e diversa da zero in ogni punto del suo dominio, che $f'(x)=f(x)$ e che $f(0)=1$. Si vuole determinare $f(x)$.

La condizione $f'(x)=f(x)$ è un'equazione differenziale del primo ordine. Poiché per ipotesi $f(x)\neq 0$ in ogni punto del dominio, possiamo dividere entrambi i membri per $f(x)$:

$$\frac{f'(x)}{f(x)}=1.$$

Il primo membro è la derivata di $\ln|f(x)|$. Integrando rispetto a $x$ entrambi i membri si ottiene

$$\ln|f(x)|=x+c,$$

con $c$ costante reale. Passando all'esponenziale,

$$|f(x)|=e^{x+c}=e^{c}\,e^{x}.$$

Posto $K=e^{c}>0$, si ha $|f(x)|=K\,e^{x}$, quindi

$$f(x)=\pm K\,e^{x}.$$

La costante moltiplicativa (segno incluso) si determina con la condizione iniziale $f(0)=1$: sostituendo $x=0$,

$$f(0)=\pm K\,e^{0}=\pm K=1 \;\Rightarrow\; f(x)=e^{x}.$$

Osserviamo che la scelta di un'unica costante è lecita: $f$ è derivabile, dunque continua, e non si annulla mai, perciò mantiene segno costante su tutto il dominio (qui positivo, essendo $f(0)=1>0$); non occorre quindi «incollare» rami con costanti diverse.

Verifica: se $f(x)=e^{x}$, allora $f'(x)=e^{x}=f(x)$ e $f(0)=e^{0}=1$, in accordo con tutte le ipotesi.


<figure class="tikz-fig">
<svg xmlns="http://www.w3.org/2000/svg" width="206.727" height="230.201" viewBox="-72 -72 155.045 172.651"><g stroke="#000" stroke-miterlimit="10" stroke-width=".4"><path fill="none" d="M-72.07 88.8H69.794"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M67.914 86.4c.38 1.44 1.227 2.12 2.08 2.4-.853.28-1.7.96-2.08 2.4"/><text x="1.907" y="88.8" stroke="none" font-family="cmmi10" font-size="10" transform="translate(71.82 2.153)">x</text><path fill="none" d="M1.907 100.181V-58.754"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M-.493-56.874c1.44-.38 2.12-1.227 2.4-2.08.28.853.96 1.7 2.4 2.08"/><text x="1.907" y="88.8" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-2.63 -153.432)">y</text><path fill="none" stroke="#00f" stroke-width=".8" d="m-66.38 86.22 1.93-.18 1.929-.194 1.929-.207 1.929-.223 1.929-.238 1.929-.254 1.929-.273 1.928-.29 1.93-.31 1.928-.337 1.93-.355 1.928-.381 1.93-.41 1.928-.436 1.93-.47 1.928-.5 1.929-.535 1.929-.573 1.929-.614 1.929-.658 1.929-.702 1.929-.752 1.929-.805 1.929-.86 1.929-.922 1.929-.987 1.928-1.056 1.93-1.127 1.928-1.21 1.93-1.295 1.928-1.383 1.93-1.482 1.928-1.585 1.93-1.697 1.928-1.813 1.929-1.938 1.929-2.078 1.929-2.224 1.929-2.38 1.929-2.547 1.929-2.727 1.929-2.917 1.929-3.121 1.929-3.342 1.929-3.574 1.928-3.826 1.93-4.095 1.928-4.38 1.93-4.69 1.928-5.017 1.93-5.37 1.928-5.747 1.93-6.148 1.928-6.583 1.929-7.04 1.929-7.537 1.929-8.066 1.929-8.632 1.929-9.235"/><path stroke="none" d="M3.407 60.347a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0m-1.5 0"/><text x="1.907" y="88.8" stroke="none" font-family="cmr10" font-size="10" transform="translate(-8.533 -18.475)">1</text><g fill="#00f" stroke="#00f"><g fill="#00f" stroke="none"><text x="1.907" y="88.8" font-family="cmmi10" font-size="10" transform="translate(34.227 -128.534)">y</text><text x="9.947" y="88.8" font-family="cmr10" font-size="10" transform="translate(34.227 -128.534)">=</text><text x="20.502" y="88.8" font-family="cmmi10" font-size="10" transform="translate(34.227 -128.534)">e</text><text x="25.158" y="85.171" font-family="cmmi7" font-size="7" transform="translate(34.227 -128.534)">x</text></g></g></g></svg>
</figure>

**Conclusione:** l'unica funzione con le proprietà richieste è

$$f(x)=e^{x}.$$

*Fonte:* [📄 PDF p.155](https://drive.google.com/file/d/1nnd4Nds7GFPZVCB9i0VVpSMDlBPee3x7/view)


#maturita/soluzione #area/analisi #cluster/studio_di_funzione
