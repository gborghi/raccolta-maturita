

**Problema:** [[Problemi/prob_2006_sessione_ordinaria_2006_prova_10_2|2006 Sessione Ordinaria — Prova (p.10) — Problema 2]] · **Prova:** [[Prove/2006_sessione_ordinaria_2006_prova_10|2006 Sessione Ordinaria — Prova (p.10)]]

Sono date le funzioni
$$f(x)=\ln x \qquad\text{e}\qquad g(x)=a\,x^2,$$
con $a$ parametro reale (logaritmo in base $e$).

## 1) Discussione dell'equazione $\ln x = a\,x^2$ e tangenza

L'equazione ha senso per $x>0$; poiché $x^2>0$, possiamo isolare il parametro:
$$a=\frac{\ln x}{x^2}=\varphi(x),\qquad x>0.$$
Le soluzioni dell'equazione sono le ascisse dei punti in cui la retta orizzontale $y=a$ incontra il grafico di $\varphi$.

Studiamo $\varphi$. Si ha
$$\varphi'(x)=\frac{\frac{1}{x}\,x^2-\ln x\cdot 2x}{x^4}=\frac{1-2\ln x}{x^3}.$$
Essendo $x^3>0$, il segno dipende da $1-2\ln x$: $\varphi'(x)>0$ per $\ln x<\tfrac12$, cioè $0<x<\sqrt e$, e $\varphi'(x)<0$ per $x>\sqrt e$. Dunque $\varphi$ cresce fino a $x=\sqrt e$ e poi decresce, con massimo assoluto
$$\varphi(\sqrt e)=\frac{\ln\sqrt e}{(\sqrt e)^2}=\frac{1/2}{e}=\frac{1}{2e}.$$
Inoltre
$$\lim_{x\to 0^+}\varphi(x)=-\infty,\qquad \varphi(1)=0,\qquad \lim_{x\to +\infty}\varphi(x)=0^+.$$
Il grafico sale da $-\infty$ (per $x\to0^+$) fino al valore $\frac{1}{2e}$ in $x=\sqrt e$, per poi ridiscendere verso $0^+$; per $x>1$ resta positivo.

Confrontando con la retta $y=a$ si ottiene, al variare di $a$, il numero di soluzioni:

$$
\begin{cases}
a<0 & \text{una soluzione (in }0<x<1)\\[2pt]
a=0 & \text{una soluzione, } x=1\\[2pt]
0<a<\dfrac{1}{2e} & \text{due soluzioni}\\[2pt]
a=\dfrac{1}{2e} & \text{una soluzione, } x=\sqrt e\ \text{(tangenza)}\\[2pt]
a>\dfrac{1}{2e} & \text{nessuna soluzione}
\end{cases}
$$

**Tangenza.** I grafici di $f$ e $g$ sono tangenti quando, nel punto comune $x_0$, coincidono anche le rette tangenti:
$$\ln x_0=a\,x_0^2,\qquad \frac{1}{x_0}=2a\,x_0.$$
Dalla seconda $a=\dfrac{1}{2x_0^2}$; sostituendo nella prima $\ln x_0=\dfrac{1}{2x_0^2}\cdot x_0^2=\dfrac12$, quindi $x_0=\sqrt e$ e
$$\boxed{\,a=\frac{1}{2e}\,}.$$
Il punto di tangenza è $\left(\sqrt e,\ \tfrac12\right)$, in accordo con il massimo di $\varphi$ trovato sopra.

## 2) Area per $a=-1$

Con $a=-1$ si ha $g(x)=-x^2$. Nell'intervallo $[1,2]$ risulta $f(x)=\ln x\ge 0$ e $g(x)=-x^2<0$, quindi $f$ sta sempre sopra $g$ e le due curve non si intersecano: la regione è delimitata in alto da $f$, in basso da $g$ e lateralmente dalle rette $x=1$ e $x=2$.


