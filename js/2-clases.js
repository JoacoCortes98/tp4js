let cuenta = {
  titular: "Alex",
  saldo: 0,
  ingresar(montoIngresar) {
    this.saldo += montoIngresar;
  },
  extraer(monto) {
    if (this.saldo >= monto) {
      this.saldo -= monto;
    } else {
      alert("Saldo insuficiente");
    }
  },
  informar() {
    document.write(
      `<p>Cuenta del titular: ${this.titular}, tiene un saldo de $ ${this.saldo}</p>`
    );
  },
};
cuenta.informar();

let montoIngresar = parseFloat(prompt("Ingrese un monto a ingresar"));
cuenta.ingresar(montoIngresar);
cuenta.informar();

let montoExtraer = parseFloat(prompt("Ingrese un monto a extraer"));
cuenta.extraer(montoExtraer);

cuenta.informar();
