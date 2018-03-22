export class Feedback {
  constructor(
    public feedbackId: number,
    public name: string,
    public email: string,
    public gender: string = 'M',
    public message: string,
    public date: Date
  ) {}
}
