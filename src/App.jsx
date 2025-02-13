


function App() {

  return (
    <main>
      <div className="flex w-[1000px] h-[80vh] gap-1 ">
        <div className="status" id="no_status">
          <h1>لیست کل کارها</h1>
          <button id="add_btn" data-target-modal="#todo_form">
            + اضافه کردن
          </button>
          {/* <!-- example template --> */}
          <div className="todo" id="Buy a Pizza">
            <span className="close"> &times; </span>
            <p>خرید وسایل خانه</p>
          </div>
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

      <div id="overlay"></div>
    </main>
  )
}

export default App
