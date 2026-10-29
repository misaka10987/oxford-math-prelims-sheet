+++
# TOML Frontmatter
+++

# Geometry — Sheet 3

1. (i) $\frac{x^2}{5} + y^2 = 1$ .
   
   (ii) $4x^2 - y^2 = 20$ .
   
   (iii) $(\frac x 5)^2 + (\frac y 4)^2 = 1$ .
   
   (iv) $(-x+y)^2 = -(x+y) - \frac 1 2$ .

2. $$
   \frac{\mathrm d y}{\mathrm d x}
= \frac{\frac{\mathrm d y}{\mathrm d t}}
{ \frac{\mathrm d x}{\mathrm d t} }
= \frac{\frac{\mathrm d 2at}{\mathrm d t}}
{ \frac{\mathrm d at^2}{\mathrm d t} }
= \frac{2a}{ 2 at } = \frac 1 t
   $$
   
   The slope of $l_1$ is $\frac{2at}{at^2 - a} = \frac{2t}{t^2 -1}$ . Let $\varphi_1$ and $\varphi_2$ be the inclination of the tangent at $C$ and the line $l_1$ . Then $\tan \varphi_1 = \frac 1 t$ and $\tan \varphi_2 = \frac{2t}{t^2-1}$ . And
   
   $$
   \tan \theta_1 = \tan(\varphi_2 - \varphi_1)
= \frac{\tan \varphi_2 - \tan \varphi_1}{1+\tan\varphi_2\tan\varphi_1}
= \frac 1 t
   $$
   
   And then $\cos \theta_1=\frac{t}{\sqrt{t^2 + 1} }$ . Obviously $\theta_2$ is equal to the inclination of the tangent at $C$ and thus $\tan \theta_2 = \tan \varphi_1 = \frac 1 t = \tan \theta_1$ and $\theta_2 = \theta_1$ . $\square$ 

3. (i)
   
   $$
   \begin{align*}
x^2 + y^2 &= \left( 1 + \frac{\sec t - \tan t}{\sqrt 2} \right)^2 +
\left( 1 + \frac{\sec t + \tan t}{\sqrt 2} \right)^2
\\ &= \tan^2 t + \sec^2 t + 2\sqrt 2 \sec t + 2
\\ &= \sec^2 t+ \sec^2 t + 2 \sqrt 2 \sec t + 1
\\ &=z^2
\end{align*}
   $$
   
   $$
   \begin{align*}
x + y + z &=  1 + \frac{\sec t - \tan t}{\sqrt 2}+
1 + \frac{\sec t + \tan t}{\sqrt 2} -1-\sqrt 2 \sec t 
\\ &=1 \space \square
\end{align*}
   $$
   
   (ii) $\mathbf e_1$ and $\mathbf e_2$ are of unit length by calculating $x^2 + y^2 + z^2$ . The plane $x+y+z=1$ has a normal vector $\mathbf a = (1,1,1)$ . Therefore $\mathbf e_1$ and $\mathbf e_2$ are parallel to the plane because $\mathbf e_1 \mathbf a = \mathbf e_2 \mathbf a = 0$ and are perpendicular to each other because $\mathbf e_1 \mathbf e_2 = 0$ .
   
   $$
   \begin{align*}
&\left(1 + \frac{\sec t - \tan t}{\sqrt 2},
1 + \frac{\sec t + \tan t}{\sqrt 2}
, -1- \sqrt 2 \sec t
\right)
\\ &= (1,1,-1) + 
\sec t (\frac 1{\sqrt 2}, \frac 1{\sqrt 2},-\sqrt 2)+ 
\tan t(-\frac 1{\sqrt 2}, \frac 1{\sqrt 2}, 0) 
\\ &=(1,1,-1) + \sqrt 3\sec t\mathbf e_1 + \tan t\mathbf e_2 
\end{align*}
   $$
   
   And $a = \sqrt 3$ , $b=1$ . $\square$ 
   
   (iii) $C$ is completely inside the plane $x + y + z = 1$ . Because $(1,1,-1)$ is in that plane, using it as the origin, we can write the equation of $C$ with respect to the basis $\mathbf e_1$ and $\mathbf e_2$ :
   
   $$
   \begin{cases}
