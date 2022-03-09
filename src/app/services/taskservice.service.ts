import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskserviceService {

  private tasks: string[] = [];
  private completedTasks: string[] = [];
  constructor() {
    this.tasks.push("Tarea 1","Tarea 3");
    this.completedTasks.push("Tarea 2","Tarea 4");
   }

   public addTask(task: string){
    this.tasks.push(task); //Añade la tarea a tasks
   }

   public removeTask(pos: number){
      this.tasks.splice(pos, 1); //elimina la tarea de tasks
   }

   public getTasks(){
     return this.tasks; //obtiene la lista de tasks
   }

   public completeTask(pos: number){
    this.completedTasks.push(this.tasks[pos]) //agrega la tarea a tareas completadas
    this.removeTask(pos);
   }

   ///////////////////////////////////////////////////////////////////////////////////
   public getCompletedTasks(){
     return this.completedTasks; //regresa las tareas completadas
   }

   public removeCompletedTask(pos: number){
     this.completedTasks.splice(pos, 1); //elimina una tarea de las tareas completadas
     //this.removeCompletedTask(pos); //elimina la tarea de las tareas
   }

   public unCompleteTask(pos: number){
     this.tasks.push(this.completedTasks[pos]) //regresa la tarea completada a la lista de tareas
     this.removeCompletedTask(pos); //elimina la tarea de las tareas completadas
   }
}
