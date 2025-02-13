import { useEffect, useRef, useState } from "react";

function App() {
  const [showModal, setShowModal] = useState(false);
  const [todoInput, setTodoInput] = useState("");
  const [todos, setTodos] = useState([]);
  const inputRef = useRef(null)

  // تابعی برای اضافه کردن todo به لیست
  const addTodo = () => {
    if (todoInput.trim() !== "") {
      setTodos([...todos, { id: todos.length + 1, text: todoInput }]);
      setTodoInput("");  // پاک کردن ورودی بعد از اضافه کردن
      setShowModal(false);  // بستن مدال
    }
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  }

  useEffect(() => {
    if (showModal) {
      inputRef.current.focus()
    }
  }, [showModal])

  return (
    <main>
      <div className="flex w-[1000px] h-[80vh] gap-1">
        <div className="status" id="no_status">
          <h1>لیست کل کارها</h1>
          <button id="add_btn" onClick={() => setShowModal(true)}>
            + اضافه کردن
          </button>

          {/* //! Show all todos*/}
          {todos.map((todo) => (
            <div key={todo.id} className="todo">
              <span className="close" onClick={() => deleteTodo(todo.id)}> &times; </span>
              <p>{todo.text}</p>
            </div>
          ))}
        </div>

        <div className="status uncompleted">
          <h1>شروع نشده</h1>
        </div>
        <div className="status completeing">
          <h1>در حال انجام</h1>
        </div>
        <div className="status completed">
          <h1>انجام شده</h1>
        </div>
      </div>

      {/* //!Modal */}
      {showModal && (
        <div className="modal active">
          <div className="header">
            <div className="title">اضافه کردن یادداشت</div>
            <button className="btn close-modal" onClick={() => setShowModal(false)}>
              &times;
            </button>
          </div>
          <div className="body">
            <input
              ref={inputRef}  // مرجع برای فوکوس دادن
              type="text"
              id="todo_input"
              className="border-2 border-black/10 rounded-2xl focus:outline-black/30"
              value={todoInput}  // مقدار ورودی را از state می‌گیریم
              onChange={(e) => setTodoInput(e.target.value)}  // هر تغییر ورودی را ذخیره می‌کنیم
            />
            <input
              type="submit"
              value="Add Todo"
              id="todo_submit"
              onClick={addTodo}  // وقتی کاربر روی دکمه کلیک می‌کند، todo را اضافه می‌کنیم
            />
          </div>
        </div>
      )}

      <div id="overlay"></div>
    </main>
  );
}

export default App;
