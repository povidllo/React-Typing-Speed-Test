import { QueryProvider } from "./providers";
import { AppRouter } from "./providers/RouterProvider/RouterProvider";

function App() {
  return (
    <QueryProvider>
      <AppRouter />
    </QueryProvider>
  );
}

export default App;
