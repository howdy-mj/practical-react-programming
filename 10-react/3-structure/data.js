const FRIENDS = [
  { name: 'one', age: 15 },
  { name: 'two', age: 20 },
  { name: 'three', age: 25 },
  { name: 'four', age: 30 },
];

let nextId = 0;
export function getNextFriend() {
  return { ...FRIENDS[nextId % 4], id: nextId++ };
}
