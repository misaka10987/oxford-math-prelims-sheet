+++
# TOML Frontmatter
+++

# Problem Sheet 1

1. (i) If $\mathbf a = \mathbf p + \lambda_a \mathbf r$ , $\mathbf b = \mathbf p + \lambda _p \mathbf r$ , and $\mathbf c = \mathbf p + \lambda _c \mathbf r$ , then $\mathbf v = (\lambda_b - \lambda_a) \mathbf r$ and $\mathbf w = (\lambda_c - \lambda_a) \mathbf r$ are linearly dependent because
   
   $$
   \mathbf v + \frac{\lambda _a - \lambda _b}{\lambda_c - \lambda_a} \mathbf w = 0
   $$
   
   If $\mathbf b - \mathbf a$ and $\mathbf c - \mathbf a$ are linearly dependent, let $\mathbf c - \mathbf a = k (\mathbf b - \mathbf a)$ , let $\mathbf r = \mathbf b - \mathbf a$ , then
   
   $$
   \begin{cases}
\mathbf a = \mathbf a \\
\mathbf b = \mathbf a + \mathbf r \\
\mathbf c = \mathbf a + k\mathbf r
\end{cases}
   $$
   
   and they are collinear. $\square$ 
   
   (ii) $\mathbf u \cdot \mathbf v = 0$ .
   
   For the triangle $\mathbf 0$ , $\mathbf u$ , $\mathbf v$ ,
   
   $$
   \begin{cases}
\lVert \mathbf 0 - \mathbf u \rVert = \sqrt{14} \\
\lVert \mathbf 0 - \mathbf v \rVert = \sqrt {61} \\
\lVert \mathbf u - \mathbf v \rVert = 5 \sqrt 3
\end{cases}
   $$
   
   For the triangle $\mathbf 0 $ , $\mathbf u$ , $\mathbf u + \mathbf v$ ,
   
   $$
   \begin{cases}
\lVert \mathbf 0 - \mathbf u\rVert = \sqrt{14}\\
\lVert \mathbf 0 - ( \mathbf u + \mathbf v) \rVert = 5 \sqrt 3 \\
\lVert (\mathbf u + \mathbf v) - \mathbf u \rVert = \sqrt {61}
\end{cases}
   $$
   
   which satisfy the Pythagorean Theorem.
   
   (iii)
   
   $$
   \mathbf v \cdot \mathbf v = \mathbf v \cdot \mathbf w = \mathbf w \cdot \mathbf w\\
\mathbf v \cdot \mathbf v - 2 \mathbf v \cdot \mathbf w + \mathbf w \cdot \mathbf w = 0
\\
(\mathbf v - \mathbf w) ^2 = 0\\
\mathbf v - \mathbf w = 0\\
\mathbf v = \mathbf w
   $$

2. $$
   \begin{cases}
(\mathbf r(\lambda) - \mathbf s (\mu) ) \cdot (2,3,2) = 0 \\
(\mathbf r(\lambda) - \mathbf s (\mu) ) \cdot (0,2,1) =0 
\end{cases}
   $$
   
   $$
   \begin{cases}
\lambda = \frac 4 7 \\
\mu = \frac{12} 7
\end{cases}
   $$
   
   The fact that the line segment representing the shortest distance between the two lines is perpendicular to both lines.

3. $$
   (x, y, z) = (2, 1, 0) + s(1, -2, 4) + t (1, -2, -3)
   $$
   
   We notice that $(2,1,0) \cdot (1, -2 ,4) = 0$ and $(2, 1, 0) \cdot (1, -2, -3) =0$ .
   
   Therefore, $\mathbf r \cdot (2, 1, 0) =  (2, 1, 0) \cdot (2, 1, 0)$ is an equation of that plane.
   
   And that expands to $2x + y = 5$ .

