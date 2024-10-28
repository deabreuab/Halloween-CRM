Table users {
  id: integer
  name: string
  email: string
  photo: string
  phone: string
  password: string
  company: string
  role: enum(admin, collaborator)
}

Table participants {
  id: integer
  email: string
  name: string
}

Table opportunities {
  id: integer
  photo: string
  description: string
  type: string
  collaborator_id: string
  status: enum(new, in_progress, closed)
  start_date: datetime
  end_date: datetime
}

Table tasks { //related to opportunity
  collaborator_id: integer
  opportunity_id: integer
  id: integer
  title: string
  description: string
  status: string
  due_date: datetime
  assigned_date: datetime
}

Table tickets {
  id: integer
  participant_id: integer
  opportunity_id: integer
  quantity: integer
}