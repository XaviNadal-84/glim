
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
        <Button variant="primary" size="small">
          Primary Small
        </Button>

        <Button variant="primary" size="medium">
          Primary Medium
        </Button>

        <Button variant="secondary" size="large">
          Secondary Large
        </Button>

        <Button disabled>
          Disabled
        </Button>
      </section>
    </main>
  );
}

export default App;
