import {
  useSuspenseQuery,
  UseSuspenseQueryResult,
} from "@tanstack/react-query";
import {
  GET_JSON_SCHEMA,
  getJsonSchema,
} from "~/app/api/get-schema/get-json-schema";
import { JsonSchema } from "~/layers/shared/types";

export const useGetJsonSchemaQuery = (): UseSuspenseQueryResult<
  JsonSchema,
  null
> => {
  return useSuspenseQuery({
    queryKey: [GET_JSON_SCHEMA],
    queryFn: getJsonSchema,
  });
};
