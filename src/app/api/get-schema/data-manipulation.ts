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
