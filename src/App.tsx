import { Layout } from "./components";

export default function App() {
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }
  return (
    <Layout>
      <form onSubmit={handleSubmit}>
        <input type="text" name="" id="" />
        <button type="submit">Check</button>
      </form>
    </Layout>
  );
}
