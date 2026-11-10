+++
# TOML Frontmatter
+++

# Groups and Group Actions — Sheet 1

1. | Item  | Associative | Commutative | Exist Identity | Exist Inverse |
   | ----- | ----------- | ----------- | -------------- | ------------- |
   | (i)   | Yes         | Yes         | Yes            | No            |
   | (ii)  | Yes         | Yes         | Yes            | Yes           |
   | (iii) | No          | Yes         | Yes            | No            |
   | (iv)  | Yes         | No          | Yes            | No            |

2. | $e$ | $a$ | $b$ | $c$ | $d$ |
   | --- | --- | --- | --- | --- |
   | $a$ | $b$ | $c$ | $d$ | $e$ |
   | $b$ | $c$ | $d$ | $e$ | $a$ |
   | $c$ | $d$ | $e$ | $a$ | $b$ |
   | $d$ | $e$ | $a$ | $b$ | $c$ |
   
   This is the cyclic group $\Z_5$ .
   
   | $e$ | $a$ | $b$ | $c$ | $d$ |
   | --- | --- | --- | --- | --- |
   | $a$ | $e$ | $d$ | $b$ | $c$ |
   | $b$ | $d$ | $c$ | $e$ | $a$ |
   | $c$ | $b$ | $a$ | $d$ | $e$ |
   | $d$ | $c$ | $e$ | $a$ | $b$ |
   
   This is not a group because $aa= e$ but the only $5$ -order group $\Z_5$ does not have an element of order $2$ .

3. By definition,
   
   $$
   \begin{align*}
( {\overline{A+B}})_{i,j} &= \overline{(A+B)_{i,j} }
\\ &= \overline{A_{i,j} + B_{i,j} }
\\ &= \overline{A_{i,j} } + \overline{B_{i,j} }
\\ &= (\overline{A})_{i,j} + (\overline{B})_{i,j}
\\ &= (\overline A + \overline B) _{i,j}
\end{align*}
   $$
   
   Let $A_{i,-}$ and $A_{-,i}$ denote the row and column vectors.
   
   $$
   \begin{align*}
(\overline{AB})_{i,j} &= \overline{(AB)_{i,j} }
\\ &=\overline{A_{i,-} \cdot B_{-,j} }
\\ &=\overline{ \sum_{k=1}^n A_{i,k} B_{k,j} }
\\ &= \sum_{k=1}^n \overline{A_{i,k}} \times \overline{B_{k,j}}
\\ &= (\overline A)_{i,-} \cdot (\overline B)_{-,j}
\\ &= (\overline A \overline B)_{i,j}
\end{align*}
   $$
   
   $\mathrm U(n)$ is a group because matrix multiplication is associative, $\mathrm I_{n}$ is unitary,
   
   - The inverse of a unitary matrix is also unitary because $(A^{-1})^{-1} = (\overline A^\mathrm T)^{-1} = (\overline A^{-1})^\mathrm T = \overline{A^{-1} }^\mathrm T$ ; and
   
   - The product of unitary matrices is unitary because $(AB)^{-1} = B^{-1}A^{-1} = \overline B^\mathrm T \overline A^\mathrm T = \overline{AB}^\mathrm T$ .
   
   $\mathrm U(1)$ is Abelian because multiplication of complex number is commutative.
   
   Let $A = \begin{pmatrix}-1 & 0\\0 & 1\end{pmatrix}$ and $B = \begin{pmatrix} \frac12 & \frac{\sqrt3}2 \\ -\frac{\sqrt3}2 & \frac12 \end{pmatrix}$ , then $AB \ne BA$ and $\mathrm U(2)$ is not Abelian.
   
   For $n \ge 3$ , let $C = \begin{pmatrix} A & 0 \\ 0 & \mathrm I_{n-2} \end{pmatrix}$ and $D = \begin{pmatrix} B & 0 \\ 0 & \mathrm I_{n-2} \end{pmatrix}$ , then $CD \ne DC$ and $\mathrm U(n)$ is not Abelian. $\square$ 

4. Let $g_1 = \mathbf x \mapsto A_1 \mathbf x + \mathbf b_1$ , $g_2 = \mathbf x \mapsto A_2 \mathbf x + \mathbf b_2$ , then
   
   $$
   g_2 \circ g_1 =
