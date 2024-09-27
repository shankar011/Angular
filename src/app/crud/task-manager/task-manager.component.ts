import { Component, OnInit } from '@angular/core';
import { TaskService, Task } from 'src/app/task.service';

@Component({
  selector: 'app-task-manager',
  templateUrl: './task-manager.component.html',
  styleUrls: ['./task-manager.component.scss']
})
export class TaskManagerComponent implements OnInit {

  tasks:Task[]= [];
  task: Task={title:'', description:''}
  isEditing= false


  constructor(private taskService: TaskService){}

  ngOnInit(): void{
    this.loadTasks();
  }

  loadTasks():void{
    this.taskService.getTasks().subscribe(data=>{
      this.tasks = data;
    })
  }

  createTask(): void {
    if (this.task.title && this.task.description) {
      this.taskService.createTask(this.task).subscribe(() => {
        this.loadTasks();
        this.resetTask();
      });
    }
  }

  editTask(task: Task): void {
    this.task = { ...task };
    this.isEditing = true;
  }

  updateTask(): void {
    this.taskService.updateTask(this.task).subscribe(() => {
      this.loadTasks();
      this.resetTask();
    });
  }

  deleteTask(id: number): void {
    this.taskService.deleteTask(id).subscribe(() => {
      this.loadTasks();
    });
  }

  resetTask(): void {
    this.task = { title: '', description: '' };
    this.isEditing = false;
  }


}
