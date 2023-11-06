import IForm from "@/components/UI/IForm/IForm";
import { redirect } from "next/navigation";

export async function searchMovies(data: FormData) {
  "use server";

  const keyword = data.get("search-keyword")?.valueOf();

  if (!keyword) {
    console.error("Error: search string cannot be empty");
    return;
  }

  redirect("/search/" + keyword);
}

export default function Search() {
  return (
    <IForm
      submitButtonText="Search!"
      submitForm={searchMovies}
      label="Search movies here"
      name="search-keyword"
    />
  );
}
