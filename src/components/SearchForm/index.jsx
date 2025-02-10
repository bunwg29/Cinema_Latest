import { useForm } from "react-hook-form";
import FormField from "./FormField";
import MediaTypeInput from "./FormInputs/MediaTypeInput";
import GenresInput from "./FormInputs/GenresInput";
import RatingInput from "./FormInputs/RatingInput";

function SearchForm() {
  const { handleSubmit, control } = useForm({
    defaultValues: {
      mediaType: "movie",
      genres: [],
      rating: 'All',
    }
  });

  const onSubmit = (data) => {
    console.log("Data form" + data);
  };

  return (
    <div className="border rounded-lg p-4 shadow-md">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          name="mediaType"
          label="Media Type"
          control={control}
          Component={MediaTypeInput}
        />

        <FormField
          name="genres"
          label="Genres"
          control={control}
          Component={GenresInput}
        />

        <FormField
          name="rating"
          label="Rating"
          control={control}
          Component={RatingInput}
        />
        <input type="submit" />
      </form>
    </div>
  );
}
export default SearchForm;
