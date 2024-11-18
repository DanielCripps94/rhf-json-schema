# rhf-json-schema

## Overview

This project is a Proof of Concept (POC) for the application of React Hook Form (RHF) with JSON schema. It demonstrates how to dynamically generate form UI components and validation rules based on a JSON schema.

## Installation

To get started with this project, follow these steps:

1. Clone the repository
2. Install dependencies:
   ```
   pnpm install
   ```
3. Start the development server:
   ```
   pnpm run dev
   ```

## Environment Setup

This project requires certain environment variables to be set. Make sure to create a `.env` file in the root directory and add the necessary variables.

## Key Components

### Data Manipulation
- **File**: `src/app/api/get-schema/data-manipulation.ts`
- **Purpose**: Restructures the JSON schema to make it more suitable for UI rendering.

### Validation Mapping
- **File**: `src/layers/shared/hooks/use-get-validation.ts`
- **Purpose**: Converts JSON schema validation rules into Zod schemas for use with React Hook Form.

### UI Mapping
- **File**: `src/layers/shared/hooks/use-ui-mapper.ts`
- **Purpose**: Dynamically generates UI components based on JSON schema types or widgets.

