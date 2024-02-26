export interface User {
  id?: number;
  name: string;
  email: string;
  isActive: boolean;
}

const _users: User[] = [
  { id: 1, name: "Kafka", email: "Kafka@email.com", isActive: true },
  { id: 2, name: "Sam", email: "Sam@email.com", isActive: false },
  { id: 3, name: "Blade", email: "Blade@email.com", isActive: true },
  { id: 4, name: "Silver Wolf", email: "SW@email.com", isActive: true },
  { id: 5, name: "Elio", email: "Elio@email.com", isActive: false },
];
export const users = _users;

//Calculate the next id
export function getNextId() {
  return users?.length > 0
    ? 1 +
        users.reduce((max, user) => {
          //We need this check to make Typescript happy, since the type for User defines id as optional
          if (!user.id || !max) throw new Error();
          return user && user.id > max ? user.id : max;
        }, users[0].id || 0)
    : 1;
}

export function addUser(user: User) {
  user.id = getNextId();
  _users.push(user);
}
