import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../state/app.state';
import { addTodo, loadTodos, removeTodo } from '../state/todos/todo.actions';
import { selectAllTodos } from '../state/todos/todo.selector';
import { Todo } from './todo.model';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  todo = ''
  allTodos$ = this.store.select(selectAllTodos);

  constructor(private store: Store<AppState>) {}
  
  ngOnInit(){
    this.store.dispatch(loadTodos())
  }

  addTodo() {
    this.store.dispatch(addTodo({content:this.todo}))
    this.todo = '';
  }

  removeTodo(todo: Todo) {
    this.store.dispatch(removeTodo({id:todo.id}))
    this.todo = '';
  }
}
