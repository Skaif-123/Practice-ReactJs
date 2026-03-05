import { Button } from "../ui/button";
import { Dialog, DialogContent, DialogTitle } from "../ui/dialog";

const StatusBox = ({ details, openDialog, setOpenDialog }) => {
  return (
    <Dialog open={openDialog} onOpenChange={setOpenDialog}>
      <DialogContent>
        <DialogTitle className='flex justify-center items-center'>
          {details.completed ? (
            <Button className="bg-green-400">Completed</Button>
          ) : (
            <Button className="bg-red-400">InComplete</Button>
          )}
        </DialogTitle>
      </DialogContent>
    </Dialog>
  );
};

export default StatusBox;
