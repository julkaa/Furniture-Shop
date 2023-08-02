
export class ModalDialogConfig {
  isError = false;
  isClose = true;
  isQuestion = false;

  constructor() {
  }

  public setIsError(isError: boolean): void {
    this.isError = isError;
  }

  public setIsClose(isClose: boolean): void {
    this.isClose = isClose;
  }

  public setIsQuestion(isQuestion: boolean): void {
    this.isQuestion = isQuestion;
  }


}

