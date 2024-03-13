import { db, Task } from 'astro:db';

export default async function() {
	await db.insert(Task).values([
	 {id: 1, title: 'Task 1', description: 'Description 1'},
	 {id: 2, title: 'Task 2', description: 'Description 2'},
	 {id: 3, title: 'Task 3', description: 'Description 3'},
	])
  }
