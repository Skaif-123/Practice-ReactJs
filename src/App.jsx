
import FormHandling from "./components/Form";
import StatusBox from "./components/StatusBox";
import ToDoList from "./components/ToDoList";
import LoginPageComponent from "./components_for_dynamic_form/login";
import RegisterPageComponent from "./components_for_dynamic_form/register";

function App() {
  return (
    <>
      {/* <ToDoList/> */}
      {/* <FormHandling/> */}
      <div>
        <LoginPageComponent />
        <RegisterPageComponent />
      </div>
    </>
  );
}

export default App;
