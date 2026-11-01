+++
# TOML Frontmatter
+++

# Geometry — Sheet 7

1. $\mathbf r_u = (x_u, y_u, 0)$ , $\mathbf r_v = (x_v, y_v, 0)$ , and $\mathbf r_u \wedge \mathbf r_v = (0,0,x_uy_v - x_v y_u)$ .
   
   $$
   \begin{align*}
\iint_U \left| \frac{\partial(x,y)}{\partial(u,v)} \right|
\mathrm du \mathrm dv
&= \iint_U \begin{vmatrix}
x_u & x_v
\\ y_u & y_v
\end{vmatrix} \mathrm du \mathrm dv
\\ &= \iint_U (x_uy_v - x_vy_u) \mathrm du \mathrm dv
\\ &= \iint_U |(0,0,x_uy_v - x_v y_u)| \mathrm du \mathrm dv
\\ &= \iint_U |\mathbf r_u \wedge \mathrm r_v | \mathrm du \mathrm dv
\space \square
\end{align*}
   $$

2. For a surface of revolution, the area is
   
   $$
   \begin{align*}
2\pi \int_a^b y \sqrt{1 + {y'}^2 } \mathrm dx
& = 2\pi\int_a^b \cosh x \sqrt{1 + \sinh^2 x } \mathrm dx
\\ &= 2\pi\int_a^b \cosh^2 x \mathrm dx
\\ &= 2\pi\int_a^b \frac12 (\cosh(2x) + 1 ) \mathrm dx
\\ &= \pi \left( \frac12 \sinh(2x) + x \right) \big|_a^b
\end{align*}
   $$

3. (i) $\mathbf r_\theta = (\cos\theta\cos\phi,\cos\theta\sin\phi,-\sin\theta)$ , $\mathbf r_\phi = (-\sin\theta\sin\phi,\sin\theta\cos\phi,0)$ , and $\mathbf r_\theta \wedge \mathbf r_\phi = (\sin^2\theta\cos\phi,\sin^2\theta\sin\phi,\cos\theta\sin\theta)$ .
   
   $$
   \begin{align*}
S_\alpha &= \int_0^{2\pi} \int_0^\alpha |\mathbf r_\theta \wedge \mathbf r_\phi|
\mathrm d\theta \mathrm d\phi
\\ &=\int_0^{2\pi} \int_0^\alpha \sin\theta
\mathrm d\theta \mathrm d\phi
\\ &=\int_0^{2\pi}(1-\cos\alpha) \mathrm d\phi
\\ &= 2\pi(1 - \cos\alpha) \space \square
\end{align*}
   $$
   
   (ii) The surface is the graph of $z$ within $D= \{ (x,y) \in\R^2 \mid \sqrt{x^2 + y^2} \le \sin\alpha\}$ . Then the surface of the graph is
   
   $$
   \begin{align*}
\iint_D \sqrt{1  + {z_x^2} + {z_y}^2  } \mathrm dx \mathrm dy
&= \iint_D
\sqrt{
    1 + \frac{x^2}{1-x^2-y^2} +
\frac{y^2}{1-x^2-y^2}
}
\mathrm dx \mathrm dy
\\ &= \iint_D \frac{1}{ \sqrt{1-x^2-y^2} } \mathrm dx \mathrm dy
\\ &= \int_0^{2\pi}\int_{0}^{\sin\alpha} 
\frac{r}{\sqrt{1-r^2} } \mathrm dr \mathrm d\theta
\\ &= \int_0^{2\pi} (1 - \cos\alpha)\mathrm d\theta
\\ &= 2\pi(1 - \cos\alpha) \space \square
\end{align*}
   $$

4. The image of a latitude is
   
   $$
   \begin{cases}
x = \lambda \sin(n\phi)
\\
y = \rho_0 - \lambda\cos(n\phi)
\end{cases}
   $$
   
   For some constant $\lambda$ , which is a circle ( can be translated to $x = \lambda\sin(n\phi)$ , $y= -\lambda\cos(n\phi)$ ).
   
   The image of a meridian is
   
   $$
   \begin{cases}
x = \lambda_1 f(\cos\theta)\\
y = \rho_0 - \lambda_2 f(\cos\theta)
\end{cases}
   $$
   
   For some constant $\lambda_1$ , $\lambda_2$ , and function $f$ , which is a straight line because $\lambda_2 x + \lambda_1 y$ is constant.
   
   $$
   \begin{align*}
\left| \frac{\partial(x,y)}{\partial(\phi,\theta)} \right|
& = \begin{vmatrix} x_\phi & x_\theta \\ y_\phi & y_\theta\end{vmatrix}
\\ &=\begin{vmatrix}
\cos(n\phi) \sqrt{C-2 n \cos\theta} 
& \frac{\sin(n\phi) \sin\theta}{\sqrt{C-2 n \cos\theta}}\\
\sin(n\phi)\sqrt{C-2 n \cos\theta} 
& - \frac{\cos(n\phi) \sin\theta}{\sqrt{C-2 n \cos\theta}}
\end{vmatrix}
\\ &=-\sin\theta
\end{align*}
   $$
   
   But $|\mathbf r_\theta \wedge \mathbf r_\phi|$ is also $|\sin \theta|$ on the sphere. Then for an area $(\theta,\phi) \in S \subseteq \R^2$ on the sphere is
   
   $$
   \iint_S |\mathbf r_\theta \wedge \mathbf r_\phi|
\mathrm d\phi
\mathrm d\theta
= \iint_S \pm 
\left| \frac{\partial(x,y)}{\partial(\phi,\theta)} \right|
\mathrm d\phi
\mathrm d\theta
= \iint_{ \{(x,y) \mid (\theta,\phi) \in S\} } \mathrm dx \mathrm dy
   $$
   
   Which is the projected area.

5. (i)
   
   $$
   \gamma_t = \gamma_uu_t + \gamma_vv_t
= \mathbf r_u u_t + \mathbf r_v v_t
   $$
   
   $$
   \begin{align*}
|\gamma_t|^2 &= |\mathbf r_u u_t + \mathbf r_v v_t|^2
\\ &= (\mathbf r_u u_t + \mathbf r_v v_t) \cdot (\mathbf r_u u_t + \mathbf r_v v_t)
\\ &= {u_t}^2 \mathbf r_u \cdot \mathbf r_u  + 
2 u_t v_t \mathbf r_u \cdot r_v + {v_t}^2 \mathbf r_v \cdot \mathbf r_v
\end{align*}
   $$
   
   $$
   \begin{align*}
|\mathbf r_u \wedge \mathbf r_v |^2 
& = (\mathbf r_u \wedge \mathbf r_v) \cdot (\mathbf r_u \wedge \mathbf r_v)
\\ &= (\mathbf r_u \cdot \mathbf r_u)
(\mathbf r_v \cdot \mathbf r_v) -
(\mathbf r_u \cdot \mathbf r_v)(\mathbf r_u \cdot \mathbf r_v)
\space \square
\end{align*}
   $$
   
   (ii)
   
   d

6. d
