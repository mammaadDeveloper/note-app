import { useNavigate, useParams } from 'react-router-dom';
import Layout from '../components/layout';
import { useEffect, useState } from 'react';
import { Api } from '../Api';
import INote from '../interfaces/note.interface';

export function Detail() {
  const navigate = useNavigate();
  const { id } = useParams();
  const toEdit = () => navigate(`/notes/${id}/edit`, { relative: 'path' });
  const [note, setNote] = useState<INote | null>();
  useEffect(() => {
    const fetchNote = async () => {
      if (!id) return;

      try {
        const api = new Api({
          baseUrl: 'http://localhost:3000',
        });

        const response = await api.api.appControllerFindOne(
          Number(id),
          {
            format: 'json',
          },
        );

        const data = await response.json();

        setNote(data);
      } catch (error) {
        console.error('Failed to fetch note:', error);
      }
    };

    fetchNote();
  }, [id]);

  if (!note) {
    return (
      <Layout>
        <div>Loading...</div>
      </Layout>
    );
  }
  return (
    <Layout>
      <div className="p-4">
        <h1
          className="text-2xl font-bold border-b border-gray-300 pb-1"
          onClick={toEdit}
        >
          {note?.title}
        </h1>
        <p className="mt-4" onClick={toEdit}>
          {note?.body}
        </p>
      </div>
    </Layout>
  );
}
