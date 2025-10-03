import { useState } from "react";

const Calculator = () => {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [resultado, setResultado] = useState(null);

  const soma = () => setResultado(x + y);
  const subtracao = () => setResultado(x - y);
  const multiplicacao = () => setResultado(x * y);
  const divisao = () => {
    if (y === 0) {
      setResultado("Erro: divisão por zero");
    } else {
      setResultado(x / y);
    }
  };

  return (
    <div>
      <h3>Calculadora</h3>

      <label>
        Número 1:{" "}
        <input
          type="number"
          value={x}
          onChange={(e) => setX(Number(e.target.value))}
        />
      </label>
      <br />

      <label>
        Número 2:{" "}
        <input
          type="number"
          value={y}
          onChange={(e) => setY(Number(e.target.value))}
        />
      </label>
      <br />

      <button onClick={soma}>Somar</button>
      <button onClick={subtracao}>Subtrair</button>
      <button onClick={multiplicacao}>Multiplicar</button>
      <button onClick={divisao}>Dividir</button>

      <h4>Resultado: {resultado !== null ? resultado : "Nenhum cálculo ainda"}</h4>
    </div>
  );
};

export default Calculator;
