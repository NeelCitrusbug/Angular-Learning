import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
    addTodo,
    removeTodo,
    loadTodos,
    loadTodosSuccess,
    loadTodosFailure,
} from './todo.actions';
import { TodoService } from '../../todo/todo.service';
import { of, from } from 'rxjs';
import { switchMap, map, catchError, withLatestFrom } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { selectAllTodos } from './todo.selector';
import { AppState } from '../app.state';

@Injectable()
export class TodoEffects {
    constructor(
        private actions$: Actions,
        private store: Store<AppState>,
        private todoService: TodoService
    ) { }

    loadTodos$ = createEffect(() =>

        this.actions$.pipe(
            ofType(loadTodos),
            switchMap(() =>
                from(this.todoService.getTodos()).pipe(
                    map((todos) => loadTodosSuccess({ todos: todos })),
                    catchError((error) => of(loadTodosFailure({ error })))
                )
            )
        )

    )


    saveTodos$ = createEffect(() => 
        this.actions$.pipe(
            ofType(addTodo,removeTodo),
            withLatestFrom(this.store.select(selectAllTodos)),
            switchMap(([actions,todos]) => from(this.todoService.saveTodos(todos)))
        ),{ dispatch: false }
    )

}