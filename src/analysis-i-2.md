+++
# TOML Frontmatter
# TODO
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
   
   $\forall \varepsilon \in \R > 0$ , let $\varepsilon_S = \varepsilon_T = \frac{1}{2} \varepsilon$ , and $\exist s \in S, t \in T$ s.t. $\inf S \le s < \inf S + \varepsilon_S$ and $\inf T \le t < \inf T + \varepsilon_T$ , then $l \le s + t < \inf S + \varepsilon_S + \inf T + \varepsilon_T = l + \varepsilon$ , and $l = \inf(S + T)$ by the lemma above.

4. > **Lemma** $\forall a, b \in \R_{>0}$ , $a < b$ , $\exist x \in \R$ s.t. $a < x^3 < b$ .
   > 
   > **Proof** Let 
   
   a

5. a
