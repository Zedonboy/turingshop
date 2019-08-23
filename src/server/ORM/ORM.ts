import * as knex from "knex"
export interface ORM {
    tablename : string

    create(...arg : any[]) : any

    read (...arg : any[]) : any

    update(...arg : any[]) : any

    delete (...arg : any[]) : any
}