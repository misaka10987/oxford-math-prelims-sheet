+++
# TOML Frontmatter
completed = 2026-10-27
+++

# Linear Algebra I — Sheet 7

1. (a) For all bilinear form $b : V \times V \to \R$ ,
   
   $$
   b(v,w) = \frac{b(v,w) + b(w,v)}{2} + \frac{b(v,w) - b(w,v)}{2}

   $$
   
   Therefore such decomposition exists.
   
   If $b = c_1 + t_1$ and $b = c_2 + t_2$ are such decomposition, then $c_1 +t_1 - c_2 - t_2 = 0$ . By swapping the arguments we also have $c_1 - t_2 - c_2 + t_2 = 0$ , thus $t_1 = t_2$ and $c_1 = c_2$ . $\square$ 
   
   (b) If alternating, then 
   
   $$
   \begin{align*}
\langle v_1, v_2 \rangle + \langle v_2, v_1 \rangle
& = \langle v_1, v_1 \rangle + \langle v_1, v_2 - v_1 \rangle +
\langle v_2, v_2\rangle + \langle v_2, v_1 - v_2 \rangle
\\ & = \langle v_1, v_2 - v_1 \rangle -\langle v_2, v_2 - v_1 \rangle
\\ & = \langle v_1 - v_2, v_2 - v_1 \rangle
\\ & = - \langle v_1 - v_2, v_1 - v_2 \rangle
\\ & = 0
\end{align*}
   $$
   
   If skew-symmetric then obviously alternating because $\langle v, v\rangle = - \langle v , v \rangle$ . $\square$ 

2. (a)
   
   $$
   \begin{align*}
\frac 1 2 (
\lVert u + v \rVert^2 - \lVert u\rVert ^2 - \lVert v \rVert^2
)
& = \frac 1 2 ( \langle u + v, u + v \rangle - \langle u,u \rangle -
\langle v,v\rangle)
\\ & = \frac 1 2 ( \langle u,u+v \rangle + \langle v,u + v \rangle-
\langle u,u \rangle - \langle v,v\rangle)
\\ & = \frac 1 2(\langle u,v \rangle + \langle u,v \rangle)
\\ & = \langle u, v \rangle \space \square
\end{align*}
   $$
   
   (b)
   
   $$
   \begin{align*}
\langle u,v \rangle_1 &= \frac 1 2 (
{\lVert u + v \rVert_1}^2 - {\lVert u\rVert_1} ^2 - 
{\lVert v \rVert_1}^2)
\\ & = \frac 1 2 (
{\lVert u + v \rVert_2}^2 - {\lVert u\rVert_2} ^2 - 
{\lVert v \rVert_2}^2)
\\ & = \langle u,v \rangle_2 \space \square
\end{align*}
   $$

3. (a)
   
   $$
   (\mathbf x, \mathbf y) \mapsto
\mathbf x
\begin{pmatrix}
1 & \langle e_1, e_2 \rangle \\
\langle e_2, e_1 \rangle & 1
\end{pmatrix}
\mathbf y^\mathrm T
   $$
   
   (b)
   
   - **Bilinear:** 
     
     $$
     \begin{align*}
\langle f(x), ag(x) + bh(x) \rangle
= & f(0) (ag(0)+bh(0))
\\ & + f(1) (ag(1)+bh(1))
\\ & + f(2) (ag(2)+bh(2))
\\ = & af(0)g(0) + af(1)g(1) + af(2)g(2)
\\ & + bf(0)h(0) + bf(1)h(1) + bf(2) h(2)
\\ = & \langle f(x), ag(x) \rangle + \langle f(x), bh(x) \rangle
\end{align*}
     $$
   
   - **Positive Definite:** $\langle f(x), f(x) \rangle = f(0)^2 + f(1)^2 + f(2)^2 \ge 0$ . And $\langle f(x) , f(x) \rangle = 0$ iff. $f(0) = f(1) = f(2) = 0$ , then $f(x) = 0$ because $\R_2[x]$ cannot have 3 roots. 
   
   - **Symmetric:** By multiplicative commutativity of $\R$ . $\square$ 

4. (a) Obviously $0 \in U^\perp$ . $\forall u \in U, w_1, w_2 \in U^\perp$ ,
   
   $$
   \langle w_1 + w_2, u \rangle = \langle w_1, u \rangle + 
\langle w_2, u \rangle = 0
   $$
   
   $$
   \langle \lambda w_1, u \rangle = \lambda \langle w_1, u \rangle = 0
   $$
   
   Therefore a subspace.
   
   $$
   \begin{align*}
U^\perp \cap U &= \{ v \in U \mid \langle v, u \rangle = 0
\space \forall u \in U \}
\\ & \subseteq \{ u \in U \mid \langle u,u \rangle = 0 \}
\\ & = \{ 0 \}
\end{align*}
   $$
   
   Therefore $U^\perp \cap U = \{0\}$ . $\square$ 
   
   (b) $\forall v,w \in V, \lambda \in \R$ ,
   
   $$
   \begin{align*}
T(v + \lambda w) & = \sum_{i=1}^m \langle v + \lambda w, u_i \rangle
\\ & = \sum_{i=1}^m (\langle v, u_i \rangle +
\lambda \langle w, u_i \rangle)
\\ & = \sum_{i=1}^m\langle v, u_i \rangle +
\lambda\sum_{i=1}^m\langle w, u_i \rangle
\\ & = T(v) + T(\lambda w)
\space \square
\end{align*}
   $$
   
   (c)
   
   > **Lemma** $v \in V$ , $\langle v , u\rangle = 0$ $\forall u \in U$ $\iff$ $\langle v,u_i \rangle = 0$ $\forall 1 \le i \le m$ .
   > 
   > **Proof** The forward direction is obvious. Let $u = \sum_{i=1}^m a_i u_i$ where $a_i \in \R$ .
   > 
   > $$
   > \langle v, u \rangle = a_i \sum_{i=1}^m \langle v,u_i \rangle
   > $$
   > 
   > Then the backward direction is obvious because every term in the summation is zero.
   
   Therefore $\ker T = U^\perp$ .
   
   $T$ is surjective because for $(x_1, \cdots, x_m)$ ,
   
   $$
   T \sum_{i=1}^m \frac{x_i}{ \lVert u_i \rVert^2 } u_i
