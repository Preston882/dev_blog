---
title: To Do List Blog
date: "2020-01-22T22:12:03.284Z"
description: "This Page shows you how I made a Todo List in a day!"
---
Throughout a day in class we decided we wanted to create a model of a Todo list, but with also adding our own twist.
We watched a video and wrote in the code required for the function to work. 



<iframe
     src="https://codesandbox.io/embed/github/db-cs-spring-2020/todo-list-app-Preston882/tree/master/?fontsize=14&hidenavigation=1&theme=dark"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="todo-list-app-preston882"
     allow="geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb"
     sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
   ></iframe>


After Much editing we finally had a working Todo List!

And now we test, to have a program called "Todo List" you would have to be able to add Priorities to complete.

After we have completed the task at hand, we must have a way to complete it!
Now the fun part!
Customization!
Creating normal buttons in React initialize a basic black text over a white/gray background.
Being the excessive person I am I decided to make the Buttons rounded, bigger, and colorful using 'Styled-Components'
As you can see below:
```javascript
const Button = styled.button`
  font-family: "Times New Roman";
  background-color: #00CED1;
  border-radius: 12px;
  padding: 20px;
  font-size: 20px;
  color: blue;
  `
  ```
And there we have it! A working Todo list straight from nothing.