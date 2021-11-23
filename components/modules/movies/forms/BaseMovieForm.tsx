import { DatePicker } from "@mui/lab";
import {
  Box,
  Button,
  Checkbox,
  Chip,
  FilledInput,
  FormControl,
  FormControlLabel,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
} from "@mui/material";
import router from "next/router";
import React, { PropsWithChildren } from "react";
import { Controller, useForm } from "react-hook-form";
import { MovieWithoutId } from "../../../../types";

interface Props {
  defaultValues: MovieWithoutId;
  onSubmit: any;
}

type FormInputs = MovieWithoutId;

const genres = ["Thriller", "Romantic", "Sitcom", "Detectives", "Documentary"];

export const BaseMovieForm = ({
  defaultValues,
  onSubmit,
  children,
}: PropsWithChildren<Props>) => {
  const {
    register,
    handleSubmit,
    control,
    getValues,
    formState: { errors },
  } = useForm<FormInputs>({
    mode: "onSubmit",
    criteriaMode: "firstError",
    defaultValues: {
      ...defaultValues,
    },
    delayError: undefined,
    reValidateMode: "onSubmit",
  });

  console.log({ defaultValues });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack direction="column" alignItems="flex-start" gap={2}>
        <TextField
          {...register("name", {
            required: true,
          })}
          label="Name"
          variant="filled"
          placeholder="Best movie ever"
          color={errors.name ? "error" : "primary"}
          helperText={errors.name ? "The movie's name is required" : ""}
        />

        <TextField
          {...register("overview", {
            required: true,
            maxLength: 140,
          })}
          label="Overview"
          variant="filled"
          placeholder="Some great description"
          color={errors.overview ? "error" : "primary"}
          helperText={errors.overview ? "The movie's overview is required" : ""}
        />

        <TextField
          {...register("director", {
            required: true,
          })}
          label="Director"
          variant="filled"
          placeholder="Some cool director"
          color={errors.director ? "error" : "primary"}
          helperText={errors.director ? "The movie's director is required" : ""}
        />

        <Controller
          name="genres"
          control={control}
          defaultValue={defaultValues.genres}
          render={({ field }) => (
            <FormControl sx={{ width: 210 }}>
              <InputLabel
                sx={{ m: getValues().genres.length > 0 ? "1rem 0 0 0" : "0" }}
                id="genres-select"
              >
                Genres
              </InputLabel>
              <Select
                labelId="genres-select"
                input={<FilledInput />}
                multiple
                renderValue={(selected) => {
                  return (
                    <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                      {selected.map((value) => (
                        <Chip key={value} label={value} />
                      ))}
                    </Box>
                  );
                }}
                {...field}
              >
                {genres.map((genre) => {
                  return (
                    <MenuItem key={genre} value={genre}>
                      {genre}
                    </MenuItem>
                  );
                })}
              </Select>
            </FormControl>
          )}
        />

        <Controller
          name="release_date"
          control={control}
          defaultValue={defaultValues.release_date}
          render={({ field }) => (
            <DatePicker
              renderInput={({ inputProps, InputProps }) => {
                return (
                  <Stack direction="row" alignItems="center">
                    <TextField
                      inputProps={inputProps}
                      variant="filled"
                      label="Release Date"
                    />
                    {InputProps?.endAdornment}
                  </Stack>
                );
              }}
              {...field}
            />
          )}
        />

        <FormControlLabel
          control={
            <Controller
              name="adults"
              control={control}
              render={(props) => (
                <Checkbox
                  {...props}
                  checked={props.field.value}
                  onChange={(e) => props.field.onChange(e.target.checked)}
                />
              )}
            />
          }
          label="Is it an adults-only film?"
        />

        {children}
      </Stack>
    </form>
  );
};

export const SubmitButton = ({ children }: PropsWithChildren<{}>) => {
  return (
    <Button variant="contained" color="primary" type="submit">
      {children}
    </Button>
  );
};

export const CancelButton = ({ children }: PropsWithChildren<{}>) => {
  const onCancelHandler = () => {
    if (window.confirm("Are you sure to discard your changes?")) {
      router.push("/movies");
    }
  };

  return (
    <Button
      onClick={onCancelHandler}
      variant="contained"
      color="error"
      type="submit"
    >
      {children}
    </Button>
  );
};
