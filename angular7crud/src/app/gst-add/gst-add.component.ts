import { Component, OnInit } from '@angular/core';
// imports to set up the form
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';

@Component({
  selector: 'app-gst-add',
  templateUrl: './gst-add.component.html',
  styleUrls: ['./gst-add.component.css']
})
export class GstAddComponent implements OnInit {

  angForm: FormGroup;
  constructor(private fb: FormBuilder) { 
    this.createForm();
  }

  createForm() {
    this.angForm = this.fb.group({
      // hold the three form entries, make sure they're not blank
      person_name: ['', Validators.required],
      business_name: ['', Validators.required],
      business_gst_number: ['', Validators.required]
    });
  }


  ngOnInit() {
  }

}
