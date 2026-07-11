

**Quesito:** [[Quesiti/ques_2004_liceo_scientifico_ordinamento_2004_sessione_straor_questionario_121_3|2004 Ordinamento Straordinaria — Questionario — Quesito 3]] · **Prova:** [[Prove/2004_liceo_scientifico_ordinamento_2004_sessione_straor_questionario_121|2004 Ordinamento Straordinaria — Questionario]]

Determinare il dominio della funzione
$$f(x)=\ln\!\left(1-2x+\sqrt{x}\right).$$

## Impostazione

La funzione è composta da un logaritmo il cui argomento contiene una radice quadrata. Il dominio è quindi determinato dalle due condizioni:

$$\begin{cases} x\ge 0 & \text{(esistenza di } \sqrt{x}\text{)}\\[2pt] 1-2x+\sqrt{x}>0 & \text{(argomento del logaritmo positivo)} \end{cases}$$

## Studio della disequazione irrazionale

Riscriviamo la seconda condizione isolando la radice:
$$\sqrt{x}>2x-1.$$

Una disequazione del tipo $\sqrt{A}>B$ (con $A=x\ge 0$) è soddisfatta dall'unione delle soluzioni dei due sistemi seguenti.

**Sistema (a)** — il secondo membro è negativo, quindi la disuguaglianza è automaticamente verificata dove la radice esiste:
$$\begin{cases} x\ge 0\\ 2x-1<0 \end{cases}\;\Rightarrow\; 0\le x<\tfrac{1}{2}.$$

**Sistema (b)** — il secondo membro è non negativo, quindi si può elevare al quadrato:
$$\begin{cases} 2x-1\ge 0\\ x>(2x-1)^{2} \end{cases}$$

La seconda disequazione diventa
$$x>4x^{2}-4x+1 \;\Rightarrow\; 4x^{2}-5x+1<0.$$

Le radici del trinomio $4x^{2}-5x+1$ sono
$$x=\frac{5\pm\sqrt{25-16}}{8}=\frac{5\pm 3}{8}=\begin{cases}1\\[2pt]\tfrac{1}{4}\end{cases}$$
quindi $4x^{2}-5x+1<0$ per $\tfrac{1}{4}<x<1$. Intersecando con la condizione $x\ge\tfrac{1}{2}$ si ottiene
$$\tfrac{1}{2}\le x<1.$$

## Unione e conclusione

L'unione delle soluzioni dei due sistemi è
$$\left[0,\tfrac{1}{2}\right)\cup\left[\tfrac{1}{2},1\right)=[0,1),$$
cioè $\sqrt{x}>2x-1$ per $0\le x<1$.

Tale insieme rispetta già la condizione $x\ge 0$. Il dominio della funzione è dunque
$$\boxed{\,0\le x<1\,}$$

ovvero l'intervallo $[0,1)$. Il grafico dell'argomento $g(x)=1-2x+\sqrt{x}$ conferma il risultato: $g$ è positivo tra $x=0$ (dove $g(0)=1$) e $x=1$ (dove $g(1)=0$), e diventa negativo per $x>1$.


