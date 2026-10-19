# The Client

This sprint we're developing a responsive and accessible website for a client, in my case that is OpenGemeenten, a company that makes fast, reliable and accessible government websites. One of their products is Gemeenteniconen.nl. which lets you access copyright-free open-sourced icons and illustrations that government websites can use freely in compliance with the NL System Design standard to build their websites.

My learning goals for this sprint is going to be....

- To learn about the Web Content Accessibility Guidelines (WCAG)
- How to do a WCAG Audit
- How to use the NL Design System

## Week 1

### Monday

We had our sprint-planning and decided on what we should send and prepare for the client.

I learned

- How to prepare for a briefing
- How to take notes and ask the right questions during a briefing
- How write and send a debriefing to a client

### Tuesday

I learned about oklch, and using 'in oklch' in gradients allows for prettier gradients.

Furthermore, I learneed that you. can target multiple gradients and how they are styled with the following snippet.

```css
background-repeat: no-repeat, repeat;
background-position:
    center center,
    left top;
background-size: 50% 50%;
background-image:
    linear-gradient(in oklch 45deg, var(--blauw), var(--geel)),
    linear-gradient(in oklch 45deg, var(--rood), var(--oranje));
```

I also learned about some cool shortcuts I want to make!

- change from dark to light theme
- increase or remove contrast
- set / reduce motion

### Wednesday

I learned...

- a bit more about prototyping, specifically what a [wireflow](https://www.nngroup.com/articles/wireflows/) is, and how it's used here to visualize interactions before you start building a website.
- I learned how to sketch interactable elements , by giving them a box-shadow / shading.
- I learned how to properly sketch a sitemap, and that similar websites get a 'stacked' box look.

About Sketching..

- It's important to add a shadow to elements that can be interacted with
- When making a sketch, try to include the actual content of the website you're making. No lorem ipsum, or 'title'.
- When sketching a button, write the text inside of the button first, and then draw the box around it.
- When

Vier rechte lijnen = een frame of flow of knop...

Schetsen heeft ook een communicatieve functie, anderen moeten je schets kunnen 'lezen': Gebruik een schaduw voor klikbare elementen.

Schrijf eerst de tekst dan de knoppen of kaders.
Laat de hierachie in de typogrtafie zien! Belangrijke teksten en titels uitschrijven

### Vrijdag - Code Review

We made code reviews for each other today.

Due to the feedback of a mentor, I learned a bit about HTML formatting and the etiquette regarding that.

I came across these two interesting reads.

- https://github.com/orgs/mdn/discussions/242
- https://github.com/validator/validator/wiki/Markup-%C2%BB-Void-elements#trailing-slashes
- https://github.com/awmottaz/prettier-plugin-void-html

I learned...

- What void elements are, which is an HTML element that does not have any children.
- Trailing slahes should not be used to mark start tags as self-closing.
- It's likely better to not use a formatter that automatically adds trailing slashes to html elements.

I learned from reviewing other people's code that...

- I don't like unorganized file structures. I will always try to organize my files following a logical order.
- I like clean code. I will always try to use a formatter, and provide a .prettiersrc (or other formatter) file in the repository.

The feedback I gave...

- Was informative for Rayhana, as she immediately understood how she should apply it to have a better structured HTML file.

The feedback I received.

- I pushed out a solution immediately, making it so that on monday I can continue where I left off and finish the remaining content (or maybe sneak it in during the weekend.)
- I quite liked the feedback I received and it informed me on my small mistakes, as it lead to the trailing slashes scenario.

## Week 2

### Maandag

#### What's the default Layout Mode for every element?

Most elements use a default display of 'block', think the h1-h6, the p, the divs, the sections, main, header, footer, etc.

Others use inline elements, things like span, a, b, i, em, strong, and similar.

I could list every single element here, but that's going to be a waste of time.

#### What is the difference between Flexbox & Grid Layout? When do you use what?

Flex-box is a one dimensional layout that automatically arranges things in either the x-axis (rows) or y-axis (columns).

Grid on the other hand, is two-dimensional. It can sort items in both axis, and also have certain elements take up multiple cells. (comparable to working on a spreadsheet.) This is especially handy for making micro layouts.

#### Which layout modes do you already know? Which ones do you still need to learn?

I understand the basics of flexbox and grid layout, but I have to (quite frequently) reference cheatsheets and MDN to make sure what I'm typing is working, and I still make mistakes with the syntax.

#### Think and plan ahead which layout modes you want to use per section of the website's design.

I'm likely going to be using a mixture of flex and grid layouts fro the website.

The header in a flex layout,

The main in a 1-column grid layout, which with media queries expands to a 2-column layout.

The footer is also likely in a flex layout, which will likely contain containers (either divs or something more semantic for navigation) to display items on a sitemap and the like.

### Woensdag

### Vrijdag

## Week 3

### Maandag

Code conventies -> Code Conventions

What are the three code conventions within FDND?

- Give your HTML some space to breathe.
    - This promotes readability, and makes it so that more people can both read, and quickly understand what you've written down.
- Write your CSS selectors in the same order as your HTML.
    - This makes it so taht people can quickly correlate your HTMl with your CSS.
- Nest your Media Queries
    - In general, you should be nesting your CSS so people can quickly identify all the changes to one big section of the website. Furthermore, nesting your Media Queries means that all the changes for larger screens can be seen in one place.

Another way to keep HTML and CSS readable:

- Try to leave whitespace after every big section of HTML. A great tip I got from Tin.
- Try declare all your design tokens in the :root, on top of all your CSS remedies and global changes (such as max-width on the p) at the under body {}.

That means for HTML...

```HTML
<ul>
    <li>Text...</li>
    <li>Text...</li>
    <li>Text...</li>
</ul>
<ul>
    <li>Text...</li>
    <li>Text...</li>
    <li>Text...</li>
</ul>
<ul>
    <li>Text...</li>
    <li>Text...</li>
    <li>Text...</li>
</ul>
<ul>
    <li>Text...</li>
    <li>Text...</li>
    <li>Text...</li>
</ul>
```

becomes

```HTML
<ul>
    <li>Text...</li>
    <li>Text...</li>
    <li>Text...</li>
</ul>

<ul>
    <li>Text...</li>
    <li>Text...</li>
    <li>Text...</li>
</ul>

<ul>
    <li>Text...</li>
    <li>Text...</li>
    <li>Text...</li>
</ul>

<ul>
    <li>Text...</li>
    <li>Text...</li>
    <li>Text...</li>
</ul>
```
