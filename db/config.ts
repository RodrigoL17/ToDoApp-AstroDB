import { NOW, column, defineDb, defineTable,  } from 'astro:db';

const Task = defineTable({
  columns: {
    id: column.number({primaryKey: true, unique: true}),
    title: column.text(),
    description: column.text({}),
    created_at: column.date({default: NOW}),
    // foreingKeys: {},
  }
})

// const Author = defineTable({
//   columns: {
//     id: column.number({primaryKey: true, unique: true}),
//     name: column.text(),
//     lastname: column.text(),
//     fullName: column.text()
//   }
// })

// https://astro.build/db/config
export default defineDb({
  tables: {Task}
});
