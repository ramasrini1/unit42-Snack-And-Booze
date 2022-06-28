### Conceptual Exercise

Answer the following questions below:

- What is the purpose of the React Router?
React Router is a fully-featured client and server-side routing library for React, a JavaScript library for building user interfaces. React Router runs anywhere React runs; on the web, on the server with node.js, and on React Native.

React Router, and dynamic, client-side routing, allows us to build a single-page web application with navigation without the page refreshing as the user navigates. React Router uses component structure to call components, which display the appropriate information.

By preventing a page refresh, and using Router or Link, which is explained in more depth below, the flash of a white screen or blank page is prevented. This is one increasingly common way of having a more seamless user experience. React router also allows the user to utilize browser functionality like the back button and the refresh page while maintaining the correct view of the application.

- What is a single page application?
A single-page application (SPA) is a web application or website that interacts with the user by dynamically rewriting the current web page with new data from the web server, instead of the default method of a web browser loading entire new pages. The goal is faster transitions that make the website feel more like a native app.

In a SPA, a page refresh never occurs; instead, all necessary HTML, JavaScript, and CSS code is either retrieved by the browser with a single page load or the appropriate resources are dynamically loaded and added to the page as necessary, usually in response to user actions.

Single Page Application, after the initial page load, the server doesn’t send any more HTML to you —  you download it all right at the beginning.

The server sends you a shell page and your browser renders the user interface (UI).

Then, as you click around, the SPA sends back requests for data and markup, the server shoots back the raw materials needed, and your browser takes it and renders an updated UI — interchanging pieces without ever needing to refresh the full page. This quick interchangeability makes SPAs incredibly useful on pages that are highly navigated and use repeating templates.

- What are some differences between client side and server side routing?
Server-Side Routing
“Server-side routing” is the traditional pattern
Clicking a <a> link causes browser to request page & replace entire DOM
Server decides what HTML to return based on URL requested.

It does let us show different “pages”
All in the front-end, without loading new pages from server
But we don’t get
A different URL as we move around “pages”
The ability to use the back/forward browser buttons ⬅️ ➡️ 😭
Any way to bookmark a “page” on the site 

Client-Side Routing: What?
Client-side routing handles mapping between URL bar and page user sees via browser rather than via server.
Sites that exclusively use client-side routing are single-page applications.
We use JavaScript to manipulate the URL bar with a Web API called History


- What are two ways of handling redirects with React Router? When would you use each?
In React Router, there are two ways to redirect:
1) Using the <Redirect> component
Useful for “you shouldn’t have gotten here, go here instead”
2) Calling .push method on the history object
Useful for “you finished this, now go here”
Use history.push in response to user actions (e.g. submitting a form)


- What are two different ways to handle page-not-found user experiences using React Router? 
function Routes() {
  return (
    <Switch>
      <Route exact path="/about"><About /></Route>
      <Route exact path="/contact"><Contact /></Route>
      <Route exact path="/blog/:slug"><Post /></Route>
      <Route exact path="/blog"><BlogHome /></Route>
      <Route exact path="/"><Home /></Route>
      <Route><NotFound /></Route>
    </Switch>
  );
}
For exclusive routing: wrap all of Route components in Switch component.
Switch finds first child Route that matches and renders only that.

When you wrap your Route components inside of a Switch, only the first matching 
Route will be rendered. This means that the ordering of your routes can be 
incredibly important. 
For example, if you put the route with the path of “/” at the top, 
you’ll only ever see the home page:
If none of the routes match <NotFound/> component is display

or just use link
  <Link to="/oops">Let's go</Link>
  If you click this link you will be showed a blank page, but the correct would be a 404 page

- How do you grab URL parameters from within a component using React Router?
The useParams hook stores info on the URL parameters.

<Route exact path="/food/:name">
  <Food />
</Route>

The url of /food/sushi the useParams hook returns an object
the key of the object in this example will be name
the value will be sushi.

- What is context in React? When would you use it?
Context: Universal data across your application
Data accessible across all components.
 To Avoid Prop drilling / tunneling
 Less repetition and useful for global themes, shared data.

- Describe some differences between class-based components and function
  components in React.
Class Component: Every component extends React.Component.
Class components must have a render method describing what the component should render.
(For function components, this is just the return value.)
With class components we don’t use hooks. Instead, state is initialized in the constructor.
With class components, state is changed with the instance method setState. This works similarly to the function returned from useState.


- What are some of the problems that hooks were designed to solve?

Hooks is to simplify the actual logic, React provides only a reduced set, with the flexibility to respond to various situations in the lifecycle of an application and the possibility to build our own as well.
React provides three basic hooks that meet the usual needs for implementing a lifecycle in a class component:
1) useState
2) useEffect
3) useContext




What is a Hook?
A Hook is a javascript function that allows to create/access React state and lifecycles and that, in order to ensure the stability of the application, must be used following two basic rules:

Must be called at the top level of the application - A hook should never be called inside loops, conditionals or nested functions, as the calling order of hooks must always be the same to ensure that the result is predictable during rendering. This top-level-only usage is what ensures that React's internal state is correctly preserved between different calls of the same hook.

Must be called in functions or other custom React hooks - A hook should never be called outside of a React function or other custom hook, so that the component's state logic is clearly visible from the rest of the code for the scope set by React.

Hooks are a new addition to React in version 16.8 that allows you use state and other React features, like lifecycle methods, without writing a class.

Hooks are designed to maintain state, context etc