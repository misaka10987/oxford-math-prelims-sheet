+++
# TOML Frontmatter
completed = 2026-10-25
+++

# Geometry — Sheet 2

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

4. (i) Using $\mathbf u$ , $\mathbf v$ , and $\mathbf w$ as row vectors,
   
   $$
   \begin{align*}
[A\mathbf u, A \mathbf v, A \mathbf w]
& = \begin{vmatrix}
A \mathbf u
\\ A \mathbf v\\
A \mathbf w
\end{vmatrix}
\\ & = \left|
A\begin{pmatrix}\mathbf u \\ 0 \\ 0\end{pmatrix} +
A\begin{pmatrix}0 \\ \mathbf v \\ 0\end{pmatrix} +
A\begin{pmatrix}0 \\ 0 \\ \mathbf w\end{pmatrix}
\right|
\\ & = \left|
A\begin{pmatrix}\mathbf u \\ \mathbf v \\ \mathbf w\end{pmatrix}
\right|
\\ & = |A| \times \begin{vmatrix}
\mathbf u \\ \mathbf v \\ \mathbf w
\end{vmatrix}
\\ & = |A| \times [\mathbf u, \mathbf v, \mathbf w]
\space \square
\end{align*}
   $$
   
   (ii) Obviously the three edges on the side are $\mathbf r = a\hat k$ , $\mathbf r = \hat i + b(\hat k - \hat i)$ , and $\mathbf r = \hat j + c(\hat k-\hat j)$ . Therefore by calculation the three vertices of the triangular intersection are $(0,0,c)$ , $(0,1-c, c)$ and $(1-c, 0,c)$ . Then the area is
   
   $$
   \frac 1 2 \lVert ( (0,1-c,c) - (0,0,c) )
\wedge ( (1-c,0,c) - (0,0,c) )
= \frac{ (1-c)^2 }{2}
   $$
   
   Therefore,
   
   $$
   V = \int_0^1 A \mathrm d z
= \int_0^1 \frac{1-z^2}{2} \mathrm d z = \frac 1 3
   $$
   
   (iii) The tetrahedron is $\frac 1 3$ the volume of the prism between $(0, \mathbf u, \mathbf v)$ and $(\mathbf w, \mathbf u + \mathbf w, \mathbf v+ \mathbf w)$ , which is half the volume of the parallelepiped $(\mathbf 0, \mathbf u, \mathbf v, \mathbf w, \mathbf u + \mathbf v , \mathbf v + \mathbf w, \mathbf u + \mathbf w, \mathbf u + \mathbf v + \mathbf w)$ , which has volume $|[\mathbf u, \mathbf v, \mathbf w]|$ . $\square$ 

5. (i) Let $a = \lVert \mathbf a \rVert$ , $b = \lVert \mathbf b \rVert$ , and $\theta$ be the angle between $\mathbf a$ and $\mathbf b$ . Obviously $ab\theta \ne 0$ . Then
   
   $$
   \begin{align*}
\lVert \mathbf a\rVert^2 \lVert \mathbf b \rVert^2 -
(\mathbf a \cdot \mathbf b)^2
&= a^2b^2-(ab\cos\theta)^2
\\ & = a^2b^2 (1-\cos^2\theta)
\\ & = a^2b^2 \sin^2 \theta
\\ & = (ab\sin\theta)^2
\\ & = \lVert \mathbf a \wedge \mathbf b \rVert^2
\end{align*}
   $$
   
   And $\lVert \mathbf a \wedge \mathbf b \rVert \ne 0$ because $\mathbf a$ and $\mathbf b$ are not parallel. $\square$ 
   
   (ii) $\forall \mathbf r \in \R^3$ , there is a unique decomposition $\mathbf r = a \mathbf a + b \mathbf b + c \mathbf a \wedge \mathbf b$ . Then
   
   $$
   \begin{align*}
\mathbf r \cdot \mathbf a & = 
(a \mathbf a + b \mathbf b + c \mathbf a \wedge \mathbf b)
\cdot \mathbf a
\\ & = a\lVert \mathbf a \rVert + b \mathbf a \cdot \mathbf b
\end{align*}
   $$
   
   And
   
   $$
   \begin{align*}
\mathbf r \cdot \mathbf b & = 
(a \mathbf a + b \mathbf b + c \mathbf a \wedge \mathbf b)
\cdot \mathbf b
\\ & = a  \mathbf a \cdot \mathbf b + b\lVert \mathbf b \rVert
\end{align*}
   $$
   
   Therefore, we have the intersection
   
   $$
   \begin{cases}
a\lVert \mathbf a \rVert + b \mathbf a \cdot \mathbf b = \alpha\\
a  \mathbf a \cdot \mathbf b + b\lVert \mathbf b \rVert = \beta
\end{cases}
   $$
   
   And $(a,b)$ has a unique solution. Therefore the line of intersection has an equation $\mathbf r = \mathbf v + c\mathbf a \wedge \mathbf b$ and thus parallel to $\mathbf a \wedge \mathbf b$ .
   
   (iii) $\mathbf c \cdot (\mathbf a \wedge \mathbf b) \ne 0$ .
