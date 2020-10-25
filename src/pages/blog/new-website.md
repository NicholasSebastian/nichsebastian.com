---
title: "This new website of mine"
description: "An insight to this new website, what it's all about, and what I used to actually make the site."
date: "2020-10-16"
---

So, I finally have this new website up and running.  
It took almost a whole week but looking at it now, I can say I'm sort of proud of it. Obviously its far from perfect and there are plenty of things I can nitpick from the design and code, but for now, it is what it is and its good enough.

## The Problem
My old website, just built at the beginning of last year, was horrible.  
It was made just a few months after I first started learning web development and over time, slowly became something I increasingly became unhappy with. I feel that a personal website should be able to reflect a person's identity, and in my case, I definitely felt that the old website wasn't a good reflection of my current skills.

- It was made with Next.js which at that time, just introduced its new static site generation feature, and looking at it now, it just didn't make sense to use a framework specializing in server side rendering for static site generation.

- All the content of the website was hard-coded, meaning that I had to change the HTML code itself if I wanted to make any changes.

- Also, it didn't have any kind of CMS integration, which meant that I had to manually write all the blog posts (not that I posted that much anyway) and everything else in markdown and push it to the website's repository.

- And above all, I hated the design. Although at the time I was aiming for a clean design, which I do think it still is, it had too much white space in some areas while not enough in others.

## The New Website
### Gatsby
I used Gatsby.js this time as its made specifically for these kinds of websites. It has an extensive variety of plugins to choose from that make going specific things much easier. Specifically for this website, what ended up being most helpful were the Gatsby Transformer Remark and Gatsby Images plugin.

This time, the structure and style of the website is completely separate from the content of the website. I was able to do this thanks to Gatsby Transformer Remark, as it lets me parse data from the markdown files very easily as it gets pulled out of the filesystem with GraphQL, and I can just stick the data in the right places of the website. So basically, most of the content of the website are in markdown files and I just have to edit them to make changes to the website instead of having to go through the HTML.

Also, the website is far more optimized now. Checking with [PageSpeed Insights](https://developers.google.com/speed/pagespeed/insights/), the new website got a score of 90 for mobile and an almost perfect 99 for desktops. A lot of this is thanks to the use of Gatsby Images, as it resizes all the images in the website to optimized sizes for each size of viewport and automatically adds lazy loading.

### Serverless functions
The list of repositories on the index page are taken directly from Github's public GraphQL API, and unlike the previous website where in I stupidly just fetched directly from the client side, I had a bit of back-end to help. But instead of actually running a back-end web server, I used AWS Lambda Functions. Or more specifically, I used netlify's derivative which they call Netlify Functions. I find these serverless functions to be perfect for cases like these where I just need a tiny bit of back-end functionality and not want to have to run a whole back-end server for it.

### Netlify CMS
To manage all the content, the new website uses a headless CMS this time, specifically, Netlify CMS. Yes, it's Netlify again. Initially I was torn between either Contentful or Sanity, but then I came across Netlify's own headless CMS and I figured, why not? So I went with it. The integration was made even easier since Gatsby even has a plugin for it too. It was as easy as setting up Netlify-Plugin-CMS and config.yml and its done. So now, the website has a hidden, restricted route accessible only through '/admin' and lets me access the website through a CMS and edit the content through there. Feels so much more legit now.

### Hosting
Again, its Netlify. Not just because I'm using Netlify Functions, but I also figured at this point, since I'm already balls deep in Netlify, might as well go all the way and get hooked right into its ecosystem. Since there isn't an actual back-end and I'm using Netlify Functions, I get to host the entirety of the website on Netlify.

The domain took a while to decide, but I ended up buying it from Hostinger since it seemed to be the cheapest option here in this country, and I just hooked it up to the website already running on Netlify and voilà here we are now.