import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { StudentService } from 'src/app/services/student.service';
import { IStudent } from 'src/app/istudent';
import { JsonpClientBackend } from '@angular/common/http';

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.css']
})
export class EditStudentComponent implements OnInit {

  istudent  = new IStudent();

  id:any;
  data:any;

  constructor(private studentService:StudentService, private route:ActivatedRoute,
    private toastr:ToastrService) { }

    form = new FormGroup({
      name:new FormControl(''),
      email:new FormControl(''),
      phone:new FormControl(''),
      address:new FormControl('')
    })

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;
    console.log(this.id);
    this.getData();
  }

  getData(){
    this.studentService.getDataById(this.id).subscribe(res => {
      this.data = res;
      this.istudent = this.data;
      this.form = new FormGroup({
        name:new FormControl(this.istudent.name),
        email:new FormControl(this.istudent.email),
        phone:new FormControl(this.istudent.phone),
        address:new FormControl(this.istudent.address)
      })
    })
  }

  updateData(){
    this.studentService.updateData(this.id,this.form.value).subscribe(res => {
      this.data = res;
      this.toastr.success(JSON.stringify(this.data.code), JSON.stringify(this.data.message),
      {
        timeOut:1000,
        progressBar:true
      })
    })
  }

}
