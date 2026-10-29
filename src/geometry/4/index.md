+++
# TOML Frontmatter
+++

# Geometry — Sheet 4

1. (i) Because the column vectors must have unit length, $c=e=b=f=0$ . Then $a=d=0$ because otherwise the column vectors will not be orthogonal, but then the second column vector does not have unit length.
   
   (ii) Because a reflection's inverse is itself, $A^T = A^{-1} = A$ and $A$ is symmetric. The converse is not true considering $\mathrm I$ .
   
   (iii) Since $P^\mathrm T = P^{-1}$ , let $A = P D P^{-1}$ where $D$ is diagonal. Then
   
   $$
   A^\mathrm T = (PDP^{-1})^\mathrm T
= {P^{-1} }^\mathrm T D^\mathrm T P^\mathrm T
= PDP^{-1} = A \space \square
   $$

2. (i)
   
   $$
   A^\mathrm T A =
\begin{pmatrix}
\frac{1}{3} & \frac{2}{3} & \frac{2}{3}\\
0 & \frac{1}{\sqrt{2}} & -\frac{1}{\sqrt{2}}
\end{pmatrix}
\begin{pmatrix}\frac{1}{3} & 0\\
\frac{2}{3} & \frac{1}{\sqrt{2}}\\
\frac{2}{3} & -\frac{1}{\sqrt{2}}
\end{pmatrix}
= \begin{pmatrix} 1 & 0 \\ 0 & 1 \end{pmatrix}
   $$
   
   A is an isometry because
   
   $$
   A = \begin{pmatrix}\frac{1}{3} & 0 & 0\\
\frac{2}{3} & \frac{1}{\sqrt{2}} & 0\\
\frac{2}{3} & -\frac{1}{\sqrt{2}} & 1
\end{pmatrix}
\begin{pmatrix}
1 & 0 \\
0 & 1 \\
0 & 0
\end{pmatrix}
   $$
   
   Where $\begin{pmatrix}\frac{1}{3} & 0 & 0\\
   \frac{2}{3} & \frac{1}{\sqrt{2}} & 0\\
   \frac{2}{3} & -\frac{1}{\sqrt{2}} & 1
   \end{pmatrix}$ is orthogonal and $\begin{pmatrix}
   1 & 0 \\
   0 & 1 \\
   0 & 0
   \end{pmatrix}$ is obviously an isometry. Therefore $T$ is an isometry. $\square$ 
   
   The image of $T$ is $(1,1,1) + \langle (\frac13, \frac23, \frac23), (0, \frac1{\sqrt2}, -\frac1{\sqrt2})\rangle$ .
   
   (ii) Let $T: \R^3 \to \R^2$ be a linear map. Obviously $\operatorname{null} T \ge 1$ . Then the distance between every two distinct vectors in $\ker T$ is not preserved. $\square$ 

3. Let $\mathbf v = X\mathbf e_1 + Y \mathbf e_2 + Z \mathbf e_3 = x \hat i + y \hat j + z \hat k$ and $\mathbf u = \tilde X \mathbf e_1 + \tilde Y\mathbf e_2 + \tilde Z \mathbf e_3 = \tilde x \hat i + \tilde y \hat j + \tilde z \hat k$ . Then
   
   $$
   X\tilde X + Y\tilde Y + Z \tilde Z = \mathbf v \cdot \mathbf u
= x\tilde x + y\tilde y + z \tilde z
   $$
   
   $$
   \begin{align*}
&(Y\tilde Z - Z\tilde Y)\mathbf e_1 +
(Z\tilde Z - Z\tilde Z)\mathbf e_2 +
(Z\tilde Y - Y\tilde X) \mathbf e_3
\\ &= \mathbf v \wedge \mathbf u
\\ &= (y\tilde z - z\tilde y)\hat i + (z\tilde x - x\tilde z)\hat j +
(x\tilde y-y\tilde x)\hat k \space \square
\end{align*}
   $$
   
   That the coordinate-wise definition of inner product and wedge product does not depend on choice of basis.

4. That $\{\mathbf u, \mathbf v, \mathbf w\}$ spans $\R^3$ and there is no smaller set of vectors that spans $\R^3$ .
   
   (i) Let $B=\begin{pmatrix} \mathbf u & \mathbf v & \mathbf w \end{pmatrix}$ and
   
   $$
   \begin{pmatrix} y_1\\y_2 \\y_3 \end{pmatrix}
= B
\begin{pmatrix} x_1\\x_2 \\x_3 \end{pmatrix}
   $$
   
   Then $\lVert \mathbf x \rVert =\sqrt{ {y_1}^2 + {y_2}^2 + {y_3}^2 }$ . To directly use $\sqrt{ {x_1}^2 + {x_2}^2 + {x_3}^2 }$ then $B$ must be orthogonal. ${y_1}^2 + {y_2}^2 + {y_3}^2=1$ (where the $y$ s are functions of $x$ s) is the equation of unit sphere under the new coordinate system.
   
   (ii) Let $B_1 = \begin{pmatrix} \mathbf u & \mathbf v & \mathbf w \end{pmatrix}$ . Then because the equation of unit sphere is $x^2 + y^2 + z^2 =1$ , for point $\mathbf x$ on the unit sphere,
   
   $$
   (B_1 \mathbf x)^\mathrm T(B_1 \mathbf x) = 1
\\ \mathbf x^\mathrm T B_1^\mathrm TB_1\mathbf x = 1
\\ \mathbf x^\mathrm T \mathbf x = 1
   $$
   
   Which corresponds to ${x_1}^2 + {x_2}^2 + {x_3}^2 = 1$ . The similar argument holds for $\mathbf X$ and the equation of unit sphere under an orthonormal basis is always $x^2 + y^2 + z^2 =1$ . $\square$ 

5. (i) $S_1$ is identity. $S_0$ projects every vector along the direction of $\mathbf n$ onto the plane $\mathbf r \cdot \mathbf n = c$ . $S_{-1}$ is reflection across the plane.
   
   (ii) Note that $S_k$ is not independent of the choice of $\mathbf n$ .
   
   $$
   \frac{\lVert \mathbf n \rVert^2}{3} \begin{pmatrix} k & k-1 & k-1
\\ k-1 & k & k-1
\\ k-1 & k-1 & k \end{pmatrix}
   $$
   
   (iii) Let $\mathbf e_1 = (-\frac{1}{\sqrt 2}, \frac{1}{\sqrt 2}, 0)$ , $\mathbf e_2 = (\frac{1}{\sqrt 6}, \frac{1}{\sqrt 6}, -\frac{2}{\sqrt 6})$ , $\mathbf e_3 = -\frac{\sqrt2}{\sqrt6}(1,1,1)$ .
   
   $$
   S_k = \begin{pmatrix}
1 & 0 & 0\\
0 & 1 & 0\\
0 & 0 & k
\end{pmatrix}
   $$
