import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Form, FormControl, FormField, FormItem } from "./ui/form";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Store } from "lucide-react";
import { useEffect } from "react";

const formSchema = z.object({
  searchQuery: z.string({
    required_error: "Restaurant name is required",
  }),
});

export type SearchForm = z.infer<typeof formSchema>;

type Props = {
  onSubmit: (formData: SearchForm) => void;
  placeHolder: string;
  onReset?: () => void;
  searchQuery?: string;
};

const SearchBar = ({ onSubmit, placeHolder, onReset, searchQuery }: Props) => {
  const form = useForm<SearchForm>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      searchQuery,
    },
  });

  useEffect(() => {
    form.reset({ searchQuery });
  }, [form, searchQuery]);

  const handleReset = () => {
    form.reset({
      searchQuery: "",
    });

    if (onReset) {
      onReset();
    }
  };

  return (
    <div className="flex-row md:w-4/6 md:flex items-center">
      <Form {...form}>
        <div className="h-full flex gap-2 mb-2 md:m-0 text-white justify-center items-center md:mr-2">
          <h1 className="text-nowrap font-bold">Search City</h1>
          <Store />
        </div>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-full md:w-5/6 space-y-2 md:space-y-0 md:flex md:items-center  md:gap-2"
        >
          <FormField
            control={form.control}
            name="searchQuery"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormControl>
                  <Input
                    {...field}
                    placeholder={placeHolder}
                    className="w-full bg-white"
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <Button
            onClick={handleReset}
            type="button"
            className="w-full md:w-fit"
          >
            Reset
          </Button>
          <Button type="submit" className="w-full md:w-fit">
            Search
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default SearchBar;
