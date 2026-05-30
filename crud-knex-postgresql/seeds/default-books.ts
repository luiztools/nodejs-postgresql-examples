import type { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
    await knex("books").del();

    await knex("books").insert([
        { title: "Book 1", author: "Author 1", year: 2020 },
        { title: "Book 2", author: "Author 2", year: 2021 },
        { title: "Book 3", author: "Author 3", year: 2022 }
    ]);
};
