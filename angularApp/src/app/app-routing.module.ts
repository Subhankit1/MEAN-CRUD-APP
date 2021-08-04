import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddStudentComponent } from './components/add-student/add-student.component';
import { EditStudentComponent } from './components/edit-student/edit-student.component';
import { StudentComponent } from './components/student/student.component';

const routes: Routes = [
  {
    path:'',component:StudentComponent
  },
  {
    path:'add-student',component:AddStudentComponent
  },
  {
    path:'edit/:id',component:EditStudentComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
