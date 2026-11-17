
import { Button } from "./components/Button";

function App() {
  return (
    <main style={{ padding: 40 }}>
      <h1>Fintech Design System</h1>

      <section style={{
        display: "flex",
        gap: 16,
        alignItems: "center",
        flexWrap: "wrap"
      }}>
        <Button
          variant="Primary"
          size="XL"
          label="Primary XL"
        />

        <Button
          variant="Secondary"
          size="LG"
          label="Secondary LG"
        />

        <Button
          variant="Tertiary"
          size="MD"
          label="Tertiary MD"
        />

        <Button
          variant="Primary"
          size="SM"
          state="Disabled"
          label="Disabled"
        />
      </section>
    </main>
  );
}

export default App;
