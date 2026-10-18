+++
# TOML Frontmatter
completed = 2026-10-17 17:24:00
+++

# Sheet 2

1. | Set                                                         | Supremum           | Infimum | Maximum     | Minimum |
   | ----------------------------------------------------------- | ------------------ | ------- | ----------- | ------- |
   | $\mathbb Q \cap [0, \sqrt 2]$                               | $\sqrt 2$          | $0$     | None        | $0$     |
   | $\left \{ (-1)^n + \frac 1 n \mid n \ge 1 \right \}$        | $\frac 3 2$        | $-1$    | $\frac 3 2$ | None    |
   | $\left\{ 3^n \mid n \in \Z \right\}$                        | None ( $+\infin$ ) | $0$     | None        | None    |
   | $\bigcup _{n = 1}^{+\infin} [\frac{1}{2n}, \frac{1}{2n-1}]$ | $1$                | $0$     | $1$         | None    |

2. > **Lemma** $\forall n \in \N$ , $\exist m \in \N$ s.t. $2^m \ge n$ .
   > 
   > **Proof** If $n < 10$ , let $m = 100$ ; otherwise let $m = n$ . $\square$ 
   
   By *Archimedean Property* , $\forall x \in \R$ , $\exist n \in \N$ s.t. $x < n$ , therefore $\exist m \in \left\{  2^n \mid n \in \N\right\} > n > x$ . $\square$ 

3. (i) Let $u = \max( \sup S, \sup T)$ , then $u \ge \sup S \ge x$ $\forall x \in S$ and $u \ge \sup T \ge x$ $\forall x \in T$ , therefore $u \ge x$ $\forall x \in S \cup T$ is an upper bound of $S \cup T$ . If $u'$ is also an upper bound of $S \cup T$ , then $u'$ is an upper bound of $S$ and $u' \ge \sup S$ , similarly $u' \ge \sup T$ , and $u' \ge u$ because $u$ is either $\sup S$ or $\sup T$ . Therefore, $u$ is the smallest upper bound. $\square$ 
   
   (ii) Let $l = \inf S + \inf T$ . $x = s + t$ for some $s$ and $t$ $\forall x \in S + T$ , therefore $x = s + t \ge \inf S + \inf T = l$ and $l$ is a lower bound of $S + T$ . 
   
   > **Lemma** *Approximation Property* implies infimum, or, for a bounded $S \subset \R$ , $\forall \varepsilon \in \R > 0$ , $\exist s \in S$ s.t. $l \le s < l + \varepsilon$ $\implies l = \inf S$ .
   > 
   > **Proof** If $l' = \inf S > l$ , then let $\varepsilon = l' - l$ and $l'$ is not a lower bound. $\square$ 
   
   $\forall \varepsilon \in \R > 0$ , let $\varepsilon_S = \varepsilon_T = \frac{1}{2} \varepsilon$ , and $\exist s \in S, t \in T$ s.t. $\inf S \le s < \inf S + \varepsilon_S$ and $\inf T \le t < \inf T + \varepsilon_T$ , then $l \le s + t < \inf S + \varepsilon_S + \inf T + \varepsilon_T = l + \varepsilon$ , and $l = \inf(S + T)$ by the lemma above. $\square$ 

4. Let $S = \left\{ x \in \R \mid x^3 < 2 \right\}$ . Obviously $1 \in S$ .
   
   Let $\alpha = \sup S$ . If $\alpha^3 < 2$ , have $(\alpha+h)^3 = \alpha^3 + 3\alpha^2h + 3\alpha h^2 + h^3 < \alpha^3 + (3\alpha^2+3\alpha+1)h$ , and let $0< h <\min(1, \frac{2-\alpha^3}{3\alpha^2 + 3 \alpha + 1})$ , then $(\alpha + h)^3 <2$ , which gives a contradiction.
   
   On the other hand, if $\alpha ^ 3 > 2$ , have $(\alpha - h)^3 = \alpha^3 - 3 \alpha^2 h + 3 \alpha h^2 - h^3 > \alpha^3 - (3 \alpha^2 + 1) h$ , and let $0 < h < \frac{\alpha^3 - 2}{3\alpha^2 + 1}$ , then $(\alpha - h)^3 > 2$ . Then $S$ has no element in $(\alpha - h)$ and $\alpha$ , which contradicts with the Approximation Property.
   
   If $\alpha^3 = \beta^3 = 2$ , then obviously $\alpha, \beta > 0$ , and $\alpha^3 -\beta^3 = 0 \implies (\alpha - \beta) (\alpha^2 + \alpha \beta + \beta^2 ) = 0 \implies \alpha = \beta$ . $\square$ 

