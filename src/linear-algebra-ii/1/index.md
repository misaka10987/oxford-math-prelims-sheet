+++
# TOML Frontmatter
+++

# Linear Algebra II — Sheet 1

1. By calculation, $|A| = -3$ , $|B| = -2$ ,
   
   $$
   |AB| = \begin{vmatrix}
4 & 0 & 7\\
6 & 1 & 8\\
2 & 0 & 5
\end{vmatrix}
= 6
   $$
   
   $$
   |BA| = \begin{vmatrix}
2 & 0 & 1
\\ -2 & 1 & 2
\\ 8 & 0 & 7
\end{vmatrix}
= 6
   $$

2. By calculation,
   
   $$
   \begin{vmatrix}
1 & 2 & 3 & 1
\\ -2 & 0 & 0 & 2
\\ 6 & 1 & 3 & 4
\\ 0 & 1 & 3 & -1
\end{vmatrix}
= -66
   $$
   
   $$
   \begin{vmatrix}
1 & 2 & 4 & 2\\
2 & -3 & 1 & -3\\
7 & -1 & 0 & 1\\
1 & -2 & 1 & 0
\end{vmatrix}
= 196
   $$

3. Using EROs, by calculation,
   
   $$
   \begin{align*}
\begin{vmatrix}
x^2 & (x + 1)^2 & (x + 2)^2
\\ (x + 1)^2 & (x + 2) ^2 & (x + 3)^2
\\ (x + 2)^2 & (x + 3)^2 & (x + 4 ) ^2
\end{vmatrix}
&= 
\begin{vmatrix}
x^2 & x^2 + 2x + 1 & x^2 + 4x + 4
\\ 2x + 1 & 2x + 3 & 2x + 5
\\ 2 &  2 & 2
\end{vmatrix}
\\ &= -8
\end{align*}
   $$
   
   $$
   \begin{align*}
\begin{vmatrix}
1&1&1&1
\\ x & 1 & 1 & 1
\\ x & x & 1 & 1
\\ x & x & x & 1
\end{vmatrix}
&=
\begin{vmatrix}
1&1&1&1
\\ x-1 & 0 & 0 & 0
\\ x-1 & x-1 & 0 & 0
\\ x-1 & x-1 & x-1 & 0
\end{vmatrix}
\\ &=
\begin{vmatrix}
0 & 0 & 0
\\ x-1 & 0 & 0
\\ x-1 & x-1 & 0
\end{vmatrix} -
\begin{vmatrix}
x-1 & 0 & 0
\\ x-1 & 0 & 0
\\ x-1 & x-1 & 0
\end{vmatrix}
\\ & \mathrel{\phantom=} +
\begin{vmatrix}
x-1 & 0 & 0
\\ x-1 & x-1 & 0
\\ x-1 & x-1 & 0
\end{vmatrix} -
\begin{vmatrix}
x-1 & 0 & 0
\\ x-1 & x-1 & 0
\\ x-1 & x-1 & x-1
\end{vmatrix}
\\ &= (1-x)^3 \space \square
\end{align*}
   $$

4. If $W$ is not full-ranked, neither is $A$ and both sides of the equation are zero.
   
   If $W$ is full-ranked, we can use EROs to cancel $V$ without changing the determinant, so
   
   $$
   |A| =
\begin{vmatrix} U & V \\ 0 & W \end{vmatrix}
= 
\begin{vmatrix} U & 0 \\ 0 & W \end{vmatrix}
=
\begin{vmatrix} U & 0 \\ 0 & \mathrm I_n \end{vmatrix}
\begin{vmatrix} \mathrm I_m & 0 \\ 0 & W \end{vmatrix}
   $$
   
   > **Lemma** $\begin{vmatrix} M & 0 \\ 0 & \mathrm I_n \end{vmatrix} = \begin{vmatrix} \mathrm I_n & 0 \\ 0 & M \end{vmatrix} = |M|$ $\forall n \in \N$ .
   > 
   > **Proof** By induction.
   > 
   > - For $n=1$ , expand along the $n$ -th row and
   >   
   >   $$
   >   \begin{vmatrix} M & 0 \\ 0 & 1 \end{vmatrix} = 1 \times \mathrm C_{n,n}\begin{pmatrix} M & 0 \\ 0 & 1 \end{pmatrix} = |M|
   >   $$
   > 
   > - For $n > 1$ , expand along the $n$ -th row and
   >   
   >   $$
   >   \begin{align*}
