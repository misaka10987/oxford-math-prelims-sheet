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
   
   $$
   \begin{align*}
\lVert S_n - S \rVert
& = \left\lVert \sum_{i=n+1}^\infin A^i \right\rVert
\\ &= \left\lVert P \sum_{i=n+1}^\infin D^iP^{-1} \right\rVert
\\ &= \left\lVert P \operatorname{diag} \left(2,\frac32\right)
D^n P^{-1} \right\rVert
\\ & \le C \lVert D^n \rVert
\\ & \le C \lVert D \rVert^n
\\ & = 2^{-n} C
\\ &\to 0
\end{align*}
   $$
   
   for constant $C = \lVert P \rVert \lVert P^{-1} \rVert
   \left\lVert \operatorname{diag} \left(2,\frac32\right) \right\rVert$ as $n \to \infin$ . $\square$ 

4. $\chi_A(x) = x^3 - 3x^2 + x + 1$ .
   
   - On $\R$ and $\Z_7$ , $\chi_A(x)$ has 3 distinct roots and therefore 3 eigenvalues, thus $A$ is diagonalizable.
   
   - On $\mathbb Q$ and $\Z_3$ , $\chi_A(x)$ has only a root $1$ with algebraic multiplicity 1, thus $A$ is not diagonalizable.
   
   - On $\Z_2$ , $\chi_A(x)$ has a root $1$ with algebraic multiplicity 3, but $\operatorname{null}(A - \mathrm I_3) = 1$ , so $A$ is not diagonalizable.
   
   On $\Z_7$ , one set of eigenvectors is $\mathbf v = (0,1,6)$ , $\mathbf u = (1,5,5)$ and $\mathbf w = (1,2,2)$ . Let $\Pi_3$ be $3 \times 3$ permutation matrices. Then
   
   $$
   \{
\begin{pmatrix} a\mathbf v & b\mathbf u & c\mathbf w \end{pmatrix}
P
\mid a,b,c \in \Z_7 \backslash \{0\}, P \in \Pi_3
\}
   $$
   
   is the set of all possible $P$ s and the number is $6^3 \times 6 = 1296$ .

5. (i) Let $p(x) = \sum_{i=0}^n a_ix^i$ . Since $A\mathbf v = \lambda \mathbf v$ , $A^n \mathbf v = \lambda^n \mathbf v$ , and
   
   $$
   p(A) \mathbf v
= \sum_{i=0}^n a_i A^i \mathbf v
= \sum_{i=0}^n a_i \lambda^i \mathbf v
= p(\lambda) \mathbf v
   $$
   
   Hence $\chi_A(A) \mathbf v = \chi_A(\lambda) \mathbf v = \mathbf 0$ .
   
   If $A$ is diagonalizable, let $\mathbf v_i$ s be linearly independent $\lambda_i$ -eigenvectors for $1 \le i \le n$ . Then $\chi_A(A) \mathbf v_i = \mathbf 0$ and $\langle \mathbf v_i \rangle \subseteq \ker \chi_A(A)$ . Since all the $\mathbf v_i$ s are independent, $\langle \mathbf v_i \rangle \cap \langle \mathbf v_j \rangle = \{ \mathbf 0 \}$ for any $i$ , $j$ , and then $\operatorname{null} \chi_A(A) \ge \sum_{i=1}^n \dim \langle \mathbf v_i \rangle = n$ , which gives $\operatorname{null}\chi_A(A) = n$ and $\chi_A(A) = 0$ . $\square$ 
   
   (ii) $\chi_T(x) = \det (T - x \mathrm I_n ) = \prod_{i = 1}^n (\lambda_i - x)$ .
   
   Let $\tau_i$ be the $i$ -th column vector of $T - \lambda_i \mathrm I_n$ . Then $(\tau_i)_j = 0$ for $j > i$ since $T$ is upper triangular, and $(\tau_i)_i = 0$ since $T_{i,i} = \lambda_i$ .
   
   $$
   (T - \lambda_1 \mathrm I_n) \mathbf e_1
= \tau_1 = \mathbf 0
   $$
   
   And
   
   $$
   (T - \lambda_2 \mathrm I_n) \mathbf e_2 = \tau_2 \in \langle \mathbf e_1 \rangle
   $$
   
   because $(\tau_2)_j = 0$ for $j \ge 2$ . Since $(T - \lambda_1 \mathrm I_n) \mathbf e_1 = \mathbf 0$ , $\langle \mathbf e_1 \rangle \subseteq \ker (T - \lambda _1 \mathrm I_n)$ , and $(T-\lambda_2\mathrm I_n)\mathbf e_2 \in \ker (T - \lambda_1 \mathrm I_n)$ .
   
   > **Lemma** Let $P_m = \prod_{i=1}^m(T - \lambda_i \mathrm I_n)$ , $V_m = \langle \bigcup_{i=1}^m { \{ \mathbf e_i\} } \rangle$ . $\ker P_m \supseteq V_m$ .
   > 
   > **Proof** By induction.
   > 
   > - $\ker(T- \lambda_1 \mathrm I_n) \supseteq \langle \mathbf e_1 \rangle$ .
   > 
   > - $\forall \mathbf v \in V_{m+1}$ , $(T - \lambda_{m+1}\mathrm I_n) \mathbf v \in \langle \bigcup_{i=1}^{m + 1}  \{(T - \lambda_{m+1}\mathrm I_n)_{-,i}\} \rangle$ . Since $T$ is upper triangular, $(T - \lambda_{m+1}\mathrm I_n)_{-,i} \in V_i$ . Because $T_{m+1, m+1} = \lambda_{m+1}$ , $(T - \lambda_{m+1}\mathrm I_n)_{m + 1, m+1} = 0$ , thus $(T - \lambda_{m+1}\mathrm I_n)_{-,m+1} \in V_m$ . Then $\langle \bigcup_{i=1}^{m + 1} \{ (T - \lambda_{m+1}\mathrm I_n)_{-,i}\} \rangle \in V_m$ because every generator is in $V_m$ , and $(T - \lambda_{m+1}\mathrm I_n) \mathbf v \in \ker P_{m}$ , $P_{m+1} \mathbf v = 0$ . $\square$ 
   
   $$
   \operatorname{null} \chi_T(T) = \operatorname{null} P_n
= \dim \ker P_n = \dim V_n = n
   $$
   
   and $\chi_T(T) = 0$ . $\square$ 
