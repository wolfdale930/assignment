import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/services/auth.service';
import { QuizService } from '../services/quiz.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  quizes: any;
  quizResult: any;
  totalMarks: number = 0;

  constructor(private quizService: QuizService){}

  async ngOnInit(): Promise<void> {
    this.quizes = await this.quizService.getQuiz();
  }

  async submitAnswers() {
    const response = await this.quizService.checkAnswers(this.quizes);
    if (response && response.length > 0) {
      this.quizResult = response;
      this.totalMarks = this.quizResult.reduce((acc:any, current:any) => acc + current.marks, 0);
    }
  }

}
