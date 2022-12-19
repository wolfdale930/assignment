import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  constructor(private http: HttpClient) { }

  async getQuiz() {
    const response: any = await firstValueFrom(this.http.get(`${environment.apiUrl}/get-questions`));
    if (response && response.length > 0) {
      for (const iterator of response) {
        iterator['selectedAnswer'] = '';
      }
    }
    return response;
  }

  async checkAnswers(answers: any) {
    const response: any = await firstValueFrom(this.http.post(`${environment.apiUrl}/check-answers`, answers));
    return response;
  }
}
