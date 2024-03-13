// 3-get_ids_sum.js

export default function getStudentIdsSum(students) {
  return students.reduce((acc, c) => acc + c.id, 0);
}
