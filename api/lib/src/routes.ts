import express, { Express, Request, Response, Router } from 'express';
import { AuthController } from './controllers/auth.controller';
import { QuizController } from './controllers/quiz.controller';
import { Method } from './enums/method.enum';

const routes = [
    {
        path: '/healthy',
        method: Method.GET,
        controller: (req: Request, res: Response) => { res.send('Healthy')  }
    },
    {
        path: '/login',
        method: Method.POST,
        controller: AuthController.loginUser
    },
    {
        path: '/register',
        method: Method.POST,
        controller: AuthController.registerUser
    },
    {
        path: '/get-questions',
        method: Method.GET,
        controller: QuizController.getQuestions
    },
    {
        path: '/check-answers',
        method: Method.POST,
        controller: QuizController.checkAnswers
    }
]

export class Routes {
    static router: Router = express.Router();

    static init (app: Express) {
        routes.forEach(route => {
            switch (route.method) {
                case Method.GET:
                    app.get(route.path, route.controller);
                    break;
                case Method.POST:
                    app.post(route.path, route.controller);
                    break;
                case Method.PUT:
                    app.put(route.path, route.controller);
                    break;
                case Method.DELETE:
                    app.delete(route.path, route.controller);
                        break;
                default:
                    break;
            };
        });
    }
}