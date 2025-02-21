function App() {
  return (
    <div className="h-screen w-full flex items-center justify-center bg-red-300">
      <h1 className="text-3xl font-bold underline">
        {import.meta.env.VITE_API_URL}
      </h1>
    </div>
  );
}

export default App;
