import { RouterProvider } from "react-router-dom";
import { router } from "./routes/router";
import { QueryClient, QueryClientProvider } from "react-query";
import { RecipesProvider } from "./context/RecipesProvider";

function App() {
  const queryClient = new QueryClient();

  return (
    <>
      <RecipesProvider>
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={router} />
        </QueryClientProvider>
      </RecipesProvider>
    </>
  );
}

export default App;
