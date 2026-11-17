
import { useState } from "react";
import { Button } from "./components/Button";
import { Input } from "./components/Input";

function App() {
  const [email, setEmail] = useState("");

  return (
    <main style={{
      padding: 40,
      display: "flex",
      flexDirection: "column",
      gap: 32
    }}>
      <h1>Glim Design System</h1>

      <section>
        <h2>Buttons</h2>
        <div style={{
          display: "flex",
          gap: 16,
          flexWrap: "wrap"
        }}>
          <Button variant="Primary" size="XL" label="Primary XL" />
          <Button variant="Secondary" size="LG" label="Secondary LG" />
          <Button variant="Tertiary" size="MD" label="Tertiary MD" />
          <Button variant="Primary" size="SM" state="Disabled" label="Disabled" />
        </div>
      </section>

      <section>
        <h2>Inputs</h2>

        <Input
          label="Email"
          value={email}
          state={email ? "Filled" : "Default"}
          helper="Introduce tu dirección de email"
          onChange={setEmail}
        />

        <div style={{ marginTop: 24 }}>
          <Input
            label="Contraseña"
            value="123456"
            state="Focus"
            helper="Introduce tu contraseña"
            onChange={() => {}}
          />
        </div>

        <div style={{ marginTop: 24 }}>
          <Input
            label="Número de documento"
            value="12345"
            state="Error"
            helper="El documento no es válido"
            onChange={() => {}}
          />
        </div>

        <div style={{ marginTop: 24 }}>
          <Input
            label="Teléfono"
            value=""
            state="Disabled"
            helper="Campo deshabilitado"
            onChange={() => {}}
          />
        </div>
      </section>
    </main>
  );
}

export default App;
