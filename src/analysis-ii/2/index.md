+++
# TOML Frontmatter
+++

# Analysis II — Sheet 2

1. (i) As for the forward direction,
   
   $$
   \begin{align*}
&\mathbf F \;\text{continuous}
\\ \iff& \forall a \in \R, \varepsilon \in \R_{>0},\exist \delta \in \R_{>0},
|x -a|< \delta \implies |\mathbf Fx - \mathbf Fa| < \varepsilon
\\ \iff& \forall a \in \R,
\varepsilon_f,\varepsilon_g \in \R_{>0},
\min(\varepsilon_f,\varepsilon_g)\in \R_{>0},
\exist \delta \in \R_{>0},
\\ &
|x -a|< \delta \implies (fx - fa)^2 + (gx-ga)^2 <
\min(\varepsilon_f,\varepsilon_g)^2
\\ \implies &\forall a \in \R, \varepsilon_f,\varepsilon_g \in \R_{>0},
\exist \delta \in \R_{>0},
\\ & |x - a| < \delta \implies |fx - fa| < \varepsilon_f
\land |gx-ga| < \varepsilon_g
\\ \iff & f,g \;\text{continuous}
\end{align*}
   $$
   
   As for the backward direction,
   
   $$
   \begin{align*}
&f,g \;\text{continuous}
\\ \iff& \forall a \in \R, \varepsilon_f,\varepsilon_g \in \R_{>0},
\exist \delta \in \R_{>0},
\\ & |x - a| < \delta \implies |fx - fa| < \varepsilon_f
\land |gx-ga| < \varepsilon_g
\\ \implies& \forall a \in \R,
\varepsilon \in \R_{>0} ,
\varepsilon_f = \varepsilon_g = \frac12 \varepsilon,
\exist \delta \in \R_{>0},
\\ & \begin{align*}
|x - a| < \delta \implies |\mathbf Fx - \mathbf Fa|
&= \sqrt{(fx-fa)^2+(gx-ga)^2}
\\ & < \sqrt{ {\varepsilon_f^2} + {\varepsilon_g}^2}
\\ & = \frac{1}{\sqrt2} \varepsilon
\\ & < \varepsilon
\end{align*}
\\ \iff& \mathbf F \;\text{continuous} \space \square
\end{align*}
   $$
   
   (ii) Given $\varepsilon \in \R_{>0}$ , let $\delta \in \R_{>0}$ be sufficiently small such that $\delta^2 + (|a|+|b|) \delta < \varepsilon$ , then $\forall (a,b) \in \R^2$ ,
   
   $$
   \begin{align*}
& |(x,y)- (a,b)| < \delta
\\ \implies & (x-a)^2 + (y-b)^2 < \delta^2
\\ \implies & |x-a|, |y-b| < \delta
\end{align*}
   $$
   
   And
   
   $$
   \begin{align*}
|xy-ab| \le& \max |(a \pm \delta)(b \pm \delta) - ab|
\\ \le& \max| \pm a \delta \pm b \delta \pm \delta^2|
\\ \le & \delta^2 + |a| \delta + |b| \delta
\\ < \varepsilon
\end{align*}
   $$
   
   By definition $m$ is continuous. $\square$ 
   
   (iii) Let $\mathbf G : \R \to \R^2 = x \mapsto (fx,gx)$ . By (i) $\mathbf G$ is continuous, then $fg = m \circ \mathbf G$ is continuous. $\square$ 

2. Let $\varepsilon = \frac14$ . $\forall \delta \in \R_{>0}$ and $(x,y) \in \R^2$ , $|(x,y) -(0,0)| < \delta$ , we can always find a point where $x = y$ and $F(x,y) = \frac12 > \varepsilon$ .
   
   $f_a(x) = F(x,a) = \frac{ax}{x^2 + a^2}$ is continuous because
   
   - It is continuous for $a \ne 0$ since $ax$ is continuous and $x^2 + a^2$ is continuous and nonzero.
   
   - For $a = 0$ , by definition $f_a(x) = 0$ is continuous.
   
   Similarly $g_a(y)$ is continuous. $\square$ 

3. (i) $\N$ .
   
   (ii) $\{n + 2^{-m} \mid m,n \in \N_{\ge 1} \}$ .
   
   (iii) $\R$ .
   
   (iv) 
