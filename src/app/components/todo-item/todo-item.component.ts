import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../../models/Todo';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss'],
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo;
  @Output() deleteTodo: EventEmitter<Todo> = new EventEmitter();

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {}

  setClasses() {
    const classes = {
      todo: true,
      'is-complete': this.todo.completed,
    };
    return classes;
  }
  onToggle(todo) {
    // toggle in UI
    todo.completed = !todo.completed;
    // toggle on service
    this.todoService.toggleCompleted(todo).subscribe((res) => {
      console.log(res);
    });
  }
  onDelete(todo) {
    this.deleteTodo.emit(todo);
  }
}
