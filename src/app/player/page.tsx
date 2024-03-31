'use client'
import React from 'react';
import PageContainer from '../components/pagecontainer';

const ExamNotifications: React.FC = () => {
  const notifications = [
    { id: 1, title: 'Civil Services Exam', date: '2022-09-15', color: 'bg-accent-blue' },
    { id: 2, title: 'Bank PO Exam', date: '2022-10-10', color: 'bg-accent-green' },
    { id: 3, title: 'SSC CGL Exam', date: '2022-11-05', color: 'bg-accent-orange' },
  ];

  return (
    <PageContainer>
      <div className="flex flex-col items-center bg-gray-300 h-[85vh]">
      <h1 className="text-3xl font-bold mb-4 pt-4">Government Exam Notifications</h1>
      <div className='flex flex-row gap-3'>
        {notifications.map((notification) => (
          <div
            key={notification.id}
            className={`w-64 p-4 rounded-lg shadow-lg mb-4 ${notification.color}`}
          >
            <h2 className="text-xl font-bold mb-2">{notification.title}</h2>
            <p className="text-gray-100">Date: {notification.date}</p>
          </div>
        ))}
      </div>
    </div>
    </PageContainer>
  );
};

export default ExamNotifications;