import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/todos.service';
import { Todo } from 'src/app/models/todo';

@Component({
  templateUrl: './completati.page.html',
  styleUrls: ['./completati.page.scss']
})

export class CompletatiPage implements OnInit{

  listTask: Todo[] = []

  constructor (private taskService: TaskService){}

  getTaskList(){
    setTimeout(() => {
      this.listTask = this.taskService.getTaskList()
    }, 2000);
  }

  ngOnInit(){
    this.getTaskList()
  }
}
