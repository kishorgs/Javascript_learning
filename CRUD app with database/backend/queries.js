export const selectAllFromTaskTable = 'SELECT * FROM "Tasks"';
export const insertToTaskTable = `INSERT INTO \"Tasks\"(title, description) VALUES($1,$2) RETURNING *`;
export const updateTheTaskTable = 'UPDATE \"Tasks\" SET title=$1, description=$2 WHERE id=$3 RETURNING *';
export const deleteTheTaskTable = 'DELETE FROM \"Tasks\" WHERE id=$1';