<figure class="tikz-fig">
<svg xmlns="http://www.w3.org/2000/svg" width="170.686" height="110.58" viewBox="-72 -72 128.015 82.935"><g stroke="#000" stroke-miterlimit="10" stroke-width=".4"><path fill="none" d="M-72.07-46.009H42.763"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M40.883-48.409c.38 1.44 1.227 2.12 2.08 2.4-.853.28-1.7.96-2.08 2.4"/><text x="-63.534" y="-46.009" stroke="none" font-family="cmmi10" font-size="10" transform="translate(110.23 2.153)">x</text><path fill="none" d="M-63.534 6.571v-65.325"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M-65.934-56.874c1.44-.38 2.12-1.227 2.4-2.08.28.853.96 1.7 2.4 2.08"/><text x="-63.534" y="-46.009" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-2.63 -18.623)">y</text><path fill="none" d="M-20.855-47.443v2.868"/><text x="-63.534" y="-46.009" stroke="none" font-family="cmr10" font-size="10" transform="translate(40.18 11.411)">1</text><path fill="none" d="M21.824-47.443v2.868"/><text x="-63.534" y="-46.009" stroke="none" font-family="cmr10" font-size="10" transform="translate(82.858 11.411)">2</text><path fill="#d9d9ff" stroke="none" d="m-20.855-46.009 1.094-.302 1.094-.295 1.094-.288 1.094-.281 1.094-.275 1.094-.268 1.094-.263 1.094-.257 1.094-.252 1.094-.246 1.095-.241 1.094-.237 1.094-.232 1.094-.227 1.094-.223 1.094-.22 1.094-.215 1.094-.212 1.094-.207 1.094-.204 1.094-.202 1.094-.197 1.094-.194 1.094-.19 1.095-.189 1.094-.186 1.094-.182 1.094-.179 1.094-.177 1.094-.175 1.094-.171 1.094-.17 1.094-.167 1.094-.166 1.094-.16 1.094-.161 1.094-.158 1.094-.157 1.094-.155.01 56.081m0 0L20.73.574 19.636-.628l-1.094-1.186-1.094-1.17-1.094-1.155-1.095-1.139-1.094-1.123-1.094-1.108L11.977-8.6l-1.094-1.076-1.094-1.06-1.094-1.045-1.094-1.029-1.094-1.013-1.094-.998-1.094-.982-1.094-.966-1.094-.95-1.094-.935-1.094-.92-1.095-.903-1.094-.887-1.094-.872-1.094-.857-1.094-.84-1.094-.825-1.094-.81-1.094-.793-1.094-.778-1.094-.762-1.094-.746-1.094-.73-1.094-.715-1.094-.7-1.095-.683-1.094-.668-1.094-.652-1.094-.636-1.094-.621Z"/><g fill="#00f" stroke="#00f" stroke-width=".8"><path fill="none" d="m-48.596-33.463 1.41-1.078 1.41-.99 1.411-.912 1.41-.848 1.411-.794 1.411-.743 1.41-.7 1.411-.66 1.41-.626 1.411-.595 1.41-.567 1.411-.54 1.411-.518 1.41-.496 1.411-.476 1.41-.458 1.411-.441 1.41-.426 1.411-.41 1.411-.399 1.41-.384 1.411-.372 1.41-.362 1.411-.35 1.41-.34 1.411-.332 1.411-.322 1.41-.314 1.411-.306 1.41-.297 1.411-.291 1.41-.284 1.411-.277 1.41-.271 1.411-.266 1.411-.26 1.41-.253 1.411-.248 1.41-.243 1.411-.239 1.41-.233 1.411-.23 1.411-.226 1.41-.22 1.411-.216 1.41-.214 1.411-.208 1.41-.206 1.411-.203 1.411-.2 1.41-.196 1.411-.192 1.41-.19 1.411-.186 1.41-.183 1.411-.181 1.411-.179 1.41-.175 1.411-.173"/><text x="-63.534" y="-46.009" fill="#00f" stroke="none" font-family="cmmi10" font-size="10" transform="translate(101.894 -7.453)">f</text></g><g fill="red" stroke="red" stroke-width=".8"><path fill="none" d="m-63.534-46.009 1.483.014 1.482.044 1.483.072 1.483.1 1.483.13 1.483.16 1.483.187 1.483.216 1.482.246 1.483.274 1.483.302 1.483.332 1.483.361 1.483.39 1.482.418 1.483.447 1.483.476 1.483.505 1.483.534 1.483.562 1.483.592 1.482.62 1.483.65 1.483.677 1.483.707 1.483.736 1.483.764 1.483.794 1.482.822 1.483.851 1.483.88 1.483.909 1.483.938 1.483.966 1.483.996 1.482 1.024 1.483 1.053 1.483 1.082 1.483 1.11 1.483 1.14 1.483 1.169 1.483 1.197 1.482 1.226 1.483 1.255 1.483 1.284 1.483 1.313 1.483 1.341 1.483 1.37 1.483 1.4 1.482 1.428 1.483 1.457 1.483 1.486 1.483 1.515 1.483 1.543 1.483 1.573L19.506-.77 20.988.86l1.483 1.66 1.483 1.687"/><text x="-63.534" y="-46.009" fill="red" stroke="none" font-family="cmmi10" font-size="10" transform="translate(91.221 51.396)">g</text></g><path fill="none" stroke-dasharray="3.0,3.0" d="M-20.855-46.009v11.95M21.824-54.291V1.791"/></g></svg>
</figure>

