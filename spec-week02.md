# Books API Week 02 Spec - Version 1

## Feature 1: Book CRUD Operations and Author References
...
## Feature 2: Author CRUD Operations
### Design Review Notes

- Author ids must be unique.
- Book ids must be unique.
- An author cannot be deleted while books reference that author.
- Author existence should be validated before creating or updating a book.

### Goal

Create an authors collection and provide complete CRUD operations for authors. Every author route must be documented and testable in Swagger.

### Data Model

Author documents will be stored in the `authors` collection.

Required author fields:

- `id`: string, required, custom id such as `a1`
- `name`: string, required
- `birthYear`: number, required

Authors will continue to use custom string ids instead of MongoDB `_id` values for route parameters.

### Relationship to Books

An author may be referenced by books through the `authorId` field.

If one or more books reference an author, the API should reject attempts to delete that author.

### Routes

#### GET /authors

Purpose: Return all authors.

Success:

- Status code: `200`
- Response body: an array of author objects

Errors:

- `500` if an unexpected server or database error occurs

#### GET /authors/:id

Purpose: Return one author by id.

Success:

- Status code: `200`
- Response body: the matching author object

Errors:

- `404` if no author exists with that id
- `500` if an unexpected server or database error occurs

#### POST /authors

Purpose: Create a new author.

Request body:

```json
{
  "id": "a1",
  "name": "Chinua Achebe",
  "birthYear": 1930
}
```

Success:

- Status code: `201`
- Response body: the newly created author object

Errors:

- `400` if a required field is missing
- `400` if the `id` already exists
- `500` if an unexpected server or database error occurs

#### PUT /authors/:id

Purpose: Update an existing author.

Request body:

```json
{
  "name": "Updated Author Name",
  "birthYear": 1931
}
```

Success:

- Status code: `200`
- Response body: the updated author object

Errors:

- `400` if a required field is missing
- `404` if no author exists with that id
- `500` if an unexpected server or database error occurs

#### DELETE /authors/:id

Purpose: Delete an existing author.

Success:

- Status code: `204`
- Response body: none

Errors:

- `400` if books still reference this author
- `404` if no author exists with that id
- `500` if an unexpected server or database error occurs

### Swagger Documentation

Swagger must document every author route.

### Deployment Expectations

After implementation, the author routes must work locally and from the deployed Render application. The deployed Swagger page at `/api-docs` must allow someone to test every author route from the browser.

### Security Considerations

- Required fields must be validated.
- Empty values should be rejected.
- Internal server error details should not be exposed to clients.
- Consistent JSON error responses should be used:

{
  "message": "Error description"
}

### Efficiency Considerations

- Lookups should use custom ids.
- Author validation should check only the required author record.
- Route handlers should remain small and delegate database logic to helper functions.

### Error Response Examples

404 Example

{
  "message": "Author not found"
}

400 Example

{
  "message": "Author cannot be deleted while books reference this author"
}

500 Example

{
  "message": "Internal server error"
}

# Version 2 Updates

## Books

- Validate authorId before creating or updating a book.
- Return consistent error messages.
- Reject missing required fields.

## Authors

- Prevent deletion of authors referenced by books.
- Validate required fields.
- Return consistent JSON error responses.
- Ensure ids remain unique.