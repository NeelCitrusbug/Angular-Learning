import { createAction, props } from '@ngrx/store';
import {Todo} from '../../todo/todo.model'

export const addTodo = createAction(
    'Add todo',
    props<{ content:string }>()
)

export const removeTodo = createAction(
    'Remove todo',
    props<{ id: string}>()
)

export const loadTodos = createAction(
    'Load todos'
)

export const loadTodosSuccess = createAction(
    'Todo load success',
    props<{ todos:Todo[]}>()
)

export const loadTodosFailure = createAction(
    'Todo load failure',
    props<{error:string}>()
)