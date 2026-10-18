+++
# TOML Frontmatter
+++

# Sheet 2

1. (i) $\mathbf r \wedge (0, 1, 2) = (1, -2, 1)$ .
   
   (ii) $\mathbf r \wedge (2, 3, 1) = (3, -3, 3)$ .
   
   (iii) $\mathbf r \wedge (0, -1, 1) = (-\frac 1 2, \frac 3 2, \frac 3 2)$ .

2. $$
   \mathbf a \wedge  \mathbf b = \begin{pmatrix}
a_2 b_3 - a_3 b_2 
\\ a_3 b_1 - a_1 b_3 \\
a_1 b_2 - a_2 b_1
\end{pmatrix}
= M \mathbf b \space \square
   $$
   
   $$
   \begin{align*}
M^3 \mathbf x &= \mathbf a \wedge
( \mathbf a \wedge (\mathbf a \wedge \mathbf x) )
\\ & = \mathbf a \wedge
( (\mathbf a\mathbf x)\mathbf a - (\mathbf a\mathbf a)\mathbf x )
\\ & = (\mathbf a \mathbf x) \mathbf a \wedge \mathbf a -
\mathbf a \wedge \lVert \mathbf a \rVert^2 \mathbf x
\\ & = -\lVert \mathbf a \rVert^2\ M\mathbf x
\space \forall \mathbf x \in \R^3
\end{align*}
   $$
   
   By function extensionality, $M^3 = -\lVert \mathbf a \rVert^2M$ . $\square$ 

3. (i) Obviously $A$ , $B$ , and $C$ are collinear if and only if $\mathbf 0$ , $\mathbf b - \mathbf a$ , and $\mathbf c - \mathbf a$ are collinear, by translation of the space by $-\mathbf a$ .
   
   Then
   
   $$
   \begin{align*}
& (\mathbf b - \mathbf a) \wedge (\mathbf c- \mathbf a) = 0
\\ \iff & \mathbf b \wedge \mathbf c -
\mathbf b \wedge \mathbf a -
\mathbf a \wedge \mathbf c +
\mathbf a \wedge \mathbf a = 0
\\ \iff & \mathbf b \wedge \mathbf c +
\mathbf a \wedge \mathbf b +
\mathbf c \wedge \mathbf a = 0 \space \square
\end{align*}
   $$
   
   (ii)
   
   $$
   \begin{align*}
& \mathbf r (\mathbf a \wedge \mathbf b + 
\mathbf b \wedge \mathbf c +
\mathbf c \wedge \mathbf a)
= [\mathbf a, \mathbf b, \mathbf c]
\\ \iff 
&
[\mathbf r, \mathbf a, \mathbf b] +
[\mathbf r, \mathbf b, \mathbf c] +
[\mathbf r, \mathbf c, \mathbf a] = [\mathbf a, \mathbf b, \mathbf c]
\end{align*}
   $$
   
   Obviously $\mathbf a$ , $\mathbf b$ , $\mathbf c$ satisfy the equation because the triple-product is non-zero only if the vectors are linearly independent, and the original equation is in a planar form. Since three non-collinear points determine a plane, $\mathbf r (\mathbf a \wedge \mathbf b + 
   \mathbf b \wedge \mathbf c +
   \mathbf c \wedge \mathbf a)
   = [\mathbf a, \mathbf b, \mathbf c]$ is the desired plane.
   
   Since colpanar $\iff$ $D$ being on the plane $ABC$ ,
   
   $$
   \begin{align*}
&\text{Coplanar}( \left\{ A, B, C, D \right\} )
\\ \iff & 
[\mathbf d, \mathbf a, \mathbf b] +
[\mathbf d, \mathbf b, \mathbf c] +
[\mathbf d, \mathbf c, \mathbf a]
= [\mathbf a, \mathbf b, \mathbf c]
\\ \iff & 
[\mathbf a, \mathbf b, \mathbf c] -
[\mathbf b, \mathbf c, \mathbf d] + 
[\mathbf c, \mathbf d, \mathbf a] - 
[\mathbf d, \mathbf a, \mathbf b] = 0
\space \square
\end{align*}
   $$

4. (i) 

5. a
