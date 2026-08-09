/* eslint-disable react-hooks/exhaustive-deps */
import { useNavigate } from 'react-router-dom';
import Layout from '../components/layout';
import Note from '../components/note';
import { useEffect, useState } from 'react';
import { Api } from '../Api';
import INote from '../interfaces/note.interface';

export function Root() {
  const navigate = useNavigate();
  const [notes, setNotes] = useState<INote[]>();
  useEffect(() => {
    const fetchNotes = async () => {
      const api = new Api({
        baseUrl: 'http://localhost:3000',
      });

      const response = await api.api.appControllerAll({
        page: 1,
        limit: 10,
      });

      const data = await response.json();

      setNotes(data.data);
    };

    fetchNotes();
  }, [notes]);
  return (
    <Layout>
      {notes?.map((note) => (
        <Note title={note.title} description={note.body.slice(0, 100) + '...'} id={note.id} />
      ))}
      <div className="absolute bottom-16 right-3">
        <button
          className="btn btn-lg btn-circle btn-primary"
          onClick={() => navigate('/notes')}
        >
          <svg
            aria-label="New"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </svg>
        </button>
      </div>
    </Layout>
  );
}