<figure class="tikz-fig">
<svg xmlns="http://www.w3.org/2000/svg" width="220.697" height="254.483" viewBox="-72 -72 165.522 190.862"><g stroke="#000" stroke-miterlimit="10" stroke-width=".4"><path fill="none" d="M-65.006 63.762H80.271"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M78.391 61.362c.38 1.44 1.227 2.12 2.08 2.4-.853.28-1.7.96-2.08 2.4"/><text x="-51.349" y="63.762" stroke="none" font-family="cmmi10" font-size="10" transform="translate(135.553 2.153)">x</text><path fill="none" d="M-51.349 118.392V-58.754"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M-53.749-56.874c1.44-.38 2.12-1.227 2.4-2.08.28.853.96 1.7 2.4 2.08"/><text x="-51.349" y="63.762" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-2.63 -128.394)">y</text><path fill="none" d="M-5.825 61.94v3.644"/><g stroke="none" font-size="10"><text x="-51.349" y="63.762" font-family="cmr10" transform="translate(39.135 11.799)">0</text><text x="-46.349" y="63.762" font-family="cmmi10" transform="translate(39.135 11.799)">:</text><text x="-43.571" y="63.762" font-family="cmr10" transform="translate(39.135 11.799)">5</text></g><path fill="none" d="M39.7 61.94v3.644"/><text x="-51.349" y="63.762" stroke="none" font-family="cmr10" font-size="10" transform="translate(88.549 11.799)">1</text><path fill="none" d="M-49.528-27.286h-3.642"/><text x="-51.349" y="63.762" stroke="none" font-family="cmr10" font-size="10" transform="translate(-10.354 -87.826)">1</text><path fill="none" stroke="#00f" stroke-width=".8" d="m-51.349-27.286 1.555-8.786 1.554-1.82 1.555-.671 1.554-.08 1.555.3 1.555.57 1.554.775 1.555.935 1.555 1.069 1.554 1.178 1.555 1.272 1.554 1.355 1.555 1.427 1.555 1.49 1.554 1.547 1.555 1.597 1.554 1.645 1.555 1.687 1.555 1.727 1.554 1.762 1.555 1.795 1.555 1.826 1.554 1.855 1.555 1.883 1.554 1.907 1.555 1.931 1.555 1.954 1.554 1.974 1.555 1.995L-4.71.827l1.554 2.033L-1.6 4.908l1.554 2.067 1.555 2.08 1.555 2.096 1.554 2.11 1.555 2.126 1.554 2.138 1.555 2.15 1.555 2.164 1.554 2.174 1.555 2.186 1.555 2.196 1.554 2.208 1.555 2.217 1.554 2.227 1.555 2.238 1.555 2.245 1.554 2.256 1.555 2.264 1.554 2.271 1.555 2.28 1.555 2.29 1.554 2.295 1.555 2.303 1.555 2.31 1.554 2.32 1.555 2.323 1.554 2.332 1.555 2.338 1.555 2.345 1.554 2.35 1.555 2.357 1.555 2.363 1.554 2.367 1.555 2.376 1.554 2.38 1.555 2.385 1.555 2.39 1.554 2.395 1.555 2.4 1.554 2.407 1.555 2.41 1.555 2.416 1.554 2.42 1.555 2.425 1.555 2.428 1.554 2.434 1.555 2.439"/><g fill="#00f" stroke="#00f"><g fill="#00f" stroke="none"><text x="-51.349" y="63.762" font-family="cmmi10" font-size="10" transform="translate(-17.588 -104.685)">g</text><text x="-46.221" y="63.762" font-family="cmr10" font-size="10" transform="translate(-17.588 -104.685)">(</text><text x="-42.332" y="63.762" font-family="cmmi10" font-size="10" transform="translate(-17.588 -104.685)">x</text><text x="-36.616" y="63.762" font-family="cmr10" font-size="10" transform="translate(-17.588 -104.685)">)</text><text x="-29.95" y="63.762" font-family="cmr10" font-size="10" transform="translate(-17.588 -104.685)">=</text><text x="-19.394" y="63.762" font-family="cmr10" font-size="10" transform="translate(-17.588 -104.685)">1</text><text x="-12.172" y="63.762" font-family="cmsy10" font-size="10" transform="translate(-17.588 -104.685)">¡</text><text x="-2.172" y="63.762" font-family="cmr10" font-size="10" transform="translate(-17.588 -104.685)">2</text><text x="2.828" y="63.762" font-family="cmmi10" font-size="10" transform="translate(-17.588 -104.685)">x</text><text x="10.765" y="63.762" font-family="cmr10" font-size="10" transform="translate(-17.588 -104.685)">+</text><text x="20.765" y="56.559" font-family="cmsy10" font-size="10" transform="translate(-17.588 -104.685)">p</text><path d="M11.511-48.526h5.715v.4h-5.715z"/><text x="29.099" y="63.762" font-family="cmmi10" font-size="10" transform="translate(-17.588 -104.685)">x</text></g></g><path fill="#090" stroke="none" d="M-49.749-27.286a1.6 1.6 0 1 0-3.2 0 1.6 1.6 0 0 0 3.2 0m-1.6 0"/><path fill="none" stroke="#090" d="M42.58 63.762a2.88 2.88 0 1 0-5.76 0 2.88 2.88 0 0 0 5.76 0Zm-2.88 0"/><path fill="none" stroke="#090" stroke-width="1.2" d="M-51.349 89.256H39.7"/><path fill="#090" stroke="none" d="M-49.429 89.256a1.92 1.92 0 1 0-3.84 0 1.92 1.92 0 0 0 3.84 0m-1.92 0"/><path fill="#fff" stroke="#090" d="M41.62 89.256a1.92 1.92 0 1 0-3.84 0 1.92 1.92 0 0 0 3.84 0Zm-1.92 0"/><g fill="#090" stroke="#090"><g fill="#090" stroke="none" font-size="10"><text x="-51.349" y="63.762" font-family="cmr10" transform="translate(15.802 43.472)">dominio</text><text x="-13.016" y="63.762" font-family="cmr10" transform="translate(15.802 43.472)">[0</text><text x="-5.238" y="63.762" font-family="cmmi10" transform="translate(15.802 43.472)">;</text><text x="-.793" y="63.762" font-family="cmr10" transform="translate(15.802 43.472)">1)</text></g></g></g></svg>
</figure>

*Fonte:* [📄 PDF p.123](https://drive.google.com/file/d/1eLt08L2v4ueTtfs2qAPJA0i6aYiFXjrg/view)

#maturita/soluzione #area/analisi #cluster/studio_di_funzione
