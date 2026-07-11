

**Quesito:** [[Quesiti/ques_2003_scuole_italiane_allestero_europa_2003_sessione_sup_questionario_88_4|2003 Europa Suppletiva — Questionario — Quesito 4]] · **Prova:** [[Prove/2003_scuole_italiane_allestero_europa_2003_sessione_sup_questionario_88|2003 Europa Suppletiva — Questionario]]

Si determini il flesso della funzione $f(x)=e^{x}-x^{2}$.

La funzione è definita e derivabile infinite volte su tutto $\mathbb{R}$. Per individuare gli eventuali punti di flesso studiamo il segno della derivata seconda.

Calcoliamo le prime due derivate:

$$f'(x)=e^{x}-2x, \qquad f''(x)=e^{x}-2.$$

Un flesso richiede che la derivata seconda si annulli cambiando segno. Poniamo quindi $f''(x)=0$:

$$e^{x}-2=0 \;\Rightarrow\; e^{x}=2 \;\Rightarrow\; x=\ln 2.$$

Studiamo ora il segno di $f''(x)=e^{x}-2$. Poiché l'esponenziale è crescente:

$$f''(x)<0 \ \text{ per } x<\ln 2, \qquad f''(x)>0 \ \text{ per } x>\ln 2.$$

Dunque la concavità passa da rivolta verso il basso a rivolta verso l'alto: in $x=\ln 2$ la funzione presenta effettivamente un flesso.

Determiniamo l'ordinata del flesso:

$$f(\ln 2)=e^{\ln 2}-(\ln 2)^{2}=2-(\ln 2)^{2}\approx 1{,}52.$$

Il punto di flesso è quindi

$$F=\left(\ln 2,\; 2-(\ln 2)^{2}\right)\approx(0{,}69;\;1{,}52).$$

Poiché $f'(\ln 2)=e^{\ln 2}-2\ln 2=2-2\ln 2\approx 0{,}61\neq 0$, la tangente inflessionale non è orizzontale: si tratta di un flesso a tangente obliqua.


<figure class="tikz-fig">
<svg xmlns="http://www.w3.org/2000/svg" width="209.004" height="230.201" viewBox="-72 -72 156.753 172.651"><g stroke="#000" stroke-miterlimit="10" stroke-width=".4"><path fill="none" d="M-72.07 20.513H71.502"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M69.622 18.113c.38 1.44 1.227 2.12 2.08 2.4-.853.28-1.7.96-2.08 2.4"/><text x="-.084" y="20.513" stroke="none" font-family="cmmi10" font-size="10" transform="translate(75.519 2.153)">x</text><path fill="none" d="M-.084 100.18V-58.753"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M-2.484-56.874c1.44-.38 2.12-1.227 2.4-2.08.28.853.96 1.7 2.4 2.08"/><text x="-.084" y="20.513" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-2.63 -85.145)">y</text><path fill="none" stroke="#00f" stroke-width=".8" d="m-62.68 97.485 2.121-5.498 2.122-5.328 2.122-5.16 2.122-4.994 2.122-4.824 2.122-4.66 2.122-4.495 2.121-4.33 2.122-4.172 2.122-4.009 2.122-3.853 2.122-3.694 2.122-3.539 2.122-3.385 2.121-3.235 2.122-3.087 2.122-2.94 2.122-2.795 2.122-2.656 2.122-2.516 2.121-2.38L-16 13.682l2.122-2.123 2.122-1.997 2.122-1.878 2.122-1.762 2.122-1.651 2.121-1.546 2.122-1.446L.975-.066l2.122-1.262 2.122-1.18L7.34-3.615l2.122-1.04 2.121-.98 2.122-.929 2.122-.89 2.122-.857 2.122-.838 2.122-.83 2.122-.833 2.121-.85 2.122-.88 2.122-.924 2.122-.988 2.122-1.066 2.122-1.163 2.122-1.28 2.121-1.418 2.122-1.58 2.122-1.76 2.122-1.976 2.122-2.21 2.122-2.478 2.122-2.777 2.121-3.112 2.122-3.477 2.122-3.888 2.122-4.333"/><path stroke="none" d="M24.355-9.74c0-.967-1.23-1.75-2.75-1.75-1.518 0-2.75.783-2.75 1.75 0 .966 1.232 1.75 2.75 1.75 1.52 0 2.75-.784 2.75-1.75m-2.75 0"/><text x="-.084" y="20.513" stroke="none" font-family="cmmi10" font-size="10" transform="translate(10.337 -33.787)">F</text><path fill="none" stroke-dasharray="3.0,3.0" d="M21.605 20.513V-9.74"/><g stroke="none" font-family="cmr10" font-size="10"><text x="-.084" y="20.513" transform="translate(14.19 10.477)">ln</text><text x="9.916" y="20.513" transform="translate(14.19 10.477)">2</text></g></g></svg>
</figure>

*Fonte:* [📄 PDF p.89](https://drive.google.com/file/d/1n_07H2pKPIZ0p5d9GN7HvXoIlCFb8amD/view)

#maturita/soluzione #area/analisi #cluster/studio_di_funzione
