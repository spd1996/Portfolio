'use client'
import React, { useState, useEffect } from 'react';

const DropdownWithMessageBox: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState<string>('');
  const [isMessageBoxOpen, setIsMessageBoxOpen] = useState<boolean>(false);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [isDraggable, setIsDraggable] = useState<boolean>(true); // Initially draggable

  const [position, setPosition] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });

  const options: string[] = ['Option 1', 'Option 2', 'Option 3'];

  useEffect(() => {
    // Retrieve saved position and draggable state from localStorage when component mounts
    const savedPosition = localStorage.getItem('messageBoxPosition');
    if (savedPosition) {
      setPosition(JSON.parse(savedPosition));
    }
    const savedDraggable = localStorage.getItem('isDraggable');
    if (savedDraggable !== null) {
      setIsDraggable(savedDraggable === 'true');
    }
  }, []);

  const handleOptionChange = (option: string) => {
    setSelectedOption(option);
    setIsMessageBoxOpen(true);
  };

  const openModal = () => {
    if (isDraggable) {
      setIsDragging(true);
    }
  };

  const closeModal = () => {
    setIsDragging(false);
    // Save the position to localStorage when dragging ends
    localStorage.setItem('messageBoxPosition', JSON.stringify(position));
  };

  const toggleDraggable = () => {
    setIsDraggable((prevDraggable) => !prevDraggable);
    localStorage.setItem('isDraggable', (!isDraggable).toString()); // Save the draggable state
  };

  const handleDrag = (e: React.MouseEvent) => {
    if (isDragging) {
      setPosition({
        x: e.clientX - 50, // Offset to center the message box on cursor
        y: e.clientY - 20, // Offset to center the message box on cursor
      });
    }
  };

  return (
    <div className="m-4" onMouseMove={handleDrag}>
      <label className="block font-bold mb-2">Select an Option:</label>
      <select
        className="p-2 border border-gray-300 rounded text-primary"
        onChange={(e) => handleOptionChange(e.target.value)}
      >
        <option value="">Select an option</option>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>

      <button className="bg-accent-blue text-white p-2 rounded mt-2" onClick={toggleDraggable}>
        {isDraggable ? 'Disable Drag' : 'Enable Drag'}
      </button>

      {isMessageBoxOpen && (
        <div
          className={`mt-4 p-4 bg-accent-blue rounded ${isDragging && isDraggable ? 'cursor-move' : ''}`}
          style={{
            position: 'absolute',
            top: `${position.y}px`,
            left: `${position.x}px`,
          }}
          onMouseDown={openModal}
          onMouseUp={closeModal}
        >
          <p>You selected: {selectedOption}</p>
        </div>
      )}
    </div>
  );
};

export default DropdownWithMessageBox;



