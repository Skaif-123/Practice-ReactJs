import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import CommonInput from "../common-input";

function Common_form({
  formControls = [],
  buttonText,
  formData,
  setFormData,
  onHandleSubmit,
}) {
  const formTypes = {
    INPUT: "input",
    SELECT: "select",
    TEXTAREA: "textarea",
  };
  const renderFormElement = (getCurrentItem) => {
    let content = null;

    switch (getCurrentItem?.componentType) {
      case formTypes.INPUT:
        content = (
          <CommonInput
            label={getCurrentItem.label}
            name={getCurrentItem.name}
            type={getCurrentItem.type}
            id={getCurrentItem.id}
            placeholder={getCurrentItem.placeholder}
            value={formData[getCurrentItem.name] || ""}
            onChange={(event) =>
              setFormData({
                ...formData,
                [event.target.name]: event.target.value,
              })
            }
          />
        );
        break;

      default:
        content = (
          <CommonInput
            label={getCurrentItem.label}
            name={getCurrentItem.name}
            type={getCurrentItem.type}
            id={getCurrentItem.id}
            placeholder={getCurrentItem.placeholder}
            value={formData[getCurrentItem.name] || ""}
            onChange={(event) =>
              setFormData({
                ...formData,
                [event.target.name]: event.target.value,
              })
            }
          />
        );
        break;
    }

    return content;
  };

  return (
    <div className="flex flex-row justify-center items-center">
      <Card className="">
        <form onSubmit={onHandleSubmit}>
          {formControls.length > 0 && formControls ? (
            formControls.map((singleFormElementItem) =>
              renderFormElement(singleFormElementItem),
            )
          ) : (
            <div>
              <h1>Not working</h1>
            </div>
          )}
          <Button type="submit">{buttonText || "Submit"}</Button>
        </form>
      </Card>
    </div>
  );
}
export default Common_form;
