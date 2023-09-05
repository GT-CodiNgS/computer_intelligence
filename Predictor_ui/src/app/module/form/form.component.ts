import { Component, OnInit } from '@angular/core';
import { PredictService } from '../../core/service/predict.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TweetDto } from 'src/app/core/dto/TweetDto';
import { MatSnackBar } from '@angular/material/snack-bar';

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
  HORIZONTAL_POSITION: any = 'right';
  VERTICAL_POSITION: any = 'top';
  DURATION: any = 3000;
  constructor(
    private predictService: PredictService,
    private formBuilder: FormBuilder,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.tweetForm = this.formBuilder.group({
      tweet: ['', [Validators.required, Validators.maxLength(50)]],
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
        this.snackBar.open('Prediction Successfully.', '', {
          duration: this.DURATION,
          horizontalPosition: this.HORIZONTAL_POSITION,
          verticalPosition: this.VERTICAL_POSITION,
          politeness: 'assertive',
          panelClass: ['mat-mdc-snack-bar-container-success'],
        });
      });

      this.btnEnable = true;
    } else {
      this.snackBar.open('Please fill required fields.', '', {
        duration: this.DURATION,
        horizontalPosition: this.HORIZONTAL_POSITION,
        verticalPosition: this.VERTICAL_POSITION,
        // politeness: 'assertive',
        panelClass: ['mat-mdc-snack-bar-container-error'],
      });
    }

    this.btnEnable = true;
  }
}
