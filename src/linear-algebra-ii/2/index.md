+++
# TOML Frontmatter
+++

# Linear Algebra II — Sheet 2

1. Using EROs,
   
   1. Add the second to $n$ -th row to the first row.
   
   2. Add the first and third to $n$ -th row to the second row.
   
   3. Add the second and fourth to $n$ -th row to the third row.
   
   4. Repeat these until the $(n-1)$ -th row.
   
   $$
   \begin{align*}
\begin{vmatrix}
2 & -1 & 0 & 0 & \cdots & 0
\\ -1 & 2 & -1 & 0 & \cdots & 0
\\ 0 & -1 & 2 & -1 & \ddots & 0
\\ 0 & 0 & -1 & \ddots & \ddots & 0
\\ \vdots & \vdots & \ddots & \ddots & 2 & -1
\\ 0 & 0 & \cdots & 0 & -1 & 2
\end{vmatrix}
& = 
\begin{vmatrix}
1 & 0 & 0 & \cdots & 0 & 1
\\ 0 & 1 & 0 & \cdots & 0 & 2
\\ 0 & 0 & 1 & \ddots & \vdots & 3
\\ 0 & 0 & \ddots & \ddots & 0 & \vdots
\\ \vdots & \vdots & \vdots & 0 & 1 & n-1
\\ 0 & 0 & \cdots & 0 & -1 & 2
\end{vmatrix}
\\ &=
\begin{vmatrix}
1 & 0 & \cdots & 0 & 1
\\ 0 & 1 & \ddots & \vdots & 2
\\ \vdots & \ddots & \ddots & 0 & \vdots
\\ 0 & \cdots & 0 & 1 & n-1
\\ 0 & \cdots & \cdots & 0 & n+1
\end{vmatrix}
\\ &= n + 1
\end{align*}
   $$

2. (i)
   
   $$
   \begin{align*}
\chi_J(x) &= |x \mathrm I_n - J|
\\ &=
\begin{vmatrix}
x-1 & -1 & \cdots & -1
\\ -1 & x-1 & \ddots & \vdots
\\ \vdots & \ddots & \ddots & -1
\\ -1 & \cdots & -1 & x-1
\end{vmatrix}
\\ &=
(x-n)
\begin{vmatrix}-1 & -1 & \cdots & -1
\\ -1 & x-1 & \ddots & \vdots
\\ \vdots & \ddots & \ddots & -1
\\ -1 & \cdots & -1 & x-1
\end{vmatrix}
\\ &=
(x-n)
\begin{vmatrix}-1 & -1 & -1 & \cdots & -1
\\ 0 & x & 0 & \cdots & 0
\\ \vdots & \ddots & \ddots & \ddots & \vdots
\\ 0 & \cdots & 0 & x & 0
\\ 0 & \cdots & 0 & 0 & x
\end{vmatrix}
\\ &=(x-n)x^{n-1}
\end{align*}
   $$
   
   And $\chi_J(x)$ has roots $0$ and $n$ . $\square$ 
   
   (ii)
   
   $$
   E_0 = \ker J =
\left\{ \mathbf x \in \R^n \mid \sum_{i=1}^n \mathbf x_i = 0\right\}
   $$
   
   $$
   E_n = \ker (J - n \mathrm I_n)
= \left\{ \mathbf x \in \R^n
\mid \mathbf (n-1)x_i =
\sum_{1 \le j \le n,j\ne i} \mathbf x_j
\, \forall i \right\}
   $$
   
   $J$ is diagonalizable because $E_0 \oplus E_n = \R^n$ since $\dim E_0 = n-1$ and $E_n$ contains a vector $(1,\cdots, 1)$ not in $E_0$ .

3. (i) For all eigenvector $\mathbf v$ of $S$ , let $S\mathbf v = \lambda \mathbf v$ , then $S^2 \mathbf v = \lambda^2 \mathbf v = 1$ , and $\lambda^2 = 1$ . $\square$ 
   
   (ii)
   
   $$
   \begin{cases}
v = u + w
\\ Sv = Su + Sw = u - w
\end{cases}
\implies
\begin{cases}
u = \frac12(v + Sv)
\\ w = \frac12(v - Sv)
\end{cases}
   $$
   
   (iii)
   
   $$
   Su = S\left(\frac12(v + Sv) \right)
= \frac12Sv + \frac12 S^2 v
= \frac12Sv + \frac12v = u
   $$
   
   $$
   Sw = S\left( \frac12(v-Sv) \right)
