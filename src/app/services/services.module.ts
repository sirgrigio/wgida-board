import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatasetService } from 'app/services/dataset/dataset.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [DatasetService]
})
export class ServicesModule { }
