+++
# TOML Frontmatter
+++

# Geometry — Sheet 6

1. (i) 
   
   $$
   \begin{align*}
x^2 + y ^ 2 & = 
(\cos\theta + \lambda\sin\theta)^2 + (\sin\theta-\lambda\cos\theta)^2
\\ &=(\cos^2\theta+\sin^2\theta)(1+ \lambda^2)
\\ &= z^2 + 1
\end{align*}
   $$
   
   On the other hand, given $(x,y,z)$ , we have $\lambda = z$ and $\sin\theta=\frac{x\sqrt{x^2 + y^2} +y }{x^2 + y^2}$ , $\cos\theta=\frac{x-y\sqrt{x^2 + y^2} }{x^2 + y^2}$ . By calculation $\sin^2\theta + \cos^2\theta = 1$ so it is valid to take the inverse trigonometric and $\theta = \arcsin\frac{x\sqrt{x^2 + y^2} +y }{x^2 + y^2}$ . $\square$ 
   
   (ii)
   
   $$
   \begin{align*}
\mathbf r_\theta &= \frac{\partial \mathbf r}{\partial \theta}
\\ &= \frac{\partial}{\partial \theta}
(\cos\theta+\lambda\sin\theta, \sin\theta-\lambda\cos\theta, \lambda)
\\ &= (\lambda\cos\theta-\sin\theta,\lambda\sin\theta+\cos\theta,0)
\\
\mathbf r_\lambda &= \frac{\partial \mathbf r}{\partial \lambda}
\\ &= \frac{\partial}{\partial \lambda}
(\cos\theta+\lambda\sin\theta, \sin\theta-\lambda\cos\theta, \lambda)
\\ &= (\sin\theta,-\cos\theta,1)
\\
\mathbf r_\theta \wedge \mathbf r_\lambda
& = (\lambda\cos\theta-\sin\theta,\lambda\sin\theta+\cos\theta,0)
\wedge (\sin\theta,-\cos\theta,1)
\\ & = (\lambda\sin\theta + \cos\theta,
\sin\theta-\lambda\cos\theta,-\lambda)
\end{align*}
   $$
   
   (iii)
   
   $$
   \begin{align*}
\nabla f &=
(\frac{\partial f}{\partial x}, \frac{\partial f}{\partial y},
\frac{\partial f}{\partial z})
\\ &=(2x, 2y, -2z)
\\ &= 2(\cos\theta+\lambda\sin\theta, \sin\theta-\lambda\cos\theta,-\lambda)
\end{align*}
   $$
   
   (iv) The plane given by
   
   $$
   \mathbf r \cdot (\lambda\sin\theta + \cos\theta,
\sin\theta-\lambda\cos\theta,-\lambda) = 1
   $$

2. (i) Let $\mathbf a = (0,\frac{1}{\sqrt2},\frac{1}{\sqrt2})$ and $\mathbf b = (\frac12, 0,\frac{\sqrt3}2)$ . Then the angle between them is
   
   $$
   \cos\theta=\frac{\mathbf a \cdot \mathbf b}{\lVert \mathbf a \rVert
\lVert \mathbf b \rVert} = \frac{\sqrt3}{2\sqrt2}
   $$
   
   And the shortest distance is the arc length $\theta = \arccos\frac{\sqrt3}{2\sqrt2}$ .
   
   (ii) $\gamma'(t) = (-\dot\theta\sin\theta, \dot\theta\cos\theta, \dot z)$ , and the arc length is
   
   $$
   \begin{align*}
\int_a^b |\gamma'(t)| \mathrm dt
&= \int_a^b |(-\dot\theta\sin\theta, \dot\theta\cos\theta, \dot z)|
\mathrm dt
\\ &= \int_a^b \sqrt{(-\dot\theta\sin\theta)^2 +
(\dot\theta\cos\theta)^2 +{\dot z}^2 }\mathrm dt
\\ &=\int_a^b \sqrt{{\dot\theta}^2 + {\dot z}^2 } \mathrm d t
\end{align*}
   $$
   
   On $\R^2$ , the arc length for $t\in[a,b]$ is by definition
   
   $$
   \int_a^b |(\theta, z)'| \mathrm d t =\int_a^b \sqrt{{\dot\theta}^2 + {\dot z}^2 } \mathrm d t
   $$
   
   Therefore $(\theta,z) \to (\cos\theta,\sin\theta,z)$ preserves arc length and is an isometry. $\square$ 
   
   The shortest distance from $(1,0,0)$ to $(0,1,1)$ measured on the cylinder is equal to the corresponding shortest distance on $\R^2$ . Let $(\theta_1, z_1) = (0,0)$ , $(\theta_2,z_2) = (\frac\pi2, 1)$ , and the distance is equal to $\sqrt{ \frac{\pi^2}{4} +1 }$ .

3. Considering the arc length between $t\in[a,b]$ . On the cone, that is
   
   $$
   \begin{align*}
\int_a^b|\mathbf r'(h,\theta)| \mathrm d t
& = \int_a^b|(h \cos\theta, h\sin\theta,h)'| \mathrm d t
\\ &= \int_a^b |(\dot h\cos\theta-h\dot\theta\sin\theta,
h\dot\theta\cos\theta + \dot h \sin\theta, \dot h)|
\mathrm d t
\\ &=\int_a^b \sqrt{(\dot h\cos\theta-h\dot\theta\sin\theta)^2 +
(h\dot\theta\cos\theta + \dot h \sin\theta)^2+ {\dot h}^2}
\mathrm d t
\\ &=\int_a^b \sqrt{ h^2{\dot\theta}^2 + 2{\dot h}^2 }
\mathrm d t
\end{align*}
   $$
   
   While on the plane $(h,\theta) \in \R^2$ that is
   
   $$
   \int_a^b|(h,\theta)'| \mathrm d t
= \int_a^b \sqrt{ {\dot h}^2 + {\dot\theta}^2 } \mathrm d t
   $$
   
   Which are not equal and there are curves on the $h$ - $\theta$ plane that have their lengths changed when mapped to the cone.

4. (i) For a specific point on the torus, considering the circle containing it. Let $\phi$ be the position of the circle and $\mathbf v(\phi)$ be the vector pointing to the centre. Let $\theta$ be the latitude angle of that point in the range $[0, 2\pi)$ and $\mathbf w(\phi,\theta)$ be the vector pointing from the centre of the circle to the point. Then
   
   $$
   \begin{align*}
\mathbf r(\theta,\phi) &= \mathbf v(\phi) + \mathbf w(\phi,\theta)
\\ &= (b\cos\phi, b\sin\phi,0) +
(a \cos\theta \cos\phi, a\cos\theta\sin\phi, a \sin\theta)
\\ &= (
    (b + a\cos\theta)\cos\phi,
    (b + a \cos\theta)\sin\phi,
    a \sin\theta
) \space \square
\end{align*}
   $$
   
   (ii) Let $\theta$ be the angle of rotation and $\mathbf i(\theta)$ , $\mathbf j(\theta)$ be the image of $\hat i$ , $\hat j$ under the rotation.
   
   $$
   \begin{align*}
\mathbf r(\theta,s) &= x(s) \mathbf i(\theta) + y(s) \mathbf j(\theta)
\\ &=x(s) (\cos\theta, 0, \sin\theta) + y(s) \hat j
\end{align*}
   $$
   
   (iii) Obtain $x(s)$ and $y(s)$ in (ii) by using $(1,m)$ and $(-m, 1)$ as a new basis for the plane.

5. Let $\theta_0$ be the common elevation  Let $\gamma:[0,1] \to \R^3 = (t, \theta$

6. d
