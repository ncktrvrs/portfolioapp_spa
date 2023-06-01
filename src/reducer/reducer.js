/**
 * @typedef {Object} Action
 * @property {string} type
 * @property {*} payload
 */

export const initialState = {
  projects: [],
  initialProjects: [],
  view: "grid",
  messages: [],
  isModalOpened: false,
};

// action's types
const LOAD_PROJECTS = "[PROJECTS] Load PROJECTS";
const ADD_PROJECT = "[PROJECTS] Add PROJECT";
const DELETE_PROJECT = "[PROJECTS] Delete PROJECT";
const CHANGE_PROJECTS_VIEW = "[PROJECTS] Change projects VIEW";
const FILTER_PROJECTS_BY_VALUE = "[PROJECTS] Filter projects by search value";

const LOAD_MESSAGES = "[MESSAGES] Load MESSAGES";

const TOGGLE_ADD_MODAL_WINDOW = "[MODAL WINDOW] Toggle MODAL WINDOW"

// actions
/**
 * @param {Array} projects - projects array
 * @returns {Object} action
 */
export const loadProjects = (projects) => ({
  type: LOAD_PROJECTS,
  payload: { projects },
});

/**
 * @param {Object} project - new project
 * @param {number} project.id - project id
 * @param {string} project.status - project status
 * @param {string} project.date - project date
 * @param {string} project.title - project title
 * @param {string} project.type - project type
 * LOAD_PROJECTS | ADD_PROJECT | DELETE_PROJECT
 * @param {number} project.days_before_deadline - project deadline
 * @param {Object} project.participants - project participants
 * @returns {Object} action
 */
export const addProject = (project) => ({
  type: ADD_PROJECT,
  payload: { project },
});

/**
 * @param {number} projectId - projectId
 * @returns {Object} action
 */
export const deleteProject = (projectId) => ({
  type: DELETE_PROJECT,
  payload: { projectId },
});

/**
 * @param {String} view - view type
 * @returns {Object} action
 */
export const toggleProjectsView = (view) => ({
  type: CHANGE_PROJECTS_VIEW,
  payload: { view },
});

/**
 * @param {String} searchValue - value for filtration
 * @returns {Object} action
 */
export const filterProjectsBySearchValue = (searchValue) => ({
  type: FILTER_PROJECTS_BY_VALUE,
  payload: { searchValue },
});

/**
 * @param {Array} messages - messages array
 * @returns {Object} action
 */
export const loadMessages = (messages) => ({
  type: LOAD_MESSAGES,
  payload: { messages },
});

/**
 * @returns {Object} action type
 */
export const toggleModalWindow = () => ({
  type: TOGGLE_ADD_MODAL_WINDOW,
});

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_PROJECTS:
      return {
        ...state,
        projects: [...action.payload.projects],
      };
    case ADD_PROJECT:
      return {
        ...state,
        projects: [...state.projects, action.payload.project],
      };
    case DELETE_PROJECT:
      return {
        ...state,
        projects: state.projects.filter(
          (project) => project.id !== action.payload.projectId
        ),
      };
    case CHANGE_PROJECTS_VIEW:
      return {
        ...state,
        view: action.payload.view === "grid" ? "list" : "grid",
      };
    case FILTER_PROJECTS_BY_VALUE:
      return {
        ...state,
        initialProjects: state.initialProjects.length
          ? state.initialProjects
          : state.projects,
        projects: action.payload.searchValue
          ? state.projects.filter((project) =>
              project.title
                .toLowerCase()
                .includes(action.payload.searchValue.toLowerCase())
            )
          : state.initialProjects,
      };
    case LOAD_MESSAGES:
      return {
        ...state,
        messages: [...action.payload.messages],
      };
    case TOGGLE_ADD_MODAL_WINDOW:
      return {
        ...state,
        isModalOpened: !state.isModalOpened,
      };
    default:
      return state;
  }
};
