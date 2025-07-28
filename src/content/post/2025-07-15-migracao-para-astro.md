---
publishDate: 2025-07-15T00:00:00Z
title: 'Migrando para Astro'
excerpt: 'Migrações, explosões e um arquivo .nojekyll! Aprendizado divertido e site top!'
image: ~/assets/images/blog/2025-07-15-migracao-para-astro.jpg
category: 'Tecnologia'
author: 'Diego Luiz Brum'
tags: [migração, astro, site]
---

### **Minha aventura migrando para o astro: do susto à vitória!**  

Olá povo! Aqui é o Diego, e hoje vou contar como transformei nosso site simples num projeto moderno com **Astro** - e como quase dei um pulo quando o GitHub Pages resolveu pregar uma peça! Spoiler: no final, deu tudo certo e aprendi um truque massa pra compartilhar com vocês.  

### **Tá, mas por que migrar?**  

Nosso site era daqueles bem "anos 2000": HTML/CSS puro, estático, sem graça. Toda vez que precisava atualizar algo, era aquela trabalheira - editar manualmente, sem componentes, sem dinamismo... Tava na hora de dar um upgrade!  

Foi aí que conheci o **[Astro](https://astro.build/)** e me apaixonei! Ele prometia **performance incrível, manutenção fácil e aquele toque moderno** que nosso site precisava. E olha, não me arrependi nem um pouco!  

### **A migração: tudo ia bem... até que...**  

Peguei um template maneiro, ajustei as cores pro nosso branding e, em poucas horas, voilà! Site novinho em folha, lindo e funcional. Fiquei todo orgulhoso! Aí pensei: "Vou hospedar no GitHub Pages, é grátis e super prático".  

**MAS...** (sempre tem um "mas")

Quando subi o site... **PÁ!** Tudo quebrado! O CSS sumiu, o JS não funcionava... Que diabos estava acontecendo?  

### **O mistério do github pages (e a solução mágica)**  

Depois de uma breve pesquisa (a documentação do Astro é ótima!), descobri o problema: o GitHub Pages usa **Jekyll** nos bastidores, e ele **ignora pastas que começam com "_"** - exatamente onde o Astro guarda os arquivos gerados!  

Mas calma, a solução foi mais fácil do que eu imaginava:  

✨ **Basta criar um arquivo vazio chamado `.nojekyll` na raiz do projeto!** ✨  

Pronto! Problema resolvido, site funcionando liso que só!  

### **O que aprendi (e por que você também deve experimentar o astro)**  

1. **GitHub Pages tem suas manhas**, mas nada que um truque simples não resolva  
2. **O Astro é demais!** Fácil de usar, rápido e super versátil  
3. **Sempre vale a pena pesquisar** - a solução muitas vezes está mais perto do que você imagina  

E aí, curtiu a aventura? Se você já passou por algo parecido ou tá pensando em migrar pro Astro, conta aqui nos comentários! Vamos trocar ideias e rir juntos dos perrengues de dev. 😆  

*PS: Nunca subestime o poder de um arquivo vazio!* 😉