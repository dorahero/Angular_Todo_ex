import { Component, OnInit } from '@angular/core';

// Service
import { TodoListService } from './todo-list.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  constructor(private todoListService: TodoListService) { }

  ngOnInit(): void {
  }
  /**
   * 新增代辦事項
   *
   * @param {HTMLInputElement} inputRef - 輸入框的元素實體
   * @memberof TodoListComponent
   */
  addTodo (inputRef: EventTarget  | null): void {
    if (!inputRef) {
      return;
    }
    const inputRef2 = inputRef as HTMLInputElement;
    const todo = inputRef2.value.trim();
    if (todo) {
      this.todoListService.add(todo);
      inputRef2.value = '';
    }
  }

  getList(): string[] {
    return this.todoListService.getList();
  }

}
