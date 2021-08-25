import { Todo } from './Todo'

export const FETCH_TODO_REQUEST = 'FETCH_TODO_REQUEST';
export const FETCH_TODO_SUCCESS = 'FETCH_TODO_SUCCESS';
export const FETCH_TODO_FAILURE = 'FETCH_TODO_FAILURE';

interface TodoAsync {
  loading: boolean;
  todos: Todo[];
  error: string;
}