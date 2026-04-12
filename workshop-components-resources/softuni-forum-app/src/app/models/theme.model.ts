import {User } from "../models"

export interface Theme{
    id:string
    themeName:string
    userId:User
    subscribers:string[]
    posts:string[]
    created_at:Date
}