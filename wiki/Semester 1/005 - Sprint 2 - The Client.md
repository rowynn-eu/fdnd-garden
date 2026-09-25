# The Client

This sprint we're developing a responsive and accessible website for a client, in my case that is OpenGemeenten, a company that makes fast, reliable and accessible government websites. One of their products is Gemeenteniconen.nl. which lets you access copyright-free open-sourced icons and illustrations that government websites can use freely in compliance with the NL System Design standard to build their websites.

My learning goals for this sprint is going to be....
- To learn about the Web Content Accessibility Guidelines (WCAG)
- How to do a WCAG Audit
- How to use the NL Design System


## Monday

We had our sprint-planning and decided on what we should send and prepare for the client.

I learned 
- How to prepare for a briefing
- How to take notes and ask the right questions during a briefing
- How write and send a debriefing to a client

## Tuesday

I learned about oklch, and using 'in oklch' in gradients allows for prettier gradients.

Furthermore, I learneed that you. can target multiple gradients and how they are styled with the following snippet.

```css
background-repeat: no-repeat, repeat;
background-position: center center, left top;
background-size: 50% 50%;
background-image: 
	linear-gradient(
		in oklch 45deg,
		var(--blauw),
		var(--geel)
	),
	linear-gradient(
		in oklch 45deg,
		var(--rood),
		var(--oranje)
	)
```

I also learned about some cool shortcuts I want to make!
- 

## Wednesday

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