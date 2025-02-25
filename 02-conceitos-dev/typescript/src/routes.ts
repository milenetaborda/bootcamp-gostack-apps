import { Request, Response } from "express";
import createUser from "./services/CreateUser";

export function helloWorld(request: Request, response: Response) {
  const user = createUser({
    name: 'Milene Taborda',
    email: 'milenetaborda1@outlook.com',
    password: '123456',
    techs: [
      'Node.js',
      'ReactJS',
      'React Native',
      {title: 'Javascript', experience: 100}
    ]
  });

  return response.json({ message: 'Hello World' })
};
