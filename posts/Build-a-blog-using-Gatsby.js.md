---
title: 'Build a blog using Gatsby.js'
tags: ["gatsby","javascript"]
published: true
date: '2020-03-22'
---

Starting a blog looks a bit difficult and when it comes to building our blog. I also while building my first blog was confused with the platform I should use since I want to build my blog minimalistic and fast to make it more content-oriented.
So you might have heard about [Gatsby](https://www.gatsbyjs.org/) which is a static site generator written in Javascript and backend by React and GraphQL.
I’m also a newbie to Gatsby, and I thought I’d write up this blog as a guide on, how to setup/build your blog and write your first blog post, as I figure things out.

You might be thinking that why [Gatsby](https://www.gatsbyjs.org/), why not other technology.  

## Why Gatsby?
According to there [website](https://www.gatsbyjs.org/) 
>"Gatsby is a free and open-source framework based on React that helps developers build blazing-fast websites and apps" and is "Fast in every way that matters".

Gatsby allows you to write in [Markdown](https://www.markdownguide.org/), which is a simple plain text format that is easy to learn and write with. It generates HTML blog posts taking in the Markdown files.
It has some great features that differentiate it from other static site generators.:
- Filter blog posts by Tags
- Easy customization
- Using styled-components
- Minimal styles
- Best scoring by Lighthouse
- SEO support
- PWA support
- Offline support


## Getting Started

If you don't have Gatsby CLI Installed yet, then install it's the latest version first, it will give you the `gatsby` command:
 ```
 npm install -g gatsby-cli 
 ```
Then, create your new blog:
```
gatsby new my-blog https://github.com/gatsbyjs/gatsby-starter-blog
```
After a few seconds, you will see something like this in your terminal.
![output](../../../src/images/output-1.png "")
Now, Change the directory to the site folder:
```
cd my-new-blog
```
Startup the Gatsby Development Server using `gatsby` command:
```
gatsby develop
```
After a few seconds, you will see something like this in your terminal.
![output](../../../src/images/output-2.png "")
Keep your development server running and visit [localhost:8000](https://localhost:8000) in your default browser to access your newly created Gatsby Blog.

You can now deploy your Blog in [Github Pages](https://pages.github.com/)

*It'a not the complete but the surely the starting point for development using Gatsby.*
Visit [Gatsby Website](https://www.gatsbyjs.org/) for more detailed [documentation](https://www.gatsbyjs.org/docs/)and [tutorials](https://www.gatsbyjs.org/tutorial/).