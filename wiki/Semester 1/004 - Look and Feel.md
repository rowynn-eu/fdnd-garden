# Sprint 4 - Look and Feel

It's a new sprint, and I've managed to pass my midterm with flying colours. Sure, the work i've shown made it clear that I know what i'm doing, but one thing I already am aware of that I should do more often is to write down my thoughts in these notes. It's a good thing to try and be more consistent with them moving forward, as it'll be a clear indicator of your growth the past year.

## Week 1

### Monday

I learned things today, for sure. I think it's surprising, but actually quite clever to add a class for h1, h2, h3 etc so that semantically, a website is fine, but visually it may be smaller/larger.

I'm not pasting my favourite meme out of the channel that day, it feels silly.

### Tuesday

I've learned that using the 'import' function on fonts.google.com is illegal, because that import link requires them to import from their servers, and every request requires

Another tip I've gotten from Sanne is to use web-safe fonts like 'Verdana', which you can use as a fallback.

I've also learned about MARK: in CSS.

Learn how to preload FONTS

with `rel="preload', it'll firstdownlaod the fonts, then the html and then the css.

You can make woff files with a ..ttf file

What doet font-display: fallback

FOIT vs. FOUT:

Flash of invisibsle text
flash of unstyledtext

### Wednesday

I didn't know enough about layers, or how specificity worked.

In fact, it surprised me that they each have an assigned value that combined, gain more specificity (such as 0, 0, 1, 1), or less. (0, 0, 0, 1).

#### CSS Cascade

#### CSS Specificity

Specificity is what determines what selector wins precedence over another.

The least specific one is the element selector, which can be overidden by a class selector.
The one that wins over both of them is an id selector, and the one on top is an inline style element.

You can merge them together to get

#### New features I want to explore:

I want to look into...

- [if()](https://modern-css.com/whats-new-in-css-2025/#css-if-function)

### Friday

Today we had a quiz. I got third place and it was primarily about specificity. I got caught by properties such as `currentColor` and `inherit`, with the trick questions really getting to me.

I want to double check how layers work how to use the `@layer styleguide, etc`

Something I really liked that I saw in another team is their use of declaring colors seperately, and then merging them for light-dark so they can be customized later on.

Luckily, we don't have to assign any new issues to anyone, as while they were discussing the team canvas, I worked through every code review that we received.