4. (i) $\mathbf r \cdot (1, 0, 1) = 1$ .
   
   (ii) $\mathbf r \cdot (1, -2, 1) = 0$ .
   
   (iii) $\mathbf r \cdot (0,0,1) = 1$ or $r \cdot (\frac 2 3, \frac 2 3, \frac 1 3) = 1$ .

5. Denote $\mathbf v \cdot \mathbf v$ as $\mathbf v^2$ and $\mathbf v \cdot \mathbf w$ as $\mathbf v \mathbf w$ .
   
   $$
   \begin{align*}
&\frac{| \mathbf r - \mathbf a|^2 - \lambda ^ 2 |\mathbf r|^2}
{1 - \lambda ^ 2}
 = |\mathbf r - \mathbf b | ^ 2 - \lambda^2 |\mathbf b| ^ 2
\\ 
\iff & (\mathbf r - \mathbf a)^2 - \lambda^2 \mathbf r ^ 2
 = (1 - \lambda ^ 2) ((\mathbf r - \mathbf b)^2 - \lambda^2 \mathbf b^2)
\\
\iff & \mathbf a^2 - 2\mathbf a \mathbf r 
= 2\lambda^2 \mathbf b \mathbf r - 2 \mathbf b \mathbf r
 + \lambda^4 \mathbf b^2 - 2 \lambda^2 \mathbf b^2 + \mathbf b ^ 2
\\
\iff& (1 - \lambda^2) ^2\mathbf b^2 - 2 (1 - \lambda^2) \mathbf b\mathbf r
= 2\lambda^2 \mathbf b \mathbf r - 2 \mathbf b \mathbf r
 + \lambda^4 \mathbf b^2 - 2 \lambda^2 \mathbf b^2 + \mathbf b ^ 2
\\
\iff & \mathrm{True}
\end{align*}
   $$
   
   We can assume $O$ is the origin, for otherwise we translate the plane.
   
   The equation for points $X$ satisfying $|AX| = \lambda |OX|$ is $|\mathbf x - \mathbf a| = \lambda | \mathbf x|$ .
   
   $$
   \begin{align*}
& |\mathbf x - \mathbf a| = \lambda |\mathbf x|
\\ \iff & 
|\mathbf a - \mathbf x| ^ 2 - \lambda^2 |\mathbf x|^2 = 0
\\ \iff &
\frac{|\mathbf a - (1 - \lambda ^ 2) \mathbf x| ^ 2 
- \lambda^2 |\mathbf a| ^ 2 }{
    1 - \lambda^2
} = 0
\\ \iff & 
( \mathbf a - \mathbf x + \lambda^2 \mathbf x)^2
 = \lambda^2 \mathbf a^2
\\ \iff &
(\lambda - 1) (\lambda + 1)
(\lambda \mathbf x - \mathbf x + \mathbf a )
(\lambda \mathbf x + \mathbf x - \mathbf a) =0
\\ \iff &
(1 - \lambda^2)\mathbf x ^ 2 - 2 \mathbf a \mathbf x
 + a ^ 2 = 0
\\ \iff &
\mathbf x ^ 2 - \frac{2}{1 - \lambda^2} \mathbf a \mathbf x
 +\frac{1}{1 - \lambda^2} \mathbf a ^ 2 = 0
\\ \iff &
( \mathbf x - \frac{1}{1 - \lambda^2}\mathbf a) ^ 2
= \frac{1}{(1 - \lambda^2)^2} \mathbf a ^ 2 
-\frac{1}{1 - \lambda^2} \mathbf a ^ 2
\\ \iff &
\lVert \mathbf x - \frac{1}{1 - \lambda^2}\mathbf a \rVert
 = \frac{\lambda}{1 - \lambda^2} \lVert \mathbf a \rVert
\end{align*}
   $$
   
   Which is a circle with centre $\frac{1}{1 - \lambda^2}\mathbf a$ and radius $\frac{\lambda}{1 - \lambda^2} \lVert \mathbf a \rVert$ .

6. TODO
