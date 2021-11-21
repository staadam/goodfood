export interface INote {
  mealID: string;
  notes: Array<string>;
}

export interface IUser {
  username: string;
  notes: Array<INote>;
}

export type typeInitialState = {
  user: IUser | null;
};

export interface IAction {
  type: string;
  payload: any;
}
