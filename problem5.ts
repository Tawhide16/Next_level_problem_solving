type User = {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
};

function filterActiveUsers(users: User[]): User[] {
  return users.filter(user => user.isActive);
}

const users = [
  { id: 1, name: 'Tawhide', email: 'tawhide@gmail.com', isActive: true },
  { id: 2, name: 'Hasan', email: 'hasan@gmail.com', isActive: false },
  { id: 3, name: 'Bejoy', email: 'bejoy@gmail.com', isActive: true },
];

