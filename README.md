react survey
---

- application boiler-plated from [create-react-app](https://github.com/facebookincubator/create-react-app)

- architecture following [Erikras](https://github.com/erikras)'s [duck module proposal](https://github.com/erikras/ducks-modular-redux)

- eslinting following airbnb style

- UI elements created using [styled-components](https://github.com/styled-components/styled-components)

- demo application is deployed on [netlify](https://www.netlify.com/)

- a survey question cannot be skipped by clicking on `next` button
  - once an answer is provided, app will automatically navigate to next one, and user can use `previous` button to navigate back
  - if current survey has a saved answer, user can use `next` button to navigate instead of clicking on the same answer to move forward

- the `submit` reducer was deliberately left blank

- `mockdata` was imported via `initialstate`, but also provided `saga` implementation and `axios` to do async fetch, which is commented out
