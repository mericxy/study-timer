function List () {
    const list = [
       { tarefa: 'React', tempo: '02:00:00' },
       { tarefa: 'JavaScript', tempo: '01:00:00' },
       { tarefa: 'TypeScript', tempo: '03:00:00' },
    ]

  return (
    <aside>
        <h2>Estudos do dia</h2>
        <ul>
            {list.map((item, index) => (
                <li key={index}>
                    <h3>{item.tarefa}</h3>
                    <span>{item.tempo}</span>
                </li>
            ))}
        </ul>
    </aside>
  );
}
export default List;
// This is a simple List component that displays a title and a paragraph.