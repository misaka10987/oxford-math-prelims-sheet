+++
# TOML Frontmatter
completed = 2026-10-24
+++

# Linear Algebra I — Sheet 6

1. (a) $\forall \mathbf v \in V$ , let $\mathbf v = \mathbf u + \mathbf w$ where $\mathbf u \in U$ and $\mathbf w \in W$ . Then
   
   $$
   T \mathbf v = T(\mathbf u + \mathbf w) = T\mathbf u + T\mathbf w
= A \mathbf u + B\mathbf w
   $$
   
   Let $B_U = \{ \mathbf u_i \mid 1 \le i \le \dim U \}$ and $B_W=\{\mathbf w_i \mid 1\le i \le \dim W \}$ be basis of $U$ and $W$ . Then taking $(\mathbf u_1, \cdots,\mathbf u_{\dim U}, \mathbf w_1, \cdots, \mathbf w_{\dim W})$ as a basis of $V$ ,
   
   $$
   \begin{pmatrix}
A & 0 \\ 0 & B
\end{pmatrix}
\begin{pmatrix}
\mathbf u_1\\
\vdots \\ \mathbf u_{\dim U}
\\
\mathbf w_1
\\ \vdots \\ \mathbf w_{\dim W}
\end{pmatrix}
=
\begin{pmatrix}
A \mathbf u_1\\
\vdots \\
A \mathbf u_{\dim U}
\\ A\mathbf w_1
\\ \vdots
\\ A\mathbf w_{\dim W}
\end{pmatrix}
   $$
   
   (Using the $\mathbf u$ s and $\mathbf w$ s as row vectors.)
   
   Therefore for $\mathbf u = \sum_{i=1}^{\dim U} a_i \mathbf u_i \in U$ , $\begin{pmatrix}A & 0 \\ 0 & B\end{pmatrix} \mathbf u = A \mathbf u$ , and $\begin{pmatrix}A & 0 \\ 0 & B\end{pmatrix}\mathbf w =B\mathbf w$ $\forall \mathbf w \in W$ . Thus $T\mathbf v = A\mathbf u + B\mathbf w = \begin{pmatrix}A & 0 \\ 0 & B\end{pmatrix} \mathbf v$ . $\square$ 
   
   (b) By definition
   
   $$
   T = \begin{pmatrix}
1 & 1 & 0 & 0\\
1 & -1 & 0 & 0\\
0 & 0 & 0 & 1\\
0 & 0 & 0 & 0
\end{pmatrix}
   $$
   
   Let $U = \langle \hat i, \hat j\rangle$ , $W = \langle \hat k, \hat l \rangle$ . Then $T(x\hat i + y\hat j) = (x + y)\hat i + (x-y)\hat j \in U$ . $T(x \hat k + y \hat l) = y\hat k \in W$ . And obviously $U \oplus W = \langle \hat i, \hat j,\hat k,\hat l\rangle = V$ .
   
   (c) As in (b).

2. Let $A=PBP^{-1}$ .
   
   $$
   \operatorname{tr}A = \operatorname{tr}(PBP^{-1})
= \operatorname{tr}(PP^{-1}B) = \operatorname{tr}B
   $$

3. $A^2 = 0 \implies \operatorname{im} A \subseteq \ker A \implies \operatorname{rank} A \le \operatorname{null} A$ .
   
   And because $\operatorname{rank}A + \operatorname{null}A = n$ , $\operatorname{rank}A \le \frac 1 2 n$ .
   
   Assume $\operatorname{rank} A > \frac{n(k-1)}{k}$ . Then $\operatorname{null}A < \frac{n}{k}$ . And
   
   $$
   \operatorname{im}A^{m+1}  \cong
\operatorname{im}A^m/(\operatorname{im}A^{m} \cap \ker A)
   $$
   
   Because $\operatorname{im}A^m \cap \ker A \subseteq \operatorname{\ker A}$ ,
   
   $$
   \begin{align*}
\operatorname{rank}A^{m+1}& = \operatorname{rank} A^m -
\dim \operatorname{im} A^m \cap \ker A
\\ &\ge \operatorname{rank}A^m - \operatorname{null}A
\\ &> \operatorname{rank}A^m - \frac n k
\end{align*}
   $$
   
   Then by induction $\operatorname{rank}A^m > \frac{n(k-m)}{k}$ . But then $\operatorname{rank}A^k > 0$ which is contradiction. $\square$ 

4. (a)
   
   $$
   A=\begin{pmatrix}
