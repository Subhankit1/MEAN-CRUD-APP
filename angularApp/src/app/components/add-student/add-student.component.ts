import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/services/student.service';
import { ToastrService } from 'ngx-toastr';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {

  form!: FormGroup;
  submitted=false;
  data:any;

  constructor(private studentService:StudentService, private formBuilder:FormBuilder, 
    private toastr:ToastrService, private router:Router) { }

  createForm(){
    this.form = this.formBuilder.group({
      name:['',Validators.required],
      email:['',[Validators.required,Validators.email]],
      phone:['',Validators.required],
      address:['',Validators.required]
    });
  }

  ngOnInit(): void {
    this.createForm();
  }
  
  get f(){
    return this.form.controls;
  }
  insertData(){
    this.submitted=true;
    if(this.form.invalid){
      return;
    }

    this.studentService.insertData(this.form.value).subscribe(res => {
      this.data = res;
      this.toastr.success(JSON.stringify(this.data.code), JSON.stringify(this.data.message),
      {
        timeOut:1000,
        progressBar:true
      });
      this.router.navigateByUrl('/');
    })
  }

}
