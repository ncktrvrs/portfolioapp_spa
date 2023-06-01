import projects from '../data/projects.json';
import messages from '../data/messages.json'

export function getProjects() {
  return Promise.resolve(projects);
}

export function getMessages() {
  return Promise.resolve(messages);
}