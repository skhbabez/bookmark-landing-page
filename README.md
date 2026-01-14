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

- Solution URL: [https://github.com/skhbabez/bookmark-landing-page](https://github.com/skhbabez/bookmark-landing-page)
- Live Site URL: [https://skhbabez.github.io/bookmark-landing-page/](https://skhbabez.github.io/bookmark-landing-page/)

## My process

### Built with

- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [Tailwind CSS](https://tailwindcss.com/) - CSS framework
- [Vite](https://vitejs.dev/) - Build tool
- [Storybook](https://storybook.js.org/) - Component development

### What I learned

#### Form

I wanted to try out a validation library for a change, so I used Zod, a library I have worked with a little in the past. This made the email validation quite trivial.

However, I realized that I need to brush up on my form knowledge and will dive back into the web dev guide on it. I will also explore libraries like React Hook Form next.

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

I built the FAQ section with details and summary to avoid using JavaScript. The only downside was replacing the markers. Usually I would do this with CSS and :after, but this time I used icons from react-icons directly. This was effectively easier.

```tsx
      <FaAngleUp size={18} className="hidden group-open:inline text-red-400" />
      <FaAngleDown
        size={18}
        className="inline group-open:hidden text-blue-600"
      />
```

#### Tabs

I tried building my own tab component according to WAI accessibility standards. I referenced BaseUI and other component libraries to get a general idea of what a good component should look like. The most challenging aspect was making it keyboard controllable. I ended up accessing the DOM directly, since React does not make it easy to keep track of the order of the tab elements in my design.

```tsx
 const onKeyDown = (event: React.KeyboardEvent) => {
    if (tabRef.current) {
      const tabs: HTMLButtonElement[] = Array.from(
        tabRef.current.querySelectorAll("[role=tab]")
      );
      const currentIdx = tabs.findIndex(
        (tab) => document.activeElement === tab
      );
      const calcIndex = (offset: number) => {
        return Math.max(Math.min(currentIdx + offset, tabs.length - 1), 0);
      };

      switch (event.key) {
        case "ArrowLeft":
          if (media) {
            tabs[calcIndex(-1)].focus();
          }
          break;
      ...

```

For accessibility, I had to figure out how to react to the orientation change to set the aria-orientation attribute and switch to up/down arrow keys. I ended up using window.matchMedia, since React did not seem to provide a hook for listening to window size changes.

```tsx
const [isHorizontal, setIsHorizontal] = useState(
  window.matchMedia("(min-width: 768px)").matches
);
useEffect(() => {
  const handleChange = (event: MediaQueryListEvent) => {
    setIsHorizontal(event.matches);
  };
  const query = window.matchMedia("(min-width: 768px)");
  query.addEventListener("change", handleChange);

  return () => {
    query.removeEventListener("change", handleChange);
  };
}, []);
```

### Continued development

### Useful resources

- [WAI Tab Standard](https://www.w3.org/WAI/ARIA/apg/patterns/tabs/) - I used this as a reference for the Tab Component.
