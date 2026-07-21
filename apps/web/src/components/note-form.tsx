import { DefaultValues, SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { NoteDto, NoteSchema } from '../schemas/note.schema';
import { useEffect } from 'react';

interface Props {
  defaultValues: DefaultValues<NoteDto>;
  onSubmit: SubmitHandler<NoteDto>;
}
export function NoteForm({ defaultValues, onSubmit }: Props) {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors, isDirty, isSubmitting },
  } = useForm<NoteDto>({
    resolver: zodResolver(NoteSchema),
    defaultValues: {
      title: '',
      body: '',
      ...defaultValues,
    },
  });

  useEffect(() => {
    reset({
      title: '',
      body: '',
      ...defaultValues,
    });
  }, [defaultValues, reset]);
  
  const submit = handleSubmit(onSubmit);

  return (
    <form
      onBlur={(e) => {
        if (e.currentTarget.contains(e.relatedTarget as Node | null)) return;
        if (!isDirty || isSubmitting) return;
        submit();
      }}
    >
      <input
        className="input input-bordered w-full"
        placeholder="Note title e.p: Note title"
        {...register('title')}
      />
      <p className="text-red-500 mt-2">{errors.title?.message}</p>
      <textarea
        className="mt-4 textarea w-full h-screen"
        placeholder="Note body"
        {...register('body')}
      />
      <p className="text-red-500 mt-2">{errors.body?.message}</p>
    </form>
  );
}
