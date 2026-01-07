# Frontend Mentor - Bookmark landing page solution

This is a solution to the [Bookmark landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/bookmark-landing-page-5d0b588a9edda32581d29158). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Receive an error message when the newsletter form is submitted if:
  - The input field is empty
  - The email address is not formatted correctly

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Mobile-first workflow
- [React](https://reactjs.org/) - JS library

### What I learned

#### Form

I wanted to try out a validation library for a change. I used zod, i library i worked with in the past a little bit. This made the email validation quite trivial.
Though, I realized, that I need to brush up on my form knowledge a little and will dive back into the web dev guide on it. I will also explore libraries like react hook form next.

```tsx
const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
  const value = event.currentTarget.value;
  const result = Email.safeParse({ email: value });
  setEmail(value);
  if (!result.success && interacted) {
    setError(true);
  } else {
    setError(false);
  }
};
```

#### Faq

U built the faq section with details summary, to avoid using javascript. The only downside was, to replace the markers. usually I would do it with css and :after but this time I used icons from react-icons directly. This was effectively easier.

```tsx
      <FaAngleUp size={18} className="hidden group-open:inline text-red-400" />
      <FaAngleDown
        size={18}
        className="inline group-open:hidden text-blue-600"
      />
```

### Continued development

### Useful resources

- [Example resource 1](https://www.example.com) - This helped me for XYZ reason. I really liked this pattern and will use it going forward.
- [Example resource 2](https://www.example.com) - This is an amazing article which helped me finally understand XYZ. I'd recommend it to anyone still learning this concept.
