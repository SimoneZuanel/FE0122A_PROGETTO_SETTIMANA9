import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/todos.service';
import { Todo } from 'src/app/models/todo';

@Component({
  templateUrl: './todos.page.html',
  styleUrls: ['./todos.page.scss']
})

export class TodosPage implements OnInit {

  nameTask!: string
  listTask: Todo[] = []

  constructor (private taskService: TaskService){}

  getTaskList(){
      this.listTask = this.taskService.getTaskList()
  }

  addTask(nameTask: string){
    setTimeout(() => {
      this.taskService.addTask(nameTask)
    }, 2000);
    this.nameTask.trim()
    this.nameTask = ""
  }

  completedTask(id: number) {
    setTimeout(() => {
      this.taskService.completedTask(id)
    }, 2000);
  }

  ngOnInit(){
    this.getTaskList()
  }
}
