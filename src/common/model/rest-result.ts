export class RestResult <T>{
  constructor (
  public code : string, 
  public message : string){} 
  value : T
}
