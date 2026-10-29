+++
# TOML Frontmatter
completed = 2026-10-29
+++

# Geometry — Sheet 5

1. $\operatorname{null}(A - \mathrm I_3) = 2$ and $\operatorname{null}(B - \mathrm I_3 ) = 1$ .
   
   $A$ is a reflection and $B$ is a rotation. For $A$ the plane of reflection is $\ker(A - \mathrm I_3) = \{(x,y,z) \in \R^3 \mid 2y=x + z \}$ . For $B$ the axis of reflection is $\ker(B - \mathrm I_3) = \{ \lambda (1, \sqrt2-1,3-2\sqrt2 ) \in \R^3 \mid \lambda \in \R \}$ . Then angle of the rotation $1 + 2\cos\theta = \operatorname{tr}B=-\frac12$ and $\theta=\arccos-\frac34$ .

2. (i)
   
   $$
   BB^\mathrm T = 
\begin{pmatrix}\frac{3}{5} & 0 & \frac{4}{5}
\\-\frac{16}{25}  & \frac{3}{5} & \frac{12}{25}\\
\frac{12}{25} & \frac{4}{5} & -\frac{9}{25}
\end{pmatrix}
\begin{pmatrix}\frac{3}{5} & - \frac{16}{25} & \frac{12}{25}\\
0 & \frac{3}{5} & \frac{4}{5}\\
\frac{4}{5} & \frac{12}{25} & -\frac{9}{25}
\end{pmatrix}
= \mathrm I_3
   $$
   
   And $\det B = -1$ by calculation. $B$ is not a reflection because $\operatorname{null}(B-\mathrm I_3) = 0$ and there is no nontrivial point fixed by $B$ . $\square$ 
   
   (ii)
   
   $$
   \operatorname{tr}(A_\theta B) = \frac35 + \frac{6}{25}\cos\theta -
\frac{8}{25}\sin\theta
   $$
   
   For $A_\theta B$ to be a reflection, $\operatorname{tr}(A_\theta B) = 1$ and $4\sin\theta=3\cos\theta-5$ . Then $\frac35\cos\theta - \frac45\sin\theta = 1$ and $\sin(\alpha-\theta) = 1$ where $\alpha=\arcsin\frac35$ . Thus $\theta=\arcsin\frac35 - \frac\pi2$ . And
   
   $$
   A_\theta B =
\begin{pmatrix}\frac{3}{5} & 0 & \frac{4}{5}\\
0 & 1 & 0\\
\frac{4}{5} & 0 & -\frac{3}{5}
\end{pmatrix}
   $$
   
   The plane of reflection is $\ker(A_\theta B - \mathrm I_3) = \{(x,y,z) \in \R^3 \mid x-2z=0\}$ .

3. Because $R(\hat i, -\alpha)B\hat i = R(\hat j,\beta)R(\hat i, \gamma)\hat i$ is a linear combination of $\hat i$ and $\hat k$ , and
   
   $$
   \begin{align*}
R(\hat i, -\alpha) B\hat i
&= \begin{pmatrix}
1 & 0 & 0
\\ 0 & \cos\alpha & \sin\alpha
\\ 0 & -\sin\alpha & \cos\alpha
\end{pmatrix}
\begin{pmatrix}
\frac{1}{\sqrt{2}} & \frac{1}{\sqrt{2}} & 0\\
\frac{1}{2} & -\frac{1}{2} & \frac{1}{\sqrt{2}}\\
\frac{1}{2} & - \frac{1}{2} &-\frac{1}{\sqrt{2}}
\end{pmatrix}
\begin{pmatrix}
1 \\ 0 \\ 0
\end{pmatrix}
\\ &=
\begin{pmatrix}
\frac{1}{\sqrt{2}}\\
\frac{\sin\alpha}{2} + \frac{\cos\alpha}{2}\\
\frac{\cos\alpha}{2}-\frac{\sin\alpha}{2}
\end{pmatrix}
\end{align*}
   $$
   
   We have $\frac{\cos\alpha}{2}+\frac{\sin\alpha}{2} = 0$ and $\tan\alpha = -1$ . Therefore $\alpha = -\frac\pi4$ .
   
   Because $R(\hat i, -\alpha)B R(\hat i, -\gamma) = R(\hat j, \beta)$ , we have
   
   $$
   \begin{pmatrix}
