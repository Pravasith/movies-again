import { Button, TextField } from "@mui/material";

interface Props {
  submitForm: (data: FormData) => void;
  label: string;
  name: string;
  submitButtonText: string;
}

export default function IForm(props: Props) {
  return (
    <div className="w-full bg-white flex-col-center pt-5 pb-3">
      <form className="flex-row-center" action={props.submitForm}>
        <TextField
          name={props.name}
          type="text"
          variant="outlined"
          color="secondary"
          label={props.label}
          fullWidth
        />
        <Button type="submit" variant="outlined" className="mx-2">
          {props.submitButtonText}
        </Button>
      </form>
    </div>
  );
}