L'area vale
$$A=\int_1^2\big(\ln x-(-x^2)\big)\,dx=\int_1^2\big(\ln x+x^2\big)\,dx.$$
Ricordando $\displaystyle\int\ln x\,dx=x\ln x-x$, si ottiene
$$A=\Big[x\ln x-x+\frac{x^3}{3}\Big]_1^2=\left(2\ln 2-2+\frac{8}{3}\right)-\left(0-1+\frac{1}{3}\right).$$
$$A=\Big(2\ln 2+\frac{2}{3}\Big)-\Big(-\frac{2}{3}\Big)=2\ln 2+\frac{4}{3}\approx 2{,}72.$$

## 3) Studio di $h(x)=\ln x-a\,x^2$ con $a>\dfrac{1}{2e}$

Scegliamo un valore numerico maggiore di quello di tangenza $\frac{1}{2e}\approx 0{,}18$, ad esempio $a=\frac12$:
$$h(x)=\ln x-\frac{x^2}{2},\qquad x>0.$$

**Dominio e limiti.** Il dominio è $x>0$. Agli estremi:
$$\lim_{x\to 0^+}h(x)=-\infty\ \ (\text{asintoto verticale }x=0),\qquad \lim_{x\to +\infty}h(x)=-\infty,$$
poiché nell'ultimo limite il termine $-\frac{x^2}{2}$ prevale sul logaritmo. Non vi sono asintoti obliqui.

**Monotonìa ed estremi.**
$$h'(x)=\frac{1}{x}-x=\frac{1-x^2}{x}.$$
Per $x>0$ il segno dipende da $1-x^2$: $h'(x)>0$ per $0<x<1$ e $h'(x)<0$ per $x>1$. In $x=1$ si ha un massimo assoluto:
$$h(1)=\ln 1-\frac12=-\frac12.$$

**Segno e zeri.** Poiché il valore massimo è $-\frac12<0$, la funzione è **sempre negativa** e non ha zeri: ciò conferma che, con $a>\frac{1}{2e}$, i grafici di $f$ e $g$ non si incontrano ($\ln x<a\,x^2$ per ogni $x>0$).

**Concavità.**
$$h''(x)=-\frac{1}{x^2}-1<0\quad\text{per ogni }x>0,$$
dunque il grafico è ovunque concavo verso il basso, senza flessi.

Il grafico è quindi una curva concava che sale da $-\infty$ fino al vertice $\left(1,-\tfrac12\right)$ e ridiscende a $-\infty$, restando tutta sotto l'asse $x$.