\frac{1}{\sqrt{2}} & \frac{\cos\gamma}{\sqrt{2}} & \frac{\sin\gamma}{\sqrt{2}}\\
0 & -\sin\gamma & \cos\gamma\\
\frac{1}{\sqrt{2}} & - \frac{\cos\gamma}{\sqrt{2}}& -\frac{\sin\gamma}{\sqrt{2}}
\end{pmatrix}
=
\begin{pmatrix}
\cos\beta & 0 & -\sin\beta\\
0 & 1 & 0\\
\sin\beta & 0 & \cos\beta
\end{pmatrix}
   $$
   
   Therefore $\gamma = -\frac\pi2$ and $\beta = \frac\pi4$ .

4. Let $s = \sin t$ , $c = \cos t$ , and
   
   $$
   \begin{align*}
M =& A'(t) A(t)^\mathrm T
\\ =&
\begin{pmatrix} -5 s & 3 c -4 s& 2 s + 6 c
\\- 4s-3 c& -5 s  & 6c-2 s
\\2 s-6 c &-2 s -6 c& - 8 s
\end{pmatrix}
\\&
\begin{pmatrix}
5c+4 & 3 s+4 c-4 & 6 s-2 c+2
\\- 3 s+4 c-4 & 5 c+4 & 6 s+2 c-2
\\- 6 s-2 c+2 & -6 s+2 c-2 & 8 c+1
\end{pmatrix}^\mathrm T
\\ =&
\begin{pmatrix}
0 & 27 & 54
\\-27 & 0 & 54
\\-54 & -54 & 0
\end{pmatrix}
\end{align*}
   $$
   
   Then the angular velocity $\omega = M^\vee = (-54, 54, -27)$ .

5. (i)
   
   $$
   \begin{align*}
\lVert \mathbf e_r \rVert &= 
\sqrt{\sin^2\theta\cos^2 \phi + \sin^2\theta\sin^2\phi + \cos^2\theta}
\\ &= \sqrt{ \sin^2\theta(\sin^2\phi + \cos^2\phi) + \cos^2\phi }
\\ &=1
\end{align*}
   $$
   
   $$
   \dot{\mathbf e_r} =
\begin{pmatrix}
\cos\theta\dot\theta\cos\phi - \sin\theta\sin\phi\dot\phi
\\ \cos\theta\dot\theta\sin\phi + \sin\theta\cos\phi\dot\phi
\\ -\sin\theta\dot\theta
\end{pmatrix}
= \dot\theta \mathbf e_\theta + \dot \phi\sin\theta\mathbf e_\phi
   $$
   
   Where $\mathbf e_\theta = (\cos\theta\cos\phi, \cos\theta\sin\phi, -\sin\theta)$ and $\mathbf e_\phi = (-\sin\phi, \cos\phi, 0)$ .
   
   $$
   \dot{\mathbf e_\theta} = -\dot\theta\mathbf e_r +
\dot\phi\cos\theta\mathbf e_\phi
\\
\dot{\mathbf e_\phi}= -{\dot\phi}(\sin\theta\mathbf e_r + \cos\theta\mathbf e_\theta)
   $$
   
   (ii)
   
   $$
   \lVert \mathbf e_r\rVert = \lVert \mathbf e_\theta \rVert
= \lVert \mathbf e_\phi\rVert = 1
\\
\mathbf e_r \cdot \mathbf e_\theta
= \cos^2\phi\cos\theta\sin\theta+\sin^2\phi\cos\theta\sin\theta -
\cos\theta\sin\theta
= 0
\\
\mathbf e_r \wedge \mathbf e_\theta = 
\begin{pmatrix} -\sin\phi\sin^2\theta - \sin\phi\cos^2\theta
\\\cos\phi\sin^2\theta +\cos\phi\cos^2\theta
\\ 0
\end{pmatrix}
= \mathbf e_\phi
\space\square
   $$
   
   (iii) $\omega = (-\dot\theta\sin\phi,\dot\theta\cos\phi, \dot\phi)$ .
