

**Quesito:** [[Quesiti/ques_2003_suppletiva_pni_2003_questionario_131_10|2003 Suppletiva PNI — Questionario — Quesito 10]] · **Prova:** [[Prove/2003_suppletiva_pni_2003_questionario_131|2003 Suppletiva PNI — Questionario]]

Data l'equazione di secondo grado in $x$
$$a x^2 + b x + c = 0, \qquad a,b,c \in \mathbb{R}, \quad a \neq 0,$$
si vuole un algoritmo che ne determini e comunichi le soluzioni reali, distinguendo tutti i casi possibili.

## Analisi dei casi

La natura delle soluzioni dipende dal **discriminante**
$$\Delta = b^2 - 4ac.$$

Poiché $a \neq 0$, l'equazione è effettivamente di secondo grado e si presentano tre casi mutuamente esclusivi:

- se $\Delta < 0$: l'equazione **non ammette soluzioni reali** (le due soluzioni sono complesse coniugate);
- se $\Delta = 0$: l'equazione ammette **due soluzioni reali coincidenti**
$$x_1 = x_2 = -\frac{b}{2a};$$
- se $\Delta > 0$: l'equazione ammette **due soluzioni reali distinte**
$$x_1 = \frac{-b - \sqrt{\Delta}}{2a}, \qquad x_2 = \frac{-b + \sqrt{\Delta}}{2a}.$$

L'algoritmo si limita quindi a leggere i coefficienti, a calcolare $\Delta$ e a selezionare il ramo corrispondente al segno di $\Delta$.

## Algoritmo in pseudo-linguaggio

```
INIZIO
  leggi a, b, c            (con a ≠ 0)
  Delta := b*b - 4*a*c
  se Delta < 0 allora
    scrivi "l'equazione non ammette soluzioni reali"
  altrimenti
    se Delta = 0 allora
      x := -b / (2*a)
      scrivi "due soluzioni reali coincidenti: x1 = x2 = ", x
    altrimenti
      x1 := (-b - radice(Delta)) / (2*a)
      x2 := (-b + radice(Delta)) / (2*a)
      scrivi "due soluzioni reali distinte: x1 = ", x1, "  x2 = ", x2
    fine se
  fine se
FINE
```

## Realizzazione in Pascal

Lo stesso algoritmo tradotto in linguaggio Pascal:

```pascal
program Equazione_secondo_grado;
var
  a, b, c, x, x1, x2, delta: real;
begin
  write('a = '); readln(a);   { deve essere a <> 0 }
  write('b = '); readln(b);
  write('c = '); readln(c);
  delta := b*b - 4*a*c;
  if delta < 0 then
    writeln('Nessuna soluzione reale')
  else if delta = 0 then
    begin
      x := -b / (2*a);
      writeln('x1 = x2 = ', x:8:3)
    end
  else
    begin
      x1 := (-b - sqrt(delta)) / (2*a);
      x2 := (-b + sqrt(delta)) / (2*a);
      writeln('x1 = ', x1:8:3, '   x2 = ', x2:8:3)
    end
end.
```

L'ipotesi $a \neq 0$ garantisce che la divisione per $2a$ sia sempre lecita e che l'equazione resti di secondo grado; in caso contrario occorrerebbe trattare a parte l'equazione lineare $bx + c = 0$.

*Fonte:* [📄 PDF p.137](https://drive.google.com/file/d/1n_07H2pKPIZ0p5d9GN7HvXoIlCFb8amD/view)

#maturita/soluzione #area/geometria #cluster/geometria
