/*
 * mock received data from api calls
 */
const mockdata = [
  {
    id: 'survey1',
    text: 'some survey question 1',
    options: {
      1: 'good', 2: 'okay', 3: 'nice',
    },
  }, {
    id: 'survey2',
    text: 'some survey question 2',
    options: {
      1: 'bad', 2: 'hmmm', 3: 'okay',
    },
  }, {
    id: 'survey3',
    text: 'some survey question 3',
    options: {
      1: 'sure', 2: 'nice', 3: 'okay',
    },
  },
  /* { ... } */
];

export default mockdata;
