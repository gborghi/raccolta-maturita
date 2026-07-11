

**Quesito:** [[Quesiti/ques_2006_scuole_italiane_allestero_europa_2006_sessione_ord_questionario_55_5|2006 Estero Europa — Questionario — Quesito 5]] · **Prova:** [[Prove/2006_scuole_italiane_allestero_europa_2006_sessione_ord_questionario_55|2006 Estero Europa — Questionario]]

In determinate condizioni il numero di un certo tipo di batteri triplica ogni due giorni. Assumendo una crescita esponenziale, si determini l'aumento percentuale dopo $6$ ore e dopo $18$ ore.

## Modello di crescita

Una crescita esponenziale è descritta da una legge del tipo
$$N(t) = N_0 \cdot e^{kt},$$
dove $N_0$ è il numero di individui all'istante $t=0$ e il tempo $t$ è misurato in giorni.

Poiché la popolazione triplica ogni due giorni, per $t=2$ si ha $N(2)=3N_0$:
$$3N_0 = N_0 \cdot e^{2k} \;\Rightarrow\; e^{2k}=3 \;\Rightarrow\; 2k=\ln 3 \;\Rightarrow\; k=\frac{1}{2}\ln 3.$$

La legge si può quindi riscrivere in forma più maneggevole:
$$N(t) = N_0 \, e^{\frac{1}{2}\ln 3 \, t} = N_0 \left(e^{\ln 3}\right)^{\frac{t}{2}} = N_0 \cdot 3^{\frac{t}{2}},$$
con $t$ espresso in giorni.


<figure class="tikz-fig">
<svg xmlns="http://www.w3.org/2000/svg" width="247.324" height="272.409" viewBox="-72 -72 185.493 204.307"><g stroke="#000" stroke-miterlimit="10" stroke-width=".4"><path fill="none" d="M-56.309 118.727H66.207"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M64.327 116.327c.38 1.44 1.227 2.12 2.08 2.4-.853.28-1.7.96-2.08 2.4"/><g stroke="none" font-size="10"><text x="-56.309" y="118.727" font-family="cmmi10" transform="translate(126.449 2.5)">t</text><text x="-49.364" y="118.727" font-family="cmr10" transform="translate(126.449 2.5)">(giorni)</text></g><path fill="none" d="M-56.309 118.727V-55.004"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M-58.709-53.124c1.44-.38 2.12-1.227 2.4-2.08.28.853.96 1.7 2.4 2.08"/><g stroke="none"><text x="-56.309" y="118.727" font-family="cmmi10" font-size="10" transform="translate(-12.628 -180.164)">N</text><text x="-48.017" y="118.727" font-family="cmmi10" font-size="10" transform="translate(-12.628 -180.164)">=</text><text x="-43.572" y="118.727" font-family="cmmi10" font-size="10" transform="translate(-12.628 -180.164)">N</text><text x="-35.538" y="120.227" font-family="cmr7" font-size="7" transform="translate(-12.628 -180.164)">0</text></g><path fill="none" stroke="#00f" stroke-width=".8" d="m-56.309 67.512 1.736-.962 1.736-.98 1.735-.998 1.736-1.018 1.736-1.036 1.735-1.057 1.736-1.076 1.736-1.096 1.735-1.117 1.736-1.138 1.736-1.158 1.735-1.18 1.736-1.204 1.736-1.226 1.735-1.248 1.736-1.273 1.736-1.296 1.735-1.32 1.736-1.346 1.736-1.37 1.735-1.397 1.736-1.422 1.736-1.45 1.735-1.476 1.736-1.503 1.736-1.534 1.735-1.56 1.736-1.592 1.736-1.619 1.735-1.653 1.736-1.68 1.736-1.715 1.735-1.745 1.736-1.78 1.736-1.81 1.735-1.848 1.736-1.88 1.736-1.917 1.735-1.95 1.736-1.99 1.736-2.026 1.735-2.064 1.736-2.103 1.736-2.144 1.735-2.18 1.736-2.227 1.736-2.264 1.735-2.308 1.736-2.35 1.736-2.398 1.735-2.44 1.736-2.488 1.736-2.53 1.735-2.583 1.736-2.629 1.736-2.68 1.735-2.73 1.736-2.779 1.736-2.834"/><g stroke-dasharray="3.0,3.0"><path fill="none" d="M46.121 118.727V-34.918h-102.43"/><text x="-56.309" y="118.727" stroke="none" font-family="cmr10" font-size="10" transform="translate(-8.533 -150.423)">3</text></g><path fill="none" stroke-dasharray="3.0,3.0" d="M-43.505 118.727V59.983h-12.804"/><path fill="none" stroke-dasharray="3.0,3.0" d="M-17.897 118.727V41.392H-56.31"/><text x="-56.309" y="118.727" stroke="none" font-family="cmr10" font-size="10" transform="translate(99.93 9.977)">2</text><text x="-56.309" y="118.727" stroke="none" font-family="cmr10" font-size="10" transform="translate(-8.533 9.977)">1</text><path stroke="none" d="M-55.049 67.512a1.26 1.26 0 1 0-2.52 0 1.26 1.26 0 0 0 2.52 0m-1.26 0"/></g></svg>
</figure>

## a) Aumento dopo 6 ore

Sei ore corrispondono a
$$t=\frac{6}{24}=\frac{1}{4}\ \text{giorno}.$$

Il numero di batteri diventa
$$N\!\left(\tfrac{1}{4}\right) = N_0 \cdot 3^{\frac{1}{8}}.$$

L'aumento assoluto è
$$N\!\left(\tfrac{1}{4}\right)-N_0 = N_0\left(3^{\frac{1}{8}}-1\right),$$
e quindi l'aumento percentuale vale
$$\frac{N_0\left(3^{\frac{1}{8}}-1\right)}{N_0}\cdot 100 = \left(3^{\frac{1}{8}}-1\right)\cdot 100 \approx 14{,}72\%.$$

## b) Aumento dopo 18 ore

Diciotto ore corrispondono a
$$t=\frac{18}{24}=\frac{3}{4}\ \text{giorno}.$$

Il numero di batteri diventa
$$N\!\left(\tfrac{3}{4}\right) = N_0 \cdot 3^{\frac{3}{8}},$$
con aumento assoluto
$$N\!\left(\tfrac{3}{4}\right)-N_0 = N_0\left(3^{\frac{3}{8}}-1\right).$$

L'aumento percentuale è pertanto
$$\left(3^{\frac{3}{8}}-1\right)\cdot 100 \approx 50{,}98\%.$$

*Fonte:* [📄 PDF p.57](https://drive.google.com/file/d/1nnd4Nds7GFPZVCB9i0VVpSMDlBPee3x7/view)

#maturita/soluzione #area/analisi #cluster/derivate_massimi_e_minimi
