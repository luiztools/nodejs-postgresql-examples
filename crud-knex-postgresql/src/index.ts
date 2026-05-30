import { onDatabaseConnect } from "./config/knex.js";

console.log(await onDatabaseConnect());

import knex from "./config/knex.js";
import type { Book, BookInsert, BookUpdate } from "./types/index.js";

async function getBooks() : Promise<Book[]> {
    const books = await knex("books")
        .select("*")
        .limit(10)
        .offset(0)
        .orderBy("title", "asc");
    console.log(books);
    return books;
}

async function getBook(id: number) : Promise<Book | undefined> {
    const book = await knex("books")
        .select("*")
        .where({ id })
        .first();
    console.log(book);
    return book;
}

async function createBook(book: BookInsert) : Promise<Book | undefined> {
    const [createdBook] = await knex("books")
        .insert(book)
        .returning("*");
    console.log(createdBook);
    return createdBook;
}

async function updateBook(id: number, book: BookUpdate) : Promise<Book | undefined> {
    const [updatedBook] = await knex("books")
        .where({ id })
        .update(book)
        .returning("*");
    console.log(updatedBook);
    return updatedBook;
}

async function deleteBook(id: number) : Promise<Book | undefined> {
    const [deletedBook] = await knex("books")
        .where({ id })
        .del()
        .returning("*");
    console.log(deletedBook);
    return deletedBook;
}
deleteBook(2);