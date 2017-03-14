// actions
const LOAD = 'cra/foo/LOAD';
const CREATE = 'cra/foo/CREATE';
const CREATE_SUCCEEDED = 'create-redux-app/foo/CREATE_SUCCEEDED';
const CREATE_FAILED = 'create-redux-app/foo/CREATE_FAILED';
const UPDATE = 'create-redux-app/foo/UPDATE';
const REMOVE = 'create-redux-app/foo/REMOVE';

// reducers
export default function reducer(foo = {}, action = {}) {
  switch (action.type) {
    case CREATE:
      return foo;
    case CREATE_SUCCEEDED:
      return foo;
    case CREATE_FAILED:
      return foo;
    default: return foo;
  }
}

// action creators
export function loadFoo() {
  return { type: LOAD };
}

export function createFoo() {
  return { type: CREATE };
}

export function createFooSucceeded() {
  return { type: CREATE_SUCCEEDED };
}

export function createFooFailed() {
  return { type: CREATE_FAILED };
}

export function updateFoo() {
  return { type: UPDATE };
}

export function removeFoo() {
  return { type: REMOVE };
}
