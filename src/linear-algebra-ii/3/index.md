+++
# TOML Frontmatter
+++

# Linear Algebra II — Sheet 3

1. | Matrix | Eigenvalues      | Eigenvectors                                                                                                                             | $P$                                                                              |
   | ------ | ---------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
   | $A_1$  | $-1$ , $1$ , $2$ | $\begin{pmatrix}1\\3\\-3\end{pmatrix}$ , $\begin{pmatrix}1\\-\frac13\\-\frac13\end{pmatrix}$ , $\begin{pmatrix}1 \\ 0 \\ 0\end{pmatrix}$ | $\begin{pmatrix}1 & 1 & 1 \\ 3 & -\frac13 & 0 \\ -3 & -\frac13 & 0\end{pmatrix}$ |
   | $A_2$  | $-1$ , $2$       | $\begin{pmatrix}0 \\ 0 \\ 1\end{pmatrix}$ , $\begin{pmatrix}1 \\ 1 \\ 1\end{pmatrix}$                                                    | Not diagonalizable.                                                              |
   | $A_3$  | $4$ , $1$        | $\begin{pmatrix}1 \\ 1 \\ 1\end{pmatrix}$ , $\begin{pmatrix}1 \\ 0 \\ -1\end{pmatrix}$ , $\begin{pmatrix}0 \\ 1 \\ -1\end{pmatrix}$      | $\begin{pmatrix}1 & 1 & 0 \\ 1 & 0 & 1 \\ 1 & -1 & -1\end{pmatrix}$              |

2. (i)
   
   $$
   \begin{pmatrix}
4 & 4
\\ -3 & -2
\end{pmatrix}^{-1}
A
\begin{pmatrix}
4 & 4
\\ -3 & -2
\end{pmatrix}
= \frac{1}{12}
\operatorname{diag}(6,4) \space \square
   $$
   
   (ii) Let $P = \begin{pmatrix}
   4 & 4
   \\ -3 & -2
   \end{pmatrix}$ , $D = \frac{1}{12} \operatorname{diag}(6,4)$ , $A = PDP^{-1}$ .
   
   $$
   \begin{align*}
A^n &= A \cdots A 
\\&= (PDP^{-1}) \cdots (PDP^{-1})
\\ &= P D^n P^{-1}
\\ &= \begin{pmatrix}
4 & 4
\\ -3 & -2
\end{pmatrix}
\left( \frac{1}{12} \operatorname{diag}(6,4) \right)^n
\begin{pmatrix}
4 & 4
\\ -3 & -2
\end{pmatrix}^{-1}
\\ &= \begin{pmatrix}
4 & 4
\\ -3 & -2
\end{pmatrix}
\operatorname{diag}(2^{-n},3^{-n})
\begin{pmatrix}
4 & 4
\\ -3 & -2
\end{pmatrix}^{-1}
\end{align*}
   $$
   
   (iii)
   
   $$
   \begin{align*}
S &= \sum_n A^n
\\ &= \sum_n PD^n P^{-1}
\\ &= P \sum_n D^n P^{-1}
\\ &= P \sum_n \operatorname{diag}(2^{-n}, 3^{-n}) P^{-1}
\\ &= P \operatorname{diag}
\left( \sum_n 2^{-n}, \sum_n 3^{-n} \right) P^{-1}
\\ &= P \operatorname{diag}
\left( 2, \frac32 \right) P^{-1}
\\ &= \begin{pmatrix}
\frac12 & -2
\\ \frac34 & 3
\end{pmatrix}
\end{align*}
   $$
   
   $$
   S(\mathrm I_2 - A) =
\begin{pmatrix}
\frac12 & -2
\\ \frac34 & 3
\end{pmatrix}
\frac{1}{12}
\begin{pmatrix}
0 & -8 \\ 3 & 10
\end{pmatrix}
= \mathrm I_2
   $$

3. (i) By definition $\lVert A \rVert$ is the maximum of some non-negative reals (norms of vectors) and thus $\lVert A \rVert \ge 0$ .
   
   $$
   \begin{align*}
&\lVert A \rVert = 0
\\ \iff & \max\{\lVert A \mathbf v \rVert
\mid \lVert \mathbf v \rVert = 1 \} = 0
\\ \iff & \lVert A \mathbf v \rVert = 0
\,\forall \mathbf v \in \R^n, \lVert \mathbf v \rVert = 1
\\ \iff & \lVert A \mathbf v \rVert = 0
\,\forall \mathbf v \in \langle \{ \mathbf w \in \R^n
\mid \lVert \mathbf w \rVert = 1 \} \rangle = \R^n
\\ \iff & A \mathbf v = \mathbf 0\,\forall \mathbf v \in \R^n
\\ \iff & A = 0 \space \square
\end{align*}
   $$
   
   (ii)
   
   $$
   \begin{align*}
\lVert \lambda A \rVert
& = \max\{ \lVert (\lambda A) \mathbf v \rVert \mid \lVert \mathbf v \rVert = 1 \}
\\ &= \max\{ \lVert \lambda (A \mathbf v) \rVert \mid \lVert \mathbf v \rVert = 1 \}
\\ &= \max\{ |\lambda| \lVert A \mathbf v \rVert \mid \lVert \mathbf v \rVert = 1 \}
\\ &= |\lambda| \max\{ \lVert A \mathbf v \rVert \mid \lVert \mathbf v \rVert = 1 \}
\\ &= |\lambda| \lVert A \rVert \space \square
\end{align*}
   $$
   
   (iii)
   
   $$
   \begin{align*}
\lVert (A + B) \mathbf v \rVert = \lVert A \mathbf v + B \mathbf v \rVert
& \le \lVert A \mathbf v \rVert + \lVert B \mathbf v \rVert
\\
\max \{\lVert (A + B) \mathbf v \rVert
\mid \lVert \mathbf v \rVert = 1\}
& \le
\max \{ \lVert A \mathbf v \rVert + \lVert B \mathbf v \rVert
\mid \lVert \mathbf v \rVert = 1\}
\\ & \le
\max \{ \lVert A \mathbf v \rVert \mid \lVert \mathbf v \rVert = 1\}
\\ & \mathrel{\phantom\le} + \max \{ \lVert B \mathbf v \rVert \mid \lVert \mathbf v \rVert = 1\}
\\ \lVert A + B \rVert & \le \lVert A \rVert + \lVert B \rVert
\space \square
\end{align*}
   $$
   
   (iv) Let $\mathbf v = \lVert \mathbf v \rVert \mathbf e_v$ where $\lVert \mathbf e_v \rVert = 1$ .
   
   $$
   \lVert A \mathbf v\rVert
= \lVert A (\lVert \mathbf v \rVert \mathbf e_v) \rVert
=  \lVert \mathbf v \rVert \lVert A \mathbf e_v \rVert
\le \lVert \mathbf v \rVert \lVert A \rVert \space \square
   $$
   
   (v)
   
   $$
   \begin{align*}
\lVert AB \rVert
&= \max \{ \lVert AB\mathbf v \rVert \mid \lVert \mathbf v \rVert = 1 \}
\\ &\le \max \{ \lVert A \rVert \lVert B\mathbf v \rVert
\mid \lVert \mathbf v \rVert = 1 \}
\\ &= \lVert A \rVert
\max \{ \lVert B\mathbf v \rVert \mid \lVert \mathbf v \rVert = 1 \}
\\ &= \lVert A \rVert \lVert B \rVert \space \square
\end{align*}
   $$
   
   (vi)
   
   s
   
   d
