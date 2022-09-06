# SENG-LIVE-080822 Phase 2 - React

## Phase Level Objectives

- Design a React component hierarchy based on a wireframe
- Use React to create components that interact with an API
- Incorporate client-side routing into a single-page application in React


| Lecture | Notes | Videos | Starter | Solution |
| ------- | :---: | ------ | ------- | -------- |
| 1. (08/29/22) Components & Props     |  [Notes](https://docs.google.com/document/d/1PaEUsoVruIU3pSUOz9jlsfVhxrwB1N7XPYbmak03wKg/edit?usp=sharing)     |  [Video](https://vimeo.com/744367353)      |    [Starter](https://github.com/learn-co-students/SENG-LIVE-080822-Phase-2-React/tree/main/01_components_and_props)     |   [Solution](https://github.com/learn-co-students/SENG-LIVE-080822-Phase-2-React/commit/a5b06bffd27af6ae7e4029f828110b1bbccdd2a8)       |
| 2. (08/30/22) State & Events     |  [Notes](https://docs.google.com/document/d/1PaEUsoVruIU3pSUOz9jlsfVhxrwB1N7XPYbmak03wKg/edit?usp=sharing)     |   [Video](https://vimeo.com/744754836)     |    [Starter](https://github.com/learn-co-students/SENG-LIVE-080822-Phase-2-React/tree/main/02_state_and_events%20)     |    [Solution](https://github.com/learn-co-students/SENG-LIVE-080822-Phase-2-React/commit/bc1b41188072551f044984588e400e2ccf8829eb), [Local variables vs state variables](https://codesandbox.io/s/counter-state-example-0r8stb?file=/src/App.js), [SmartHome app - Passing State as Props](https://codesandbox.io/s/vigilant-minsky-iiykrb)      |
| 3. (08/31/22) Information Flow     |  [Notes](https://docs.google.com/document/d/1PaEUsoVruIU3pSUOz9jlsfVhxrwB1N7XPYbmak03wKg/edit?usp=sharing)     |  [Video](https://vimeo.com/745155615)      |   [Starter](https://github.com/learn-co-students/SENG-LIVE-080822-Phase-2-React/tree/main/03_information_flow)      |    [Solution](https://github.com/learn-co-students/SENG-LIVE-080822-Phase-2-React/compare/main...03_solution), [SmartHome app with clickable bulbs](https://codesandbox.io/s/smarthome-with-clickable-bulbs-woyctp), [SmartHome app with individually clickable bulbs](https://codesandbox.io/s/laughing-babycat-v86foy?file=/src/BulbGroup.js)      |
| 4. (09/01/22) Forms     |   [Notes](https://docs.google.com/document/d/1PaEUsoVruIU3pSUOz9jlsfVhxrwB1N7XPYbmak03wKg/edit?usp=sharing)    |   [Video](https://vimeo.com/745545831)     |   [Starter](https://github.com/learn-co-students/SENG-LIVE-080822-Phase-2-React/tree/main/04_react_forms)      |  [Solution](https://github.com/learn-co-students/SENG-LIVE-080822-Phase-2-React/compare/main...04_solution), [Project Showcase solution with alternative approach to managing formState (multiple pieces of state instead of object)](https://github.com/learn-co-students/SENG-LIVE-080822-Phase-2-React/commit/bb42e9da2043e9abb5c60859ba21a52e0f1360ae) [controlled form with single state object](https://codesandbox.io/s/controlled-form-with-formstate-object-080822-58jlp5?file=/src/App.js:815-893), [controlled form with individual pieces of state](https://codesandbox.io/s/controlled-form-with-individual-pieces-of-state-pbjpe4?from-embed)        |
| 5. (09/06/22) Side Effects & Data Fetching     |  [Notes](https://docs.google.com/document/d/1PaEUsoVruIU3pSUOz9jlsfVhxrwB1N7XPYbmak03wKg/edit?usp=sharing)     |   [Video](https://vimeo.com/747035980)     |   [Starter](https://github.com/learn-co-students/SENG-LIVE-080822-Phase-2-React/tree/main/05_side_effects_and_data_fetching)      |   [Solution](https://github.com/learn-co-students/SENG-LIVE-080822-Phase-2-React/compare/main...05_solution), [useEffect cleanup demo](https://codesandbox.io/s/useeffect-cleanup-ig17kd?file=/src/Timer.js)       |
| 6. (09/07/22) PATCH & DELETE     |   [Notes](https://docs.google.com/document/d/1PaEUsoVruIU3pSUOz9jlsfVhxrwB1N7XPYbmak03wKg/edit?usp=sharing)    |   [Video](#)     |    [Starter](#)     |   [Solution](#)       |
| 7. (09/12/22) Client-Side Routing     |   [Notes](https://docs.google.com/document/d/1PaEUsoVruIU3pSUOz9jlsfVhxrwB1N7XPYbmak03wKg/edit?usp=sharing)    |    [Video](#)    |   [Starter](#)      |    [Solution](#)      |
| 8. (09/13/22) Styled Components     |   [Notes](https://docs.google.com/document/d/1PaEUsoVruIU3pSUOz9jlsfVhxrwB1N7XPYbmak03wKg/edit?usp=sharing)    |    [Video](#)    |   [Starter](#)      |    [Solution](#)      |

## 1: Components and Props
### SWBATs:
- Review the benefits of React over Vanilla JS 
- Review the difference between HTML and JSX
- Review the importance of Components
- Review how a component is written
- Explain what props are and how to create them
- Recognize best practices when writing components and props
- Observe how to render multiple components from a list
### Lecture Topics:
- JSX
- Components
- Props
- Destructuring


## 2: State & Events

### SWBATs:
- Explain the importance of state
- Explain the difference between state and props
- Observe how to use the useState hook
- Observe how to use DOM events in React
### Lecture Topics:
- Creating & Updating State
- Events
- Callbacks
- useState


## 3: Information Flow
### SWBATs:
- Define the term “lifting state”
- Recognize the pattern for changing state in a parent component from a child component
- Explain the role that callback functions play in changing parent state
- Observe how we can render reusable components that invoke different callback functions after an event
- Recognize destructured props and how to work with them
### Lecture Topics:
- Callback functions as props
- Changing parent state
- Reusing components w/ different behaviors

## 4: Forms
### SWBATs:
- Explain the difference between a controlled and uncontrolled input
- Explain why controlled inputs are preferred by the React community
- Review how to use callback functions with events in React
- Review how to change parent state from a child component
### Lecture Topics:
- Controlled vs uncontrolled inputs
- Forms

## 5: Side Effects & Data Fetching

### SWBATs:
- Explain what a side effect is
- Observe how React manages side effects with the useEffect hook
- Observe how to use the useEffect hook to fetch data on page load
- Observe how to send a POST request via form
- Review changing parent state
### Lecture Topics:
- useEffect
- Dependency array
- fetch => GET & POST

## 6: PATCH & DELETE
### SWBATs:
- Observe how to send a PATCH & DELETE request
- Review changing parent state
### Lecture Topics:
- fetch => PATCH & DELETE

## 7: Client Side Routing

### SWBATs:
- Review the difference between server-side and client-side routing
- Observe a refactor to include client-side routing using React Router V5
- Explain what a nested route is
- Observe how to handle nested client-side routes 
### Lecture Topics:
- React Router

## 8: (Optional) Styled Components
### SWBAT:
- Observe how styled-components are used for managing and organizing component styles
- Observe how to pass props (i.e., as, theme) to dynamically render CSS for styled components
### Lecture Topics:
- Styled Components
