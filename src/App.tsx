import './App.css'

function App() {
  return (
    <div className="min-h-screen bg-zinc-900 flex items-center justify-center">
      <div className="bg-white p-10 rounded-2xl shadow-2xl text-center space-y-4">
        <h1 className="text-4xl font-bold text-blue-600">
          Tailwind está funcionando 🚀
        </h1>
        <p className="text-gray-600">
          Se você está vendo fundo escuro e card branco arredondado,
          está tudo certo.
        </p>
        <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
          Botão teste
        </button>
      </div>
    </div>
  );
}

export default App;

