import Form from "next/form";

type SearchFormProps = {
  categories: string[];
  defaultQuery?: string;
  defaultCategory?: string;
  formFields:{
    inputField:{
      label:string,
      placeholder:string,
    },
    selectField:{
      label:string,
      placeholder:string,
    },
    submit:{
      label: string;
    }
  }
};

export const SearchForm = ({
  formFields,
  categories,
  defaultQuery = "",
  defaultCategory = "",
}: SearchFormProps) => {
  return (
    <Form action="/search" className="rounded-3xl border border-gray-200 p-5">
      <div className="grid gap-4 md:grid-cols-[1fr_220px_auto] md:items-end">
        <label className="block">
          <span className="text-sm font-medium text-gray-700">{formFields.inputField.label}</span>
          <input
            name="q"
            type="search"
            defaultValue={defaultQuery}
            placeholder={formFields.inputField.placeholder}
            className="mt-2 w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-black"
          />
        </label>

        <label className="block">
          <span className="text-sm font-medium text-gray-700">{formFields.selectField.label}</span>
          <select
            name="category"
            defaultValue={defaultCategory}
            className="mt-2 w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-black"
          >
            <option value="">{formFields.selectField.placeholder}</option>
            {categories.map((category, index) => (
              <option key={index} value={category}>
                {category}
              </option>
            ))}
          </select>
        </label>

        <button
          type="submit"
          className="rounded-xl bg-(--dark) px-5 py-3 text-sm font-semibold text-(--light)"
        >
          {formFields.submit.label}
        </button>
      </div>
    </Form>
  );
}