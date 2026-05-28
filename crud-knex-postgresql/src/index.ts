import {onDatabaseConnect} from "./config/knex.js";

console.log(await onDatabaseConnect());