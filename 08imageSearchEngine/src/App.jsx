


function App() {
  
  

  return (
    <div className="bg-black text-white h-screen flex flex-col items-center ">
      <div className="bg-rose-700 p-4 m-4 "> Image Search Engine</div>
      <div className="w-full max-w-md mx-auto border border-gray-60  rounded-lg p-5 backdrop-blur-sm bg-white/30">02
        <form className="w-full max-w-md mx-auto ">
          <input className="outline-none px-4 py-3 text-white placeholder-gray-300 bg-transparent  " type="text" placeholder="Search Image"></input>
          <button className=" bg-blue-600 text-white px-4 py-3 rounded-lg" type="submit" >Search</button>
        </form>

      </div>
      <div className="bg-red-500 p-8 m-4">03 Search-result</div>
      <button>Show more..</button>
    </div>

  
)
}

export default App
