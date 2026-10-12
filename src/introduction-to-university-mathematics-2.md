+++
# TOML Frontmatter
+++

# Problem Sheet 2

1. (i) $[0, 1]$ , $[-1, 1]$ , $[-1, 1]$ .
   
   (ii) $\left\{ 2n\pi \mid n \in \Z \right\}$ , $\left\{ (2n + \frac 1 2)\pi \mid n \in \Z \right\}$ , $\empty$ .
   
   (iii) $f(A \cap B) = \empty$ , $f(A) \cap f(B) = [0, 1]$ .
   
   (iv) $f^{-1}f(A) = \bigcup_{n \in \Z} [2n\pi, (2n+1)\pi]$ , $ff^{-1}(A) = [0, 1]$ .

2. (i) No such function. $f^{-1}(\R) = \R$ .
   
   (ii) No such function. $f((0, 2)) \supseteq f((0, 1))$ .
   
   (iii) $f(x) = 2x$ .
   
   (iv) 
   
   $$
   f(x) =
\begin{cases}
2x & x \in (0, 1)\\
x & x \in [1, 2)\\
-1 & \text{otherwise}
\end{cases}
   $$
   
   (v) No such function.
   
   $f([0, 1]) = f((0, 1)) \cup \left\{ f(0), f(1) \right\}$ , so the case would require $(0, 2) \backslash (0, 1) = [1, 2) \subseteq \left\{ f(0), f(1) \right\}$ , which is obviously impossible considering the cardinality.

3. (i) $5^3 = 125$ .
   
   (ii) $3^5 = 243$ .
   
   (iii) $\mathrm P_5^3 = 60$ .
   
   (iv) 0.
   
   (v) 0.
   
   (vi) 240.

4. (i) True.
   
   (ii) False.
   
   (iii) True.
   
   (iv) True.
   
   (v) True.
   
   (vi) False.
   
   (vii) True.
   
   (viii) True.

5. (1) $\forall x, y \in \R$ , $\exist z \in \R$ s.t. $z > x \land f(z) > y$ .
   
   (2) $\forall x \in \R$ , $\exist y \in \R$ s.t. $z \le y \lor f(z) \ne x$ $\forall z \in \R$ .
   
   (3) $\exist x, y \in \R$ s.t. $z \le y \implies f(z) = x$ $\forall z \in \R$ .
   
   (4) $\exist x \in \R$ s.t. $\forall y \in \R$ , $\exist z \in \R$ s.t. $f(z) = x \implies z > y$ .
   
   (5) $\forall x, y \in \R$ , $\exist z \in \R$ s.t. $z \le y \land f(z) \ne x$ .
   
   (6) $\exist x, y \in \R$ s.t. $z \le x \lor f(z) \le y$ $\forall z \in \R$ .
   
   **Pairing:** 
   
   - (1) and (6)
   
   - (3) and (5)
   
   - (2) and (4)

6. Turn the first and fourth (from the left) card.

7. (i) True.
   
   Because $g$ is surjective, $\exist y \in Y$ s.t. $f(y) = z$ $\forall z \in Z$ .
   
   Because $f$ is surjective, $\exist x \in X$ s.t. $f(x) = y$ $\forall y \in Y$ .
   
   Therefore, $\exist x \in X$ s.t. $gf(x) = z$ $\forall z \in Z$ $\square$ .
   
   (ii) False.
   
   Let $X = Y = Z = \N$ , $f = x \mapsto 0$ , $g = x \mapsto x$ .
   
   (iii) False.
   
   Let $X = Y = \N$ , $Z = 2\N$ , $f = x \mapsto 2x$ , $g = x \mapsto x$ .
   
   (iv) True.
   
   If $g$ is not surjective, $\exist z \in Z$ s.t. $\forall y \in Y$ , $g(y) \ne z$ .
   
   Then $\forall x \in X$ , $gf(x) \ne z$ , and $g \circ f$ is not surjective. $\square$ 

8. (i) True.
   
   $$
   \begin{align*}
f(A + B) &= \sum_{i=1}^n(A+B)_{i, i}
\\ &= \sum_{i=1}^n (A_{i,i} + B_{i,i})
\\ &=  \sum_{i=1}^n A_{i,i} +  \sum_{i=1}^n B_{i,i}
\\ &= f(A) + f(B)
\end{align*}
   $$
   
   (ii) False.
   
   Let $A = \begin{pmatrix} 1 & 0 \\0 & 0 \end{pmatrix}$ , $B = \begin{pmatrix} 0 & 0 \\ 0 & 1 \end{pmatrix}$ .
   
   (iii) True.
   
   $$
   \begin{align*}
f(AB) &= \sum_{i=1}^n(AB)_{i,i}
\\ &= \sum_{i=1}^n \sum_{j=1}^n A_{i,j}B_{j,i}
\\ &= \sum_{j=1}^n \sum_{i=1}^n A_{i,j}B_{j,i}
\\ &= \sum_{j=1}^n (BA)_{j,j}
\\ &= f(BA)
\end{align*}
   $$
   
   (iv) False.
   
   Let $A = \begin{pmatrix} 0 & 1 \\ 1 & 0\end{pmatrix}$ .

9. > For all positive real $\varepsilon$ and an arbitrary real $a$ , there exists a positive real $\delta$ such that for all real number $x$ that satisfies $|x - a| < \delta$ , $|f(x) - f(a)| < \varepsilon$ .
   
   > $\forall \varepsilon \in \R$ s.t. $\varepsilon > 0$ , $\exist \delta \in \R$ s.t. $\delta > 0 \land |x - a| < \delta \implies |f(x) - f(a)| < \varepsilon$ $\forall a, x \in \R$ .
   
   The statements are not the same. The former one holds and the latter one does not.
   
   As for the former one, given $\varepsilon$ and $a$ , let $p = \sqrt{a^2 + \varepsilon}$ , $q = \sqrt{a^2 - \varepsilon}$ , and $\delta = \frac{1}{2} \min(|p - |a|| , |q - |a|| )$ will suffice.
   
   As for the latter one, as a counterexample, let $\varepsilon = 1$ , given a specific $\delta$ , $a = \frac{2\varepsilon}{\delta}$ and $x = a + \frac{\delta}{2}$ does not satisfy the constraint.

10. Let $f: C \to A$ be a surjection and $g : B \to D$ be an injection.
    
    Then $\phi : X \to Y = x \mapsto g \circ x \circ f$ is an injection. Because for every two different function $x$ , they have at least one different output on a same input, the fact that $f$ is surjective guarantees that input is covered, and the fact that $g$ is injective guarantees that is does not map the different outputs to the same in $D$ . $\square$ 
