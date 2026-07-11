

**Quesito:** [[Quesiti/ques_2002_suppletiva_pni_2002_questionario_53_6|2002 Suppletiva PNI — Questionario — Quesito 6]] · **Prova:** [[Prove/2002_suppletiva_pni_2002_questionario_53|2002 Suppletiva PNI — Questionario]]

Applicando il teorema di Lagrange all'intervallo di estremi $1$ e $x$ (con $x>1$), si vuole provare che

$$1-\frac{1}{x} < \ln x < x-1$$

e darne un'interpretazione grafica.

## Applicazione del teorema di Lagrange

Consideriamo la funzione $f(t)=\ln t$ (logaritmo naturale). Essa è continua nell'intervallo chiuso e limitato $[1;x]$ e derivabile nell'aperto $(1;x)$, per ogni $x>1$. Sono dunque soddisfatte le ipotesi del **teorema di Lagrange**, in base al quale esiste almeno un punto $c\in(1;x)$ tale che

$$\frac{f(x)-f(1)}{x-1}=f'(c).$$

Poiché $f(1)=\ln 1=0$ e $f'(t)=\dfrac{1}{t}$, si ha

$$\frac{\ln x-0}{x-1}=\frac{1}{c},\qquad \text{cioè}\qquad \frac{\ln x}{x-1}=\frac{1}{c},\quad \text{con } 1<c<x.$$

## Dalla posizione di $c$ alla disuguaglianza

Dalla condizione $1<c<x$, passando ai reciproci (che invertono il verso delle disuguaglianze tra quantità positive), otteniamo

$$\frac{1}{x}<\frac{1}{c}<1,$$

e ricordando che $\dfrac{1}{c}=\dfrac{\ln x}{x-1}$ segue

$$\frac{1}{x}<\frac{\ln x}{x-1}<1.$$

Poiché $x>1$ si ha $x-1>0$: moltiplicando i tre membri per $x-1$ il verso si conserva, e otteniamo

$$\frac{x-1}{x}<\ln x<x-1.$$

Infine, essendo $\dfrac{x-1}{x}=1-\dfrac{1}{x}$, concludiamo

$$\boxed{\,1-\frac{1}{x} < \ln x < x-1\,}$$

come si voleva dimostrare.

## Interpretazione grafica

La doppia disuguaglianza afferma che, per ogni $x>1$, il grafico di $y=\ln x$ è compreso tra i grafici delle funzioni

$$y=1-\frac{1}{x}\qquad\text{(minorante)}\qquad\text{e}\qquad y=x-1\qquad\text{(maggiorante)}.$$

Tutte e tre le curve passano per il punto $(1;0)$ e in esso hanno la stessa retta tangente: infatti in $x=1$ le derivate valgono rispettivamente $\dfrac{1}{x^2}\big|_{1}=1$, $\dfrac{1}{x}\big|_{1}=1$ e $1$. Le due curve esterne "racchiudono" quindi il logaritmo, che vi resta strettamente compreso per ogni $x\neq 1$.


