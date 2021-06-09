import { Pool } from 'pg'

export const pool = new Pool({
    host:'ec2-23-23-128-222.compute-1.amazonaws.com',
    user:'aapydsxllrdqhu',
    password:'3943486b880362ee6fc75856e80e0665368862ded88998b582030e8133d91ff4',
    database:'d7qjgn2tb9va5t',
    port:5432,
    ssl: { rejectUnauthorized: false}
});