0 & 1 & 0 \\
-1 & 0 & 0 \\
0 & 0 & 1
\end{pmatrix}
   $$
   
   (b)
   
   $$
   B = \begin{pmatrix}1 & 0 & 0\\ -2 & -1 & -1\\
2 & 2 & 1\end{pmatrix}
   $$
   
   (c)
   
   $$
   P = \begin{pmatrix}0 & 0 & 1\\
0 & 1 & -1\\
1 & -1 & 0\end{pmatrix}
   $$
   
   $$
   Q = \begin{pmatrix}1 & 1 & 1\\
1 & 1 & 0\\
1 & 0 & 0\end{pmatrix}
   $$
   
   (d) $QBP=A$ .

5. (a) $A: \R^n \to \R^m$ , $\ker A \cong \R^n /\operatorname{im}A \supseteq \R^n/\R^m \cong \R^{n-m}$ . Therefore when $m<n$ there is always a non-trivial kernel of $A$ . $\square$ 
   
   (b) 
   
   - If no solution, we are done.
   
   - If $\mathbf v \in \R^n$ is a solution, so is everything in $\mathbf v + \ker A$ , and we have proved in (a) that $\ker A$ is non-trivial and at least $\R$ . $\square$ 
   
   (c) $\operatorname{rank} A = m \implies \dim \operatorname{im} A = m$ , but $\operatorname{im}A$ is a subspace of $\R^m$ , and its dimension can be $m$ only when it is the entire space. $\square$ 
   
   (d) $\operatorname{rank} A = n \implies \operatorname{null}A = 0 \implies \ker A = \{0\}$ . Therefore, if $\mathbf v,\mathbf w$ are two solutions, then $A(\mathbf v - \mathbf w)=A\mathbf v-A\mathbf w=0$ , so $\mathbf v - \mathbf w \in \ker A$ and $\mathbf v = \mathbf w$ . $\square$ 
   
   (e) This follows directly from (c) and (d). $\square$ 

6. (a) Use $f_m$ to denote the coefficient of $x^{n-m}y^m$ of $f$ .
   
   $$
   \begin{align*}
L(f)+L(g) =& \frac{\partial^2 f}{\partial x^2} + 
\frac{\partial^2 f}{\partial y^2} +
\frac{\partial^2 g}{\partial x^2} +
\frac{\partial^2 g}{\partial y^2}
\\ =& \frac{\partial}{\partial x}
\sum_{i=0}^{n-1} (n-i) f_i y^i x^{n-i-1} + 
\frac{\partial}{\partial x}
\sum_{i=0}^{n-1} (n-i) g_i y^i x^{n-i-1}\\
& +\frac{\partial}{\partial y}
\sum_{i=1}^n i f_i x^{n-i} y^{i-1} +
\frac{\partial}{\partial y}
\sum_{i=1}^n i g_i x^{n-i} y^{i-1}
\\ =& \frac{\partial}{\partial x}
\sum_{i=0}^{n-1} (n-i) (f_i+g_i) y^i x^{n-i-1} 
\\ &+
\frac{\partial}{\partial y}
\sum_{i=1}^n i (f_i+g_i) x^{n-i} y^{i-1}
\\ =& \frac{\partial}{\partial x}
\frac{\partial (f+g)}{\partial x} +
\frac{\partial}{\partial y}
\frac{\partial (f+g)}{\partial y}
\\ =&L(f+g)
\end{align*}
   $$
   
   $L(cf)=cL(f)$ is easy to verify. $\square$ 
   
   (b) Consist of two "diagonals". The first one runs from $(1,1)$ to $(n-2,n-2)$ and has value $n(n-i)$ at position $(i,i)$ . The second one runs from $(1,3)$ to $(n-2,n)$ and has value $i(i+1)$ at position $(i,i+2)$ .
   
   $$
   \begin{pmatrix}
n (n-1) & 0 & 1 \times2  & \cdots & 0\\
0 & (n-1)(n-2) & 0 & \cdots & 0\\
0 & 0 & (n-2)(n-3) & \cdots & 0\\
0 & 0 & 0 & \cdots & 0\\
\vdots & \vdots & \vdots & \ddots & \vdots\\
0 & 0 & 0 & \cdots & n(n-1)
\end{pmatrix}
   $$
   
   (c) $\operatorname{rank} L = n-2$ . $\dim\{f \in V_n \mid L(f) = 0\} = \dim\ker L = 2$ .
