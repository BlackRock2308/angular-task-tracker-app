import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Task } from 'src/app/Task';
import { TaskService } from 'src/app/services/task.service';
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  @Output() onAddTask : EventEmitter<Task> = new EventEmitter(); 

  text !: string;
  day !: string;
  reminder: boolean = false;
  showAddTask : Boolean = false;
  subscription : Subscription


  constructor(private taskService : TaskService, private uiService : UiService,  ) { 
    this.subscription = this.uiService
    .onToggle()
    .subscribe
    ((value) => (this.showAddTask = value) );
  }

  ngOnInit(): void {
  }


  onSubmit(){
    if (!this.text){
      alert('Please add a Task');
      return;
    }

    const newTask = {
      text :  this.text ,
      day : this.day ,
      reminder : this.reminder,
    }
    
    this.text = "";
    this.day = "";
    this.reminder = false;
    
    this.onAddTask.emit(newTask)
    
    console.log(newTask);
  }
  
  

  

}
