import type { Knex } from "knex";

export interface Book {
    id: number;
    title: string;
    author: string;
    year: number;
    created_at: Date;
    updated_at: Date;
}

export type BookInsert = Omit<Book, "id" | "created_at" | "updated_at">;
export type BookUpdate = Partial<BookInsert>;

declare module "knex/types/tables.js" {
    interface Tables {
        books: Knex.CompositeTableType<Book, BookInsert, BookUpdate>;
    }
}