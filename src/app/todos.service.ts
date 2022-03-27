import { Injectable } from "@angular/core";
import { Todo } from "./models/todo"

@Injectable({
  providedIn: "root"
})

export class TaskService {

  private listTask: Todo[] = []

  getTaskList() {
    return this.listTask;
  }

  addTask(nameTask: string) {
    this.listTask.push({
      id: this.listTask.length,
      title: nameTask,
      completed: false
    });
  }

  completedTask(id: number) {
    let elementCompleted = this.listTask.find(item => item.id == id)
    elementCompleted!.completed = true
  }
}
