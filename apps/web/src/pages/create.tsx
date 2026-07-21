import { SubmitHandler } from 'react-hook-form';
import Layout from '../components/layout';
import { NoteForm } from '../components/note-form';
import { NoteDto } from '../schemas/note.schema';

export function Create() {
  const submitForm: SubmitHandler<NoteDto> = async (data) => {
    console.log(data);
  }
  return (
    <Layout>
      <div className="p-4">
        <NoteForm
        defaultValues={{
          title: '',
          body: ''
        }}
        onSubmit={submitForm}
        />
      </div>
    </Layout>
  );
}
