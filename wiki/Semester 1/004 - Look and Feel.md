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

## Week 2

### Monday

I learned something nice today on the website of 'The Correspondent', where you can make acustom property of the body margin and use it in your CSS. It's inspiring me to make more use of custom properties for streamlined, customizable code that lets you universally make 1 change rather than having to ctrl+f and fix it here and there instead.

Further more...

#### The basic rules for good readable texts:

```css
font-size: 16px; /* min */
max-width: 66ch;
line-height: 1.4; /* higher on dark mode, like 1.6 */
```

#### Font stack

A way of stacking fonts from high-to-least priority so that the browser knows which one to fallback to. An example...

```css
font-family: Arial, Helvetica, sans-serif;
```

It'll load arial first, then helvetica, and lastly sans-serif.

#### @font-face

@font-face is a css at-rule property you can use to laod in custom fonts. It's important to add multiple fallbacks when declaring your src, from woff2, to woff and typefont.

#### CSS units

there's a lot..

### Tuesday

I learned a fun quote today. In dutch, it reads "Goed werken is belangrijker dan mooi." Sanne explains it to mean that we as developers, more often than not, break functionality of something by trying to make it 'pretty'. Keeping things functional and working, as a result of that, is more important than 'aesthetics'. Literally translated, it means: 'Good work is better than pretty.'

I also learned a few thigns regarding forms and `<input>`. There's _so_ many.. 22 may seem like it's not a lot, but each of them support attributes and properties that make it rather complex, real quick.

The one thing that really sucked is that I didn't design the styleguide with 'appereance: none' in mind. So it won't work right on all browers, e.g. Safari.

But I hate safari.

Another useful thing... I wasn't aware of all the operators / combinators for the CSS attribute selector. I'll copy and paste the ones here below.

`[attr]`
Represents elements with an attribute name of attr.

`[attr=value]`
Represents elements with an attribute name of attr whose value is exactly value.

`[attr~=value]`
Represents elements with an attribute name of attr whose value is a whitespace-separated list of words, one of which is exactly value.

`[attr|=value]`
Represents elements with an attribute name of attr whose value can be exactly value or can begin with value immediately followed by a hyphen, - (U+002D). It is often used for language subcode matches.

`[attr^=value]`
Represents elements with an attribute name of attr whose value is prefixed (preceded) by value.

`[attr$=value]`
Represents elements with an attribute name of attr whose value is suffixed (followed) by value.

`[attr*=value]`
Represents elements with an attribute name of attr whose value contains at least one occurrence of value within the string.

`[attr operator value i]`
Adding an i (or I) before the closing bracket causes the value to be compared case-insensitively (for characters within the ASCII range).

`[attr operator value s]`
Adding an s (or S) before the closing bracket causes the value to be compared case-sensitively (for characters within the ASCII range).

### Wednesday

See this experiment page (forms-types-and-attributes.html)

### Friday

1. Did you make enough use of the shared stylesheet?
   Yes.

2. Note 2 examples of how you use cascade.
   I use cascade in my `base--remedy.css`, and even declare the difference layers and their specificity.

3. Note 3 custom properties that you use in your own project.

4. Did you find any improvements in the code/design review today that you can use for everything else?

Add a DoD...
