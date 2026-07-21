import { SubmitHandler } from 'react-hook-form';
import Layout from '../components/layout';
import { NoteForm } from '../components/note-form';
import { NoteDto } from '../schemas/note.schema';

export function Edit() {
  const submitForm: SubmitHandler<NoteDto> = async (data) => {
    console.log(data);

  }
  return (
    <Layout>
      <div className="p-4">
        <NoteForm
        defaultValues={{
          title: 'NOTE TITLE',
          body: 'NOTE BODY.'
        }}
        onSubmit={submitForm}
        />
      </div>
    </Layout>
  );
}
