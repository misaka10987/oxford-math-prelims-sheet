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

3. (i) 
