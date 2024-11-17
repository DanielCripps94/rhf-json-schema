import {
  useSuspenseQuery,
  UseSuspenseQueryResult,
} from "@tanstack/react-query";
import {
  GET_JSON_SCHEMA,
  getJsonSchema,
  JsonSchema,
} from "~/app/api/get-schema/get-json-schema";

export const useGetJsonSchemaQuery = (): UseSuspenseQueryResult<
  JsonSchema,
  null
> => {
  return useSuspenseQuery({
    queryKey: [GET_JSON_SCHEMA],
    queryFn: getJsonSchema,
  });
};
