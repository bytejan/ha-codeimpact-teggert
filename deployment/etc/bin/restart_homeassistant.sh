TOKEN=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiIxMWMwMThiYjFiNTg0MGE1YmNjMzQ3NTIxZmFhMDg5YiIsImlhdCI6MTczMzc5ODQwNiwiZXhwIjoyMDQ5MTU4NDA2fQ.I_afsIYjApw6FpVv_xLh0oVaE8CS6vO7CBmROqOp47w

curl -X GET http://homeassistant.local:8123/api/calendars \
     -H "Content-Type: application/json" \
     -H "Authorization: Bearer $TOKEN"



