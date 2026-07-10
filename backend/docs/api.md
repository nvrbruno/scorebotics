# Championship API

## POST /championships
Creates a new championship.

**Body:**
```json
{
  "name": "string",
  "description": "string (optional)",
  "startDate": "DD/MM/YYYY (optional)",
  "endDate": "DD/MM/YYYY (optional)"
}
```

**Response:** `201 Created`

---

## GET /championships
Returns all championships.

**Response:** `200 OK`

---

## GET /championships/:id
Returns a championship by id.

**Response:** `200 OK` | `404 Not Found`

---

## PUT /championships/:id
Updates a championship by id.

**Body:** same as POST, all fields optional, plus:
```json
{
  "status": "not_started | in_progress | finished"
}
```

**Response:** `200 OK` | `400 Bad Request`

---

## DELETE /championships/:id
Deletes a championship by id.

**Response:** `204 No Content`