= \frac12Sv - \frac12S^2v
= \frac12Sv - \frac12v = -w
   $$
   
   $U \cap W = \{0\}$ because eigenvalue is unique for an eigenvector. Since every vector $v$ can be written as a sum of $u = \frac12(v+Sv) \in U$ and $w = \frac12(v - Sv)\in W$ , $V = U + W$ and therefore $V = U \oplus W$ . $\square$ 
   
   (iv) $\begin{pmatrix}
   \mathrm I_{\dim U} & 0
   \\ 0 & -\mathrm I_{\dim W}
   \end{pmatrix}$ .
   
   (v) $U$ is the space of symmetric matrices and $W$ of antisymmetric matrices.
   
   $$
   \bigcup_{1 \le i,j \le n} \{ \mathrm E_{i,j} + \mathrm E_{j,i} \}
\cup \bigcup_{1 \le i,j \le n} \{ \mathrm E_{i,j} - \mathrm E_{j,i} \}
   $$

4. Denote as $A$ , $B$ , $C$ , and $D$ .
   
   $$
   \chi_A(x) = x^3 -6x^2+5x+12
\\
\chi_B(x) = x^3 - x^2 - x + 1
\\
\chi_C(x) = x^3-x^2-x+1
\\
\chi_D(x) = x^3 -6x^2+5x+12
   $$
   
   By considering the trace the only possible pairs are $A$ , $D$ and $B$ , $C$ .
   
   $C$ is not diagonalizable and therefore not similar to $B$ . $A$ , $D$ are both diagonalizable and similar.

5. (i) Because roots of real coefficient polynomials are conjugates, without loss of generality, let $a \in \R$ , $c = \overline b$ , then
   
   $$
   \begin{align*}
\Delta &= (a-b)^2 (a-c)^2(b-c)^2
\\ &= (a - \Re(b) - \Im(b)\mathrm i)^2
(a - \Re(b) + \Im(b)\mathrm i)^2
(2 \Im(b) \mathrm i)^2
\\ &= ( (a - \Re(b))^2 - ( \Im(b)\mathrm i)^2 )^2 (2\Im(b)\mathrm i )^2
\\ & \in \R
\end{align*}
   $$
   
   Obviously when $\Delta < 0$ the cubic has a real root and two conjugate complex roots. When $\Delta = 0$ it has two equal roots, and because complex roots come with conjugates, all three roots are real. When $\Delta > 0$ , the cubic also has three real roots because otherwise $\Delta=( (a - \Re(b))^2 - ( \Im(b)\mathrm i)^2 )^2 (2\Im(b)\mathrm i )^2$ is negative, and the roots are distinct.
   
   (ii)
   
   $$
   \begin{align*}
z^3 + mz + n
& = (z-a)(z-b)(z-c)
\\ &= z^3 - (a+b+c)z^2 + (ab + bc + ca)z - abc
\end{align*}
\\ \implies
\begin{cases}
a+b+c = 0\\
ab + bc + ca = m\\
-abc = n \space \square
\end{cases}
   $$
   
   (iii) $S_0 = 3$ . $S_1 = a + b + c = 0$ .
   
   $$
   S_2 = (a + b + c)^2 - 2(ab + bc + ca) = -2m
   $$
   
   (iv)
   
   $$
   \begin{align*}
S_{k+3} + mS_{k + 1}+ n S_k
& = (a^{k+3} + b^{k+3}+ c^{k+3})
\\ & \mathrel{\phantom=} + m(a^{k+1} + b^{k+1}+ c^{k+1})
\\ & \mathrel{\phantom=} + n(a^k + b^k+ c^k)
\\ &= a^k (a^3 + ma + n)
\\ & \mathrel{\phantom=} + b^k(b^3 + mb + n)
\\ & \mathrel{\phantom=} + c^k(c^3 + mc + n)
\\ &= 0 \space \square
\end{align*}
   $$
   
   $S_3 = -3n$ , $S_4 = 2m^2$ .
   
   (v) $|A| = (a-b)(b-c)(c-a)$ .
   
   $$
   A^\mathrm T A
=
\begin{pmatrix}
S_0 & S_1 & S_2\\
S_1 & S_2 & S_3\\
S_2 & S_3 & S_4
\end{pmatrix}
   $$
   
   $$
   \Delta = |A^\mathrm T A|
=
\begin{vmatrix}
3 & 0 & -2m
\\ 0 & -2m & -3n
\\ -2m & -3n & 2m^2
\end{vmatrix}
= -4m^3 - 27n^2
\space \square
   $$
