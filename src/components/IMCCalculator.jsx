import { useState } from "react";
import styles from "./Imc.module.css"; // importação

export default function IMCCalculator() {
  const [altura, setAltura] = useState("");
  const [peso, setPeso] = useState("");
  const [imc, setIMC] = useState(null);
  const [classificacao, setClassificacao] = useState("");

  function calcularIMC() {
    const alturaMetros = parseFloat(altura) / 100;
    const pesoKg = parseFloat(peso);

    if (!alturaMetros || !pesoKg) {
      alert("Por favor, insira valores válidos para altura e peso.");
      return;
    }

    const resultadoIMC = (pesoKg / (alturaMetros * alturaMetros)).toFixed(2);
    setIMC(resultadoIMC);

    if (resultadoIMC < 18.5) setClassificacao("Abaixo do peso 🍌");
    else if (resultadoIMC >= 18.5 && resultadoIMC < 24.9 ) setClassificacao("Peso normal 🥑");
    else if (resultadoIMC >= 25 && resultadoIMC < 29.9) setClassificacao("Sobrepeso 🍎");
    else if (resultadoIMC >= 35 && resultadoIMC < 34.9) setClassificacao("Obesidade Grau I 🍫");
    else if (resultadoIMC >= 40 && resultadoIMC < 39.9) setClassificacao("Obesidade Grau II 🍕");
    else setClassificacao("Obesidade Grau III 🍔");
  }

  return (
    <div className="container"> 
      <div className={styles.card}>  {/* card */}
        <h2 className="text-center mb-4">Calculadora de IMC</h2>
      <div>
        <label>Altura (cm): </label>
          <input
            type="number"
            value={altura}
            onChange={(e) => setAltura(e.target.value)}
            placeholder="Digite sua altura"
            className={styles.input}  //  input
          />
      </div>
      <div>
        <label>Peso (kg): </label>
          <input
            type="number"
            value={peso}
            onChange={(e) => setPeso(e.target.value)}
            placeholder="Digite seu peso"
            className={styles.input}
          />
      </div>
        <button onClick={calcularIMC} className={styles.button}>Calcular IMC</button> {/* button */}
          {imc && (
            <div style={{ marginTop: "20px", textAlign: "center" }}>
              <p><strong>Seu IMC:</strong> {imc}</p>
              <p><strong>Classificação:</strong> {classificacao}</p>
            </div>
          )}
      </div>
    </div>
  );
}
