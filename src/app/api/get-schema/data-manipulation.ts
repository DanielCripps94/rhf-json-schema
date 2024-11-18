/**
 * @file transformSchema.ts
 * @description This utility function transforms a raw API schema into a structured format
 * that is easier to work with in UI applications. It processes fields, pages, and actions
 * from the schema, applying various transformations to ensure the output matches the expected
 * UI data structure.
 *
 * @usage
 * The `transformSchema` function is designed to work with a schema object that follows
 * a specific structure, typically returned by an API. The schema contains metadata about
 * form fields, pages, and actions that can be rendered in a UI.
 *
 * @param {any} schema - The raw API schema object. It should contain:
 *   - `properties`: An object where each key represents a field and its metadata.
 *   - `required`: An array of field keys that are marked as required (optional).
 *   - `ui:order`: An array specifying the order of fields to be displayed.
 *   - `pages`: An object where each key is a page name and its value is an array of field keys (optional).
 *   - `actions`: An object where each key is an action name, and its value is the action's configuration (optional).
 *
 * @returns {Object} A transformed schema object containing:
 *   - `fields`: An array of transformed fields with metadata such as key, type, title, validation rules, and UI-specific configurations.
 *   - `pages`: An array of objects representing pages, each with its name and associated fields.
 *   - `actions`: An array of objects representing actions, each with its name, method, and URL.
 *
 * @example
 * const schema = {
 *   properties: {
 *     name: { type: "string", title: "Name", ui: { "ui:widget": "text" } },
 *     age: { type: "number", title: "Age", minLength: 1, maxLength: 3 },
 *   },
 *   required: ["name"],
 *   "ui:order": ["name", "age"],
 *   pages: {
 *     personalInfo: ["name", "age"],
 *   },
 *   actions: {
 *     submit: { method: "POST", url: "/submit" },
 *   },
 * };
 *
 * const transformedSchema = transformSchema(schema);
 * console.log(transformedSchema);
 * // Output:
 * // {
 * //   fields: [
 * //     { key: "name", type: "string", title: "Name", required: true, ... },
 * //     { key: "age", type: "number", title: "Age", required: false, ... }
 * //   ],
 * //   pages: [
 * //     { page: "personalInfo", fields: ["name", "age"] }
 * //   ],
 * //   actions: [
 * //     { name: "submit", method: "POST", url: "/submit" }
 * //   ]
 * // }
 *
 */

/* eslint-disable @typescript-eslint/no-explicit-any */
export const transformSchema = (schema: any) => {
  const {
    properties,
    required = [],
    "ui:order": order,
    pages,
    actions,
  } = schema;

  const pageFields = Object.entries(pages || {}).reduce(
    (acc: { page: string; fields: string[] }[], [pageKey, fields]) => {
      if (Array.isArray(fields)) {
        acc.push({
          page: pageKey,
          fields,
        });
      }
      return acc;
    },
    []
  );

  const transformedFields = order.map((fieldKey: string) => {
    const field = properties[fieldKey];
    const ui = field.ui || {};
    const isRequired = required.includes(fieldKey);

    return {
      key: fieldKey,
      type: field.type || "string",
      title: field.title || fieldKey,
      required: isRequired,
      widget: ui["ui:widget"] || "text",
      default: field.default || null,
      validation: {
        ...(field.minLength !== undefined && { minLength: field.minLength }),
        ...(field.maxLength !== undefined && { maxLength: field.maxLength }),
        ...(field.pattern && { pattern: field.pattern }),
        ...(field.minimum !== undefined && { minimum: field.minimum }),
        ...(field.maximum !== undefined && { maximum: field.maximum }),
      },
      hidden: ui["ui:widget"] === "hidden" || false,
      options: ui["ui:options"] || {},
      prefix: ui["ui:prefix"] || null,
      choices: field.oneOf || null,
    };
  });

  const transformedActions = Object.entries(actions || {}).map(
    ([actionName, actionConfig]) => {
      const action = actionConfig as { method: string; url: string };
      return {
        name: actionName,
        method: action.method || "get",
        url: action.url,
      };
    }
  );

  return {
    fields: transformedFields,
    pages: pageFields,
    actions: transformedActions,
  };
};
