let pacientes;
let pacientes1 = ["Carlos", "Juan"];
if (pacientes1.length) {
  console.log("Si hay pacientes");
} else {
  console.log("No hay pacientes");
}
console.log(
  pacientes1 ? console.log("Si hay pacientes") : console.log("No hay pacientes")
);

console.log(pacientes1.length && pacientes1);
console.log(pacientes1.length);
console.log((pacientes1.length && pacientes1).toBoolean);