<figure class="tikz-fig">
<svg xmlns="http://www.w3.org/2000/svg" width="196.184" height="127.013" viewBox="-72 -72 147.138 95.26"><g stroke="#000" stroke-miterlimit="10" stroke-width=".4"><path fill="none" d="M-57.215-43.79H61.886"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M60.006-46.19c.38 1.44 1.227 2.12 2.08 2.4-.853.28-1.7.96-2.08 2.4"/><text x="-48.68" y="-43.79" stroke="none" font-family="cmmi10" font-size="10" transform="translate(114.499 2.153)">x</text><path fill="none" d="M-48.68 22.79v-81.544"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M-51.08-56.874c1.44-.38 2.12-1.227 2.4-2.08.28.853.96 1.7 2.4 2.08"/><text x="-48.68" y="-43.79" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-2.63 -20.842)">y</text><path fill="none" d="M-6-45.838v4.097"/><text x="-48.68" y="-43.79" stroke="none" font-family="cmr10" font-size="10" transform="translate(40.18 12.026)">1</text><path fill="none" d="M-46.119-30.986h-5.121"/><g stroke="none"><text x="-48.68" y="-43.79" font-family="cmsy10" font-size="10" transform="translate(-20.258 15.304)">¡</text><text x="-39.702" y="-47.727" font-family="cmr7" font-size="7" transform="translate(-20.258 15.304)">1</text><path d="M-59.96-31.186h3.986v.4h-3.986z"/><text x="-39.702" y="-40.341" font-family="cmr7" font-size="7" transform="translate(-20.258 15.304)">2</text></g><path fill="none" stroke="#00f" stroke-width=".8" d="m-43.131 8.095 1.435-5.355 1.434-4.5 1.435-3.812 1.435-3.264 1.434-2.821 1.435-2.465 1.435-2.171 1.434-1.926 1.435-1.712 1.435-1.529 1.434-1.366 1.435-1.227 1.435-1.091 1.434-.972 1.435-.864 1.435-.76 1.434-.67 1.435-.58 1.435-.497 1.434-.419 1.435-.347 1.435-.275 1.434-.209 1.435-.141 1.435-.084 1.434-.024 1.435.037 1.435.09 1.434.146 1.435.198 1.435.25 1.434.299 1.435.347 1.435.396 1.434.443 1.435.489 1.435.533 1.434.58 1.435.62 1.435.665 1.434.706 1.435.75 1.434.789 1.435.83 1.435.869 1.434.91 1.435.95 1.435.987 1.434 1.03 1.435 1.062 1.435 1.102 1.434 1.14 1.435 1.179 1.435 1.213 1.434 1.248 1.435 1.284 1.435 1.323 1.434 1.359 1.435 1.394 1.435 1.43 1.434 1.464 1.435 1.5L47.253.16l1.434 1.569 1.435 1.604 1.435 1.638 1.434 1.672 1.435 1.707 1.435 1.74"/><path stroke="none" d="M-4.65-30.986c0-.447-.605-.81-1.35-.81s-1.35.363-1.35.81.604.81 1.35.81c.745 0 1.35-.363 1.35-.81m-1.35 0"/><g stroke="none"><text x="-48.68" y="-43.79" font-family="cmr10" font-size="10" transform="translate(46.212 5.822)">(1</text><text x="-39.791" y="-43.79" font-family="cmmi10" font-size="10" transform="translate(46.212 5.822)">;</text><text x="-35.346" y="-43.79" font-family="cmsy10" font-size="10" transform="translate(46.212 5.822)">¡</text><text x="-26.368" y="-47.727" font-family="cmr7" font-size="7" transform="translate(46.212 5.822)">1</text><path d="M19.844-40.668h3.986v.4h-3.986z"/><text x="-26.368" y="-40.341" font-family="cmr7" font-size="7" transform="translate(46.212 5.822)">2</text><text x="-21.182" y="-43.79" font-family="cmr10" font-size="10" transform="translate(46.212 5.822)">)</text></g></g></svg>
</figure>

*Fonte:* [📄 PDF p.10](https://drive.google.com/file/d/1nnd4Nds7GFPZVCB9i0VVpSMDlBPee3x7/view)

#maturita/soluzione #area/analisi #cluster/derivate_massimi_e_minimi
