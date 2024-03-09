import { Component } from '@angular/core';
import { FormGroup, Validators,FormControl} from '@angular/forms';
import { UploadService } from '../upload.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent {
   formD = new FormData()
   fileName = '';
uploadForm:FormGroup =new FormGroup({
  file:new FormControl(null)
})
constructor(

  private http: HttpClient
) { }

ngOnInit(): void { }
ngOnDestroy(): void {

}


file = new FormData()
pred: any



savingFile(event: Event){
  let selectedfile = new File([], '')
  const input = event.target as HTMLInputElement;

  if (input.files && input.files.length)
    selectedfile = input.files[0];

  const formData = new FormData();
  formData.append('file', selectedfile, selectedfile.name);
  this.file = formData
}



predFunc() {
  return this.http.post<{ prediction: number }>(' http://127.0.0.1:5000/MLflask', this.file)
  .subscribe(response => {
    this.pred = response.prediction;
    this.pred = this.pred.replace(/'/g, '"')
    this.pred = JSON.parse(this.pred)
  }, error => {

    alert(error.message)
  });
}}
