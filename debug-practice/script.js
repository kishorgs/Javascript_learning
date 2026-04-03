const users = [
  { name: 'Alice', age: 28 },
  { name: 'Bob', age: 35 },
  { name: 'Carol', age: 40 }
];

function getUserByName(name) {
  return users.find((user) => user.name.toLowerCase() === name); //Here the input parameter was in lowercase and the variable entered was is camel case which was not allowing the user to search even when the user was present it was returning user not found error, solved uisng breakpoint in the breakpoint I found while comparing both the values other were not same so I solved that using convertion.
}

function showMessage(mesaage) {
  const resultEl = document.getElementById('result');
  resultEl.textContent = mesaage;
}

function renderUserList() {
  const listEl = document.getElementById('userList');
  let html = '';
  for (let i = 0; i < users.length; i++) {
    const u = users[i];
    if (!u) continue;
    html += `<li>${u.name} (${u.age})</li>`;
  }
  listEl.innerHTML = html;
}

function calculateAverageAge() {
  const total = users.reduce((sum, user) => sum + user.age, 0);
  const avg = total / users.length;
  return Number(avg.toFixed(1));
}

function updateAverageDisplay() {
  const avgEl = document.getElementById('averageAge');
  avgEl.textContent = `Average age: ${calculateAverageAge()}`;
}

function addUser() {
  const name = document.getElementById('newName').value.trim();
  const age = Number(document.getElementById('newAge').value);

  if (!name) {
    showMessage('Please provide a name');
    return;
  }

  if (isNaN(age) || age <= 0) {
    showMessage('Please provide a valid age');
    return;
  }

  const duplicate = users.some((u) => u.name.toLowerCase() === name.toLowerCase());
  if (duplicate) {
    showMessage('User already exists');
    return;
  }

  users.push({ name, age: Number(age) || 0 });
  console.log('Added user:', name, age);

  renderUserList();
  updateAverageDisplay();
  showMessage('User added successfully');
}

function removeUser() {
  const name = document.getElementById('removeName').value.trim();
  const index = users.findIndex((u) => u.name.toLowerCase() === name.toLowerCase());

  if (index === -1) {
    showMessage('Cannot remove: user not found');
    return;
  }

  users.splice(index, 1); // Here It was deleting 2 users Solved this error with the help of chatgpt , I asked to give me steps to find this error using console followed the indtruvtions and found this error.
  console.log('Users after removal:', users);

  renderUserList();
  updateAverageDisplay();
  showMessage('User removed');
}

function checkUser() {
  const name = document.getElementById('username').value.trim();
  const user = getUserByName(name.toLowerCase());

  if (!user) {
    showMessage('User not found');
    return;
  }

  const ageInput = Number(document.getElementById('ageInput').value);

  if(ageInput <= 0 || isNaN(ageInput)) {
    showMessage('Please enter a valid age to compare');
    return;
  }

  if (ageInput < user.age) {
    showMessage('You are younger than the stored user.');
  } else if (ageInput > user.age) {
    showMessage('You are older than the stored user.');
  } else if (ageInput === user.age) {
    showMessage('You are the same age as the stored user.');
  }

  console.log({
    checkedName: name,
    userFromStore: user,
    inputAge: ageInput,
    averageAge: calculateAverageAge()
  });

  // trace-level logs for debugging at breakpoints
  for (let idx = 0; idx < users.length; idx++) {
    console.debug('loop idx', idx, 'user', users[idx]);
  }
}

function init() {
  document.getElementById('checkBtn').addEventListener('click', checkUser);
  document.getElementById('addBtn').addEventListener('click', addUser);
  document.getElementById('removeBtn').addEventListener('click', removeUser);

  renderUserList();
  updateAverageDisplay();
}

init();