\begin{vmatrix} M & 0 \\ 0 & \mathrm I_{n} \end{vmatrix}
&= \begin{vmatrix}
\begin{pmatrix} M & 0 \\ 0 & \mathrm I_{n-1} \end{pmatrix}
& 0 \\ 0 & 1 \end{vmatrix}
\\ &= 1 \times \mathrm C_{n,n}
\begin{pmatrix}
\begin{pmatrix} M & 0 \\ 0 & \mathrm I_{n-1} \end{pmatrix}
& 0 \\ 0 & 1 \end{pmatrix}
\\ &= \begin{vmatrix} M & 0 \\ 0 & \mathrm I_{n-1} \end{vmatrix}
\\ &= |M|
\end{align*}
   >   $$
   > 
   > And similarly $\begin{vmatrix} \mathrm I_n & 0 \\ 0 & M \end{vmatrix} = |M|$ . $\square$ 
   
   Then $\begin{vmatrix} U & 0 \\ 0 & \mathrm I_n \end{vmatrix} = |U|$ and $\begin{vmatrix} \mathrm I_m & 0 \\ 0 & W \end{vmatrix} = |W|$ , so $|A| = |U||W|$ . $\square$ 

5. (i)
   
   $$
   \begin{align*}
|V_n| &=
\begin{vmatrix}
1 & 0 & 0 & \cdots & 0
\\ 1 & x_2 - x_1 & x_2(x_2 - x_1) & \cdots & {x_2}^{n-2}(x_2 - x_1)
\\ 1 & x_3 - x_1 & x_3(x_3 - x_1) & \cdots & {x_3}^{n-2}(x_3 - x_1)
\\ \vdots & \vdots & \vdots & \ddots & \vdots
\\ 1 & x_n - x_1 & x_n(x_n - x_1) & \cdots & {x_n}^{n-2}(x_n - x_1)
\end{vmatrix}
\\ &=
\begin{vmatrix}
x_2 - x_1 & x_2(x_2 - x_1) & \cdots & {x_2}^{n-2}(x_2 - x_1)
\\ x_3 - x_1 & x_3(x_3 - x_1) & \cdots & {x_3}^{n-2}(x_3 - x_1)
\\ \vdots & \vdots & \ddots & \vdots
\\ x_n - x_1 & x_n(x_n - x_1) & \cdots & {x_n}^{n-2}(x_n - x_1)
\end{vmatrix}
\\ &= \prod_{i=2}^n (x_i - x_1)
\begin{vmatrix}
1 & x_2 & \cdots & {x_2}^{n-2}
\\ 1 & x_3 & \cdots & {x_3}^{n-2}
\\ \vdots & \vdots & \ddots & \vdots
\\ 1 & x_n & \cdots & {x_n}^{n-2}
\end{vmatrix}
\\ & \mathrel{\phantom=} \vdots
\\ &= \prod_{j=1}^{n-1} \prod_{i=j+1}^n (x_j - x_i)
\\ &= \prod_{i>j} (x_i - x_j) \space \square
\end{align*}
   $$
   
   (ii)
   
   $$
   \begin{align*}
& V_n \; \text{invertible}
\\ & \iff |V_n| \ne 0
\\ & \iff \prod_{i>j} (x_i - x_j) \ne 0
\\ & \iff x_i \ne x_j \,\forall i > j
\space \square
\end{align*}
   $$
   
   (iii) The uniqueness part is because if $p(x)$ and $q(x)$ are both such polynomials, then $p(x) - q(x)$ has $(n+1)$ roots $x_0, \cdots, x_n$ , and because nonzero polynomials cannot have more roots than degree, $p(x) = q(x)$ .
   
   The existence part by construction
   
   $$
   p(x)
= \sum_{i = 0}^n y_i \prod_{0 \le j \le n,j\ne i} \frac{x-x_j}{x_i-x_j}
\space \square
   $$
   
   (iv) $p(x) = \prod_{j=1}^n \frac{x-x_j}{x_0 - x_j}$ .
