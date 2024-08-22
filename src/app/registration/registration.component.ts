import { Component } from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent {
  name:any;
  gender:any;
  address:any;
  contact:any;
  data1:any=[];
  data2:any=[];
  data3:any=[];
  filldata(){
    return this.name && this.gender && this.address && this.contact;
  }

  
  
  submit(){
    if(this.filldata()){
      let obj={
        name:this.name,
        gender:this.gender,
        address:this.address,
        contact:this.contact
      }
      this.data1.push(obj);
      this.clear()
    }
    else{
      alert("Please check All Data are filled or not");
    }
    
  }

  clear(){
    this.name="" ,
    this.gender="",
    this.address="",
    this.contact=""
  }

  submitItem(listNumber: number, index: number) {
    if (listNumber === 1) {
      const item = this.data1.splice(index, 1)[0];
      this.data2.push(item);
    } else if (listNumber === 2) {
      const item = this.data2.splice(index, 1)[0];
      this.data3.push(item);
    }
  }

  deleteItem(listNumber: number, index: number) {
    if (listNumber === 1) {
      const confirmDelete = confirm('Are you sure you want to delete this record?');
      if (confirmDelete) {
        this.data1.splice(index, 1);
      }
    } else if (listNumber === 2) {
      const item = this.data2.splice(index, 1)[0];
      this.data1.push(item);
    } else if (listNumber === 3) {
      const item = this.data3.splice(index, 1)[0];
      this.data2.push(item);
    }
    
  }

  reset(){
    this.clear();
  }

}

