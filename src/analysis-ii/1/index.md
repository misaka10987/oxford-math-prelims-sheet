+++
# TOML Frontmatter
+++

# Analysis II — Sheet 1

1. Let $x \in I$ .
   
   - If $I$ has maximum and minimum, since $\max I \in I$ and $\min I \in I$ , $[\min I, x],[x,\max I] \subseteq I$ , and since $I \subseteq [\min I, \max I]$ $I = [\min I, \max I]$ .
   
   - If $I$ has maximum but not minimum, let $b = \max I$ and $a = \inf I$ . Then $I \subseteq (a, b]$ . If $I \ne (a,b]$ , let $y \in (a,b] \backslash I$ , then by *approximation property* $\exist z \in I \cap [a,y)$ , and $y \in [z,y] \subseteq I$ .
   
   - If $I$ has minimum but not maximum, similarly $I = [a,b)$ .
   
   - If $I$ has neither maximum or minimum, similarly $I = (a,b)$ . $\square$ 

2. (i)
   
   $$
   \lim_{x \to x_0} |f(x)|
= \left| \lim_{x \to x_0}f(x) \right|
= |f(x)| \space \square
   $$
   
   (ii) As a counterexample, let
   
   $$
   f(x) =
\begin{cases}
1 & x \ge 0
\\ -1 & x < 0
\end{cases}
   $$
   
   Then $|f(x)| = 1$ is continuous at $0$ but $f$ is not. $\square$ 
   
   (iii)
   
   $$
   \begin{align*}
\lim_{x \to x_0} \max(fx,gx)
&= \lim_{x \to x_0} \left(
\frac{fx + gx}{2} + \left| \frac{fx - gx}{2} \right|
\right)
\\ &= \frac{fx_0 + gx_0}{2} + \left| \frac{fx_0 - gx_0}{2} \right|
\\ &= \max(fx_0, gx_0)
\end{align*}
   $$
   
   and similarly $\min(fx,gx)$ is continuous at $x_0$ . $\square$ 

3. Given a specific $\varepsilon >0$ , let $\delta_g$ be the $\delta$ required by definition of limit of $g$ at $y_0$ , then let $\delta_f$ be the $\delta$ required by definition of limit of $f$ at $x_0$ with respect to $\varepsilon = \delta_g$ . Then
   
   $$
   gf(x_0 - \delta_f, x_0 + \delta_f)
\subseteq g(y_0 - \delta_g, y_0 + \delta_g)
\subseteq (L - \varepsilon, L + \varepsilon)
   $$
   
   and $\delta_f$ satisfies the definition of limit $gfx \to L$ at $x_0$ . $\square$ 
   
   As a counterexample, let
   
   $$
   f: \R \to \R = x \mapsto 0
\\
g : \R \to \R = x \mapsto
\begin{cases}
1 & x = 0
\\ 0 & \text{otherwise}
\end{cases}
   $$
   
   Then $\lim_{y \to 0}gy = 0$ but $\lim_{x \to 0}gfx = 1$ .

4. (i)
   
   $$
   f(x) = \begin{cases}
1 & x \in \{ 0,1,\frac12, \frac13, \frac14, \cdots \}
\\ 0 & \text{otherwise}
\end{cases}
   $$
   
   (ii)
   
   $$
   f(x) = \begin{cases}
1 & x \in \{ 1,\frac12, \frac13, \frac14, \cdots \}
\\ 0 & \text{otherwise}
\end{cases}
   $$

5. - $\lim_{x \to \infin} \frac{x^2}{x^3 + 1} = 0$ .
   
   - $\lim_{x \to \infin} \frac{x \sin x}{x + 1}$ diverges.
   
   -  $\lim_{x \to \infin} \frac{\ln x}{x} = 0$ .
   
   - $\lim_{x \to 0} \frac{\sin(x^2)}{\sin^2 x} = 1$ .
   
   - $\lim_{x \to 1} \frac{\sin(x-1)}{x^2-1} = \frac12$ .
   
   - $\lim_{x \to 0} \sin x \sin \frac1x = 0$ .

6. (i) By substituting $(0,0)$ and $(1,-1)$ we know $f(0) = 0$ and $f(-1) = -f(1)$ .
   
   For $n \in \N$ , by induction.
   
   - $f(0) = 0$ .
   
   - $$
     f((n+1)x)= f(nx + x) = f(nx) + fx = nfx + fx = (n+1)fx 
     $$
   
   For $n < 0$ , let $m = -n$ , and
   
   $$
   f(nx) = f(-mx) = f(m \times(-x)) = mf(-x) = -mfx = nfx
\space \square
   $$
   
   (ii) Let $q = \frac mn$ where $m\in \Z$ , $n \in \Z \backslash \{0\}$ , $\gcd(m,n) = 1$ . Then
   
   $$
   \begin{align*}
&f(qx) = qfx
\\ \iff& nf(qx) = nqfx
\\ \iff& f(nqx) = nqfx
\\ \iff& f(mx) = mfx
\\ \iff& \mathrm{True} \space \square
\end{align*}
   $$
   
   (iii) Let $c = f(1)$ . Then $f(x) = cx$ $\forall x \in \mathbb Q$ . If $f$ is continuous and $f(x_0) \ne cx_0$ , let $\lim_{x \to x_0}f(x) = L \ne cx_0$ , but then for $\varepsilon = \frac12 |L-cx_0|$ , $\forall \delta > 0$ , $\exist q \in \mathbb Q \cap (x_0 - \delta, x_0 + \delta)$ by density of rationals, and $f(q) \notin ( L - \varepsilon, L + \varepsilon)$ , thus the limit does not exist at $x_0$ , which contradicts with the fact that $f$ is continuous. $\square$ 
   
   (iv)
   
   $$
   \begin{align*}
\lim_{x \to x_0} f(x) &= \lim_{x \to 0} f(x + x_0)
\\ &= \lim_{x \to 0} (f(x)+f(x_0))
\\ &= f(x_0) \space \square
\end{align*}
   $$
