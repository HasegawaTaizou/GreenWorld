export default function filteredVolunteers() {
  return this.volunteers.filter(
    (volunteer) => volunteer.id_status_cadastro === 1
  );
}
