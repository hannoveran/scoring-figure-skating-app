import '../styles/Competitions.css';

function CreateCompetitionModal({ open, onClose, onCreate, form, setForm }) {
  if (!open) return null;

  return (
    <div className="modal">
      <div className="modal-content shadow-lg">
        <h2>Create Competition</h2>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            onCreate();
          }}
        >
          <label>Name</label>
          <input
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            required
          />

          <label>Date</label>
          <input
            type="date"
            value={form.date}
            onChange={(e) => setForm({ ...form, date: e.target.value })}
            required
          />

          <label>Location</label>
          <input
            value={form.location}
            onChange={(e) => setForm({ ...form, location: e.target.value })}
          />

          <label>Category</label>
          <select
            value={form.category}
            onChange={(e) => setForm({ ...form, category: e.target.value })}
          >
            <option value="men_single">Men's Singles</option>
            <option value="women_single">Women's Singles</option>
          </select>

          <label>Segment</label>
          <select
            value={form.segment}
            onChange={(e) => setForm({ ...form, segment: e.target.value })}
          >
            <option value="short_program">Short Program</option>
            <option value="free_skate">Free Skate</option>
          </select>

          <div className="modal-actions">
            <button type="submit" className="btn-primary shadow-sm">
              Create
            </button>

            <button type="button" className="btn-secondary" onClick={onClose}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreateCompetitionModal;
