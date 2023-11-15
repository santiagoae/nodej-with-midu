const z = require("zod");
const moviesSchema = z.object({
  primaryImage: z.object({
    id: z.string({
      invalid_type_error: "Id is not a string",
      required_error: "Id is required for all movie images",
    }),
    width: z.number().positive(),
    height: z.number().positive(),
    url: z.string().url({
      message: "This is not a valid url",
    }),
    caption: z.object({
      plainText: z.string(),
      __typename: z.string(),
    }),
    __typename: z.string(),
  }),
  titleType: z.object({
    text: z.string(),
    id: z.string(),
    isSeries: z.boolean(),
    isEpisode: z.boolean(),
    __typename: z.string(),
  }),
  titleText: z.object({
    text: z.string(),
    __typename: z.string(),
  }),
  originalTitleText: z.object({
    text: z.string(),
    __typename: z.string(),
  }),
  releaseYear: z.object({
    year: z.number().int().positive().min(1800).max(2024),
    endYear: z.number().int().positive() || z.null(),
    __typename: z.string(),
  }),
  releaseDate: z.date() || z.null(),
});

function validateMovie(object) {
  return moviesSchema.safeParse(object); //lo que hace el safeparse es que te devuelve si hay un error o no
}

module.exports = {
  validateMovie,
};
