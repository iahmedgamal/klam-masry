'use client'
import { Word } from '@shared/types/words';
import React, { useState, useEffect } from 'react';

function Admin() {
  const [words, setWords] = useState<Word[]>([]);
  const [editWord, setEditWord] = useState<Word | null>(null);
  const [notification, setNotification] = useState<string | null>(null);

  useEffect(() => {
    fetchWords();
  }, []);

  const fetchWords = async () => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API}`, {
        cache: 'force-cache'
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setWords(data);
    } catch (error) {
      console.error('Error fetching words:', error);
    }
  };

  const deleteWord = async (id: number) => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API}word/${id}`, {
        method: 'DELETE',
        cache: 'force-cache'
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      fetchWords();
      setNotification('Word deleted successfully');
      setTimeout(() => setNotification(null), 3000);
    } catch (error) {
      console.error('Error deleting word:', error);
      setNotification('Error deleting word');
      setTimeout(() => setNotification(null), 3000);
    }
  };

  const updateWord = async (id: number, updatedWord: Word) => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API}word/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedWord),
        cache: 'force-cache'
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      setEditWord(null);
      fetchWords();
    } catch (error) {
      console.error('Error updating word:', error);
    }
  };

  return (
    <div className='relative p-4'>
      {notification && (
        <div className='fixed p-2 text-white bg-green-500 rounded shadow-lg top-4 right-4'>
          {notification}
        </div>
      )}
      <h1 className='mb-4 text-2xl'>Word Dashboard</h1>
      <table className='w-full border-collapse'>
        <thead>
          <tr>
            <th className='p-2 border'>Number</th>
            <th className='p-2 border'>ID</th>
            <th className='p-2 border'>Appeared</th>

            <th className='p-2 border'>Word</th>
            <th className='p-2 border'>English</th>
            <th className='p-2 border'>Actions</th>
          </tr>
        </thead>
        <tbody>
          {words.map((word: Word, index: number) => (
            <tr key={word._id}>
              <td className='p-2 border'>{index}</td>
              <td className='p-2 border'>{word._id}</td>
              <td className='p-2 border'>{word.appeared}</td>
              <td className='p-2 border'>{word.word}</td>
              <td className='p-2 border'>{word.en}</td>
              <td className='p-2 border'>
                <button
                  onClick={() => setEditWord(word)}
                  className='px-2 py-1 mr-2 text-white bg-blue-500 rounded'>
                  Edit
                </button>
                <button
                  onClick={() => deleteWord(word._id)}
                  className='px-2 py-1 text-white bg-red-500 rounded'>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {editWord && (
        <div className='mt-4'>
          <h2 className='mb-2 text-xl'>Edit Word</h2>
          <input
            type='text'
            value={editWord.word}
            onChange={(e) => setEditWord({ ...editWord, word: e.target.value })}
            className='p-1 mr-2 border'
          />
          <input
            type='number'
            value={editWord.appeared}
            onChange={(e) =>
              setEditWord({ ...editWord, appeared: parseInt(e.target.value) })
            }
            className='p-1 mr-2 border'
          />
          <input
            type='text'
            value={editWord.en}
            onChange={(e) => setEditWord({ ...editWord, en: e.target.value })}
            className='p-1 mr-2 border'
          />
          <button
            onClick={() => updateWord(editWord._id, editWord)}
            className='px-2 py-1 text-white bg-green-500 rounded'>
            Save
          </button>
        </div>
      )}
    </div>
  );
}

export default Admin;
