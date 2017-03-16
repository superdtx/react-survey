// actions
const NEXT = 'cra/surveys/NEXT';
const PREV = 'cra/surveys/PREV';

// reducers
export default function reducer(surveys = {}, action = {}) {
  switch (action.type) {
    case PREV:
      // todo: edge case
      return Object.assign({}, surveys, {
        currActive: surveys.currActive - 1,
      });
    case NEXT:
      // todo: submit
      console.log(surveys);
      const currentSurvey = Object.assign({}, surveys.mockSurveys[action.id], {
        activeOption: action.index,
      });
      const mockSurveys = surveys.mockSurveys.slice();
      mockSurveys[action.id] = currentSurvey;
      return Object.assign({}, surveys, {
        currActive: surveys.currActive + 1,
        mockSurveys,
      });
    default: return surveys;
  }
}

// action creators
export function prevSurvey() {
  return {
    type: PREV,
  };
}
export function nextSurvey(index, id) {
  return {
    type: NEXT,
    index,
    id,
  };
}