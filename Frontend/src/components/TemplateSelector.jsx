const templates = [
    { id: "template1", name: "Classic Template" },
    { id: "template2", name: "Modern Template" },
    { id: "template3", name: "Modern Template with Picture" },
  ];
  
  const TemplateSelector = ({ onSelect }) => {
    return (
      <div className="p-4 bg-white rounded shadow">
        <h2 className="text-xl font-bold mb-4">Choose a Template</h2>
        <div className="flex gap-4">
          {templates.map((template) => (
            <button key={template.id} className="bg-gray-300 p-2 rounded" onClick={() => onSelect(template.id)}>
              {template.name}
            </button>
          ))}
        </div>
      </div>
    );
  };
  
  export default TemplateSelector;
  