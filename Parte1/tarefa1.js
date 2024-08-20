function transformData(user) {
    return users
      .filter(user => user.isActive) 
      .map(user => ({ id: user.id, name: user.name })) 
      .sort((a, b) => a.name.localeCompare(b.name));
  }
  const users = [
    { id: 1, name: 'Lionel Messi', age: 36, isActive: true },
    { id: 2, name: 'Cristiano Ronaldo', age: 38, isActive: false },
    { id: 3, name: 'Antoine Griezmann', age: 33, isActive: true }
  ];
  
  const result = transformData(users);
  console.log(result);