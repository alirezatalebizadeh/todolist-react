import { useState, useRef, useEffect } from "react";
import { useDrag, useDrop } from "react-dnd";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

const ItemType = "TODO";

function App() {
  const [showModal, setShowModal] = useState(false);
  const [todoInput, setTodoInput] = useState("");
  const [todos, setTodos] = useState([]);
  const inputRef = useRef(null);

  //! تابعی برای اضافه کردن todo به لیست و ذخیره در لوکال استورج
  const addTodo = () => {
    if (todoInput.trim() !== "") {
      const newTodo = { id: todos.length + 1, text: todoInput, status: "uncompleted" };
      const updatedTodos = [...todos, newTodo];
      setTodos(updatedTodos);
      localStorage.setItem("todos", JSON.stringify(updatedTodos));
      setTodoInput("");
      setShowModal(false);
    }
  };

  //! حذف تسک‌ها
  const deleteTodo = (id) => {
    const updatedTodos = todos.filter(todo => todo.id !== id);
    setTodos(updatedTodos);
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
  };

  // ! خواندن داده‌ها از لوکال استورج هنگام بارگذاری صفحه
  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem("todos"));
    if (storedTodos) {
      setTodos(storedTodos);
    }

    if (showModal) {
      inputRef.current.focus();
    }
  }, [showModal]);

  const useTodoDrag = (todo) => {
    const [, drag] = useDrag({
      type: ItemType,
      item: { id: todo.id, status: todo.status },
    });
    return drag;
  };

  const useTodoDrop = (targetStatus) => {
    const [, drop] = useDrop({
      accept: ItemType,
      drop: (item) => {
        const draggedTodo = todos.find((t) => t.id === item.id);
        if (draggedTodo) {
          const updatedTodos = todos.map((todo) =>
            todo.id === draggedTodo.id
              ? { ...todo, status: targetStatus }
              : todo
          );
          setTodos(updatedTodos);
          localStorage.setItem("todos", JSON.stringify(updatedTodos));
        }
      },
    });
    return drop;
  };

  //! ساخت یه کامپوننت برای تمامی لیست هامون
  const StatusList = ({ statusKey, title, classNameContainer }) => {
    const drop = useTodoDrop(statusKey);

    return (
      <div
        ref={drop}
        className={`status ${classNameContainer} w-full   m-[10px] border-2 border-dashed border-[#ccc]`}
      >
        <h1>{title}</h1>
        {todos
          .filter((todo) => todo.status === statusKey)
          .map((todo) => {
            const drag = useTodoDrag(todo);
            return (
              <div
                key={todo.id}
                ref={drag}
                className="flex items-center rounded-[10px] p-[10px] my-[5px] px-0 cursor-move bg-[#f9f9f9]"
              >
                <span
                  className="close mr-2"
                  onClick={() => deleteTodo(todo.id)}
                  style={{ marginLeft: "10px", cursor: "pointer" }}
                >
                  &times;
                </span>
                <span className="ml-2">
                  <input type="checkbox" className="size-[18px]" />
                </span>
                <p>{todo.text}</p>
              </div>
            );
          })}
      </div>
    );
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <>
        <div className="flex flex-col items-center justify-center lg:flex-row lg:items-stretch w-full lg:w-[95vw]  gap-1 mx-auto mt-10">
          {/*//! لیست کل کارها */}
          <div className="status w-[100%]" id="no_status">
            <h1>لیست کل کارها</h1>
            <button id="add_btn" onClick={() => setShowModal(true)}>
              + اضافه کردن
            </button>

            {/*//! نمایش تمام تسک‌ها */}
            {todos.map((todo) => (
              <div
                key={todo.id}
                className="todo"
                style={{
                  border: "1px solid #ddd",
                  padding: "10px",
                  margin: "5px 0",
                  backgroundColor: "#f9f9f9",
                }}
              >
                <span
                  className="close ml-[10px] cursor-pointer"
                  onClick={() => deleteTodo(todo.id)}
                >
                  &times;
                </span>
                <p>{todo.text}</p>
              </div>
            ))}
          </div>

          {/* //! لیست‌ها برای درگ و دراپ */}
          <StatusList classNameContainer="uncompleted w-[100%]" statusKey="uncompleted" title="شروع نشده" />
          <StatusList classNameContainer="completeing" statusKey="inProgress" title="در حال انجام" />
          <StatusList classNameContainer="completed" statusKey="completed" title="انجام شده" />
        </div>

        {/* //!Modal */}
        {showModal && (
          <div className="modal active w-[90vw] md:w-[450px]">
            <div className="header">
              <div className="title">اضافه کردن یادداشت</div>
              <button className="btn close-modal" onClick={() => setShowModal(false)}>
                &times;
              </button>
            </div>
            <div className="body">
              <input
                ref={inputRef}
                type="text"
                id="todo_input"
                className="border-2 border-black/10 rounded-2xl focus:outline-black/30"
                value={todoInput}
                onChange={(e) => setTodoInput(e.target.value)}
              />
              <input
                type="submit"
                value="Add Todo"
                id="todo_submit"
                onClick={addTodo}
              />
            </div>
          </div>
        )}

        <div id="overlay"></div>
      </>
    </DndProvider>
  );
}

export default App;
