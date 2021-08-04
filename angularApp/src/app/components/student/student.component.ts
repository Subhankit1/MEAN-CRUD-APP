import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/services/student.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  public students :any;
  data : any;

  constructor(private studentService:StudentService, private toastr:ToastrService) { }

  ngOnInit(): void {
    this.getStudentsData();
  }

  getStudentsData(){
    this.studentService.getData().subscribe(res => {
      console.log(res);
      this.students = res;
    });
  }

  deleteData(id:any){
    this.studentService.deleteData(id).subscribe(res => {
      this.data = res;
      this.toastr.error(JSON.stringify(this.data.code),JSON.stringify(this.data.message),
      {
        timeOut:1000,
        progressBar:true
      });
      this.getStudentsData();
    });
  }

}