<figure class="tikz-fig">
<svg xmlns="http://www.w3.org/2000/svg" width="229.423" height="254.481" viewBox="-72 -72 172.067 190.861"><g stroke="#000" stroke-miterlimit="10" stroke-width=".4"><path fill="none" d="M-72.07 29.618H64.388"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M62.508 27.218c.38 1.44 1.227 2.12 2.08 2.4-.853.28-1.7.96-2.08 2.4"/><text x="-60.973" y="29.618" stroke="none" font-family="cmmi10" font-size="10" transform="translate(129.294 2.153)">x</text><path fill="none" d="M-60.973 118.391V-58.754"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M-63.373-56.874c1.44-.38 2.12-1.227 2.4-2.08.28.853.96 1.7 2.4 2.08"/><text x="-60.973" y="29.618" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-2.63 -94.25)">y</text><g fill="red" stroke="red" stroke-width=".8"><path fill="none" d="m-45.438 51.072 1.208-1.208 1.207-1.208 1.208-1.208 1.208-1.207 1.208-1.208 1.208-1.208 1.208-1.208 1.207-1.208 1.208-1.207 1.208-1.208 1.208-1.208 1.208-1.208 1.208-1.208 1.207-1.208 1.208-1.207 1.208-1.208 1.208-1.208 1.208-1.208 1.207-1.208 1.208-1.207 1.208-1.208 1.208-1.208 1.208-1.208 1.208-1.208 1.207-1.208 1.208-1.207 1.208-1.208 1.208-1.208 1.208-1.208 1.207-1.208 1.208-1.207 1.208-1.208 1.208-1.208 1.208-1.208 1.208-1.208 1.207-1.208 1.208-1.207L.46 5.175l1.208-1.208 1.208-1.208 1.207-1.208L5.29.343 6.498-.864l1.208-1.208L8.914-3.28l1.208-1.208 1.207-1.208 1.208-1.207 1.208-1.208 1.208-1.208 1.208-1.208 1.207-1.208 1.208-1.208 1.208-1.207 1.208-1.208 1.208-1.208 1.208-1.208 1.207-1.208 1.208-1.207 1.208-1.208 1.208-1.208 1.208-1.208 1.208-1.208 1.207-1.208 1.208-1.207 1.208-1.208 1.208-1.208 1.208-1.208 1.207-1.208 1.208-1.207 1.208-1.208 1.208-1.208 1.208-1.208 1.208-1.208 1.207-1.208 1.208-1.207 1.208-1.208 1.208-1.208 1.208-1.208"/><g fill="red" stroke="none" font-size="10"><text x="-60.973" y="29.618" font-family="cmmi10" transform="translate(114.686 -71.714)">y</text><text x="-52.934" y="29.618" font-family="cmr10" transform="translate(114.686 -71.714)">=</text><text x="-42.378" y="29.618" font-family="cmmi10" transform="translate(114.686 -71.714)">x</text><text x="-34.441" y="29.618" font-family="cmsy10" transform="translate(114.686 -71.714)">¡</text><text x="-24.441" y="29.618" font-family="cmr10" transform="translate(114.686 -71.714)">1</text></g></g><g fill="#090" stroke="#090" stroke-width=".8"><path fill="none" d="m-45.438 80.7 1.208-6.353 1.207-5.502 1.208-4.797 1.208-4.236 1.208-3.763 1.208-3.363 1.208-3.023 1.207-2.734 1.208-2.486 1.208-2.264 1.208-2.08 1.208-1.908 1.208-1.761 1.207-1.632 1.208-1.513 1.208-1.41 1.208-1.313 1.208-1.232 1.207-1.147 1.208-1.083 1.208-1.021 1.208-.958 1.208-.91 1.208-.855 1.207-.806 1.208-.773 1.208-.729 1.208-.695 1.208-.666 1.207-.63 1.208-.605 1.208-.574 1.208-.547 1.208-.533 1.208-.5 1.207-.488 1.208-.465L.46 14.9l1.208-.433 1.208-.41 1.207-.396 1.208-.385 1.208-.37 1.208-.359 1.208-.344 1.208-.333 1.207-.321 1.208-.307 1.208-.304 1.208-.288 1.208-.285 1.207-.274 1.208-.263 1.208-.259 1.208-.25 1.208-.24 1.208-.236 1.207-.23 1.208-.222 1.208-.217 1.208-.21 1.208-.203 1.208-.2 1.207-.194 1.208-.19 1.208-.186 1.208-.179 1.208-.174 1.207-.172 1.208-.166 1.208-.166 1.208-.157 1.208-.155 1.208-.153 1.207-.148 1.208-.146 1.208-.14 1.208-.14 1.208-.136"/><g fill="#090" stroke="none"><text x="-60.973" y="29.618" font-family="cmmi10" font-size="10" transform="translate(114.686 -22.159)">y</text><text x="-52.934" y="29.618" font-family="cmr10" font-size="10" transform="translate(114.686 -22.159)">=</text><text x="-42.378" y="29.618" font-family="cmr10" font-size="10" transform="translate(114.686 -22.159)">1</text><text x="-35.156" y="29.618" font-family="cmsy10" font-size="10" transform="translate(114.686 -22.159)">¡</text><text x="-23.682" y="25.681" font-family="cmr7" font-size="7" transform="translate(114.686 -22.159)">1</text><path d="M90.73 4.76h4.535v.4H90.73z"/><text x="-23.956" y="33.067" font-family="cmmi7" font-size="7" transform="translate(114.686 -22.159)">x</text></g></g><g fill="#00f" stroke="#00f" stroke-width="1.2"><path fill="none" d="m-45.438 61.708 1.072-2.466 1.071-2.313 1.072-2.181 1.072-2.056 1.072-1.948 1.072-1.85 1.071-1.762 1.072-1.682 1.072-1.609 1.072-1.542 1.072-1.479 1.071-1.423 1.072-1.372 1.072-1.321 1.072-1.272 1.072-1.236 1.071-1.193 1.072-1.152 1.072-1.125 1.072-1.085 1.072-1.061 1.071-1.028 1.072-1 1.072-.974 1.072-.948 1.072-.925 1.071-.903 1.072-.88 1.072-.861 1.072-.84 1.072-.822 1.071-.804 1.072-.788 1.072-.77 1.072-.754 1.072-.74 1.071-.725 1.072-.712 1.072-.699 1.072-.683 1.072-.673 1.071-.662 1.072-.647 1.072-.638 1.072-.63 1.072-.613 1.071-.607 1.072-.597 1.072-.585 1.072-.58 1.072-.565 1.071-.561 1.072-.555 1.072-.54 1.072-.543 1.072-.528 1.071-.521 1.072-.514 1.072-.506 1.072-.5 1.072-.494 1.071-.487 1.072-.48 1.072-.474 1.072-.468 1.072-.463 1.071-.457 1.072-.451 1.072-.446 1.072-.44 1.072-.435 1.071-.43 1.072-.425 1.072-.421 1.072-.415 1.072-.41 1.071-.408 1.072-.403 1.072-.397 1.072-.392 1.072-.39 1.071-.386 1.072-.38 1.072-.378 1.072-.375 1.072-.368 1.071-.366 1.072-.363 1.072-.36"/><g fill="#00f" stroke="none" font-size="10"><text x="-60.973" y="29.618" font-family="cmmi10" transform="translate(114.858 -38.122)">y</text><text x="-52.934" y="29.618" font-family="cmr10" transform="translate(114.858 -38.122)">=</text><text x="-42.378" y="29.618" font-family="cmr10" transform="translate(114.858 -38.122)">ln</text><text x="-32.379" y="29.618" font-family="cmmi10" transform="translate(114.858 -38.122)">x</text></g></g><path stroke="none" d="M-21.905 29.618a2.08 2.08 0 1 0-4.16 0 2.08 2.08 0 0 0 4.16 0m-2.08 0"/><g stroke="none" font-size="10"><text x="-60.973" y="29.618" font-family="cmr10" transform="translate(40.522 11.033)">(1</text><text x="-52.084" y="29.618" font-family="cmmi10" transform="translate(40.522 11.033)">;</text><text x="-47.64" y="29.618" font-family="cmr10" transform="translate(40.522 11.033)">0)</text></g></g></svg>
</figure>

*Fonte:* [📄 PDF p.55](https://drive.google.com/file/d/1RhB51YA7EeccsqpgGZQqycxf7UysR0HO/view)

#maturita/soluzione #area/analisi #cluster/studio_di_funzione
