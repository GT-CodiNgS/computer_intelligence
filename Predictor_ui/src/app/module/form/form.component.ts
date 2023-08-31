import { Component, OnInit } from '@angular/core';
import { CounterService } from '../../core/service/counter.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CountDTO } from '../../core/dto/CountDTO';
import axios from 'axios';
import * as moment from 'moment';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  countForm!: FormGroup;
  result: any;
  btnEnable: boolean = true;
  dateFinal: any;

  constructor(
    private counterService: CounterService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.countForm = this.formBuilder.group({
      startDate: ['', Validators.required],
      count: ['', Validators.required],
      isExcludeWeekends: [false, Validators.required],
      isExcludeHolidays: [false, Validators.required],
    });
  }

  async generate() {
    this.btnEnable = false;
    this.result = null;

    this.dateFinal = moment(this.countForm.get('startDate')?.value);
    this.dateFinal = this.dateFinal.format('YYYY-MM-DD');

    const countDTO = new CountDTO(
      this.dateFinal,
      this.countForm.get('count')?.value,
      'LK',
      this.countForm.get('isExcludeWeekends')?.value,
      this.countForm.get('isExcludeHolidays')?.value
    );

    await axios
      .post('http://localhost:5000/hello')
      .then((response) => {
        if (response && response.data) {
          this.result = response.data;
          this.btnEnable = true;
        } else {
          console.error('Invalid response received. Response:', response);
        }
      })
      .catch((error) => {
        console.error('API call failed:', error);
      });
    this.btnEnable = true;
  }
}