= (x_1, \cdots x_m)
   $$
   
   Therefore $\operatorname{rank}T = \dim \R^m = m$ .
   
   (d) $\dim U^\perp = \operatorname{null}T = n - m$ .
   
   Because $U^\perp \cap U = \{0\}$ , $\dim U \oplus U^\perp = \dim U + \dim U^\perp = n = \dim V$ . But $U \oplus U^\perp \subseteq V$ , so $U \oplus U^\perp = V$ .
   
   (e) $q(x) = x^2 - 2x$ , $p(x) = 2x$ .

5. Let $\mathbf v = (x,y,z)$ , $\mathbf w = (a,b,c)$ . Then $\lVert v \rVert = 1$ .
   
   $$
   \begin{align*}
ax + by + cz & = \langle \mathbf v , \mathbf w \rangle
\\ & \le \lVert \mathbf v \rVert \lVert \mathbf w \rVert
\\ & = \sqrt{a^2 + b^2 + c^2} \space \square
\end{align*}
   $$
   
   Equality holds when $(a,b,c) = (x,y,z)$ .

6. (a)
   
   $$
   \begin{align*}
\langle u, \alpha v + \beta w \rangle & =
\overline{\langle \alpha v + \beta w, u \rangle}
\\ & = \overline{ \alpha \langle v,u \rangle +
\beta\langle w,u\rangle }
\\ & = \overline\alpha  \langle v,u \rangle+ \overline \beta\langle w,u\rangle
\space \square
\end{align*}
   $$
   
   (b)
   
   - **Sesquilinear:** 
     
     - **(i)** 
       
       $$
       \begin{align*}
\langle \alpha \mathbf u + \beta \mathbf v, \mathbf w \rangle
& = \sum_{i=1}^n (\alpha \mathbf u + \beta \mathbf v)_i
\overline{\mathbf w_i}
\\ & = \sum_{i=1}^n ((\alpha \mathbf u)_i +
(\beta \mathbf v)_i )
\overline{\mathbf w_i}
\\ & = \sum_{i=1}^n(\alpha \mathbf u)_i \overline{\mathbf w_i} +
\sum_{i=1}^n(\beta \mathbf v)_i \overline{\mathbf w_i}
\\ & = \alpha \langle \mathbf u, \mathbf w\rangle +
\beta \langle \mathbf v, \mathbf w \rangle
\end{align*}
       $$
     
     - **(ii)** 
       
       $$
       \langle \mathbf u, \mathbf v \rangle
= \sum_{i=1}^n \mathbf u_i \overline{\mathbf v_i}
= \overline{ \sum_{i=1}^n \overline{\mathbf u_i} \mathbf v_i }
= \overline{\langle \mathbf v, \mathbf u \rangle}
       $$
   
   - **Positive Definite:** 
     
     $$
     \langle \mathbf v, \mathbf v \rangle 
= \sum_{i=1}^n \mathbf v_i \overline{\mathbf v_i}
= \sum_{i=1}^n ( (\operatorname{Re}\mathbf v_i)^2 +
(\operatorname{Im} \mathbf v_i)^2) \ge 0
     $$
     
     And this is equal to zero when all the real and imaginary parts are zero, which implies $\mathbf v = \mathbf 0$ . $\square$ 
   
   (c) As for the subspace part, $0 \in U^\perp$ . $\forall u \in U, w_1, w_2 \in U^\perp$ ,
   
   $$
   \langle w_1 + w_2, u \rangle = \langle w_1, u\rangle +
\langle w_2, u \rangle = 0
   $$
   
   $$
   \langle \lambda w_1, u \rangle = \lambda\langle w_1, u \rangle
= 0
   $$
   
   Therefore a subspace.
   
   As for the direct sum part, let $\{u_i \mid 1 \le i \le \dim U \}$ be a basis of $U$ and $T: V \to \R^{\dim U} = v \mapsto (\langle v, u_1\rangle, \cdots, \langle v, u_n \rangle)$ . Then by the same argument in 4 (c) $\operatorname{rank} T = \dim U$ .
   
   Also, $\ker T = U^\perp$ because obviously $\ker T \subseteq U^\perp$ , and if $v \in \ker T$ , $\forall u \in U$ , let $u = \sum_{i=1}^{\dim U} a_i u_i$ where $a_i \in \R$ , then
   
   $$
   \begin{align*}
\langle v,u \rangle &= \overline{\langle u, v \rangle}
\\ & = \overline{\left\langle \sum_{i=1}^{\dim U} a_i u_i,
v \right\rangle}
\\ & = \overline{\sum_{i=1}^{\dim U} 
a_i\langle u_i, v \rangle}
\\ & = 0
\end{align*}
   $$
   
   And $v \in U^\perp$ . Thus $U^\perp = \ker T$ and $\dim U^\perp = \operatorname{null}T = \dim V - \dim U$ .
   
   Because obviously $U \cap U^\perp = \{0\}$ , $\dim U \oplus U^\perp = \dim U + \dim U^\perp = \dim V$ and $U \oplus U^\perp = V$ . $\square$ 
