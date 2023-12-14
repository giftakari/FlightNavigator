import React from 'react';

const accordionData = [
  {
    id: 'collapseOne',
    title: 'Accordion Item #1',
    content: "This is the first item's accordion body. It is shown by default.",
  },
  {
    id: 'collapseTwo',
    title: 'Accordion Item #2',
    content: "This is the second item's accordion body. It is hidden by default.",
  },
  {
    id: 'collapseThree',
    title: 'Accordion Item #3',
    content: "This is the third item's accordion body. It is hidden by default.",
  },
];

function Accordion() {
  return (
    <div className="accordion" id="accordionExample">
      {accordionData.map(item => (
        <div className="accordion-item" key={item.id}>
          <h2 className="accordion-header">
            <button
              className={`accordion-button ${item.id === 'collapseOne' ? '': 'collapsed'}`}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target={`#${item.id}`}
              aria-expanded={item.id === 'collapseOne'}
              aria-controls={item.id}
            >
              {item.title}
            </button>
          </h2>
          <div id={item.id} className={`accordion-collapse collapse ${item.id === 'collapseOne' ? 'show' : ''}`} data-bs-parent="#accordionExample">
            <div className="accordion-body">
              <strong>{item.content}</strong>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Accordion;
