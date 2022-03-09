import { Component } from '@angular/core';
import { TaskserviceService} from "../services/taskservice.service"

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  public tasks: string[];

  constructor(private taskService:TaskserviceService) {
    
    this.tasks = this.taskService.getCompletedTasks();
  }

  


  public finishTask(pos: number){
    this.taskService.removeCompletedTask(pos);
    this.tasks = this.taskService.getCompletedTasks();
  }

  public uncompleteTask(pos: number){
    this.taskService.unCompleteTask(pos);
    this.tasks = this.taskService.getCompletedTasks();
  }
}
