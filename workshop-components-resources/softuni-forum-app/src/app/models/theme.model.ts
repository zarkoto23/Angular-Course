import { Subscriber } from "../models"

export interface Theme{
    name:string
    userId:string
    subscribers:Subscriber[]
}