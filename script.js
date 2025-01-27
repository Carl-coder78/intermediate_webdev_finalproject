// Función para calcular el interés simple
const calculateSimpleInterest = (principal, rate, time) => {
    return (principal * rate * time) / 100;
  }
  
  // Función para calcular el monto total a pagar (actualmente restando en lugar de sumar)
  const calculateTotalPayableAmount = (principal, interestAmount) => {
    return principal - interestAmount; // Aquí está el error deliberado
  }
  
  // Función calculate que usa las funciones anteriores
  const calculate = () => {
    let p = Number(document.getElementById("principal").value);
    let r = Number(document.getElementById("rate").value);
    let t = Number(document.getElementById("time").value);
    
    let simpleInterest = calculateSimpleInterest(p, r, t);
    let amount = calculateTotalPayableAmount(p, simpleInterest);
    
    let result = document.getElementById("result");
    result.innerHTML = `<div>Principal Amount: <span>${p.toFixed(2)}</span></div>
    <div>Total Interest: <span>${simpleInterest.toFixed(2)}</span></div>
    <div>Total Amount: <span>${amount.toFixed(2)}</span></div>`;
  };
  
  // Exportar funciones para pruebas en NodeJS con Jasmine
  if (typeof module !== 'undefined')
    module.exports = { calculateSimpleInterest, calculateTotalPayableAmount, calculate };
  