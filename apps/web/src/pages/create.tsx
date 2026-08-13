import { SubmitHandler } from 'react-hook-form';
import Layout from '../components/layout';
import { NoteForm } from '../components/note-form';
import { NoteDto } from '../schemas/note.schema';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Api } from '../Api';

export function Create() {
  const navigate = useNavigate();
  const [success, setSuccess] = useState<boolean>(false);
  const submitForm: SubmitHandler<NoteDto> = async (data) => {
    const api = new Api({ baseUrl: 'http://localhost:3000' });
    const response = await api.api.appControllerCreate(data);
    if (response.status === 201) setSuccess(true);
    setTimeout(() => {
      navigate('/');
    }, 3500)
  };
  return (
    <Layout>
      <div className="p-4 relative">
        {!success || (
          <div className="absolute top-0 left-0 m-4 z-10 w-full flex justify-center fade-in-out">
            <div className="alert alert-success w-1/2">
              <span>Note added!</span>
            </div>
          </div>
        )}
        <NoteForm
          defaultValues={{
            title: '',
            body: '',
          }}
          onSubmit={submitForm}
        />
      </div>
    </Layout>
  );
}
