import { Component, OnInit } from '@angular/core';
import { PredictService } from '../../core/service/predict.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TweetDto } from 'src/app/core/dto/TweetDto';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  tweetForm!: FormGroup;
  result: any;
  btnEnable: boolean = true;
  tweet: string = '';

  constructor(
    private predictService: PredictService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.tweetForm = this.formBuilder.group({
      tweet: ['', Validators.required],
    });
  }

  async generate() {
    this.btnEnable = false;
    this.result = null;
    if (this.tweetForm.valid) {
      const data: TweetDto = {
        tweet: JSON.stringify(this.tweetForm.get('tweet')?.value) || '',
      };
      this.predictService.generate(data).subscribe((response: any) => {
        this.result = response.prediction;
      });

      this.btnEnable = true;
    }
    this.btnEnable = true;
  }
}
