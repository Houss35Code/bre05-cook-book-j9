function InstructionsList({ instructions }) {
  return (
    <section>
      <h2>Instructions</h2>
      <ol className="instructions-list">
        {instructions.map((instruction, index) => (
          <li key={index}>{instruction}</li>
        ))}
      </ol>
    </section>
  );
}

export default InstructionsList;