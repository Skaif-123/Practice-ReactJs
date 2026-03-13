
import LoginPageComponent from "./components_for_dynamic_form/login";
import RegisterPageComponent from "./components_for_dynamic_form/register";

function App() {
  return (
    <>
      {/* <ToDoList/> */}
      {/* <FormHandling/> */}
      <div className=" bg-slate-50  flex flex-row justify-center items-center gap-4 h-screen w-screen">
        <LoginPageComponent />
        <RegisterPageComponent />
      </div>
    </>
  );
}

export default App;