5. (i) If there exists a surjection $f : \N \to \R \backslash \mathbb Q$ , since we already know $\mathbb Q$ is countable, let $g : \N \to \mathbb Q$ be a surjection, then
   
   $$
   h : \N \to \R = n \mapsto \begin{cases}
g\left(\frac{n}{2}\right) & 2 \mid n \\
f\left( \frac{n-1}{2} \right) & \text{otherwise}
\end{cases}
   $$
   
   is an $\N \to \R$ surjection, which contradicts with the fact that $\R$ is uncountable. $\square$ 
   
   (ii) By Archimedean property, let $n \gt \frac{1}{b-a}$ , then $\frac{1}{n} < b-a$ .
   
   $a + \frac{1}{n} < b$ , $na + 1 < nb$ . Let $m$ be an integer between $[na, na+1)$ , then $a < \frac m n < b$ . $\square$ 
   
   (iii) Let $a<b$ and $x = \frac{a+b}{2}$ .
   
   - If $x \notin \mathbb Q$ we are done.
   
   - If $x \in \mathbb Q$ , let $y = \frac{a + x}{2}$ .
     
     - If $y \notin \mathbb Q$ , we are done.
     
     - If $y \in \mathbb Q$ , let $z = y + (x-y)(\pi-3)$ , then $z \in (x, y) \subseteq (a, b)$ and $z$ is transcendental. $\square$ 

6. (i) Let $p_n$ be the $n$ -th prime. Let $P = \left \{ \prod_{i=1}^8 {p_i}^{m_i} \mid m_i \in \N \space \forall i \in \Z \right\}$ .
   
   Define
   
   $$
   \begin{align*}
f &: P \to \Z[x] / \langle x^4 \rangle \\ 
&= \prod_{i=1}^8 {p_i}^{m_i} \mapsto
(m_1-m_2)x^3 + (m_3-m_4)x^2 + (m_5-m_6) x + (m_7-m_8)
\end{align*}
   $$
   
   Then $f$ is a well-defined surjection. $\square$ 
   
   (ii) $x_0$ being root of $f(x) \in \mathbb C[x]$ $\implies (x - x_0) \mid f(x)$ , therefore by counting the degree an $n$ -degree polynomial in $\mathbb C[x]$ cannot have more than $n$ distinct roots. $\square$ 
   
   (iii)
   
   > **Lemma** $\Z^n$ is countable $\forall n \in \N$ .
   > 
   > **Proof** Similar to (i), let $P = \left\{ \prod_{i=1}^{2n} {p_i}^{m_i} \mid m_i \in \N \space \forall i \in \Z \right\}$ , and define
   > 
   > $$
   > f: P \to \Z^n = \prod_{i=1}^n {p_i}^{m_i}
\mapsto (m_1 - m_2, m_3 - m_4, \cdots, m_{n-1}-m_n)
   > $$
   > 
   > Then $f$ is a well-defined surjection. $\square$ 
   
   Let $\phi_n$ be an $\N \to \Z^n$ surjection.
   
   Let $f_{n}$ denote the $n$ -th root of $f(x) \in \mathbb C[x]$ . Then
   
   $$
   \sigma : \Z[x] \times \N \to \overline{\mathbb Q}
= (f, n) \mapsto f_n
   $$
   
   is a surjection.
   
   Let $\pi_n : \Z^n \to \Z[x]/\langle x^{n-1} \rangle$ be the bijection that maps coefficients to polynomials.
   
   Then
   
   $$
   \begin{align*}
g & : \N  \to \overline{\mathbb Q}
\\ & = ((d,n,m) \mapsto \sigma( (\pi_d\phi_n(m), n) ) ) \circ \phi_3
\end{align*}
   $$
   
   is a surjection because every polynomial has a finite degree. Therefore $\overline{\mathbb Q}$ is countable and the transcendental numbers $\mathbb C \backslash \overline{\mathbb Q}$ is uncountable because $\mathbb C$ is uncountable. $\square$ 