\mathbf x \mapsto A_2 (A_1 \mathbf x + \mathbf b_1) + \mathbf b_2
= \mathbf x \mapsto (A_2A_1) \mathbf x + (A_2\mathbf b_1 + \mathbf b_2)
   $$
   
   is also an affine transformation.
   
   $\mathrm{AGL}(2, \R)$ is a group because function composition is associative, $\mathbf x \mapsto A \mathbf x + \mathbf b$ has an inverse $\mathbf y \mapsto A^{-1}\mathbf y - A^{-1}\mathbf b$ , the identity being the identity map. $\square$ 

5. (i)
   
   | Element | Inverse |
   | ------- | ------- |
   | $e$     | $e$     |
   | $a$     | $a$     |
   | $b$     | $g$     |
   | $c$     | $c$     |
   | $d$     | $d$     |
   | $f$     | $f$     |
   | $g$     | $b$     |
   | $h$     | $h$     |
   
   (ii) $d$ .
   
   (iii) $e$ has order $1$ , $a$ , $c$ , $d$ , $f$ , and $h$ have order $2$ , $b$ and $g$ have order $4$ .
   
   (iv) By calculation,
   
   $$
   b^2 = d
\\ b^3 = g
\\ ba = h
\\ b^2 a = f
\\ b^3 a = c
   $$
   
   Therefore $\{e,b,b^2, b^3, a, ba, b^2a, b^3a\} = \{e,a,b,c,d,f,g,h\} = G$ , and $ab = c = b^3 a$ . $\square$ 
   
   (v) $\langle e \rangle$ has order $1$ , $\langle a\rangle$ , $\langle c \rangle$ , $\langle d \rangle$ , $\langle f \rangle$ , and $\langle h \rangle$ have order $2$ , $\langle b \rangle$ , $\langle g \rangle$ , and $\langle d, a \rangle$ have order $4$ , and $G$ has order $8$ .

6. (i) The backward direction of the proof is obvious. If $(g_1, h_1), (g_2, h_2) \in G \times H$ do not commute, then $(g_1g_2, h_1h_2) \ne (g_2 g_1, h_2 h_1)$ , and either $g_1$ , $g_2$ or $h_1$ , $h_2$ do not commute, so either $G$ or $H$ is not Abelian. $\square$ 
   
   (ii)
   
   $$
   \phi(1) = (1,1)
   $$
   
   $$
   \begin{align*}
\phi(zw) &= \left(|zw|, \frac{zw}{|zw|}\right)
\\ &= (|z| \times |w|, \frac{z}{|z|} \times \frac{w}{|w|})
\\ &= (|z|, \frac{z}{|z|}) \times ((|w|, \frac{w}{|w|}) )
\\ &=\phi(z) \phi(w)
\end{align*}
   $$
   
   Therefore $\phi$ is a homomorphism. Also $\phi$ is invertible by $(r, a) \mapsto ra$ . $\square$ 
   
   (iii) Let $\phi: \mathrm S^1 \to \mathrm{SO}(2) = z \mapsto \begin{pmatrix} \cos \arg z & -\sin \arg z \\ \sin\arg z & \cos \arg z \end{pmatrix}$ . Then $\phi$ is an homomorphism:
   
   $$
   \phi(1) = \mathrm I_2
   $$
   
   $$
   \begin{align*}
\phi(\mathrm e^{\mathrm i\theta})
\phi(\mathrm e^{\mathrm i\gamma})
& = \begin{pmatrix}
\cos\theta & -\sin\theta
\\ \sin\theta & \cos\theta
\end{pmatrix}
\begin{pmatrix}
\cos\gamma & -\sin\gamma
\\ \sin\gamma & \cos\gamma
\end{pmatrix}
\\ &= 
\begin{pmatrix}
\cos(\theta + \gamma) & -\sin(\theta +  \gamma)
\\ \sin(\theta + \gamma) & \cos(\theta + \gamma)
\end{pmatrix}
\\ &= \phi(\mathrm e^{\mathrm i\theta}\mathrm e^{\mathrm i\gamma})
\end{align*}
   $$
   
   And invertible by $\begin{pmatrix}\cos\theta & -\sin\theta \\ \sin\theta & \cos\theta\end{pmatrix} \mapsto \mathrm e^{\mathrm i \theta}$ , therefore an isomorphism and $\mathrm S^1 \cong \mathrm{SO}(2)$ .
   
   $\mathrm S^1 \times \{\pm1\} \ncong \mathrm O(2)$ because the former has only finitely many elements of order $2$ but the latter has infinitely many reflections. $\square$ 