x = \sqrt 3 \sec t\\
y = \tan t
\end{cases}
   $$
   
   Then using the fact that $\tan^2 t + 1 = \sec^2 t$ , we have $y^2 + 1 = \frac 1 3 x^2$ , and the standard form of hyperbola
   
   $$
   \frac 1 3 x^2 - y^2 = 1
   $$
   
   Where the eccentricity $e = \sqrt{1 +  \frac{1}{3} } = \frac{2}{\sqrt3}$ , the foci are $(\pm 2, 0)$ which corresponds to $(1,1,-1) \pm 2 \mathbf e_1$ in the original space, and the directrices are $x = \pm \frac32$ which corresponds to $(1,1,-1)\pm \frac32 \mathbf e_1 + \lambda \mathbf e_2$ in the original space.

4. Let $\begin{pmatrix} x \\ y\end{pmatrix} = \begin{pmatrix}\frac2{\sqrt5} & \frac1{\sqrt5} \\ -\frac1{\sqrt5} & \frac2{\sqrt5}\end{pmatrix}\begin{pmatrix}u\\v\end{pmatrix}$ . Then the equation can be rewritten as
   
   $$
   10v^2 - 4\sqrt5 v + 5u^2 - 4\sqrt5 u - 4 = 0
   $$
   
   And
   
   $$
   10 \left(v - \frac1{\sqrt5}\right)^2 + 
5\left(u - \frac1{\sqrt5}\right)^2 = 8
   $$
   
   Therefore, let $(u',v') = (u,v) - (\frac1{\sqrt5}, \frac1{\sqrt5})$ , and $\frac58 {u'}^2 + \frac54 {v'}^2 = 1$ is an ellipse. Therefore the original curve is an ellipse because we did only rotation and translation. The area of the ellipse is $\frac{4\sqrt2 \pi}{5}$ .

5. > **Lemma** Unit circle is a circle or ellipse under linear isomorphism.
   > 
   > **Proof** The original equation is $x^2 + y^2 = 1$ . If the linear isomorphism is
   > 
   > $$
   > \mathbf r' = 
\begin{pmatrix} a & b \\c & d \end{pmatrix}^{-1}
\mathbf r
   > $$
   > 
   > The the new equation is
   > 
   > $$
   > (ax+by)^2 + (cx + dy)^2 = 1
\\
(a^2 + c^2)x^2 + 2(ab + cd)xy + (b^2 + d^2)y^2 = 1
   > $$
   > 
   > Then
   > 
   > $$
   > \begin{align*}
&(2(ab + cd))^2 - 4(a^2 + c^2)(b^2 + d^2)
\\ &= 4a^2b^2 + 8abcd + 4c^2 d^2 -
4a^2b^2 - 4a^2d^2 - 4b^2c^2 - 4b^2d^2
\\ &= -4(ad- bc)^2
\\ &= -4 \begin{vmatrix} a & b\\ c&d \end{vmatrix}^2
\\ &<0
\end{align*}
   > $$
   > 
   > And this is not empty set because this $\begin{pmatrix} a & b \\c & d \end{pmatrix}^{-1}$ is bijection. $\square$ 
   
   The equation is the unit circle
   
   $$
   \mathbf r(t) = \hat i \cos t + \hat j \sin t
   $$
   
   Under the linear transformation
   
   $$
   \mathbf r' = \begin{pmatrix} \mathbf v & \mathbf w \end{pmatrix}
\mathbf r
   $$
   
   Which is invertible because $\mathbf v$ and $\mathbf w$ are independent and the transformation is therefore full-ranked. $\square$ 
