// user object
const user = {
  id: 1,
  name: "João Goulart",
  registration: "123456",
  pending: false,
  accessibility: true,
};

// list of locker objects
const lockers = [
  {
    id: 1,
    type: "standard",
    available: true,
    accessible: false,
    reservedAt: "",
    reservedBy: "",
    devolution: "",
  },
  {
    id: 2,
    type: "standard",
    available: true,
    accessible: false,
    reservedAt: "",
    reservedBy: "",
    devolution: "",
  },
  {
    id: 3,
    type: "standard",
    available: true,
    accessible: false,
    reservedAt: "",
    reservedBy: "",
    devolution: "",
  },
  {
    id: 4,
    type: "standard",
    available: false,
    accessible: true,
    reservedAt: "",
    reservedBy: "",
    devolution: "",
  },
  {
    id: 5,
    type: "standard",
    available: false,
    accessible: true,
    reservedAt: "",
    reservedBy: "",
    devolution: "",
  },
  {
    id: 6,
    type: "double",
    available: true,
    accessible: true,
    reservedAt: "",
    reservedBy: "",
    devolution: "",
  },
  {
    id: 7,
    type: "double",
    available: false,
    accessible: true,
    reservedAt: "",
    reservedBy: "",
    devolution: "",
  },
  {
    id: 8,
    type: "double",
    available: false,
    accessible: true,
    reservedAt: "",
    reservedBy: "",
    devolution: "",
  },
];

// function to reserve a locker, including the rules.
function reserveLocker() {
  // get the type of locker selected by the user in the html.
  let selectedType = document.getElementById("lockerType").value;

  // in the list, filter only the lockers that are available and accessible to the user.
  let availableLockers = lockers.filter(
    (l) =>
      l.type === selectedType &&
      l.available === true &&
      user.accessibility === l.accessible
  );

  // if there is no available locker, return a message to the user.
  if (availableLockers.length === 0) {
    document.getElementById(
      "result"
    ).innerText = `Olá, ${user.name}! Infelizmente não há armários do tipo selecionado disponível.`;
    return;
  }

  // If there are available lockers, we proceed by randomly selecting one.
  let selectedLocker =
    availableLockers[Math.floor(Math.random() * availableLockers.length)];

  // Then we locate the borrowed locker in the list of lockers and change the status of the locker.
  let borrowedLocker = (lockers.find(
    (locker) => locker.id === selectedLocker.id
  ).status = false);

  // Finally, we change the user's pending status to true.
  user.pending = true;

  selectedLocker.reservedAt = new Date();
  selectedLocker.reservedBy = user.id;
  selectedLocker.devolution = new Date(
    new Date().setDate(new Date().getDate() + 1)
  );

  console.log(selectedLocker);

  // Print a reservation message for the user.
  document.getElementById(
    "result"
  ).innerText = `Olá, ${user.name}! O armário ${selectedLocker.id} foi reservado com sucesso!`;

  document.getElementById("details").innerText = `Armário: ${
    selectedLocker.id
  } \nTipo: ${
    selectedLocker.type === "double" ? "Duplo" : "Símples"
  } \nReservado em: ${selectedLocker.reservedAt} \nDevolução: ${
    selectedLocker.devolution
  }`;
}
