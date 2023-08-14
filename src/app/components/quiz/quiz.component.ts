import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Answers, Option } from '../../core/quiz-types';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {

  constructor() { }
  @Input() answers: Array<Answers> = [];
  @Input() isAnswers: boolean = false;
  @Input() isResult: boolean = false;
  @ViewChild('quizForm', { static: true }) public quizForm!: NgForm;

  ngOnInit(): void {
  }
  select(index: number, options: Array<Option> = []) {
    options.map((option: Option) => (option.isChecked = false));
    options[index].isChecked = true;
  }

}
