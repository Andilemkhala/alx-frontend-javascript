export default function taskBlock(trueOrFalse) {
  let task = false;
  let task2 = true;

  if (trueOrFalse) {
    task = true;  // Assigning new values without redeclaring
    task2 = false; // Assigning new values without redeclaring
  }

  return [task, task2];
}
