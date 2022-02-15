function showSalary(users, age) {
  let newString = '';

  users.forEach((item) => {
    if(item.age <= age) {
      newString += item.name + ', ' + item.balance + '\n';
    }
  });
  return newString.slice(0, -1);
}
