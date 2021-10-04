export interface IState {
    people: {
      name: string,
      age: number,
      url: string,
      note?: string,
    }[]
}

export interface IRouteParams {
  id: string,
  //param2?: string,
}